import puppeteer from 'puppeteer'
import type { Browser } from 'puppeteer'

export default defineEventHandler(async (event) => {
  let browser: Browser | null = null

  try {
    const requestUrl = getRequestURL(event)
    const host = requestUrl.host.includes('192.168') || requestUrl.host.includes('localhost')
      ? 'localhost:5000'
      : requestUrl.host
    const baseUrl = `http://${host}`
    const resumeUrl = `${baseUrl}/resume?print=true`

    console.log('[PDF API] Generating from:', resumeUrl)

    const isDev = process.env.NODE_ENV === 'development'

    if (isDev) {
      browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      })
    } else {
      const chromium = await import('@sparticuz/chromium')
      const puppeteerCore = await import('puppeteer-core')
      browser = await puppeteerCore.default.launch({
        args: chromium.default.args,
        executablePath: await chromium.default.executablePath(),
        headless: true,
      })
    }

    const page = await browser.newPage()
    await page.setViewport({ width: 794, height: 1123 })

    const response = await page.goto(resumeUrl, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    })

    if (!response || !response.ok()) {
      throw new Error(`Failed to load: ${response?.status()}`)
    }

    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    })

    const query = getQuery(event)
    const filename = (query.filename as string) || 'Ali_Arghyani_Resume.pdf'
    const download = query.download === 'true'

    setResponseHeaders(event, {
      'Content-Type': 'application/pdf',
      // inline = show in browser, attachment = force download
      'Content-Disposition': `${download ? 'attachment' : 'inline'}; filename="${filename}"`,
    })

    return pdf
  } catch (error) {
    console.error('PDF generation failed:', error)
    setResponseStatus(event, 500)
    return {
      error: 'PDF generation failed',
      message: error instanceof Error ? error.message : 'Unknown error',
    }
  } finally {
    if (browser) {
      await browser.close()
    }
  }
})
