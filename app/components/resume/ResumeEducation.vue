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
  <section class="mb-6">
    <h2 class="text-base font-bold text-blue-600 uppercase border-b-2 border-blue-600 pb-1 mb-3">
      Education
    </h2>

    <div v-for="edu in education" :key="edu.institution + edu.startDate" class="mb-3 last:mb-0">
      <div class="flex justify-between items-start">
        <div>
          <h3 class="text-sm font-semibold text-gray-800">{{ edu.studyType }} in {{ edu.area }}</h3>
          <p class="text-sm text-gray-600">{{ edu.institution }}</p>
        </div>
        <span class="text-sm text-gray-500 whitespace-nowrap">
          {{ formatDateRange(edu.startDate, edu.endDate) }}
        </span>
      </div>
    </div>
  </section>
</template>
