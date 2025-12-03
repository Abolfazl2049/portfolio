<script setup lang="ts">
import type { Language, Certification } from '~/types/resume'

interface Props {
  languages?: Language[]
  certifications?: Certification[]
}

const props = defineProps<Props>()
</script>

<template>
  <section class="mb-6 print:mb-4">
    <h2 class="text-base font-bold text-blue-600 uppercase border-b-2 border-blue-600 pb-1 mb-3">
      Languages & Certifications
    </h2>

    <!-- Languages -->
    <div v-if="languages?.length" class="mb-2">
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
          {{ cert.issuer }} - {{ cert.summary }}<template v-if="idx < certifications.length - 1">, </template>
        </template>
      </span>
    </div>
  </section>
</template>
