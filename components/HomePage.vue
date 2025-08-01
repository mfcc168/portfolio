<template>
  <div>
    <!-- Navigation -->
    <NavigationHeader />
    
    <!-- Hero Section -->
    <HeroSection :full-height="true" variant="gradient">
      <template #badge>
        <div class="inline-flex items-center px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-300 text-sm font-medium mb-6">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          Available for new projects
        </div>
      </template>
      <template #title>
        Full-Stack <span class="text-blue-400">Developer</span>
      </template>
      <template #subtitle>
        I create exceptional digital experiences through clean code, modern design, and innovative solutions that drive business growth.
      </template>
      <template #actions>
        <NuxtLink to="/projects" class="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
          View My Work
        </NuxtLink>
        <button class="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
          Let's Talk
        </button>
      </template>
    </HeroSection>
    
    <!-- About Section -->
    <section id="about" class="py-24 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm a full-stack developer with 5+ years of experience building scalable web applications. 
              I specialize in modern JavaScript frameworks and have a passion for creating user-centric solutions.
            </p>
          </div>
          
          <!-- Stats Row -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div class="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-blue-600 mb-2">5+</div>
              <div class="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div class="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-blue-600 mb-2">99%</div>
              <div class="text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>
          
          <!-- Services Grid -->
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Backend & APIs</h3>
              <p class="text-gray-600 leading-relaxed">
                Building robust backend systems and REST APIs with Python, handling business logic, data analytics, and integration services for complex applications.
              </p>
            </div>
            
            <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Full-Stack Web Apps</h3>
              <p class="text-gray-600 leading-relaxed">
                Creating comprehensive web applications like meal planning platforms with Node.js, MongoDB, API integrations, and modern frontend frameworks.
              </p>
            </div>
            
            <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Mobile Development</h3>
              <p class="text-gray-600 leading-relaxed">
                Developing cross-platform React Native scanning applications and native Android apps with Kotlin, following modern mobile development practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Skills Section -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technologies & Tools
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              I work with modern technologies to build fast, scalable, and maintainable applications
            </p>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="(skill, index) in skills" :key="skill.name" 
                 class="group bg-gray-50 hover:bg-blue-50 p-6 rounded-xl transition-all duration-300 hover:shadow-md border border-gray-100 hover:border-blue-200">
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
          </div>
        </div>
      </div>
    </section>
    
    <!-- Contact Section -->
    <section id="contact" class="py-24 bg-gray-900">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something Great
          </h2>
          <p class="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your vision to life.
          </p>
          
          <div class="flex justify-center items-center mb-16">
            <a href="mailto:yuhoklai168@gmail.com" class="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              yuhoklai168@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import NavigationHeader from './NavigationHeader.vue'
import HeroSection from './HeroSection.vue'

const skills = [
  { name: 'Python', icon: '🐍', category: 'Language' },
  { name: 'TypeScript', icon: '📘', category: 'Language' },
  { name: 'JavaScript', icon: '💛', category: 'Language' },
  { name: 'Node.js', icon: '🟢', category: 'Backend' },
  { name: 'React Native', icon: '⚛️', category: 'Mobile' },
  { name: 'Kotlin', icon: '🤖', category: 'Mobile' },
  { name: 'Vue.js', icon: '💚', category: 'Frontend' },
  { name: 'MongoDB', icon: '🍃', category: 'Database' },
  { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
  { name: 'Docker', icon: '🐳', category: 'DevOps' },
  { name: 'REST APIs', icon: '🔗', category: 'Backend' },
  { name: 'Git', icon: '📝', category: 'Version Control' }
]
</script>