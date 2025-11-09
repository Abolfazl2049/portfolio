<template>
  <NuxtLink :to="localePath((post as any)._path)" class="block h-full">
    <UCard class="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div class="relative aspect-video w-full overflow-hidden -mx-6 -mt-6 mb-4">
        <NuxtImg :src="post.image || '/img/blog/default-cover.jpg'" :alt="post.title" class="h-full w-full object-cover"
          loading="lazy" width="600" height="338" format="webp" />
      </div>

      <h2 class="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
        {{ post.title }}
      </h2>

      <p class="mb-4 line-clamp-2 text-gray-600 dark:text-gray-400">
        {{ post.description }}
      </p>

      <div class="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
        <time :datetime="post.date">{{ formatDate(post.date) }}</time>
        <span>•</span>
        <span>{{ t('blog.readingTime', { minutes: calculateReadingTime(post) }) }}</span>
      </div>

      <div v-if="post.tags && post.tags.length > 0" class="flex flex-wrap gap-2">
        <UBadge v-for="tag in post.tags" :key="tag" variant="subtle" size="sm">
          {{ tag }}
        </UBadge>
      </div>
    </UCard>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types/blog'

defineProps<{
  post: BlogPost
}>()

const { t } = useI18n()
const localePath = useLocalePath()
const { formatDate, calculateReadingTime } = useBlog()
</script>
