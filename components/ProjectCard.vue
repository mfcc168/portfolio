<template>
  <div class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">

    <div class="relative bg-gradient-to-r from-gray-50 to-gray-100 p-4 border-b border-gray-200">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <!-- Category stuff -->
          <div class="flex items-center">
            <div :class="getCategoryIconContainerClasses()">
              <svg 
                :class="getCategoryIconClasses()"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="category.icon"></path>
              </svg>
            </div>
            <span :class="getCategoryTextClasses()">{{ category.name }}</span>
          </div>
        </div>
        
        <!-- Featured tag -->
        <div v-if="project.featured">
          <span class="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded border border-yellow-200">
            <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            Featured
          </span>
        </div>
      </div>
    </div>
    
    <div class="p-6">
      <div class="flex items-start justify-between mb-3">
        <h3 class="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {{ project.title }}
        </h3>
      </div>
      
      <p class="text-gray-600 mb-6 leading-relaxed line-clamp-2">
        {{ project.description }}
      </p>
      

      <div class="flex flex-wrap gap-2 mb-6">
        <span 
          v-for="tech in project.technologies.slice(0, 4)" 
          :key="tech"
          class="px-3 py-1 bg-gray-50 text-gray-700 text-sm font-medium rounded-lg border border-gray-100"
        >
          {{ tech }}
        </span>
        <span 
          v-if="project.technologies.length > 4"
          class="px-3 py-1 bg-gray-100 text-gray-500 text-sm font-medium rounded-lg"
        >
          +{{ project.technologies.length - 4 }} more
        </span>
      </div>
      

      <div class="flex gap-3">
        <a 
          v-if="project.liveUrl"
          :href="project.liveUrl" 
          target="_blank"
          :aria-label="`${getLiveButtonText()} for ${project.title} project`"
          rel="noopener noreferrer"
          class="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
          {{ getLiveButtonText() }}
        </a>
        <a 
          v-if="project.githubUrl"
          :href="project.githubUrl" 
          target="_blank"
          :aria-label="`View source code for ${project.title} project on GitHub`"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center px-4 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 hover:text-gray-900 transition-all duration-300"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          Code
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  category: {
    type: Object,
    required: true
  }
})

// Change button text based on project type
const getLiveButtonText = () => {
  switch (props.project.category) {
    case 'mobile':
      return 'View App'
    case 'design':
      return 'View Design'
    default:
      return 'Live Demo'
  }
}

const getCategoryIconContainerClasses = () => {
  const baseClasses = 'w-8 h-8 rounded-lg flex items-center justify-center mr-2'
  
  const colorMap = {
    blue: 'bg-blue-100',
    indigo: 'bg-indigo-100',
    green: 'bg-green-100',
    purple: 'bg-purple-100',
    orange: 'bg-orange-100'
  }
  
  return `${baseClasses} ${colorMap[props.category.color] || colorMap.blue}`
}

const getCategoryIconClasses = () => {
  const baseClasses = 'w-4 h-4'
  
  const colorMap = {
    blue: 'text-blue-600',
    indigo: 'text-indigo-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600'
  }
  
  return `${baseClasses} ${colorMap[props.category.color] || colorMap.blue}`
}

const getCategoryTextClasses = () => {
  const baseClasses = 'text-sm font-medium'
  
  const colorMap = {
    blue: 'text-blue-700',
    indigo: 'text-indigo-700',
    green: 'text-green-700',
    purple: 'text-purple-700',
    orange: 'text-orange-700'
  }
  
  return `${baseClasses} ${colorMap[props.category.color] || colorMap.blue}`
}
</script>