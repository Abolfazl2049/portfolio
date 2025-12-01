# Story 3.2: Create PDF Download Composable

Status: drafted

## Story

As a developer,
I want a composable that handles PDF download logic,
so that the download button can trigger downloads easily.

## Acceptance Criteria

1. **AC1:** Given I call `downloadPdf()` from the composable, when the function executes, then it fetches `/api/resume/pdf` as blob
2. **AC2:** The composable creates object URL from blob and triggers browser download
3. **AC3:** Download filename is from `getPdfFilename()` (e.g., "Ali_Arghyani_Resume.pdf")
4. **AC4:** The composable returns `isGenerating: Ref<boolean>` for loading state
5. **AC5:** The composable returns `downloadPdf: () => Promise<void>` function
6. **AC6:** Given an error occurs, when caught, then it shows toast notification with error message
7. **AC7:** After error, `isGenerating` is set back to false
8. **AC8:** Object URL is revoked after download to prevent memory leaks

## Tasks / Subtasks

- [ ] Create composable file (AC: #4, #5)
  - [ ] Create `app/composables/useResumePdf.ts`
  - [ ] Define `isGenerating` ref with initial value false
  - [ ] Define `downloadPdf` async function
  - [ ] Return both from composable

- [ ] Implement download logic (AC: #1-#3, #8)
  - [ ] Set `isGenerating = true` at start
  - [ ] Fetch `/api/resume/pdf` with `responseType: 'blob'`
  - [ ] Create object URL from blob: `URL.createObjectURL(response)`
  - [ ] Create temporary `<a>` element
  - [ ] Set `href` to object URL
  - [ ] Set `download` attribute to filename from `getPdfFilename()`
  - [ ] Trigger click on element
  - [ ] Revoke object URL: `URL.revokeObjectURL(url)`
  - [ ] Set `isGenerating = false` in finally block

- [ ] Add error handling (AC: #6, #7)
  - [ ] Wrap in try-catch block
  - [ ] Import `useToast()` from Nuxt UI
  - [ ] Show error toast on catch
  - [ ] Log error to console
  - [ ] Ensure `isGenerating = false` in finally

- [ ] Test composable
  - [ ] Import in component and call `downloadPdf()`
  - [ ] Verify loading state changes
  - [ ] Verify file downloads with correct name
  - [ ] Test error handling (disconnect network)

## Dev Notes

### Architecture Alignment

**From Architecture Doc:**
- File location: `app/composables/useResumePdf.ts`
- Uses `$fetch` with blob response type
- Uses Nuxt UI `useToast()` for notifications
- Gets filename from `useResumeData().getPdfFilename()`

**From Tech Spec Epic 3:**
- AC5-AC7 map to this story
- Composable interface defined in spec

### Implementation Notes

**Composable Structure:**
```typescript
export function useResumePdf() {
  const isGenerating = ref(false)
  const toast = useToast()
  const { getPdfFilename } = useResumeData()

  async function downloadPdf() {
    isGenerating.value = true
    try {
      const response = await $fetch('/api/resume/pdf', {
        responseType: 'blob'
      })
      
      const url = URL.createObjectURL(response)
      const a = document.createElement('a')
      a.href = url
      a.download = getPdfFilename()
      a.click()
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('PDF generation failed:', error)
      toast.add({
        title: 'Error generating PDF',
        description: 'Please try again',
        color: 'error'
      })
    } finally {
      isGenerating.value = false
    }
  }

  return { isGenerating, downloadPdf }
}
```

**Usage in Component:**
```vue
<script setup>
const { isGenerating, downloadPdf } = useResumePdf()
</script>

<template>
  <UButton
    :loading="isGenerating"
    :disabled="isGenerating"
    @click="downloadPdf"
  >
    Download PDF
  </UButton>
</template>
```

### Dependencies

- `useResumeData()` composable (Epic 1) - for `getPdfFilename()`
- `useToast()` from Nuxt UI - for error notifications
- `$fetch` from Nuxt - for API calls

### Testing Checklist

- [ ] Composable exports `isGenerating` and `downloadPdf`
- [ ] `isGenerating` starts as false
- [ ] `isGenerating` becomes true during download
- [ ] `isGenerating` returns to false after completion
- [ ] PDF downloads with correct filename
- [ ] Error shows toast notification
- [ ] Error logs to console
- [ ] `isGenerating` returns to false after error

### References

- [Source: docs/architecture.md#Error-Handling]
- [Source: docs/architecture.md#Implementation-Patterns]
- [Source: docs/sprint-artifacts/tech-spec-epic-3.md#AC5-AC7]

## Dev Agent Record

### Context Reference

<!-- Will be filled by SM agent -->

### Agent Model Used

<!-- Will be filled by dev agent -->

### Debug Log References

<!-- Will be filled by dev agent during implementation -->

### Completion Notes List

<!-- Will be filled by dev agent after completion -->

### File List

<!-- Will be filled by dev agent with created/modified files -->

---

**Change Log:**
- 2025-12-01: Story drafted by SM agent (Bob)
