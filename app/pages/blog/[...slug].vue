<script setup lang="ts">
import type { BlogPost } from '~/types/blog'

const { locale, t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug : [route.params.slug]

// Fetch current post
const { data: post } = await useAsyncData<BlogPost>(`blog-post-${slug.join('/')}`, () =>
  queryContent<BlogPost>(`/${locale.value}/blog`)
    .where({ _path: `/${locale.value}/blog/${slug.join('/')}` })
    .findOne()
)

if (!post.value) {
  throw createError({
    statusCode: 404,
    message: 'Blog post not found',
    fatal: true
  })
}

// Fetch all posts for prev/next navigation
const { data: allPosts } = await useAsyncData<BlogPost[]>(`blog-posts-nav-${locale.value}`, () =>
  queryContent<BlogPost>(`/${locale.value}/blog`)
    .where({ draft: { $ne: true } })
    .sort({ date: -1 })
    .only(['title', '_path', 'date'])
    .find()
)

// Calculate adjacent posts
const currentIndex = computed(() => {
  if (!allPosts.value || !post.value) return -1
  return allPosts.value.findIndex((p: BlogPost) => p._path === post.value!._path)
})

const prevPost = computed<BlogPost | null>(() => {
  if (currentIndex.value === -1 || !allPosts.value) return null
  return allPosts.value[currentIndex.value + 1] || null
})

const nextPost = computed<BlogPost | null>(() => {
  if (currentIndex.value === -1 || !allPosts.value) return null
  return allPosts.value[currentIndex.value - 1] || null
})

// SEO meta tags
const siteUrl = 'https://aliarghyani.com' // TODO: Move to runtime config

// Use Nuxt Content's built-in SEO helper
if (post.value) {
  useContentHead(post as any)
}

// Additional custom meta tags
if (post.value) {
  useSeoMeta({
    title: `${post.value.title} | ${t('blog.title')}`,
    description: post.value.description,
    ogTitle: post.value.title,
    ogDescription: post.value.description,
    ogImage: post.value.image || '/img/blog/default-cover.jpg',
    ogType: 'article',
    ogUrl: `${siteUrl}${post.value._path}`,
    twitterCard: 'summary_large_image',
    twitterTitle: post.value.title,
    twitterDescription: post.value.description,
    twitterImage: post.value.image || '/img/blog/default-cover.jpg',
    articlePublishedTime: post.value.date,
    articleModifiedTime: post.value.updatedAt || post.value.date,
    articleAuthor: post.value.author || 'Ali Arghyani',
    articleTag: post.value.tags
  })

  // JSON-LD structured data
  useHead({
    script: [
      {
        type: 'application/ld+json',
        textContent: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.value.title,
          description: post.value.description,
          image: post.value.image ? `${siteUrl}${post.value.image}` : `${siteUrl}/img/blog/default-cover.jpg`,
          datePublished: post.value.date,
          dateModified: post.value.updatedAt || post.value.date,
          author: {
            '@type': 'Person',
            name: post.value.author || 'Ali Arghyani'
          },
          publisher: {
            '@type': 'Person',
            name: 'Ali Arghyani'
          }
        })
      }
    ]
  })
}
</script>

<template>
  <UContainer>
    <div v-if="post" class="py-8">
      <!-- Breadcrumb Navigation -->
      <UBreadcrumb :links="[
        { label: t('nav.home'), to: localePath('/') },
        { label: t('blog.title'), to: localePath('/blog') },
        { label: post.title }
      ]" class="mb-6" />

      <!-- Back to Blog Link -->
      <NuxtLink :to="localePath('/blog')"
        class="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-8">
        <UIcon name="i-heroicons-arrow-left" class="w-4 h-4" />
        {{ t('blog.backToBlog') }}
      </NuxtLink>

      <!-- Main Content Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-8">
          <!-- Blog Post Metadata -->
          <BlogPost :post="post" />

          <!-- Content Renderer -->
          <article :dir="locale === 'fa' ? 'rtl' : 'ltr'" class="prose prose-lg dark:prose-invert max-w-none mt-8">
            <ContentRenderer :value="post" />
          </article>

          <!-- Blog Navigation (Prev/Next) -->
          <BlogNavigation :prev="prevPost" :next="nextPost" />
        </div>

        <!-- Sidebar: Table of Contents -->
        <aside class="lg:col-span-4">
          <BlogTableOfContents v-if="post.body?.toc" :toc="post.body.toc" />
        </aside>
      </div>
    </div>
  </UContainer>
</template>

<style scoped>
/* Force LTR for code blocks in RTL context */
article[dir="rtl"] :deep(pre),
article[dir="rtl"] :deep(code) {
  direction: ltr;
  text-align: left;
}

/* Ensure proper spacing and readability */
.prose {
  @apply text-gray-700 dark:text-gray-300;
}

.prose :deep(h1),
.prose :deep(h2),
.prose :deep(h3),
.prose :deep(h4),
.prose :deep(h5),
.prose :deep(h6) {
  @apply text-gray-900 dark:text-gray-100 font-semibold;
}

.prose :deep(a) {
  @apply text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300;
}

.prose :deep(code) {
  @apply text-sm;
}

.prose :deep(pre) {
  @apply rounded-lg;
}
</style>
