<template>
  <div class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">

    <div class="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
      

      <div v-if="project.featured" class="absolute top-4 left-4">
        <span class="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full border border-yellow-200">
          <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          Featured
        </span>
      </div>
      

      <div class="absolute top-4 right-4">
        <span class="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-sm font-medium rounded-full border border-gray-200">
          <span class="mr-1">{{ category.icon }}</span>
          {{ category.name }}
        </span>
      </div>
      

      <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
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
</script>