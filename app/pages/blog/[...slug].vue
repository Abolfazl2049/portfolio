<script setup lang="ts">
const { locale, t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug : [route.params.slug]

// Fetch current post
const { data: post } = await useAsyncData(`blog-post-${slug.join('/')}`, async () => {
  const posts = await queryCollection('blog')
    .where('path', '=', `/${locale.value}/blog/${slug.join('/')}`)
    .first()
  return posts
})

if (!post.value) {
  throw createError({
    statusCode: 404,
    message: 'Blog post not found',
    fatal: true
  })
}

// Fetch all posts for prev/next navigation
const { data: allPosts } = await useAsyncData(`blog-posts-nav-${locale.value}`, async () => {
  const posts = await queryCollection('blog')
    .where('draft', '<>', true)
    .order('date', 'DESC')
    .all()

  // Filter by locale and posts without draft field
  return posts.filter((p: any) =>
    p.path?.startsWith(`/${locale.value}/blog/`) &&
    (p.draft === false || p.draft === undefined)
  )
})

// Calculate adjacent posts
const currentIndex = computed(() => {
  if (!allPosts.value || !post.value) return -1
  return allPosts.value.findIndex((p: any) => p.path === post.value!.path)
})

const prevPost = computed(() => {
  if (currentIndex.value === -1 || !allPosts.value) return null
  return allPosts.value[currentIndex.value + 1] || null
})

const nextPost = computed(() => {
  if (currentIndex.value === -1 || !allPosts.value) return null
  return allPosts.value[currentIndex.value - 1] || null
})

// SEO meta tags
const siteUrl = 'https://aliarghyani.com' // TODO: Move to runtime config

// Custom meta tags
if (post.value) {
  const postData = post.value as any

  useSeoMeta({
    title: `${postData.title} | ${t('blog.title')}`,
    description: postData.description,
    ogTitle: postData.title,
    ogDescription: postData.description,
    ogImage: postData.image || '/img/blog/default-cover.jpg',
    ogType: 'article',
    ogUrl: `${siteUrl}${postData.path}`,
    twitterCard: 'summary_large_image',
    twitterTitle: postData.title,
    twitterDescription: postData.description,
    twitterImage: postData.image || '/img/blog/default-cover.jpg',
    articlePublishedTime: postData.date,
    articleModifiedTime: postData.updatedAt || postData.date,
    articleAuthor: [postData.author || 'Ali Arghyani'],
    articleTag: postData.tags
  })

  // JSON-LD structured data
  useHead({
    script: [
      {
        type: 'application/ld+json',
        textContent: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: postData.title,
          description: postData.description,
          image: postData.image ? `${siteUrl}${postData.image}` : `${siteUrl}/img/blog/default-cover.jpg`,
          datePublished: postData.date,
          dateModified: postData.updatedAt || postData.date,
          author: {
            '@type': 'Person',
            name: postData.author || 'Ali Arghyani'
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
        { label: (post as any).title }
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
            <ContentRenderer v-if="(post as any).body" :value="(post as any).body" />
          </article>

          <!-- Blog Navigation (Prev/Next) -->
          <BlogNavigation :prev="prevPost" :next="nextPost" />
        </div>

        <!-- Sidebar: Table of Contents -->
        <aside class="lg:col-span-4">
          <BlogTableOfContents v-if="(post as any).body?.toc" :toc="(post as any).body.toc" />
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
</style>
