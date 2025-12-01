import puppeteer from 'puppeteer'
import type { Browser } from 'puppeteer'

export default defineEventHandler(async (event) => {
  let browser: Browser | null = null

  try {
    // Get base URL from request
    const requestUrl = getRequestURL(event)
    const baseUrl = `${requestUrl.protocol}//${requestUrl.host}`
    const resumeUrl = `${baseUrl}/resume?print=true`

    // Launch browser
    const isDev = process.env.NODE_ENV === 'development'

    if (isDev) {
      // Development: use puppeteer with bundled Chromium
      browser = await puppeteer.launch({
        headless: true,
      })
    } else {
      // Production: use puppeteer-core with @sparticuz/chromium
      const chromium = await import('@sparticuz/chromium')
      const puppeteerCore = await import('puppeteer-core')

      browser = await puppeteerCore.default.launch({
        args: chromium.default.args,
        executablePath: await chromium.default.executablePath(),
        headless: chromium.default.headless,
      })
    }

    // Create page and navigate
    const page = await browser.newPage()

    // Set viewport to A4 dimensions
    await page.setViewport({
      width: 794, // A4 width in pixels at 96 DPI
      height: 1123, // A4 height in pixels at 96 DPI
    })

    // Navigate to resume page with print mode
    await page.goto(resumeUrl, {
      waitUntil: 'networkidle0',
      timeout: 10000,
    })

    // Generate PDF
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    })

    // Set response headers (AC1, AC2)
    setResponseHeaders(event, {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Ali_Arghyani_Resume.pdf"',
    })

    return pdf
  } catch (error) {
    // Error handling (AC7)
    console.error('PDF generation failed:', error)

    setResponseStatus(event, 500)
    return {
      error: 'PDF generation failed',
      message: error instanceof Error ? error.message : 'Unknown error',
    }
  } finally {
    // Always close browser to prevent memory leaks
    if (browser) {
      await browser.close()
    }
  }
})
