/**
 * PDF Download Composable
 * Handles PDF download logic with loading state and error handling
 */

export function useResumePdf() {
  const isGenerating = ref(false)
  const toast = useToast()
  const { getPdfFilename } = useResumeData()

  async function downloadPdf() {
    isGenerating.value = true

    try {
      // Fetch PDF as blob (AC1)
      const response = await $fetch('/api/resume/pdf', {
        responseType: 'blob',
      })

      // Create object URL from blob (AC2)
      const url = URL.createObjectURL(response as Blob)

      // Create temporary anchor element and trigger download
      const a = document.createElement('a')
      a.href = url
      a.download = getPdfFilename() // AC3: filename from composable
      a.click()

      // Revoke object URL to prevent memory leaks (AC8)
      URL.revokeObjectURL(url)
    } catch (error) {
      // Error handling (AC6)
      console.error('PDF generation failed:', error)

      toast.add({
        title: 'Error generating PDF',
        description: 'Please try again',
        color: 'error',
      })
    } finally {
      // Always reset loading state (AC7)
      isGenerating.value = false
    }
  }

  // Return composable interface (AC4, AC5)
  return {
    isGenerating,
    downloadPdf,
  }
}
