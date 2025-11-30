# Story 2.3: Create Resume Header & Main Content Components

Status: ready-for-dev

## Story

As a user,
I want to see my name, title, summary, and work experience prominently,
so that recruiters see the most important information first.

## Acceptance Criteria

### ResumeHeader.vue
1. **AC1:** Given the header component renders, when it displays, then it shows full name in large bold text (2rem, font-bold)
2. **AC2:** Job title appears below name (1.25rem, text-gray-600)
3. **AC3:** Blue accent line or background element is present

### ResumeSummary.vue
4. **AC4:** Given the summary component renders, when it displays, then it shows "Profile" or "Summary" section header
5. **AC5:** Professional summary paragraph is displayed
6. **AC6:** Line height is 1.6 for readability

### ResumeExperience.vue
7. **AC7:** Given the experience component renders, when it displays, then it shows for each job: position title (bold), company name, date range (formatted: "Jan 2022 - Present"), bullet points for highlights (• character)
8. **AC8:** Jobs are sorted by date (most recent first)
9. **AC9:** "Present" is shown for current jobs (no endDate)

## Tasks / Subtasks

- [ ] Create ResumeHeader component (AC: #1-#3)
  - [ ] Create `app/components/resume/ResumeHeader.vue`
  - [ ] Accept props: `name` (string), `label` (string)
  - [ ] Display name with `text-3xl font-bold` (2rem)
  - [ ] Display job title with `text-xl text-gray-600` (1.25rem)
  - [ ] Add blue accent line: `border-b-4 border-blue-600`

- [ ] Create ResumeSummary component (AC: #4-#6)
  - [ ] Create `app/components/resume/ResumeSummary.vue`
  - [ ] Accept props: `summary` (string)
  - [ ] Add section header "Profile" with `text-base font-semibold`
  - [ ] Display summary paragraph with `leading-relaxed` (line-height: 1.6)
  - [ ] Use `text-sm text-gray-800`

- [ ] Create ResumeExperience component (AC: #7-#9)
  - [ ] Create `app/components/resume/ResumeExperience.vue`
  - [ ] Accept props: `work` (WorkExperience[])
  - [ ] Add section header "Experience" with `text-base font-semibold`
  - [ ] Sort jobs by startDate (most recent first)
  - [ ] For each job, display:
    - Position title: `font-semibold text-gray-900`
    - Company name: `text-gray-700`
    - Date range: Use `formatDate()` helper from composable
    - Highlights: `<ul>` with bullet points (• character)
  - [ ] Handle current jobs: Show "Present" if no endDate

- [ ] Integrate components into ResumePreview (AC: #1-#9)
  - [ ] Import all three components in `ResumePreview.vue`
  - [ ] Pass data from `useResumeData()` composable
  - [ ] Place in right main content column:
    - ResumeHeader at top
    - ResumeSummary below header
    - ResumeExperience below summary

- [ ] Test components rendering
  - [ ] Verify header displays name and title correctly
  - [ ] Check blue accent line visibility
  - [ ] Verify summary section with proper line height
  - [ ] Test experience section with multiple jobs
  - [ ] Verify date formatting ("Jan 2022 - Present")
  - [ ] Check job sorting (most recent first)
  - [ ] Test with current job (no endDate)

## Dev Notes

### Architecture Alignment

**From Architecture Doc:**
- File locations: `app/components/resume/ResumeHeader.vue`, `ResumeSummary.vue`, `ResumeExperience.vue`
- Data source: Props passed from `ResumePreview.vue` (which uses `useResumeData()`)
- Date formatting: Use `formatDate()` helper from composable

**From Tech Spec Epic 2:**
- AC5, AC10, AC11, AC15, AC20, AC21 map to this story
- Main content components for right column (65% width)
- Professional typography and spacing

### Learnings from Previous Story

**From Story 2.2 (Status: drafted)**
- `ResumePreview.vue` container created with two-column grid
- Right main content column ready for child components
- Data access via `useResumeData()` composable established
- Tailwind styling patterns defined (text-sm, text-blue-600, etc.)
- **Integration Point**: Import these components into right column of ResumePreview

[Source: docs/sprint-artifacts/2-2-create-resume-preview-container-component.md]

### Project Structure Notes

**Files to Create:**
- `app/components/resume/ResumeHeader.vue`
- `app/components/resume/ResumeSummary.vue`
- `app/components/resume/ResumeExperience.vue`

**Files to Modify:**
- `app/components/resume/ResumePreview.vue` - Import and integrate new components

**Dependencies:**
- `app/composables/useResumeData.ts` - `formatDate()` helper
- `app/types/resume.ts` - `WorkExperience` interface
- `app/data/resume.en.ts` - Sample data

### Implementation Notes

**ResumeHeader.vue:**
```vue
<script setup lang="ts">
interface Props {
  name: string
  label: string
}

defineProps<Props>()
</script>

<template>
  <div class="border-b-4 border-blue-600 pb-4 mb-6">
    <h1 class="text-3xl font-bold text-gray-900">{{ name }}</h1>
    <p class="text-xl text-gray-600 mt-1">{{ label }}</p>
  </div>
</template>
```

**ResumeSummary.vue:**
```vue
<script setup lang="ts">
interface Props {
  summary: string
}

defineProps<Props>()
</script>

<template>
  <div class="mb-6">
    <h2 class="text-base font-semibold text-gray-900 mb-2">Profile</h2>
    <p class="text-sm text-gray-800 leading-relaxed">{{ summary }}</p>
  </div>
</template>
```

**ResumeExperience.vue:**
```vue
<script setup lang="ts">
import type { WorkExperience } from '~/types/resume'

interface Props {
  work: WorkExperience[]
}

const props = defineProps<Props>()
const { formatDate } = useResumeData()

const sortedWork = computed(() => {
  return [...props.work].sort((a, b) => {
    const dateA = a.startDate || ''
    const dateB = b.startDate || ''
    return dateB.localeCompare(dateA) // Most recent first
  })
})

const formatDateRange = (start: string, end?: string) => {
  const startFormatted = formatDate(start)
  const endFormatted = end ? formatDate(end) : 'Present'
  return `${startFormatted} - ${endFormatted}`
}
</script>

<template>
  <div>
    <h2 class="text-base font-semibold text-gray-900 mb-4">Experience</h2>
    <div v-for="job in sortedWork" :key="job.company + job.position" class="mb-6">
      <h3 class="font-semibold text-gray-900">{{ job.position }}</h3>
      <p class="text-sm text-gray-700">{{ job.company }}</p>
      <p class="text-xs text-gray-600 mb-2">{{ formatDateRange(job.startDate, job.endDate) }}</p>
      <ul class="text-sm text-gray-800 space-y-1">
        <li v-for="(highlight, idx) in job.highlights" :key="idx" class="flex">
          <span class="mr-2">•</span>
          <span>{{ highlight }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
```

**Integration in ResumePreview.vue:**
```vue
<!-- Right Main Content -->
<div class="p-6 space-y-6">
  <ResumeHeader 
    :name="resume.basics.name" 
    :label="resume.basics.label" 
  />
  <ResumeSummary :summary="resume.basics.summary" />
  <ResumeExperience :work="resume.work" />
</div>
```

**Testing Checklist:**
- [ ] Header displays name "Ali Arghyani" in large bold text
- [ ] Job title displays below name in gray
- [ ] Blue accent line visible under header
- [ ] Summary section has "Profile" header
- [ ] Summary paragraph has proper line height (1.6)
- [ ] Experience section has "Experience" header
- [ ] Jobs sorted by date (most recent first)
- [ ] Each job shows position, company, date range, highlights
- [ ] Date formatting works: "Jan 2022 - Present"
- [ ] Bullet points (•) display correctly
- [ ] Current job shows "Present" instead of end date

### References

- [Source: docs/architecture.md#Data-Architecture]
- [Source: docs/architecture.md#Consistency-Rules]
- [Source: docs/sprint-artifacts/tech-spec-epic-2.md#AC5-Header-Section]
- [Source: docs/sprint-artifacts/tech-spec-epic-2.md#AC10-Summary-Section]
- [Source: docs/sprint-artifacts/tech-spec-epic-2.md#AC11-Experience-Section]
- [Source: docs/epics.md#Story-2.3-Create-Resume-Header-Main-Content-Components]

## Dev Agent Record

### Context Reference

- docs/sprint-artifacts/2-3-create-resume-header-main-content-components.context.xml

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
