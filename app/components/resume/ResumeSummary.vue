<script setup lang="ts">
interface Props {
  summary: string
}

defineProps<Props>()
</script>

<template>
  <section class="mb-6 print:mb-3">
    <h2 class="text-base font-bold text-blue-600 uppercase border-b-2 border-blue-600 pb-1 mb-2 print:mb-1.5">
      Summary
    </h2>
    <p class="text-sm text-gray-800 leading-relaxed print:leading-normal">{{ summary }}</p>
  </section>
</template>
