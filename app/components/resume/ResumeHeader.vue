<script setup lang="ts">
import type { ResumeBasics } from '~/types/resume'

interface Props {
  basics: ResumeBasics
}

defineProps<Props>()
</script>

<template>
  <div class="flex gap-6 mb-6">
    <!-- Profile Photo (if provided) -->
    <div v-if="basics.image" class="flex-shrink-0">

      <img :src="basics.image" :alt="basics.name" class="w-32 h-32 object-cover rounded-full " />
    </div>

    <!-- Name + Contact Info -->
    <div class="flex-1">
      <h1 class="text-3xl font-bold text-gray-900">{{ basics.name }}</h1>
      <p class="text-xl text-gray-600 mt-1">{{ basics.label }}</p>

      <div class="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700">
        <span>{{ basics.location.city }}, {{ basics.location.country }}</span>
        <a :href="`tel:${basics.phone}`" class="hover:text-blue-600">{{ basics.phone }}</a>
        <a :href="`mailto:${basics.email}`" class="hover:text-blue-600">{{ basics.email }}</a>
        <a v-if="basics.url" :href="basics.url" target="_blank" class="hover:text-blue-600">{{ basics.url }}</a>
      </div>
    </div>
  </div>
</template>
