<script setup lang="ts">
import type { Education } from '~/types/resume'

interface Props {
  education: Education[]
}

defineProps<Props>()
const { t, locale } = useI18n()
const { formatDate } = useResumeData()

function formatDateRange(start: string, end?: string): string {
  const startFormatted = formatDate(start, locale.value)
  const endFormatted = end ? formatDate(end, locale.value) : t('resume.present')
  return `${startFormatted} - ${endFormatted}`
}
</script>

<template>
  <section class="mb-12 print:mb-12">
    <h2
      class="text-base font-bold text-blue-700 uppercase border-b-2 border-blue-600 pb-2 mb-6 print:mb-6 tracking-wide">
      {{ t('resume.education') }}
    </h2>

    <div v-for="edu in education" :key="edu.institution + edu.startDate" class="mb-4 last:mb-0 print:mb-4">
      <div class="flex justify-between items-start">
        <div>
          <h3 class="text-sm font-bold text-gray-900">{{ edu.studyType }}
            <template v-if="edu.area">

              in {{ edu.area }}
            </template>

          </h3>
          <p class="text-sm font-medium text-gray-600">{{ edu.institution }}</p>
        </div>
        <span class="text-sm text-gray-500 whitespace-nowrap font-medium rtl:print:ml-16">
          {{ formatDateRange(edu.startDate, edu.endDate) }}
        </span>
      </div>
    </div>
  </section>
</template>
