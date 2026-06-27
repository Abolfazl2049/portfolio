<script setup lang="ts">
import type { Project } from '~/types/resume'

interface Props {
  projects: Project[]
}

defineProps<Props>()
const { t } = useI18n()
</script>

<template>
  <section class="mb-12 print:mb-12">
    <h2
      class="text-base font-bold text-blue-700 uppercase border-b-2 border-blue-600 pb-2 mb-6 print:mb-6 tracking-wide">
      {{ t('resume.projects') }}
    </h2>

    <div v-for="project in projects" :key="project.name" class="mb-6 last:mb-0 print:mb-6">
      <h3 class="text-sm font-bold text-gray-900 break-words hyphens-none">{{ project.name }}</h3>
      <p class="text-sm text-gray-700 mt-1.5 leading-relaxed break-words hyphens-none">{{ project.description }}</p>
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
