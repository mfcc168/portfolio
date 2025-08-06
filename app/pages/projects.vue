<template>
  <div class="relative overflow-hidden">
    <!-- Interactive background covering entire page -->
    <InteractiveBackground />
    
    <!-- Page content with higher z-index -->
    <div class="relative z-10">
      <NavigationHeader />
      
      <HeroSection variant="animated">
        <template #title>
          Featured <span class="text-blue-600">Projects</span>
        </template>
        <template #subtitle>
          A showcase of my recent work across web development, design, and innovative solutions
        </template>
      </HeroSection>
      
      <!-- Main content wrapper with light background -->
      <div class="bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30">
        <!-- Browse Projects Section -->
        <section class="py-12">
          <div class="container mx-auto px-6">
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
        
        <!-- Projects Grid Section -->
        <section class="py-20">
          <div class="container mx-auto px-6">
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
    </div>
  </div>
</template>

<script setup>

import { useHead } from '#imports'
useHead({
  title: 'My Projects - Frankie Yu',
  meta: [
    { name: 'description', content: 'A showcase of my recent work, including the Lafarge ERP System, Plan My Plate, and other projects in backend, full-stack, and mobile development.' }
  ]
})

import { ref, computed } from 'vue'
import NavigationHeader from '../components/NavigationHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import ProjectCard from '../components/ProjectCard.vue'
import InteractiveBackground from '../components/ui/InteractiveBackground.vue'

const activeCategory = ref('all')

// Import project data
import { categories, projects } from '../data/projects.js'

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