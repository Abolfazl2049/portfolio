<script setup lang="ts">
import type { Skill } from '~/types/resume'

interface Props {
  skills: Skill[]
}

const props = defineProps<Props>()
</script>

<template>
  <section class="mb-6 print:mb-4">
    <h2 class="text-base font-bold text-blue-600 uppercase border-b-2 border-blue-600 pb-1 mb-3">
      Skills & Qualifications
    </h2>

    <!-- Technical Skills (categorized) -->
    <div v-if="skills?.length">
      <div class="space-y-0.5">
        <div v-for="skill in skills" :key="skill.name" class="text-sm">
          <span class="font-medium text-gray-800">{{ skill.name }}:</span>
          <span class="text-gray-700"> {{ skill.keywords.join(', ') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
