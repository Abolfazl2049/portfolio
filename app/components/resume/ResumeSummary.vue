<script setup lang="ts">
interface Props {
  summary: string
}

defineProps<Props>()
</script>

<template>
  <section class="mb-8 print:mb-5">
    <h2
      class="text-base font-bold text-blue-700 uppercase border-b-2 border-blue-600 pb-1.5 mb-3 print:mb-2 tracking-wide">
      Summary
    </h2>
    <p class="text-sm text-gray-800 leading-relaxed print:leading-normal">{{ summary }}</p>
  </section>
</template>
