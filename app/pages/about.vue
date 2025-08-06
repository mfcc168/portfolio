<template>
  <div class="relative overflow-hidden">
    <!-- Interactive background covering entire page -->
    <InteractiveBackground />
    
    <!-- Page content with higher z-index -->
    <div class="relative z-10">
      
      <!-- Header -->
      <HeroSection variant="animated">
        <template #title>
          About <span class="text-blue-600">Me</span>
        </template>
        <template #subtitle>
          Full-stack developer with a passion for creating robust backend systems and innovative mobile applications
        </template>
      </HeroSection>
      
      <!-- About content -->
      <section class="py-20 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30">
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-6xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <!-- My story -->
            <div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                My Journey in Development
              </h2>
              <div class="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  I'm a full-stack developer with strong academic foundations and practical experience in building enterprise-level applications. Currently pursuing a Postgraduate Diploma in Computer Science while working professionally, my journey spans from university projects to developing comprehensive ERP systems and mobile applications.
                </p>
                <p>
                  I specialize in backend development with Python, creating REST APIs, and building scalable systems that handle complex business logic. My experience includes developing enterprise resource planning systems, employee management dashboards, and cross-platform mobile applications using modern technologies.
                </p>
                <p>
                  What drives me is the challenge of turning complex business requirements into clean, efficient code that makes a real impact. Whether it's optimizing database queries, designing API architectures, or creating intuitive mobile interfaces, I approach each project with attention to detail and a focus on long-term maintainability.
                </p>
              </div>
            </div>
            
            <!-- Education & facts -->
            <div class="lg:pl-8">
              <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Education & Experience</h3>
                
                <!-- Timeline -->
                <div class="mb-8">
                  <div class="space-y-4">
                    <div class="flex items-start">
                      <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-semibold text-gray-900">Bachelor of Computer Science</h4>
                        <p class="text-gray-600">University of Auckland</p>
                        <p class="text-sm text-blue-600 font-medium">2019 - 2023</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start">
                      <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-semibold text-gray-900">Postgraduate Diploma in Computer Science</h4>
                        <p class="text-gray-600">University of Auckland</p>
                        <p class="text-sm text-purple-600 font-medium">2023 - 2024</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start">
                      <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-semibold text-gray-900">Professional Experience</h4>
                        <p class="text-gray-600">Full-Stack Developer</p>
                        <p class="text-sm text-green-600 font-medium">2024 - Present</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Stats -->
                <div class="grid grid-cols-2 gap-6 mb-6">
                  <div class="text-center">
                    <div class="text-3xl font-bold text-blue-600 mb-2">10+</div>
                    <div class="text-gray-600 font-medium">Projects Built</div>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl font-bold text-blue-600 mb-2">5+</div>
                    <div class="text-gray-600 font-medium">Years Experience</div>
                  </div>
                </div>
                
                <div class="space-y-3">
                  <div class="flex items-center">
                    <svg class="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span class="text-gray-700">Computer Science Graduate & Current Student</span>
                  </div>
                  <div class="flex items-center">
                    <svg class="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <span class="text-gray-700">Available for New Projects</span>
                  </div>
                  <div class="flex items-center">
                    <svg class="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span class="text-gray-700">Quick Response Time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          

          
          <!-- What I do -->
          <div class="mb-20">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Areas of Expertise
            </h2>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Backend & APIs</h3>
                <p class="text-gray-600 leading-relaxed mb-4">
                  Specializing in Python backend development, REST API design, and enterprise systems. Built comprehensive ERP systems with complex business logic and data analytics.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">Python</span>
                  <span class="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">REST APIs</span>
                  <span class="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">SQL</span>
                </div>
              </div>
              
              <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div class="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Mobile Development</h3>
                <p class="text-gray-600 leading-relaxed mb-4">
                  Cross-platform mobile app development with React Native and native Android development with Kotlin. Focus on clean architecture and user experience.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full">React Native</span>
                  <span class="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full">Kotlin</span>
                  <span class="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full">Android</span>
                </div>
              </div>
              
              <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div class="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Full-Stack Development</h3>
                <p class="text-gray-600 leading-relaxed mb-4">
                  End-to-end application development from database design to user interfaces. Experience with modern web technologies and containerized deployments.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full">Node.js</span>
                  <span class="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full">TypeScript</span>
                  <span class="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full">Docker</span>
                </div>
              </div>
            </div>
          </div>
          
          
          <!-- My values -->
          <div class="mb-20 relative">
            <!-- More background stuff -->
            <div class="absolute inset-0 overflow-hidden">
              <div class="absolute top-10 left-10 w-20 h-20 bg-blue-200/10 rounded-full animate-pulse-glow"></div>
              <div class="absolute top-20 right-20 w-16 h-16 bg-purple-200/15 rounded-full animate-float-slow"></div>
              <div class="absolute bottom-10 left-1/3 w-24 h-24 bg-indigo-200/10 rounded-full animate-bounce-slow"></div>
              <div class="absolute bottom-20 right-1/4 w-12 h-12 bg-pink-200/15 rounded-full animate-pulse-glow animation-delay-2000"></div>
            </div>
            
            <div class="relative z-10">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                My Development Philosophy
              </h2>
              <p class="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
                These core principles guide every project I work on, ensuring quality, efficiency, and lasting value.
              </p>
              
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group">
                <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Clean Code Architecture</h3>
                <p class="text-gray-600 leading-relaxed">
                  Writing maintainable, scalable code that follows industry best practices and stands the test of time.
                </p>
              </div>
              
              <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group">
                <div class="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Performance Optimization</h3>
                <p class="text-gray-600 leading-relaxed">
                  Optimizing applications for speed, efficiency, and exceptional user experience across all platforms.
                </p>
              </div>
              
              <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group">
                <div class="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                  <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Team Collaboration</h3>
                <p class="text-gray-600 leading-relaxed">
                  Working seamlessly with teams and clients to deliver solutions that exceed expectations.
                </p>
              </div>
              
              <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group">
                <div class="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                  <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Innovation & Learning</h3>
                <p class="text-gray-600 leading-relaxed">
                  Continuously exploring new technologies and methodologies to solve complex problems creatively.
                </p>
              </div>
              
              <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group">
                <div class="w-16 h-16 bg-cyan-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                  <svg class="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Security First</h3>
                <p class="text-gray-600 leading-relaxed">
                  Building secure applications with proper authentication, data protection, and vulnerability prevention.
                </p>
              </div>
              
              <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group">
                <div class="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-200 transition-colors">
                  <svg class="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">User-Centric Design</h3>
                <p class="text-gray-600 leading-relaxed">
                  Creating intuitive interfaces and experiences that put users first and drive real business value.
                </p>
              </div>
            </div>
            
            <!-- CTA -->
            <div class="text-center">
              <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 max-w-2xl mx-auto">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Ready to Build Something Amazing?</h3>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  Let's discuss your project and turn your ideas into reality with these principles in mind.
                </p>
                <button @click="goToContact" class="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                  Let's Work Together
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  </div>
</template>

<script setup>

import { useHead } from '#imports'

useHead({
  title: 'About Me - Frankie Yu',
  meta: [
    { name: 'description', content: 'Learn more about my journey as a full-stack developer, my skills in Python, TypeScript, and more, and my development philosophy.' }
  ]
})

import { nextTick } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import InteractiveBackground from '../components/ui/InteractiveBackground.vue'

// Navigate to contact section on home page
const goToContact = async () => {
  if (import.meta.client) {
    await navigateTo('/')
    // Give it a moment to load properly
    await nextTick()
    setTimeout(() => {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 200)
  }
}
</script>