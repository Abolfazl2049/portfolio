<script setup lang="ts">
import type { ResumeBasics } from '~/types/resume'

interface Props {
  basics: ResumeBasics
}

defineProps<Props>()
</script>

<template>
  <div class="flex gap-6 mb-10 print:mb-8 print:pb-2">
    <!-- Profile Photo (if provided) -->
    <div v-if="basics.image" class="flex-shrink-0">
      <img :src="basics.image" :alt="basics.name" class="w-32 h-32 object-cover rounded-full print:w-24 print:h-24" />
    </div>

    <!-- Name + Contact Info -->
    <div class="flex-1">
      <h1 class="text-3xl font-bold text-gray-900 print:text-xl print:mb-0.5">{{ basics.name }}</h1>
      <p class="text-xl text-gray-600 mt-1 print:text-base print:mt-0">{{ basics.label }}</p>

      <!-- Line 1: Location, Phone, Email -->
      <div class="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-700 print:mt-2 print:text-xs print:gap-x-4">
        <!-- Location -->
        <span class="inline-flex items-center gap-1.5">
          <UIcon name="i-heroicons-map-pin" class="text-red-500 flex-shrink-0 w-4 h-4" />
          {{ basics.location.city }}, {{ basics.location.country }}
        </span>

        <!-- Phone -->
        <a :href="`tel:${basics.phone}`" class="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors">
          <UIcon name="i-heroicons-phone" class="text-green-600 flex-shrink-0 w-4 h-4" />
          {{ basics.phone }}
        </a>

        <!-- Email -->
        <a :href="`mailto:${basics.email}`"
          class="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors">
          <UIcon name="i-heroicons-envelope" class="text-amber-500 flex-shrink-0 w-4 h-4" />
          {{ basics.email }}
        </a>
      </div>

      <!-- Line 2: Website, LinkedIn, GitHub -->
      <div class="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-700 print:mt-1 print:text-xs print:gap-x-4">
        <!-- Website (Portfolio) - Bold & Colored -->
        <a v-if="basics.profiles?.find(p => p.network === 'Portfolio')"
          :href="basics.profiles.find(p => p.network === 'Portfolio')!.url" target="_blank"
          class="inline-flex items-center gap-1.5 font-semibold text-blue-600 hover:text-blue-700 transition-colors print:text-blue-600">
          <UIcon name="i-heroicons-globe-alt" class="text-blue-600 flex-shrink-0 w-4 h-4" />
          Website
        </a>

        <!-- LinkedIn -->
        <a v-if="basics.profiles?.find(p => p.network === 'LinkedIn')"
          :href="basics.profiles.find(p => p.network === 'LinkedIn')!.url" target="_blank"
          class="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors">
          <UIcon name="i-mdi-linkedin" class="text-[#0A66C2] flex-shrink-0 w-4 h-4" />
          LinkedIn
        </a>

        <!-- GitHub -->
        <a v-if="basics.profiles?.find(p => p.network === 'GitHub')"
          :href="basics.profiles.find(p => p.network === 'GitHub')!.url" target="_blank"
          class="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors">
          <UIcon name="i-mdi-github" class="text-gray-800 flex-shrink-0 w-4 h-4" />
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>
