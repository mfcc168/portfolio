<template>
  <div :class="gridClasses">
    <div 
      v-for="stat in stats" 
      :key="stat.label"
      class="text-center"
    >
      <div :class="numberClasses">{{ stat.value }}</div>
      <div :class="labelClasses">{{ stat.label }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  stats: {
    type: Array,
    required: true,
    validator: (stats) => stats.every(stat => stat.value && stat.label)
  },
  columns: {
    type: Number,
    default: 4
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  variant: {
    type: String,
    default: 'blue',
    validator: (value) => ['blue', 'gray', 'colorful'].includes(value)
  }
})

const gridClasses = computed(() => {
  const columnMap = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
    5: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
  }
  
  const gapMap = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8'
  }
  
  return `grid ${columnMap[props.columns] || 'grid-cols-4'} ${gapMap[props.size]}`
})

const numberClasses = computed(() => {
  const sizeMap = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl'
  }
  
  const colorMap = {
    blue: 'text-blue-600',
    gray: 'text-gray-900',
    colorful: 'text-blue-600' // Could be dynamic per stat
  }
  
  return `font-bold mb-2 ${sizeMap[props.size]} ${colorMap[props.variant]}`
})

const labelClasses = computed(() => {
  const sizeMap = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }
  
  return `text-gray-600 font-medium ${sizeMap[props.size]}`
})
</script>