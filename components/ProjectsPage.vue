<template>
  <div>

    <NavigationHeader />
    

    <HeroSection variant="animated">
      <template #title>
        Featured <span class="text-blue-600">Projects</span>
      </template>
      <template #subtitle>
        A showcase of my recent work across web development, design, and innovative solutions
      </template>
    </HeroSection>
    

    <section class="py-12 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 relative overflow-hidden">
      <!-- Some background elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-10 left-10 w-20 h-20 bg-blue-200/15 rounded-full animate-float-slow"></div>
        <div class="absolute top-8 right-20 w-16 h-16 bg-purple-200/20 rounded-full animate-bounce-slow"></div>
        <div class="absolute bottom-8 left-1/4 w-24 h-24 bg-indigo-200/10 rounded-full animate-pulse-glow"></div>
        <div class="absolute top-6 right-10 w-8 h-8 bg-gradient-to-br from-blue-300/20 to-purple-300/20 transform rotate-45 animate-spin-slow"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-6xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-8">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Browse Projects</h2>
            <p class="text-gray-600 mb-6">Filter by technology and project type</p>
          </div>
          
          <!-- Filter buttons -->
          <div class="flex flex-wrap justify-center gap-2 mb-8">
            <button 
              v-for="category in categories" 
              :key="category.id"
              @click="activeCategory = category.id"
              :class="getCategoryButtonClasses(category)"
            >
              <svg 
                :class="getCategoryIconClasses(category)"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="category.icon"></path>
              </svg>
              {{ category.name }}
              <span :class="getCategoryCountClasses(category)">
                {{ getProjectCount(category.id) }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
    

    <section class="py-20 bg-gradient-to-b from-white via-gray-50/50 to-blue-50/30 relative overflow-hidden">
      <!-- Background animations -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Big shapes -->
        <div class="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-purple-100/20 rounded-full animate-blob"></div>
        <div class="absolute top-1/3 -right-40 w-96 h-96 bg-gradient-to-br from-indigo-100/25 to-blue-100/20 rounded-full animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-40 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-100/20 to-pink-100/15 rounded-full animate-blob animation-delay-4000"></div>
        
        <!-- Floating stuff -->
        <div class="absolute top-20 right-1/4 w-20 h-20 bg-blue-200/20 rounded-full animate-float-slow"></div>
        <div class="absolute top-1/2 left-20 w-16 h-16 bg-purple-200/20 rounded-full animate-bounce-slow"></div>
        <div class="absolute bottom-40 right-20 w-24 h-24 bg-indigo-200/15 rounded-full animate-pulse-glow"></div>
        
        <!-- Shapes -->
        <div class="absolute top-40 left-1/3 w-8 h-8 bg-blue-300/30 transform rotate-45 animate-spin-slow"></div>
        <div class="absolute bottom-60 right-1/3 w-6 h-6 bg-purple-300/30 transform rotate-12 animate-spin-reverse"></div>
        
        <!-- Moving dots -->
        <div class="absolute top-60 left-10 w-2 h-2 bg-blue-400/40 rounded-full animate-bounce-slow animation-delay-1000"></div>
        <div class="absolute top-80 right-40 w-3 h-3 bg-purple-400/40 rounded-full animate-float-slow animation-delay-3000"></div>
        <div class="absolute bottom-80 left-1/2 w-2 h-2 bg-indigo-400/40 rounded-full animate-pulse-glow animation-delay-2000"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-7xl mx-auto">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              v-for="project in filteredProjects" 
              :key="project.id"
              :project="project"
              :category="getCategoryById(project.category)"
            />
          </div>
          

          <div v-if="filteredProjects.length === 0" class="text-center py-20">
            <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-2">No projects found</h3>
            <p class="text-gray-600 mb-6">Try selecting a different category or check back later for new projects!</p>
            <button 
              @click="activeCategory = 'all'"
              class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import NavigationHeader from './NavigationHeader.vue'
import HeroSection from './HeroSection.vue'
import ProjectCard from './ProjectCard.vue'

const activeCategory = ref('all')

// Project categories for filtering
const categories = [
  { 
    id: 'all', 
    name: 'All Projects',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    color: 'blue'
  },
  { 
    id: 'backend', 
    name: 'Backend & APIs',
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    color: 'indigo'
  },
  { 
    id: 'fullstack', 
    name: 'Full-Stack Apps',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9',
    color: 'green'
  },
  { 
    id: 'mobile', 
    name: 'Mobile Apps',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    color: 'purple'
  },
  { 
    id: 'academic', 
    name: 'Academic Projects',
    icon: 'M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
    color: 'orange'
  }
]

// All my projects - should probably move this to a separate file at some point
const projects = [
  {
    id: 1,
    title: 'Lafarge ERP System',
    description: 'A comprehensive Enterprise Resource Planning (ERP) backend system with REST APIs for managing core business processes. Features financial management, HR, supply chain, and analytics modules with robust data handling.',
    category: 'backend',
    technologies: ['Python', 'REST API', 'SQL', 'Data Analytics', 'Business Logic'],
    githubUrl: 'https://github.com/mfcc168/Lafarge-ERP-System',
    featured: true
  },
  {
    id: 2,
    title: 'Lafarge Employee Dashboard',
    description: 'Modern employee management dashboard with separate backend and frontend architecture, featuring containerized deployment with Docker. Provides real-time employee data management and analytics.',
    category: 'fullstack',
    technologies: ['TypeScript', 'Python', 'Docker', 'REST API', 'Database'],
    githubUrl: 'https://github.com/mfcc168/Lafarge-Employee-Dashboard',
    featured: true
  },
  {
    id: 3,
    title: 'Lafarge Scanner Mobile App',
    description: 'Cross-platform mobile scanning application built with React Native and TypeScript. Features document scanning, data processing, and real-time synchronization capabilities.',
    category: 'mobile',
    technologies: ['React Native', 'TypeScript', 'JavaScript', 'Mobile APIs', 'Camera'],
    githubUrl: 'https://github.com/mfcc168/Lafarge-Scanner'
  },
  {
    id: 4,
    title: 'WVC Mobile Application',
    description: 'Native Android application built with Kotlin and modern Android development practices. Features clean architecture and follows Material Design guidelines.',
    category: 'mobile',
    technologies: ['Kotlin', 'Android', 'Gradle', 'Material Design', 'MVVM'],
    githubUrl: 'https://github.com/mfcc168/WVC',
    featured: false
  },
  {
    id: 5,
    title: 'Plan My Plate',
    description: 'A comprehensive meal planning web application that allows users to search recipes, create weekly meal schedules, generate shopping lists, and find nearby supermarkets. Built as a university group project.',
    category: 'academic',
    technologies: ['Node.js', 'MongoDB', 'JavaScript', 'Spoonacular API', 'Google Maps API'],
    githubUrl: 'https://github.com/UOA-CS732-SE750-Students-2023/project-group-turquoise-tuataras',
    featured: true
  },
  {
    id: 6,
    title: 'Academic Project Demo',
    description: 'University project demonstration showcasing advanced development skills and technical implementation. View the complete project walkthrough and features.',
    category: 'academic',
    technologies: ['Project Demo', 'Technical Presentation'],
    liveUrl: 'https://youtu.be/WIi3Q6ymm6I',
    featured: false
  },
  {
    id: 7,
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website built with Nuxt.js and Vue 3. Features advanced animations, parallax effects, and professional design patterns.',
    category: 'fullstack',
    technologies: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'TypeScript', 'Animation'],
    githubUrl: 'https://github.com/mfcc168/portfolio',
    featured: false
  }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects
  }
  return projects.filter(project => project.category === activeCategory.value)
})

