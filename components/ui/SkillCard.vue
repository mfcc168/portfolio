<template>
  <div class="group bg-gray-50 hover:bg-blue-50 p-6 rounded-xl transition-all duration-300 hover:shadow-md border border-gray-100 hover:border-blue-200">
    <div class="flex items-center space-x-4">
      <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
        <span class="text-2xl">{{ skill.icon }}</span>
      </div>
      <div>
        <h3 class="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{{ skill.name }}</h3>
        <p class="text-sm text-gray-500">{{ skill.category }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  skill: {
    type: Object,
    required: true,
    validator: (skill) => skill.name && skill.icon && skill.category
  }
})
</script>