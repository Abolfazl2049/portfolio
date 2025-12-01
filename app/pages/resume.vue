<script setup lang="ts">
definePageMeta({
  layout: false
})

const route = useRoute()
const isPrintMode = computed(() => route.query.print === 'true')

useHead({
  title: 'Resume - Ali Arghyani',
  meta: [
    { name: 'robots', content: 'noindex' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Placeholder for ResumePreview component (Story 2.2) -->
    <div class="p-8 text-center">
      <h1 class="text-2xl font-bold">Resume Preview Coming Soon</h1>
      <p class="mt-4 text-gray-600">
        This page will display the resume preview once Story 2.2 is complete.
      </p>
      <p v-if="isPrintMode" class="mt-2 text-sm text-blue-600">
        Print Mode: Active
      </p>
    </div>
    
    <!-- Download button will be added in Story 2.5 -->
    <!-- Hidden when isPrintMode is true -->
  </div>
</template>
