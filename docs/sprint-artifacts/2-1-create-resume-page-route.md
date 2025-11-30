# Story 2.1: Create Resume Page Route

Status: ready-for-dev

## Story

As a user,
I want to access my resume at `/resume`,
so that I can view it before downloading.

## Acceptance Criteria

1. **AC1:** Given I navigate to `/resume`, when the page loads, then I see the resume preview
2. **AC2:** The page is standalone (no site header/footer)
3. **AC3:** The page has a white background
4. **AC4:** The page title is "Resume - Ali Arghyani"
5. **AC5:** Meta tags are set for SEO (noindex for privacy)
6. **AC6:** Given I add `?print=true` query parameter, when the page loads, then the download button is hidden (for PDF generation)

## Tasks / Subtasks

- [ ] Create resume page route (AC: #1, #2)
  - [ ] Create `app/pages/resume.vue` file
  - [ ] Use `definePageMeta({ layout: false })` for standalone page
  - [ ] Add basic page structure with white background

- [ ] Configure page metadata (AC: #4, #5)
  - [ ] Set page title using `useHead()` or `useSeoMeta()`
  - [ ] Add `<meta name="robots" content="noindex">` for privacy
  - [ ] Ensure title format: "Resume - Ali Arghyani"

- [ ] Implement print mode detection (AC: #6)
  - [ ] Use `useRoute().query.print` to detect print parameter
  - [ ] Pass print mode state to child components
  - [ ] Verify download button visibility logic

- [ ] Add placeholder content (AC: #1)
  - [ ] Import `ResumePreview` component (will be created in Story 2.2)
  - [ ] For now, add placeholder text: "Resume Preview Coming Soon"
  - [ ] Ensure page renders without errors

- [ ] Test page functionality
  - [ ] Navigate to `/resume` and verify standalone layout
  - [ ] Check page title in browser tab
  - [ ] Inspect meta tags in DOM
  - [ ] Test `/resume?print=true` parameter handling
  - [ ] Verify white background styling

## Dev Notes

### Architecture Alignment

**From Architecture Doc:**
- File location: `app/pages/resume.vue` (confirmed in Project Structure section)
- Layout: Use `definePageMeta({ layout: false })` for standalone page
- Query parameter: `?print=true` hides download button for PDF generation
- SEO: `noindex` meta tag for privacy (resume not indexed by search engines)

**From Tech Spec Epic 2:**
- AC1-AC6 map directly to this story
- Page serves dual purposes: (1) user preview, (2) PDF generation source
- WYSIWYG approach: same page renders for web and PDF

### Project Structure Notes

**File to Create:**
- `app/pages/resume.vue` - Main resume route

**Dependencies:**
- Nuxt 4 routing (file-based)
- `useHead()` or `useSeoMeta()` composable for metadata
- `useRoute()` composable for query parameter detection

**Future Integration:**
- Story 2.2 will create `ResumePreview.vue` component to replace placeholder
- Story 2.5 will create `ResumeDownloadButton.vue` that respects print mode

### Implementation Notes

**Page Structure:**
```vue
<script setup lang="ts">
definePageMeta({
  layout: false
})

const route = useRoute()
const isPrintMode = computed(() => route.query.print === 'true')

useHead({
  title: 'Resume - Ali Arghyani',
  meta: [
    { name: 'robots', content: 'noindex' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Placeholder for ResumePreview component (Story 2.2) -->
    <div class="p-8 text-center">
      <h1 class="text-2xl font-bold">Resume Preview Coming Soon</h1>
    </div>
    
    <!-- Download button will be added in Story 2.5 -->
    <!-- Hidden when isPrintMode is true -->
  </div>
</template>
```

**Testing Checklist:**
- [ ] Page accessible at `http://localhost:3000/resume`
- [ ] No site navigation visible (header/footer)
- [ ] White background applied
- [ ] Browser tab shows "Resume - Ali Arghyani"
- [ ] Meta tag `<meta name="robots" content="noindex">` present in DOM
- [ ] `?print=true` parameter detected correctly

### References

- [Source: docs/architecture.md#Novel-Pattern-WYSIWYG-PDF-Export]
- [Source: docs/architecture.md#Project-Structure]
- [Source: docs/sprint-artifacts/tech-spec-epic-2.md#AC1-Standalone-Resume-Route]
- [Source: docs/epics.md#Story-2.1-Create-Resume-Page-Route]

## Dev Agent Record

### Context Reference

- docs/sprint-artifacts/2-1-create-resume-page-route.context.xml

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
- 2025-11-30: Story drafted by SM agent (mahdi)
