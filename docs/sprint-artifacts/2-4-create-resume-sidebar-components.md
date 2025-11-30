# Story 2.4: Create Resume Sidebar Components

Status: ready-for-dev

## Story

As a user,
I want to see my contact info, skills, education, and languages in the sidebar,
so that this supporting information is easily scannable.

## Acceptance Criteria

### ResumeContact.vue
1. **AC1:** Given the contact component renders, when it displays, then it shows email with icon (i-mdi-email)
2. **AC2:** Phone with icon (i-mdi-phone)
3. **AC3:** Location with icon (i-mdi-map-marker)
4. **AC4:** Social profiles with icons (LinkedIn, GitHub, etc.)
5. **AC5:** Each item is on its own line
6. **AC6:** Links are clickable (mailto:, tel:, https://)

### ResumeSkills.vue
7. **AC7:** Given the skills component renders, when it displays, then it shows "Skills" section header
8. **AC8:** Skill categories as subheaders
9. **AC9:** Keywords as tags or comma-separated list

### ResumeEducation.vue
10. **AC10:** Given the education component renders, when it displays, then it shows degree type and field (e.g., "B.Sc. Computer Science")
11. **AC11:** Institution name
12. **AC12:** Date range

### ResumeLanguages.vue
13. **AC13:** Given the languages component renders, when it displays, then it shows "Languages" section header
14. **AC14:** Each language with fluency level

## Tasks / Subtasks

- [ ] Create ResumeContact component (AC: #1-#6)
  - [ ] Create `app/components/resume/ResumeContact.vue`
  - [ ] Accept props: `basics` (ResumeBasics)
  - [ ] Display email with icon and mailto: link
  - [ ] Display phone with icon and tel: link
  - [ ] Display location with icon (city, country)
  - [ ] Display social profiles with icons and https:// links
  - [ ] Use Nuxt UI `UIcon` component for icons
  - [ ] Style each item on separate line

- [ ] Create ResumeSkills component (AC: #7-#9)
  - [ ] Create `app/components/resume/ResumeSkills.vue`
  - [ ] Accept props: `skills` (Skill[])
  - [ ] Add section header "Skills"
  - [ ] Display each skill category as subheader
  - [ ] Display keywords as comma-separated list or tags
  - [ ] Use consistent styling with other sidebar sections

- [ ] Create ResumeEducation component (AC: #10-#12)
  - [ ] Create `app/components/resume/ResumeEducation.vue`
  - [ ] Accept props: `education` (Education[])
  - [ ] Add section header "Education"
  - [ ] Display degree type and field (e.g., "B.Sc. Computer Science")
  - [ ] Display institution name
  - [ ] Display date range using `formatDate()` helper

- [ ] Create ResumeLanguages component (AC: #13-#14)
  - [ ] Create `app/components/resume/ResumeLanguages.vue`
  - [ ] Accept props: `languages` (Language[])
  - [ ] Add section header "Languages"
  - [ ] Display each language with fluency level
  - [ ] Format: "English - Fluent"

- [ ] Integrate components into ResumePreview (AC: #1-#14)
  - [ ] Import all four components in `ResumePreview.vue`
  - [ ] Pass data from `useResumeData()` composable
  - [ ] Place in left sidebar column:
    - ResumeContact at top
    - ResumeSkills below contact
    - ResumeEducation below skills
    - ResumeLanguages at bottom

- [ ] Test components rendering
  - [ ] Verify contact info displays with icons
  - [ ] Test clickable links (email, phone, social)
  - [ ] Check skills section with categories and keywords
  - [ ] Verify education section with degree and dates
  - [ ] Test languages section with fluency levels
  - [ ] Verify all components fit in sidebar layout

## Dev Notes

### Architecture Alignment

**From Architecture Doc:**
- File locations: `app/components/resume/ResumeContact.vue`, `ResumeSkills.vue`, `ResumeEducation.vue`, `ResumeLanguages.vue`
- Icons: Use Nuxt UI `UIcon` component with Iconify icons
- Data source: Props passed from `ResumePreview.vue`

**From Tech Spec Epic 2:**
- AC6, AC7, AC8, AC9, AC16, AC17, AC18, AC19 map to this story
- Sidebar components for left column (35% width)
- Consistent section header styling

### Learnings from Previous Story

**From Story 2.3 (Status: drafted)**
- Main content components created (Header, Summary, Experience)
- Component prop patterns established
- Section header styling: `text-base font-semibold text-gray-900 mb-2`
- Date formatting via `formatDate()` helper
- **Integration Point**: Import sidebar components into left column of ResumePreview

[Source: docs/sprint-artifacts/2-3-create-resume-header-main-content-components.md]

### Project Structure Notes

**Files to Create:**
- `app/components/resume/ResumeContact.vue`
- `app/components/resume/ResumeSkills.vue`
- `app/components/resume/ResumeEducation.vue`
- `app/components/resume/ResumeLanguages.vue`

**Files to Modify:**
- `app/components/resume/ResumePreview.vue` - Import and integrate sidebar components

**Dependencies:**
- `@nuxt/ui` - `UIcon` component
- `app/composables/useResumeData.ts` - `formatDate()` helper
- `app/types/resume.ts` - Type interfaces
- `app/data/resume.en.ts` - Sample data

### Implementation Notes

**ResumeContact.vue:**
```vue
<script setup lang="ts">
import type { ResumeBasics } from '~/types/resume'

interface Props {
  basics: ResumeBasics
}

defineProps<Props>()
</script>

<template>
  <div class="space-y-3">
    <h2 class="text-base font-semibold text-gray-900 mb-4">Contact</h2>
    
    <!-- Email -->
    <div class="flex items-center gap-2 text-sm">
      <UIcon name="i-mdi-email" class="text-blue-600 flex-shrink-0" />
      <a :href="`mailto:${basics.email}`" class="text-gray-700 hover:text-blue-600">
        {{ basics.email }}
      </a>
    </div>
    
    <!-- Phone -->
    <div class="flex items-center gap-2 text-sm">
      <UIcon name="i-mdi-phone" class="text-blue-600 flex-shrink-0" />
      <a :href="`tel:${basics.phone}`" class="text-gray-700 hover:text-blue-600">
        {{ basics.phone }}
      </a>
    </div>
    
    <!-- Location -->
    <div class="flex items-center gap-2 text-sm">
      <UIcon name="i-mdi-map-marker" class="text-blue-600 flex-shrink-0" />
      <span class="text-gray-700">
        {{ basics.location.city }}, {{ basics.location.country }}
      </span>
    </div>
    
    <!-- Social Profiles -->
    <div v-for="profile in basics.profiles" :key="profile.network" class="flex items-center gap-2 text-sm">
      <UIcon :name="profile.icon || 'i-mdi-link'" class="text-blue-600 flex-shrink-0" />
      <a :href="profile.url" target="_blank" class="text-gray-700 hover:text-blue-600">
        {{ profile.network }}
      </a>
    </div>
  </div>
</template>
```

**ResumeSkills.vue:**
```vue
<script setup lang="ts">
import type { Skill } from '~/types/resume'

interface Props {
  skills: Skill[]
}

defineProps<Props>()
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-base font-semibold text-gray-900 mb-4">Skills</h2>
    
    <div v-for="skill in skills" :key="skill.name" class="space-y-1">
      <h3 class="text-sm font-medium text-gray-800">{{ skill.name }}</h3>
      <p class="text-xs text-gray-600">
        {{ skill.keywords.join(', ') }}
      </p>
    </div>
  </div>
</template>
```

**ResumeEducation.vue:**
```vue
<script setup lang="ts">
import type { Education } from '~/types/resume'

interface Props {
  education: Education[]
}

defineProps<Props>()
const { formatDate } = useResumeData()

const formatDateRange = (start: string, end?: string) => {
  const startFormatted = formatDate(start)
  const endFormatted = end ? formatDate(end) : 'Present'
  return `${startFormatted} - ${endFormatted}`
}
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-base font-semibold text-gray-900 mb-4">Education</h2>
    
    <div v-for="edu in education" :key="edu.institution" class="space-y-1">
      <h3 class="text-sm font-medium text-gray-800">
        {{ edu.studyType }} {{ edu.area }}
      </h3>
      <p class="text-xs text-gray-600">{{ edu.institution }}</p>
      <p class="text-xs text-gray-500">{{ formatDateRange(edu.startDate, edu.endDate) }}</p>
    </div>
  </div>
</template>
```

**ResumeLanguages.vue:**
```vue
<script setup lang="ts">
import type { Language } from '~/types/resume'

interface Props {
  languages?: Language[]
}

defineProps<Props>()
</script>

<template>
  <div v-if="languages && languages.length > 0" class="space-y-2">
    <h2 class="text-base font-semibold text-gray-900 mb-4">Languages</h2>
    
    <div v-for="lang in languages" :key="lang.language" class="text-sm text-gray-700">
      {{ lang.language }} - {{ lang.fluency }}
    </div>
  </div>
</template>
```

**Integration in ResumePreview.vue:**
```vue
<!-- Left Sidebar -->
<div class="bg-blue-50 p-6 space-y-6">
  <ResumeContact :basics="resume.basics" />
  <ResumeSkills :skills="resume.skills" />
  <ResumeEducation :education="resume.education" />
  <ResumeLanguages :languages="resume.languages" />
</div>
```

**Testing Checklist:**
- [ ] Contact section displays email, phone, location with icons
- [ ] Email link opens mailto: client
- [ ] Phone link opens tel: dialer
- [ ] Social profile links open in new tab
- [ ] Skills section shows categories and keywords
- [ ] Keywords displayed as comma-separated list
- [ ] Education section shows degree, institution, dates
- [ ] Date formatting works correctly
- [ ] Languages section shows language and fluency
- [ ] All components fit properly in sidebar
- [ ] Icons render correctly (Nuxt UI Icon)

### References

- [Source: docs/architecture.md#Data-Architecture]
- [Source: docs/architecture.md#Consistency-Rules]
- [Source: docs/sprint-artifacts/tech-spec-epic-2.md#AC6-Contact-Section]
- [Source: docs/sprint-artifacts/tech-spec-epic-2.md#AC7-Skills-Section]
- [Source: docs/sprint-artifacts/tech-spec-epic-2.md#AC8-Education-Section]
- [Source: docs/sprint-artifacts/tech-spec-epic-2.md#AC9-Languages-Section]
- [Source: docs/epics.md#Story-2.4-Create-Resume-Sidebar-Components]

## Dev Agent Record

### Context Reference

- docs/sprint-artifacts/2-4-create-resume-sidebar-components.context.xml

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
