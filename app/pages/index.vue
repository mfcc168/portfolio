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
    
    <!-- Main content wrapper with consistent background -->
    <div class="bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 relative overflow-hidden">
      <!-- Interactive background with physics -->
      <InteractiveBackground />
      
      <!-- Content with higher z-index -->
      <div class="relative z-10">
        <!-- About me -->
        <AboutSection />
        
        <!-- Tech stack -->
        <SkillsSection />
        
        <!-- Get in touch -->
        <ContactSection />
      </div>
    </div>
  </div>
</template>

<script setup>

import { useHead } from '#imports'
useHead({
  title: 'Frankie Yu - Full-Stack Developer Portfolio',
  meta: [
    { name: 'description', content: 'Welcome to the portfolio of Frankie Yu. Explore projects in backend development, mobile apps, and full-stack solutions.' }
  ]
})

import NavigationHeader from '../components/NavigationHeader.vue'
import HeroSection from '../components/HeroSection.vue'

// Lazy-load these components
const AboutSection = defineAsyncComponent(() => import('../components/sections/AboutSection.vue'))
const SkillsSection = defineAsyncComponent(() => import('../components/sections/SkillsSection.vue'))
const ContactSection = defineAsyncComponent(() => import('../components/sections/ContactSection.vue'))

import InteractiveBackground from '../components/ui/InteractiveBackground.vue'

// Simple scroll to contact functionality
const scrollToContact = () => {
  if (import.meta.client) {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>