<script setup lang="ts">
const props = defineProps<{
  code?: string
  language?: string
  filename?: string
  highlights?: number[]
  class?: string
}>()

const { t } = useI18n()
const copied = ref(false)
const isHovered = ref(false)

// Copy code to clipboard
const copyCode = async () => {
  if (props.code) {
    try {
      await navigator.clipboard.writeText(props.code)
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }
}

// Get language label
const languageLabel = computed(() => {
  if (!props.language) return null

  const languageMap: Record<string, string> = {
    js: 'JavaScript',
    ts: 'TypeScript',
    vue: 'Vue',
    html: 'HTML',
    css: 'CSS',
    scss: 'SCSS',
    bash: 'Bash',
    sh: 'Shell',
    json: 'JSON',
    md: 'Markdown',
    yaml: 'YAML',
    python: 'Python',
    py: 'Python'
  }

  return languageMap[props.language] || props.language.toUpperCase()
})
</script>

<template>
  <div style="position: relative; margin: 1.5rem 0;" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <!-- Header with filename and language -->
    <div v-if="filename || language"
      style="display: flex; align-items: center; justify-content: space-between; padding: 0.5rem 1rem; background-color: #1f2937; border-bottom: 1px solid #374151; border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem;">
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <span v-if="filename" style="font-size: 0.875rem; color: #d1d5db; font-family: monospace;">
          {{ filename }}
        </span>
        <span v-if="language && !filename"
          style="font-size: 0.75rem; color: #9ca3af; text-transform: uppercase; font-weight: 600;">
          {{ languageLabel }}
        </span>
      </div>
    </div>

    <!-- Code block -->
    <div style="position: relative;">
      <pre :class="props.class" style="overflow-x: auto; padding: 1rem; font-size: 0.875rem; margin: 0;"><slot /></pre>

      <!-- Copy button -->
      <button type="button" :aria-label="copied ? t('blog.codeCopied') : t('blog.copyCode')" :style="{
        position: 'absolute',
        top: '0.75rem',
        right: '0.75rem',
        padding: '0.5rem',
        borderRadius: '0.375rem',
        backgroundColor: 'rgba(55, 65, 81, 0.5)',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.2s',
        opacity: isHovered || copied ? '1' : '0'
      }" @click="copyCode">
        <UIcon :name="copied ? 'i-heroicons-check' : 'i-heroicons-clipboard-document'"
          style="width: 1rem; height: 1rem; color: rgb(209, 213, 219);" />
      </button>
    </div>
  </div>
</template>
