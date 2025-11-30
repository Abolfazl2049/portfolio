# Story 1.1: Create Resume TypeScript Interfaces

Status: ready-for-dev

## Story

As a **developer**,
I want **well-defined TypeScript interfaces for resume data**,
so that **I have type safety and autocomplete when working with resume content**.

## Acceptance Criteria

| AC ID | Criteria | Testable |
|-------|----------|----------|
| AC-1 | File exists at `app/types/resume.ts` | ✓ |
| AC-2 | `ResumeBasics` interface includes: name, label, email, phone, url?, location, profiles, summary | ✓ |
| AC-3 | `WorkExperience` interface includes: company, position, startDate, endDate?, highlights | ✓ |
| AC-4 | `Education` interface includes: institution, area, studyType, startDate, endDate? | ✓ |
| AC-5 | `Skill` interface includes: name, keywords[] | ✓ |
| AC-6 | `Language` interface includes: language, fluency (union type: 'Native' \| 'Fluent' \| 'Intermediate' \| 'Basic') | ✓ |
| AC-7 | `Certification` interface includes: name, issuer, date | ✓ |
| AC-8 | `Resume` interface combines all above with optional languages/certifications | ✓ |
| AC-9 | All date fields use YYYY-MM string format | ✓ |
| AC-10 | All interfaces are exported | ✓ |

## Tasks / Subtasks

- [ ] **Task 1: Create types file** (AC: 1)
  - [ ] Create `app/types/resume.ts` file
  - [ ] Add file header comment with JSON Resume schema reference

- [ ] **Task 2: Define ResumeBasics interface** (AC: 2)
  - [ ] Add `name: string`
  - [ ] Add `label: string` (job title)
  - [ ] Add `email: string`
  - [ ] Add `phone: string`
  - [ ] Add `url?: string` (optional)
  - [ ] Add `location: { city: string; country: string }`
  - [ ] Add `profiles: Array<{ network: string; url: string; icon?: string }>`
  - [ ] Add `summary: string`

- [ ] **Task 3: Define WorkExperience interface** (AC: 3, 9)
  - [ ] Add `company: string`
  - [ ] Add `position: string`
  - [ ] Add `startDate: string` (YYYY-MM format)
  - [ ] Add `endDate?: string` (optional, YYYY-MM format)
  - [ ] Add `highlights: string[]`

- [ ] **Task 4: Define Education interface** (AC: 4, 9)
  - [ ] Add `institution: string`
  - [ ] Add `area: string` (field of study)
  - [ ] Add `studyType: string` (degree type)
  - [ ] Add `startDate: string`
  - [ ] Add `endDate?: string`

- [ ] **Task 5: Define Skill interface** (AC: 5)
  - [ ] Add `name: string` (category name)
  - [ ] Add `keywords: string[]`

- [ ] **Task 6: Define Language interface** (AC: 6)
  - [ ] Add `language: string`
  - [ ] Add `fluency: 'Native' | 'Fluent' | 'Intermediate' | 'Basic'`

- [ ] **Task 7: Define Certification interface** (AC: 7, 9)
  - [ ] Add `name: string`
  - [ ] Add `issuer: string`
  - [ ] Add `date: string`

- [ ] **Task 8: Define Resume interface** (AC: 8, 10)
  - [ ] Add `basics: ResumeBasics`
  - [ ] Add `work: WorkExperience[]`
  - [ ] Add `education: Education[]`
  - [ ] Add `skills: Skill[]`
  - [ ] Add `languages?: Language[]` (optional)
  - [ ] Add `certifications?: Certification[]` (optional)
  - [ ] Export all interfaces

- [ ] **Task 9: Verify TypeScript compilation** (AC: 1-10)
  - [ ] Run `pnpm typecheck` or build to verify no errors
  - [ ] Verify all interfaces are importable

## Dev Notes

### Architecture Alignment

- **Schema:** Based on JSON Resume standard (modified per Architecture doc)
- **Location:** `app/types/` follows Nuxt 4 convention for type definitions
- **Exports:** All interfaces must be exported for use in components and composables

### Key Constraints

- Date format: YYYY-MM string (not Date object) for JSON serialization
- Optional fields marked with `?` suffix
- `profiles` array supports Iconify icon names via `icon?: string`
- `fluency` uses union type for type safety

### Testing Strategy

- TypeScript compiler validates interface correctness
- No runtime tests needed for type definitions
- Subsequent stories (1.2, 1.3) will validate usability

### Project Structure Notes

- File path: `app/types/resume.ts`
- Auto-imported by Nuxt (no manual import needed in components)
- Follows existing project pattern (see `app/types/` if exists, or create new)

### References

- [Source: docs/architecture.md#Data-Architecture] - Interface definitions
- [Source: docs/epics.md#Story-1.1] - Acceptance criteria
- [Source: docs/tech-spec-epic-1.md#Data-Models-and-Contracts] - Detailed schema

## Dev Agent Record

### Context Reference

- `docs/sprint-artifacts/1-1-create-resume-typescript-interfaces.context.xml`

### Agent Model Used

<!-- Will be filled by Dev agent -->

### Debug Log References

<!-- Will be filled by Dev agent -->

### Completion Notes List

<!-- Will be filled by Dev agent -->

### File List

<!-- Will be filled by Dev agent -->

## Change Log

| Date | Author | Change |
|------|--------|--------|
| 2025-11-30 | SM Agent (Bob) | Initial draft created |
