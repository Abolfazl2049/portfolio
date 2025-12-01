<script setup lang="ts">
const { resume } = useResumeData()
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4 print:p-0 print:bg-white">
    <!-- A4 Container -->
    <div
      class="resume-container bg-white shadow-lg max-w-[210mm] min-h-[297mm] w-full print:shadow-none print:max-w-none">
      <!-- Single-column vertical stack -->
      <div class="flex flex-col p-6">
        <!-- Header with Photo + Name + Contact (Story 2.3) -->
        <section class="mb-6">
          <h1 class="text-3xl font-bold text-gray-800">{{ resume.basics.name }}</h1>
          <p class="text-lg text-gray-600">{{ resume.basics.label }}</p>
          <p class="text-sm text-gray-500 mt-1">
            {{ resume.basics.location.city }}, {{ resume.basics.location.country }} |
            {{ resume.basics.email }} | {{ resume.basics.phone }}
          </p>
        </section>

        <!-- Summary (Story 2.3) -->
        <section class="mb-6">
          <h2 class="text-base font-semibold text-blue-600 uppercase border-b-2 border-blue-600 pb-1 mb-3">
            Summary
          </h2>
          <p class="text-sm text-gray-700 leading-relaxed">{{ resume.basics.summary }}</p>
        </section>

        <!-- Experience (Story 2.3) -->
        <section class="mb-6">
          <h2 class="text-base font-semibold text-blue-600 uppercase border-b-2 border-blue-600 pb-1 mb-3">
            Work Experience
          </h2>
          <div v-for="job in resume.work" :key="job.company + job.startDate" class="mb-4 last:mb-0">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-sm font-semibold text-gray-800">{{ job.position }}</h3>
                <p class="text-sm text-gray-600">{{ job.company }}</p>
              </div>
              <span class="text-sm text-gray-500 whitespace-nowrap">
                {{ job.startDate }} - {{ job.endDate || 'Present' }}
              </span>
            </div>
            <ul class="mt-2 space-y-1">
              <li v-for="(highlight, idx) in job.highlights" :key="idx"
                class="text-sm text-gray-700 pl-4 relative before:content-['•'] before:absolute before:left-0">
                {{ highlight }}
              </li>
            </ul>
          </div>
        </section>

        <!-- Education (Story 2.4) -->
        <section class="mb-6">
          <h2 class="text-base font-semibold text-blue-600 uppercase border-b-2 border-blue-600 pb-1 mb-3">
            Education
          </h2>
          <div v-for="edu in resume.education" :key="edu.institution + edu.startDate" class="mb-3 last:mb-0">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-sm font-semibold text-gray-800">{{ edu.studyType }} in {{ edu.area }}</h3>
                <p class="text-sm text-gray-600">{{ edu.institution }}</p>
              </div>
              <span class="text-sm text-gray-500 whitespace-nowrap">
                {{ edu.startDate }} - {{ edu.endDate || 'Present' }}
              </span>
            </div>
          </div>
        </section>

        <!-- Additional Information (Story 2.4) -->
        <section>
          <h2 class="text-base font-semibold text-blue-600 uppercase border-b-2 border-blue-600 pb-1 mb-3">
            Additional Information
          </h2>

          <!-- Skills -->
          <div v-if="resume.skills?.length" class="mb-3">
            <span class="text-sm font-semibold text-gray-800">Technical Skills: </span>
            <span class="text-sm text-gray-700">
              <template v-for="(skill, idx) in resume.skills" :key="skill.name">
                {{ skill.keywords.join(', ') }}<template v-if="idx < resume.skills.length - 1">; </template>
              </template>
            </span>
          </div>

          <!-- Languages -->
          <div v-if="resume.languages?.length" class="mb-3">
            <span class="text-sm font-semibold text-gray-800">Languages: </span>
            <span class="text-sm text-gray-700">
              <template v-for="(lang, idx) in resume.languages" :key="lang.language">
                {{ lang.language }} ({{ lang.fluency }})<template v-if="idx < resume.languages.length - 1">, </template>
              </template>
            </span>
          </div>

          <!-- Certifications -->
          <div v-if="resume.certifications?.length">
            <span class="text-sm font-semibold text-gray-800">Certifications: </span>
            <span class="text-sm text-gray-700">
              <template v-for="(cert, idx) in resume.certifications" :key="cert.name">
                {{ cert.name }} ({{ cert.issuer }})<template v-if="idx < resume.certifications.length - 1">, </template>
              </template>
            </span>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media print {
  .no-print {
    display: none !important;
  }

  .resume-container {
    width: 210mm;
    min-height: 297mm;
  }

  * {
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }

  section {
    break-inside: avoid;
  }
}
</style>
