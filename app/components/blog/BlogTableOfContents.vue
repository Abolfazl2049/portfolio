<script setup lang="ts">
interface TocLink {
  id: string
  text: string
  depth: number
  children?: TocLink[]
}

const props = defineProps<{
  toc: {
    links: TocLink[]
  }
}>()

const { t } = useI18n()
const activeId = ref<string>('')

// Check if TOC should be displayed (3+ headings)
const shouldShowToc = computed(() => {
  const countLinks = (links: TocLink[]): number => {
    return links.reduce((count, link) => {
      return count + 1 + (link.children ? countLinks(link.children) : 0)
    }, 0)
  }
  return countLinks(props.toc.links) >= 3
})

// Smooth scroll to heading
const scrollToHeading = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    activeId.value = id
  }
}

// Track active section with IntersectionObserver
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
        }
      })
    },
    {
      rootMargin: '-80px 0px -80% 0px',
      threshold: 0
    }
  )

  // Observe all headings
  const headings = document.querySelectorAll('article h2, article h3, article h4')
  headings.forEach((heading) => observer.observe(heading))

  // Cleanup
  onUnmounted(() => {
    headings.forEach((heading) => observer.unobserve(heading))
  })
})

// Render TOC links recursively
const renderTocLinks = (links: TocLink[]) => {
  return links
}
</script>

<template>
  <aside v-if="shouldShowToc" class="toc-container">
    <!-- Desktop: Sticky sidebar -->
    <nav class="hidden lg:block sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
        {{ t('blog.tableOfContents') }}
      </h3>
      <ul class="space-y-2 text-sm">
        <template v-for="link in toc.links" :key="link.id">
          <li>
            <a :href="`#${link.id}`" :class="[
              'block py-1 transition-colors',
              activeId === link.id
                ? 'text-primary-600 dark:text-primary-400 font-medium'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
            ]" @click.prevent="scrollToHeading(link.id)">
              {{ link.text }}
            </a>
            <!-- Nested children (h3) -->
            <ul v-if="link.children && link.children.length > 0" class="ml-4 mt-1 space-y-1">
              <li v-for="child in link.children" :key="child.id">
                <a :href="`#${child.id}`" :class="[
                  'block py-1 transition-colors',
                  activeId === child.id
                    ? 'text-primary-600 dark:text-primary-400 font-medium'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                ]" @click.prevent="scrollToHeading(child.id)">
                  {{ child.text }}
                </a>
              </li>
            </ul>
          </li>
        </template>
      </ul>
    </nav>

    <!-- Mobile: Collapsible accordion -->
    <UAccordion class="lg:hidden mb-6" :items="[
      {
        label: t('blog.tableOfContents'),
        icon: 'i-heroicons-list-bullet',
        defaultOpen: false,
        slot: 'toc'
      }
    ]">
      <template #toc>
        <ul class="space-y-2 text-sm p-4">
          <template v-for="link in toc.links" :key="link.id">
            <li>
              <a :href="`#${link.id}`" :class="[
                'block py-1 transition-colors',
                activeId === link.id
                  ? 'text-primary-600 dark:text-primary-400 font-medium'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
              ]" @click.prevent="scrollToHeading(link.id)">
                {{ link.text }}
              </a>
              <!-- Nested children (h3) -->
              <ul v-if="link.children && link.children.length > 0" class="ml-4 mt-1 space-y-1">
                <li v-for="child in link.children" :key="child.id">
                  <a :href="`#${child.id}`" :class="[
                    'block py-1 transition-colors',
                    activeId === child.id
                      ? 'text-primary-600 dark:text-primary-400 font-medium'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                  ]" @click.prevent="scrollToHeading(child.id)">
                    {{ child.text }}
                  </a>
                </li>
              </ul>
            </li>
          </template>
        </ul>
      </template>
    </UAccordion>
  </aside>
</template>

<style scoped>
.toc-container {
  @apply w-full;
}
</style>
