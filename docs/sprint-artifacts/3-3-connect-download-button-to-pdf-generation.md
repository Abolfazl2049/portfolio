# Story 3.3: Connect Download Button to PDF Generation

Status: ready-for-dev

## Story

As a user,
I want to click the download button and get my PDF,
so that I can use my resume for job applications.

## Acceptance Criteria

1. **AC1:** Given I click the download button, when PDF generation starts, then the button shows loading spinner
2. **AC2:** The button is disabled during PDF generation
3. **AC3:** Given PDF generation succeeds, when the PDF is ready, then the browser downloads the file
4. **AC4:** Downloaded filename is "Ali_Arghyani_Resume.pdf"
5. **AC5:** Button returns to normal state after download completes
6. **AC6:** Given PDF generation fails, when the error occurs, then a toast notification appears
7. **AC7:** Button returns to normal state after error
8. **AC8:** Button works correctly after error (can retry)

## Tasks / Subtasks

- [ ] Update ResumeDownloadButton component (AC: #1-#8)
  - [ ] Import `useResumePdf()` composable
  - [ ] Destructure `isGenerating` and `downloadPdf`
  - [ ] Bind `:loading="isGenerating"` to UButton
  - [ ] Bind `:disabled="isGenerating"` to UButton
  - [ ] Bind `@click="downloadPdf"` to UButton
  - [ ] Remove placeholder click handler

- [ ] Test full download flow
  - [ ] Click button, verify spinner appears
  - [ ] Verify button is disabled during generation
  - [ ] Verify PDF downloads with correct filename
  - [ ] Verify button returns to normal after download
  - [ ] Test error handling (disconnect network)
  - [ ] Verify toast appears on error
  - [ ] Verify button works after error (retry)

## Dev Notes

### Architecture Alignment

**From Architecture Doc:**
- Component: `app/components/resume/ResumeDownloadButton.vue`
- Uses `useResumePdf()` composable
- Uses Nuxt UI `UButton` with loading state

**From Tech Spec Epic 3:**
- AC6, AC8 map to this story
- Final integration story for Epic 3

### Learnings from Previous Stories

**From Story 2.5 (Status: done)**
- Download button already created with placeholder handler
- Print mode detection implemented via `isPrintMode` prop
- Button has correct styling and position

**From Story 3.2 (Status: drafted)**
- `useResumePdf()` composable provides `isGenerating` and `downloadPdf`
- Error handling with toast notifications

### Implementation Notes

**Current ResumeDownloadButton.vue (from Story 2.5):**
```vue
<script setup lang="ts">
interface Props {
  isPrintMode?: boolean
}

defineProps<Props>()

function handleDownload() {
  console.log('Download PDF clicked')
}
</script>

<template>
  <UButton
    v-if="!isPrintMode"
    icon="i-heroicons-arrow-down-tray"
    size="lg"
    color="primary"
    class="fixed bottom-6 right-6 shadow-lg no-print z-50"
    @click="handleDownload"
  >
    <span class="hidden sm:inline">Download PDF</span>
  </UButton>
</template>
```

**Updated ResumeDownloadButton.vue:**
```vue
<script setup lang="ts">
interface Props {
  isPrintMode?: boolean
}

defineProps<Props>()

const { isGenerating, downloadPdf } = useResumePdf()
</script>

<template>
  <UButton
    v-if="!isPrintMode"
    icon="i-heroicons-arrow-down-tray"
    size="lg"
    color="primary"
    :loading="isGenerating"
    :disabled="isGenerating"
    class="fixed bottom-6 right-6 shadow-lg no-print z-50"
    @click="downloadPdf"
  >
    <span class="hidden sm:inline">Download PDF</span>
  </UButton>
</template>
```

### Testing Checklist

- [ ] Click button shows loading spinner
- [ ] Button is disabled during generation
- [ ] PDF downloads automatically
- [ ] Filename is "Ali_Arghyani_Resume.pdf"
- [ ] Button returns to normal after success
- [ ] Error shows toast notification
- [ ] Button returns to normal after error
- [ ] Can retry after error
- [ ] Print mode still hides button

### References

- [Source: docs/architecture.md#Loading-State]
- [Source: docs/sprint-artifacts/tech-spec-epic-3.md#AC6-AC8]
- [Source: docs/sprint-artifacts/2-5-create-download-button-component.md]

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
