<template>
  <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
    <div :class="iconContainerClasses">
      <svg :class="iconClasses" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon"></path>
      </svg>
    </div>
    <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ service.title }}</h3>
    <p class="text-gray-600 leading-relaxed">
      {{ service.description }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  service: {
    type: Object,
    required: true,
    validator: (service) => service.title && service.description && service.icon
  }
})

const colorMap = {
  blue: {
    container: 'bg-blue-100',
    icon: 'text-blue-600'
  },
  green: {
    container: 'bg-green-100',
    icon: 'text-green-600'
  },
  purple: {
    container: 'bg-purple-100',
    icon: 'text-purple-600'
  },
  orange: {
    container: 'bg-orange-100',
    icon: 'text-orange-600'
  },
  indigo: {
    container: 'bg-indigo-100',
    icon: 'text-indigo-600'
  }
}

const iconContainerClasses = computed(() => {
  const colors = colorMap[props.service.color] || colorMap.blue
  return `w-12 h-12 ${colors.container} rounded-lg flex items-center justify-center mb-6`
})

const iconClasses = computed(() => {
  const colors = colorMap[props.service.color] || colorMap.blue
  return `w-6 h-6 ${colors.icon}`
})
</script>