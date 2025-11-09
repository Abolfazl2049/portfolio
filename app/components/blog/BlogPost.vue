<script setup lang="ts">
import type { BlogPost } from '~/types/blog'

const props = defineProps<{
  post: BlogPost
}>()

const { formatDate, calculateReadingTime } = useBlog()
const readingTime = computed(() => calculateReadingTime(props.post))
</script>

<template>
  <article>
    <header class="mb-8">
      <!-- Cover Image -->
      <NuxtImg v-if="post.image" :src="post.image" :alt="post.title" width="1200" height="630" format="webp"
        class="w-full rounded-lg mb-6" />

      <!-- Title -->
      <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        {{ post.title }}
      </h1>

      <!-- Metadata -->
      <div class="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
        <!-- Date -->
        <time :datetime="post.date" class="flex items-center gap-2">
          <UIcon name="i-heroicons-calendar" class="w-5 h-5" />
          {{ formatDate(post.date) }}
        </time>

        <!-- Reading Time -->
        <span class="flex items-center gap-2">
          <UIcon name="i-heroicons-clock" class="w-5 h-5" />
          {{ $t('blog.readingTime', { minutes: readingTime }) }}
        </span>

        <!-- Author -->
        <span v-if="post.author" class="flex items-center gap-2">
          <UIcon name="i-heroicons-user" class="w-5 h-5" />
          {{ post.author }}
        </span>
      </div>

      <!-- Tags -->
      <div v-if="post.tags && post.tags.length > 0" class="flex flex-wrap gap-2">
        <UBadge v-for="tag in post.tags" :key="tag" color="primary" variant="soft" size="md">
          {{ tag }}
        </UBadge>
      </div>
    </header>
  </article>
</template>
