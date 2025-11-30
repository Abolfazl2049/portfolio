# Epic Technical Specification: Resume Preview Page

Date: 2025-11-30
Author: mahdi
Epic ID: 2
Status: Draft

---

## Overview

Epic 2 delivers the Resume Preview Page - a pixel-perfect, standalone web page at `/resume` that renders the resume exactly as it will appear in the PDF export. This epic creates the visual foundation of the Resume Export feature, implementing all UI components with a two-column layout (sidebar + main content) using the Blue & White Clean Professional design template.

The preview page serves dual purposes: (1) user-facing preview for verification before download, and (2) source page for server-side PDF generation via Puppeteer. The WYSIWYG (What You See Is What You Get) approach ensures perfect consistency between web and PDF output.

## Objectives and Scope

**In Scope:**
- Standalone `/resume` route with no site navigation
- Two-column responsive layout (35% sidebar, 65% main content)
- Six modular Vue components for resume sections
- Blue (#2563eb) and white color scheme with Inter typography
- Print-optimized CSS for PDF generation compatibility
- A4 aspect ratio container (210mm × 297mm)
- Floating download button (hidden in print mode via `?print=true`)
- ATS-compatible HTML structure (semantic headings, no layout tables)

**Out of Scope:**
- PDF generation logic (Epic 3)
- Resume data creation (Epic 1 - already completed)
- Persian language support (future)
- Multiple template designs (future)
- Customization UI (future)

## System Architecture Alignment

**Framework:** Nuxt 4.1.3 with Vue 3 Composition API
**Styling:** Tailwind CSS 4.1.x with Nuxt UI 4.0.x components
**Fonts:** Inter (via @nuxt/fonts) for English text
**Icons:** Nuxt UI Icon component with Iconify icons

**Architecture Decisions Referenced:**
- ADR-002: Vue Components as Templates - Each resume section is a standalone component
- Novel Pattern: WYSIWYG PDF Export - Single component source for web and PDF
- Naming Conventions: PascalCase for components, Tailwind utilities for styling

**Data Source:** `useResumeData()` composable (from Epic 1) provides reactive access to `app/data/resume.en.ts`

## Detailed Design

### Services and Modules

| Component | Responsibility | Inputs | Outputs | Owner |
|-----------|---------------|--------|---------|-------|
| `pages/resume.vue` | Route handler, layout wrapper | Query param `?print` | Renders ResumePreview | Story 2.1 |
| `ResumePreview.vue` | Container, two-column grid | Resume data | Full resume layout | Story 2.2 |
| `ResumeHeader.vue` | Name and job title display | `basics.name`, `basics.label` | Header section | Story 2.3 |
| `ResumeSummary.vue` | Professional summary | `basics.summary` | Summary section | Story 2.3 |
| `ResumeExperience.vue` | Work history with highlights | `work[]` array | Experience section | Story 2.3 |
| `ResumeContact.vue` | Contact info with icons | `basics` (email, phone, location, profiles) | Contact section | Story 2.4 |
| `ResumeSkills.vue` | Technical skills by category | `skills[]` array | Skills section | Story 2.4 |
| `ResumeEducation.vue` | Education history | `education[]` array | Education section | Story 2.4 |
| `ResumeLanguages.vue` | Language proficiencies | `languages[]` array | Languages section | Story 2.4 |
| `ResumeDownloadButton.vue` | Floating action button | `?print` query param | Download trigger | Story 2.5 |

### Data Models and Contracts

**Input:** All components consume data from `useResumeData()` composable:

```typescript
const { resume, formatDate, getFullName, getPdfFilename } = useResumeData()
```

**Resume Data Structure (from Epic 1):**
- `resume.basics`: Name, label, email, phone, location, profiles, summary
- `resume.work[]`: Company, position, startDate, endDate, highlights[]
- `resume.education[]`: Institution, area, studyType, startDate, endDate
- `resume.skills[]`: Name (category), keywords[]
- `resume.languages[]`: Language, fluency

**Date Format:** YYYY-MM strings formatted to "Jan 2023" via `formatDate()` helper

### APIs and Interfaces

**Component Props:**

```typescript
// ResumePreview.vue - No props (uses composable)
// All child components receive data via props from parent

// ResumeHeader.vue
interface Props {
  name: string
  label: string  // Job title
}

// ResumeExperience.vue
interface Props {
  work: WorkExperience[]
}

// ResumeContact.vue
interface Props {
  basics: ResumeBasics
}

// Similar pattern for other components
```

**Query Parameters:**
- `?print=true`: Hides download button, optimizes for PDF generation

### Workflows and Sequencing

**User Flow:**
1. User navigates to `/resume`
2. Page loads with `layout: false` (standalone)
3. `ResumePreview.vue` fetches data via `useResumeData()`
4. Two-column grid renders:
   - Left sidebar: Contact → Skills → Education → Languages
   - Right main: Header → Summary → Experience
5. Floating download button appears (bottom-right)
6. User clicks download → triggers Epic 3 PDF generation

**PDF Generation Flow (Epic 3 integration):**
1. Puppeteer navigates to `/resume?print=true`
2. Same components render without download button
3. Puppeteer captures page as PDF
4. Result: Pixel-perfect match to web preview

## Non-Functional Requirements

### Performance

- **Page Load:** < 1 second (static data, no API calls)
- **LCP (Largest Contentful Paint):** < 1.5s
- **CLS (Cumulative Layout Shift):** 0 (fixed dimensions)
- **Font Loading:** Inter font preloaded via @nuxt/fonts

**Strategy:** Inline critical CSS, use Tailwind JIT, no external API dependencies

### Security

- **No PII Exposure:** Resume data is static, no user input
- **SEO:** `noindex` meta tag for privacy (resume not indexed by search engines)
- **XSS Protection:** Vue's automatic escaping for all text content

### Reliability/Availability

- **Static Rendering:** Page works without JavaScript (SSR)
- **Graceful Degradation:** Print styles work even if JS fails
- **Error Handling:** Composable returns empty data if file missing (prevents crashes)

### Observability

- **Console Logging:** Development mode logs component mount/unmount
- **Error Boundaries:** Vue error handlers catch component failures
- **Performance Monitoring:** Nuxt DevTools tracks component render times

## Dependencies and Integrations

**External Dependencies:**
- `@nuxt/fonts` (0.11.x): Inter font loading
- `@nuxt/ui` (4.0.x): UButton, UIcon components
- Tailwind CSS (4.1.x): Utility classes

**Internal Dependencies:**
- `app/types/resume.ts`: TypeScript interfaces (Epic 1)
- `app/data/resume.en.ts`: Resume data (Epic 1)
- `app/composables/useResumeData.ts`: Data access composable (Epic 1)

**Integration Points:**
- Epic 3: `/api/resume/pdf` will navigate to `/resume?print=true`
- Future: Persian support will use `app/data/resume.fa.ts`

## Acceptance Criteria (Authoritative)

### AC1: Standalone Resume Route
**Given** I navigate to `/resume`
**When** the page loads
**Then** I see the resume preview with no site header/footer
**And** page title is "Resume - Ali Arghyani"
**And** meta tag `<meta name="robots" content="noindex">` is present

### AC2: Two-Column Layout
**Given** the resume page is rendered on desktop
**When** I view the layout
**Then** I see a two-column grid:
- Left sidebar (35% width): Contact, Skills, Education, Languages
- Right main content (65% width): Header, Summary, Experience
**And** container has A4 aspect ratio (210mm × 297mm)
**And** page margins are 24px (1.5rem)

### AC3: Responsive Behavior
**Given** the resume page is rendered on mobile
**When** viewport width < 768px
**Then** layout switches to single column
**And** sidebar sections appear above main content

### AC4: Color Scheme and Typography
**Given** the resume is displayed
**When** I inspect the styling
**Then** primary color is blue (#2563eb) for headers and icons
**And** background is white
**And** text is dark gray (#1f2937)
**And** font family is Inter
**And** body text size is 14px (0.875rem)

### AC5: Header Section
**Given** the header component renders
**When** I view the top of the resume
**Then** I see full name in large bold text (2rem)
**And** job title below name (1.25rem, gray)
**And** blue accent line or background element

### AC6: Contact Section
**Given** the contact component renders
**When** I view the sidebar
**Then** I see email with icon (i-mdi-email)
**And** phone with icon (i-mdi-phone)
**And** location with icon (i-mdi-map-marker)
**And** social profiles (LinkedIn, GitHub) with icons
**And** all links are clickable (mailto:, tel:, https://)

### AC7: Skills Section
**Given** the skills component renders
**When** I view the sidebar
**Then** I see "Skills" section header
**And** skill categories as subheaders
**And** keywords displayed as tags or comma-separated list

### AC8: Education Section
**Given** the education component renders
**When** I view the sidebar
**Then** I see degree type and field (e.g., "B.Sc. Computer Science")
**And** institution name
**And** date range formatted (e.g., "2018 - 2022")

### AC9: Languages Section
**Given** the languages component renders
**When** I view the sidebar
**Then** I see "Languages" section header
**And** each language with fluency level (e.g., "English - Fluent")

### AC10: Summary Section
**Given** the summary component renders
**When** I view the main content
**Then** I see "Profile" or "Summary" section header
**And** professional summary paragraph
**And** line height is 1.6 for readability

### AC11: Experience Section
**Given** the experience component renders
**When** I view the main content
**Then** I see for each job:
- Position title (bold)
- Company name
- Date range (formatted: "Jan 2022 - Present")
- Bullet points for highlights (• character)
**And** jobs are sorted by date (most recent first)
**And** "Present" is shown for current jobs (no endDate)

### AC12: Download Button
**Given** I'm on the resume page
**When** I view the page
**Then** I see a floating action button in bottom-right corner
**And** it has download icon (i-heroicons-arrow-down-tray)
**And** it has "Download PDF" text
**And** it has blue background color
**And** it has fixed position (doesn't scroll)
**And** it has shadow for elevation
**And** it has `.no-print` class

### AC13: Print Mode
**Given** I navigate to `/resume?print=true`
**When** the page loads
**Then** the download button is not visible
**And** all other content renders normally

### AC14: Print Styles
**Given** the page is printed or captured by Puppeteer
**When** print media query is active
**Then** `.no-print` elements are hidden
**And** colors print correctly (printBackground: true)
**And** page breaks are controlled
**And** A4 dimensions are maintained

### AC15: ATS Compatibility
**Given** the HTML structure is inspected
**When** I check semantic elements
**Then** name uses `<h1>` tag
**And** section headers use `<h2>` tags
**And** no layout tables are used (CSS Grid/Flexbox only)
**And** all text is real HTML text (not images)

## Traceability Mapping

| AC | Spec Section | Components | Test Idea |
|----|--------------|------------|-----------|
| AC1 | Standalone Route | `pages/resume.vue` | Navigate to /resume, verify no nav, check meta tags |
| AC2 | Two-Column Layout | `ResumePreview.vue` | Inspect grid, measure column widths, verify A4 ratio |
| AC3 | Responsive | `ResumePreview.vue` | Resize viewport, verify single column on mobile |
| AC4 | Color/Typography | All components | Inspect computed styles, verify colors and fonts |
| AC5 | Header | `ResumeHeader.vue` | Check h1 text, font size, job title styling |
| AC6 | Contact | `ResumeContact.vue` | Verify icons, links, click mailto/tel links |
| AC7 | Skills | `ResumeSkills.vue` | Check section header, categories, keywords |
| AC8 | Education | `ResumeEducation.vue` | Verify degree, institution, date formatting |
| AC9 | Languages | `ResumeLanguages.vue` | Check language list, fluency levels |
| AC10 | Summary | `ResumeSummary.vue` | Verify section header, paragraph, line height |
| AC11 | Experience | `ResumeExperience.vue` | Check job entries, date formatting, bullet points |
| AC12 | Download Button | `ResumeDownloadButton.vue` | Verify FAB position, icon, styling, shadow |
| AC13 | Print Mode | `pages/resume.vue` | Add ?print=true, verify button hidden |
| AC14 | Print Styles | CSS | Trigger print preview, verify styles |
| AC15 | ATS Compatibility | HTML structure | Inspect DOM, verify semantic tags, no tables |

## Risks, Assumptions, Open Questions

**Risks:**
- **Risk:** Font loading delay causes layout shift
  - **Mitigation:** Use @nuxt/fonts with preload, font-display: swap
- **Risk:** Print styles differ across browsers
  - **Mitigation:** Test in Chrome, Firefox, Safari; use Puppeteer for PDF (consistent)
- **Risk:** Long content causes page overflow
  - **Mitigation:** Test with max content length, add overflow handling

**Assumptions:**
- **Assumption:** Inter font is ATS-compatible
  - **Validation:** Inter is a standard web font, widely supported
- **Assumption:** Two-column layout works for all content lengths
  - **Validation:** Test with varying experience entries (2-5 jobs)
- **Assumption:** Blue (#2563eb) has sufficient contrast
  - **Validation:** WCAG AA contrast ratio verified (4.5:1 minimum)

**Open Questions:**
- **Question:** Should mobile view show download button?
  - **Answer:** Yes, but consider smaller size or icon-only
- **Question:** How to handle very long job titles or company names?
  - **Answer:** Use text truncation with ellipsis, test with max lengths
- **Question:** Should we add a "Print" button in addition to "Download PDF"?
  - **Answer:** No for MVP, browser print (Ctrl+P) is sufficient

## Test Strategy Summary

**Unit Tests:**
- Each component renders with sample data
- Date formatting helper works correctly
- Composable returns expected data structure

**Integration Tests:**
- Full page renders with all components
- Print mode hides download button
- Responsive layout switches at breakpoint

**Visual Regression Tests:**
- Screenshot comparison: web preview vs expected design
- Print preview matches web preview
- Mobile layout matches design

**Manual Tests:**
- Navigate to /resume, verify all sections
- Click all links (email, phone, social profiles)
- Test print preview (Ctrl+P)
- Test on mobile device
- Verify ATS compatibility (copy/paste text from PDF)

**Performance Tests:**
- Measure page load time (< 1s target)
- Check LCP and CLS metrics
- Verify font loading doesn't block render

**Acceptance Tests:**
- Run through all 15 ACs with real data
- Verify pixel-perfect match to design template
- Confirm Epic 3 can generate PDF from this page

---

**Epic 2 Tech Spec Complete**
**Status:** Ready for Story Creation
**Next Step:** SM creates Story 2.1 draft
