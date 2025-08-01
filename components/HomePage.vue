<template>
  <div>
    <!-- Nav bar -->
    <NavigationHeader />
    
    <!-- Main hero area -->
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
        <button @click="scrollToContact" class="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
          Let's Talk
        </button>
      </template>
    </HeroSection>
    
    <!-- About me -->
    <section id="about" class="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 relative overflow-hidden">
      <!-- Background animations -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- these float around nicely -->
        <div class="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-blue-200/15 to-purple-200/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute top-1/2 -right-20 w-72 h-72 bg-gradient-to-br from-indigo-200/20 to-pink-200/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-20 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-200/15 to-blue-200/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        
        <!-- More floating stuff -->
        <div class="absolute top-32 right-20 w-24 h-24 bg-blue-300/10 rounded-full animate-float-slow"></div>
        <div class="absolute top-60 left-16 w-20 h-20 bg-purple-300/15 rounded-full animate-bounce-slow"></div>
        <div class="absolute bottom-40 right-1/3 w-32 h-32 bg-indigo-300/10 rounded-full animate-pulse-glow"></div>
        
        <!-- Small shapes -->
        <div class="absolute top-40 left-1/3 w-12 h-12 bg-gradient-to-br from-blue-400/15 to-purple-400/10 transform rotate-45 animate-spin-slow"></div>
        <div class="absolute bottom-60 right-40 w-8 h-8 bg-gradient-to-br from-indigo-400/20 to-pink-400/10 transform rotate-12 animate-spin-reverse"></div>
        
        <!-- Tiny dots -->
        <div class="absolute top-80 left-40 w-3 h-3 bg-blue-500/25 rounded-full animate-bounce-slow animation-delay-1000"></div>
        <div class="absolute bottom-80 right-1/4 w-2 h-2 bg-purple-500/30 rounded-full animate-float-slow animation-delay-3000"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
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
          
          <!-- Quick stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-blue-600 mb-2">10+</div>
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
          
          <!-- What I do -->
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
    
    <!-- Tech stack -->
    <section class="py-24 bg-gradient-to-b from-white via-gray-50/50 to-blue-50/30 relative overflow-hidden">
      <!-- Background stuff -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Big background shapes -->
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/15 rounded-full animate-blob animation-delay-1000"></div>
        <div class="absolute top-1/3 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-100/25 to-pink-100/15 rounded-full animate-blob animation-delay-3000"></div>
        <div class="absolute -bottom-40 right-1/4 w-72 h-72 bg-gradient-to-br from-purple-100/20 to-blue-100/15 rounded-full animate-blob"></div>
        
        <!-- Medium floaty things -->
        <div class="absolute top-20 left-1/4 w-28 h-28 bg-blue-200/10 rounded-full animate-float-slow"></div>
        <div class="absolute top-1/2 right-20 w-20 h-20 bg-purple-200/15 rounded-full animate-bounce-slow"></div>
        <div class="absolute bottom-40 left-20 w-36 h-36 bg-indigo-200/10 rounded-full animate-pulse-glow"></div>
        
        <!-- Geometric stuff -->
        <div class="absolute top-60 right-1/3 w-16 h-16 bg-gradient-to-br from-blue-300/15 to-purple-300/10 transform rotate-45 animate-spin-slow"></div>
        <div class="absolute bottom-60 left-1/3 w-12 h-12 bg-gradient-to-br from-indigo-300/20 to-pink-300/10 transform rotate-12 animate-spin-reverse"></div>
        
        <!-- Small particles -->
        <div class="absolute top-40 right-40 w-4 h-4 bg-blue-400/25 rounded-full animate-bounce-slow animation-delay-2000"></div>
        <div class="absolute top-80 left-40 w-3 h-3 bg-purple-400/30 rounded-full animate-float-slow animation-delay-4000"></div>
        <div class="absolute bottom-32 right-1/2 w-5 h-5 bg-indigo-400/20 rounded-full animate-pulse-glow animation-delay-1000"></div>
        
        <!-- Animated lines -->
        <svg class="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1200 800">
          <path d="M0,400 Q300,300 600,400 T1200,400" stroke="url(#skillsGradient1)" stroke-width="2" fill="none" class="animate-draw-line-1"/>
          <path d="M0,500 Q300,450 600,500 T1200,500" stroke="url(#skillsGradient2)" stroke-width="1.5" fill="none" class="animate-draw-line-2"/>
          <defs>
            <linearGradient id="skillsGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:rgb(59,130,246);stop-opacity:0" />
              <stop offset="50%" style="stop-color:rgb(59,130,246);stop-opacity:1" />
              <stop offset="100%" style="stop-color:rgb(99,102,241);stop-opacity:0" />
            </linearGradient>
            <linearGradient id="skillsGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:rgb(99,102,241);stop-opacity:0" />
              <stop offset="50%" style="stop-color:rgb(139,92,246);stop-opacity:1" />
              <stop offset="100%" style="stop-color:rgb(59,130,246);stop-opacity:0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
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
            <div v-for="skill in skills" :key="skill.name" 
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
    
    <!-- Get in touch -->
    <section id="contact" class="py-24 bg-gradient-to-br from-blue-50/30 via-indigo-50/20 to-purple-50/30 relative overflow-hidden">
      <!-- Light background animations -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Floating shapes -->
        <div class="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-blue-200/15 to-purple-200/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute top-1/2 -right-20 w-72 h-72 bg-gradient-to-br from-indigo-200/20 to-pink-200/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-20 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-200/15 to-blue-200/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        
        <!-- More floating stuff -->
        <div class="absolute top-32 right-20 w-24 h-24 bg-blue-300/10 rounded-full animate-float-slow"></div>
        <div class="absolute top-60 left-16 w-20 h-20 bg-purple-300/15 rounded-full animate-bounce-slow"></div>
        <div class="absolute bottom-40 right-1/3 w-32 h-32 bg-indigo-300/10 rounded-full animate-pulse-glow"></div>
        
        <!-- Small shapes -->
        <div class="absolute top-40 left-1/3 w-12 h-12 bg-gradient-to-br from-blue-400/15 to-purple-400/10 transform rotate-45 animate-spin-slow"></div>
        <div class="absolute bottom-60 right-40 w-8 h-8 bg-gradient-to-br from-indigo-400/20 to-pink-400/10 transform rotate-12 animate-spin-reverse"></div>
        
        <!-- Tiny dots -->
        <div class="absolute top-80 left-40 w-3 h-3 bg-blue-500/25 rounded-full animate-bounce-slow animation-delay-1000"></div>
        <div class="absolute bottom-80 right-1/4 w-2 h-2 bg-purple-500/30 rounded-full animate-float-slow animation-delay-3000"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Build Something Great
          </h2>
          <p class="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
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

// Scroll to contact section when button is clicked
const scrollToContact = () => {
  if (import.meta.client) {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

// My tech stack - probably should add more later
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