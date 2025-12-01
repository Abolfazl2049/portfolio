<script setup lang="ts">
interface Props {
  isPrintMode?: boolean
}

defineProps<Props>()

function handleDownload() {
  // Placeholder - will be replaced in Epic 3 Story 3.3
  console.log('Download PDF clicked')
  // Future: const { downloadPdf } = useResumePdf()
  // Future: await downloadPdf()
}
</script>

<template>
  <UButton v-if="!isPrintMode" icon="i-heroicons-arrow-down-tray" size="lg" color="primary"
    class="fixed bottom-6 right-6 shadow-lg no-print z-50" @click="handleDownload">
    <span class="hidden sm:inline">Download PDF</span>
  </UButton>
</template>

<style scoped>
@media print {
  .no-print {
    display: none !important;
  }
}
</style>
