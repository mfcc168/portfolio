<template>
  <header :class="[
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out navbar-header',
    isScrolled || !isHomePage ? 'navbar-scrolled' : 'navbar-transparent'
  ]">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <NuxtLink 
          to="/" 
          :class="[
            'text-2xl font-bold hover:text-blue-600 transition-colors',
            isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
          ]"
        >
          Frankie Yu
        </NuxtLink>
        
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            to="/" 
            :class="[
              'hover:text-blue-600 transition-colors font-medium',
              $route.path === '/' ? 'text-blue-600' : (isScrolled || !isHomePage ? 'text-gray-700' : 'text-white/90')
            ]"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/projects" 
            :class="[
              'hover:text-blue-600 transition-colors font-medium',
              $route.path === '/projects' ? 'text-blue-600' : (isScrolled || !isHomePage ? 'text-gray-700' : 'text-white/90')
            ]"
          >
            Projects
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            :class="[
              'hover:text-blue-600 transition-colors font-medium',
              $route.path === '/about' ? 'text-blue-600' : (isScrolled || !isHomePage ? 'text-gray-700' : 'text-white/90')
            ]"
          >
            About
          </NuxtLink>
          <button 
            @click="handleGetInTouch"
            :class="[
              'px-6 py-2 rounded-lg transition-all duration-300 font-medium',
              isScrolled || !isHomePage 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
            ]"
          >
            Get In Touch
          </button>
        </div>
        
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          :class="[
            'md:hidden p-2 rounded-lg transition-colors',
            isScrolled || !isHomePage 
              ? 'hover:bg-gray-100 text-gray-700' 
              : 'hover:bg-white/10 text-white'
          ]"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div 
        v-if="mobileMenuOpen" 
        :class="[
          'md:hidden mt-4 pb-4 border-t transition-colors',
          isScrolled || !isHomePage ? 'border-gray-100' : 'border-white/20'
        ]"
      >
        <div class="flex flex-col space-y-4 mt-4">
          <NuxtLink 
            to="/" 
            @click="mobileMenuOpen = false"
            :class="[
              'hover:text-blue-600 transition-colors font-medium',
              $route.path === '/' ? 'text-blue-600' : (isScrolled || !isHomePage ? 'text-gray-700' : 'text-white/90')
            ]"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/projects" 
            @click="mobileMenuOpen = false"
            :class="[
              'hover:text-blue-600 transition-colors font-medium',
              $route.path === '/projects' ? 'text-blue-600' : (isScrolled || !isHomePage ? 'text-gray-700' : 'text-white/90')
            ]"
          >
            Projects
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            @click="mobileMenuOpen = false" 
            :class="[
              'hover:text-blue-600 transition-colors font-medium',
              $route.path === '/about' ? 'text-blue-600' : (isScrolled || !isHomePage ? 'text-gray-700' : 'text-white/90')
            ]"
          >
            About
          </NuxtLink>
          <button 
            @click="handleGetInTouch"
            :class="[
              'px-6 py-2 rounded-lg transition-all duration-300 font-medium w-fit',
              isScrolled || !isHomePage 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
            ]"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

const mobileMenuOpen = ref(false)
const scrollY = ref(0)

const route = useRoute()
const currentPath = computed(() => route.path)

const isHomePage = computed(() => {
  return currentPath.value === '/'
})

const isScrolled = computed(() => {
  if (import.meta.server) return false
  return scrollY.value > 50
})

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  scrollY.value = window.scrollY
  window.addEventListener('scroll', handleScroll, { passive: true })
})

// Handle get in touch button - scroll to contact or navigate home first
const handleGetInTouch = async () => {
  mobileMenuOpen.value = false
  
  if (import.meta.client) {
    if (currentPath.value === '/') {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      await navigateTo('/')
      // Need to wait for DOM to update
      await nextTick()
      setTimeout(() => {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 200)
    }
  }
}

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar-header {
  /* Default to transparent for home page */
  background: transparent;
}

.navbar-transparent {
  background: transparent;
}

.navbar-scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(229, 231, 235, 1);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
</style>