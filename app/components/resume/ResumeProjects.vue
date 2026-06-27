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
      <h3 class="text-sm font-bold text-gray-900 break-words hyphens-none">
        {{ project.name }}
      </h3>
      <p class="text-sm text-gray-700 mt-1.5 leading-relaxed break-words hyphens-none">
        {{ project.description }}
      </p>
      <div v-if="project.links?.length" class="flex flex-wrap gap-x-3 gap-y-1 mt-2">
        <a v-for="link in project.links" :key="link.url" :href="link.url" target="_blank" rel="noopener noreferrer"
          class="text-xs text-blue-600 hover:underline print:text-blue-700">
          {{ link.label }}
        </a>
      </div>
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
