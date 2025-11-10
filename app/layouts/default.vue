<template>
  <div class="layout-default">
    <TopNav client:only />
    <slot />
    <FooterCopyright />
  </div>
</template>

<script setup lang="ts">
import TopNav from '@/components/common/TopNav.vue'
import FooterCopyright from '@/components/common/FooterCopyright.vue'

/**
 * Default Layout
 * 
 * Main layout for the application including TopNav and Footer.
 * This layout is used by default for all pages unless specified otherwise.
 */
</script>

<style scoped>
.layout-default {
  /* Layout wrapper */
}
</style>
