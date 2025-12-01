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
    return dateB.localeCompare(dateA)
  })
})

function formatDateRange(start: string, end?: string): string {
  const startFormatted = formatDate(start)
  const endFormatted = end ? formatDate(end) : 'Present'
  return `${startFormatted} - ${endFormatted}`
}
</script>

<template>
  <section class="mb-6">
    <h2 class="text-base font-bold text-blue-600 uppercase border-b-2 border-blue-600 pb-1 mb-3">
      Work Experience
    </h2>

    <div v-for="job in sortedWork" :key="job.company + job.startDate" class="mb-4 last:mb-0">
      <div class="flex justify-between items-start">
        <div>
          <h3 class="text-sm font-semibold text-gray-800">{{ job.position }}</h3>
          <p class="text-sm text-gray-600">{{ job.company }}</p>
        </div>
        <span class="text-sm text-gray-500 whitespace-nowrap">
          {{ formatDateRange(job.startDate, job.endDate) }}
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
</template>
