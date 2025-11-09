<script setup lang="ts">
import type { BlogPost } from '~/types/blog'

const props = defineProps<{
  prev: BlogPost | null
  next: BlogPost | null
}>()

const { t } = useI18n()
const localePath = useLocalePath()
const router = useRouter()

// Keyboard navigation
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowLeft' && props.prev) {
    router.push(localePath(props.prev._path))
  } else if (event.key === 'ArrowRight' && props.next) {
    router.push(localePath(props.next._path))
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <nav class="flex justify-between items-center gap-4 mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
    <!-- Previous Post -->
    <div class="flex-1">
      <NuxtLink v-if="prev" :to="localePath(prev._path)" class="group block">
        <UButton color="neutral" variant="ghost" size="lg" class="w-full justify-start">
          <template #leading>
            <UIcon name="i-heroicons-arrow-left" class="w-5 h-5" />
          </template>
          <div class="text-left">
            <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">
              {{ t('blog.previousPost') }}
            </div>
            <div
              class="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-1">
              {{ prev.title }}
            </div>
          </div>
        </UButton>
      </NuxtLink>
    </div>

    <!-- Next Post -->
    <div class="flex-1">
      <NuxtLink v-if="next" :to="localePath(next._path)" class="group block">
        <UButton color="neutral" variant="ghost" size="lg" class="w-full justify-end">
          <div class="text-right">
            <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">
              {{ t('blog.nextPost') }}
            </div>
            <div
              class="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-1">
              {{ next.title }}
            </div>
          </div>
          <template #trailing>
            <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
          </template>
        </UButton>
      </NuxtLink>
    </div>
  </nav>
</template>
