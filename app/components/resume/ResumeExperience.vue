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
  <section class="mb-6 print:mb-3">
    <h2 class="text-base font-bold text-blue-600 uppercase border-b-2 border-blue-600 pb-1 mb-2 print:mb-1.5">
      Work Experience
    </h2>

    <div v-for="job in sortedWork" :key="job.company + job.startDate" class="mb-4 last:mb-0 print:mb-3">
      <div class="flex justify-between items-start gap-4">
        <div class="flex-1 min-w-0">
          <h3 class="text-sm font-semibold text-gray-800 break-words hyphens-none">{{ job.position }}</h3>
          <p class="text-sm text-gray-600">{{ job.company }}</p>
        </div>
        <span class="text-sm text-gray-500 whitespace-nowrap flex-shrink-0">
          {{ formatDateRange(job.startDate, job.endDate) }}
        </span>
      </div>
      <ul class="mt-2 space-y-1 print:mt-1 print:space-y-0.5">
        <li v-for="(highlight, idx) in job.highlights" :key="idx"
          class="text-sm text-gray-700 pl-4 relative before:content-['•'] before:absolute before:left-0 break-words hyphens-none">
          {{ highlight }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.hyphens-none {
  hyphens: none;
  -webkit-hyphens: none;
  -ms-hyphens: none;
}

.break-words {
  word-break: normal;
  overflow-wrap: break-word;
}
</style>
