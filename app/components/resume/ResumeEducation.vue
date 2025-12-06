<script setup lang="ts">
import type { Education } from '~/types/resume'

interface Props {
  education: Education[]
}

defineProps<Props>()
const { formatDate } = useResumeData()

function formatDateRange(start: string, end?: string): string {
  const startFormatted = formatDate(start)
  const endFormatted = end ? formatDate(end) : 'Present'
  return `${startFormatted} - ${endFormatted}`
}
</script>

<template>
  <section class="mb-8 print:mb-5">
    <h2
      class="text-base font-bold text-blue-700 uppercase border-b-2 border-blue-600 pb-1.5 mb-4 print:mb-2.5 tracking-wide">
      Education
    </h2>

    <div v-for="edu in education" :key="edu.institution + edu.startDate" class="mb-4 last:mb-0">
      <div class="flex justify-between items-start">
        <div>
          <h3 class="text-sm font-bold text-gray-900">{{ edu.studyType }} in {{ edu.area }}</h3>
          <p class="text-sm font-medium text-gray-600">{{ edu.institution }}</p>
        </div>
        <span class="text-sm text-gray-500 whitespace-nowrap font-medium">
          {{ formatDateRange(edu.startDate, edu.endDate) }}
        </span>
      </div>
    </div>
  </section>
</template>
