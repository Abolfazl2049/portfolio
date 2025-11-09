<template>
  <div v-if="tags.length > 0" class="overflow-x-auto">
    <div class="flex flex-wrap gap-2">
      <UButton :color="!modelValue ? 'primary' : 'gray'" :variant="!modelValue ? 'solid' : 'soft'" size="sm"
        @click="selectTag(null)">
        {{ t('blog.allPosts') }}
      </UButton>

      <UButton v-for="tag in tags" :key="tag" :color="modelValue === tag ? 'primary' : 'gray'"
        :variant="modelValue === tag ? 'solid' : 'soft'" size="sm" @click="selectTag(tag)">
        {{ tag }}
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  tags: string[]
  modelValue: string | null
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string | null]
}>()

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

// Read query parameter on mount to restore filter state
onMounted(() => {
  const tagFromQuery = route.query.tag as string | undefined
  if (tagFromQuery && props.tags.includes(tagFromQuery)) {
    emit('update:modelValue', tagFromQuery)
  }
})

// Select tag and update URL query parameter
const selectTag = async (tag: string | null) => {
  emit('update:modelValue', tag)

  // Update URL query parameter
  await navigateTo({
    query: tag ? { tag } : {}
  })
}
</script>
