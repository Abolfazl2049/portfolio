<script setup lang="ts">
import type { Skill, Language, Certification } from '~/types/resume'

interface Props {
  skills: Skill[]
  languages?: Language[]
  certifications?: Certification[]
}

defineProps<Props>()
</script>

<template>
  <section>
    <h2 class="text-base font-bold text-blue-600 uppercase border-b-2 border-blue-600 pb-1 mb-3">
      Additional Information
    </h2>

    <!-- Skills -->
    <div v-if="skills?.length" class="mb-3">
      <span class="text-sm font-semibold text-gray-800">Technical Skills: </span>
      <span class="text-sm text-gray-700">
        <template v-for="(skill, idx) in skills" :key="skill.name">
          {{ skill.keywords.join(', ') }}<template v-if="idx < skills.length - 1">; </template>
        </template>
      </span>
    </div>

    <!-- Languages -->
    <div v-if="languages?.length" class="mb-3">
      <span class="text-sm font-semibold text-gray-800">Languages: </span>
      <span class="text-sm text-gray-700">
        <template v-for="(lang, idx) in languages" :key="lang.language">
          {{ lang.language }} ({{ lang.fluency }})<template v-if="idx < languages.length - 1">, </template>
        </template>
      </span>
    </div>

    <!-- Certifications -->
    <div v-if="certifications?.length">
      <span class="text-sm font-semibold text-gray-800">Certifications: </span>
      <span class="text-sm text-gray-700">
        <template v-for="(cert, idx) in certifications" :key="cert.name">
          {{ cert.name }} ({{ cert.issuer }})<template v-if="idx < certifications.length - 1">, </template>
        </template>
      </span>
    </div>
  </section>
</template>
