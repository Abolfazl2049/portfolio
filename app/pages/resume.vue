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
  <div class="min-h-screen">
    <ResumePreview />

    <!-- Download button will be added in Story 2.5 -->
    <!-- Hidden when isPrintMode is true -->
  </div>
</template>
