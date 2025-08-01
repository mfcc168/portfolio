<template>
  <div>

    <NavigationHeader />
    

    <HeroSection variant="light">
      <template #title>
        Featured <span class="text-blue-600">Projects</span>
      </template>
      <template #subtitle>
        A showcase of my recent work across web development, design, and innovative solutions
      </template>
    </HeroSection>
    

    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Browse by Category</h2>
          <p class="text-gray-600 mb-8">Filter projects by technology and project type</p>
          
          <div class="flex flex-wrap justify-center gap-3">
            <button 
              v-for="category in categories" 
              :key="category.id"
              @click="activeCategory = category.id"
              :class="[
                'inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 border',
                activeCategory === category.id 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg' 
                  : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:text-blue-600'
              ]"
            >
              <span class="mr-2">{{ category.icon }}</span>
              {{ category.name }}
              <span :class="[
                'ml-2 px-2 py-1 text-xs rounded-full',
                activeCategory === category.id 
                  ? 'bg-white/20 text-white' 
                  : 'bg-gray-100 text-gray-500'
              ]">
                {{ getProjectCount(category.id) }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
    

    <section class="py-20 bg-white">
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
</template>

<script setup>
import { ref, computed } from 'vue'
import NavigationHeader from './NavigationHeader.vue'
import HeroSection from './HeroSection.vue'
import ProjectCard from './ProjectCard.vue'

const activeCategory = ref('all')

const categories = [
  { id: 'all', name: 'All Projects', icon: '🌟' },
  { id: 'backend', name: 'Backend & APIs', icon: '🔧' },
  { id: 'fullstack', name: 'Full-Stack Apps', icon: '🚀' },
  { id: 'mobile', name: 'Mobile Apps', icon: '📱' },
  { id: 'academic', name: 'Academic Projects', icon: '🎓' }
]

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

const getCategoryById = (id) => {
  return categories.find(cat => cat.id === id) || categories[0]
}

const getProjectCount = (categoryId) => {
  if (categoryId === 'all') {
    return projects.length
  }
  return projects.filter(project => project.category === categoryId).length
}
</script>