// Helper functions for categories and styling
const getCategoryById = (id) => {
  return categories.find(cat => cat.id === id) || categories[0]
}

const getProjectCount = (categoryId) => {
  if (categoryId === 'all') {
    return projects.length
  }
  return projects.filter(project => project.category === categoryId).length
}

const getCategoryButtonClasses = (category) => {
  const baseClasses = 'inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 border group text-sm'
  const isActive = activeCategory.value === category.id
  
  const colorMap = {
    blue: isActive ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:text-blue-600',
    indigo: isActive ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' : 'bg-white text-gray-700 border-gray-200 hover:border-indigo-300 hover:text-indigo-600',
    green: isActive ? 'bg-green-600 text-white border-green-600 shadow-md' : 'bg-white text-gray-700 border-gray-200 hover:border-green-300 hover:text-green-600',
    purple: isActive ? 'bg-purple-600 text-white border-purple-600 shadow-md' : 'bg-white text-gray-700 border-gray-200 hover:border-purple-300 hover:text-purple-600',
    orange: isActive ? 'bg-orange-600 text-white border-orange-600 shadow-md' : 'bg-white text-gray-700 border-gray-200 hover:border-orange-300 hover:text-orange-600'
  }
  
  return `${baseClasses} ${colorMap[category.color]}`
}

const getCategoryIconClasses = (category) => {
  const baseClasses = 'w-4 h-4 mr-1.5'
  const isActive = activeCategory.value === category.id
  
  const colorMap = {
    blue: isActive ? 'text-white' : 'text-blue-500 group-hover:text-blue-600',
    indigo: isActive ? 'text-white' : 'text-indigo-500 group-hover:text-indigo-600',
    green: isActive ? 'text-white' : 'text-green-500 group-hover:text-green-600',
    purple: isActive ? 'text-white' : 'text-purple-500 group-hover:text-purple-600',
    orange: isActive ? 'text-white' : 'text-orange-500 group-hover:text-orange-600'
  }
  
  return `${baseClasses} ${colorMap[category.color]}`
}

const getCategoryCountClasses = (category) => {
  const baseClasses = 'ml-1.5 px-1.5 py-0.5 text-xs rounded font-medium'
  const isActive = activeCategory.value === category.id
  
  return isActive 
    ? `${baseClasses} bg-white/20 text-white` 
    : `${baseClasses} bg-gray-100 text-gray-500`
}
</script>