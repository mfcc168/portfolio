<template>
  <section :class="[
    'relative overflow-hidden',
    fullHeight ? 'min-h-screen pt-20' : 'py-24',
    variant === 'gradient' ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900' : 
    variant === 'animated' ? 'bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30' : 'bg-white'
  ]">

    <div v-if="variant === 'gradient'" class="absolute inset-0">
      <div class="absolute inset-0" ref="parallaxLayer1">
        <div class="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div class="absolute top-40 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-2xl animate-float-slow" style="animation-delay: 2s;"></div>
        <div class="absolute bottom-32 left-1/3 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-float-slow" style="animation-delay: 4s;"></div>
        <div class="absolute top-1/2 right-1/3 w-64 h-64 bg-indigo-500/15 rounded-full blur-2xl animate-float-slow" style="animation-delay: 6s;"></div>
        <div class="absolute bottom-1/4 right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-xl animate-float-slow" style="animation-delay: 3s;"></div>
      </div>
      
      <div class="absolute inset-0" ref="parallaxLayer2">
        <div class="absolute top-1/4 left-10 w-4 h-4 bg-blue-400/60 rotate-45 animate-spin-slow"></div>
        <div class="absolute top-1/3 right-16 w-6 h-6 bg-purple-400/60 rounded-full animate-pulse-glow"></div>
        <div class="absolute bottom-1/3 left-1/4 w-8 h-1 bg-cyan-400/60 animate-float"></div>
        <div class="absolute top-1/2 right-1/4 w-3 h-3 bg-blue-300/80 rotate-45 animate-bounce-slow"></div>
        <div class="absolute bottom-1/4 right-10 w-5 h-5 bg-purple-300/60 animate-spin-reverse"></div>
        <div class="absolute top-16 left-1/2 w-2 h-12 bg-gradient-to-b from-blue-400/40 to-transparent animate-float-slow" style="animation-delay: 1s;"></div>
        <div class="absolute bottom-40 left-16 w-6 h-6 border-2 border-cyan-400/50 rotate-45 animate-spin-slow" style="animation-delay: 3s;"></div>
        <div class="absolute top-3/4 right-20 w-1 h-8 bg-purple-400/50 animate-bounce-slow" style="animation-delay: 2s;"></div>
      </div>
      
      <div class="absolute inset-0 opacity-20" :style="backgroundStyle"></div>
      
      <div class="absolute inset-0" ref="parallaxLayer3">
        <svg class="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.3" />
              <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:0" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:0.3" />
              <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0" />
            </linearGradient>
          </defs>
          <path class="animate-draw-line-1" d="M0,80 Q400,200 800,120" stroke="url(#lineGradient1)" stroke-width="2" fill="none"/>
          <path class="animate-draw-line-2" d="M200,400 Q600,300 1000,350" stroke="url(#lineGradient2)" stroke-width="2" fill="none"/>
        </svg>
      </div>
    </div>
    
    <div :class="[
      'relative z-10 px-6',
      fullHeight ? 'flex items-center justify-center min-h-[calc(100vh-5rem)]' : 'container mx-auto'
    ]">
      <div class="text-center max-w-5xl mx-auto">
        <div v-if="$slots.badge" class="mb-6">
          <slot name="badge"></slot>
        </div>
        
        <h1 :class="[
          'font-bold mb-6 leading-tight',
          fullHeight ? 'text-5xl md:text-6xl lg:text-7xl' : 'text-4xl md:text-5xl lg:text-6xl',
          variant === 'gradient' ? 'text-white' : 'text-gray-900'
        ]">
          <slot name="title">
            Professional <span :class="variant === 'gradient' ? 'text-blue-400' : 'text-blue-600'">Developer</span>
          </slot>
        </h1>
        
        <div v-if="fullHeight && variant === 'gradient'" class="mb-8 opacity-0 animate-fade-in-up" style="animation-delay: 0.5s; animation-fill-mode: forwards;">
          <div class="flex items-center justify-center text-xl md:text-2xl text-gray-300">
            <span class="mr-3">Specializing in</span>
            <span class="text-blue-400 font-semibold min-w-[200px] text-left" ref="typingText">{{ currentSpecialty }}</span>
            <span class="animate-pulse text-blue-400">|</span>
          </div>
        </div>
        <p :class="[
          'text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed',
          variant === 'gradient' ? 'text-gray-300' : 'text-gray-600'
        ]">
          <slot name="subtitle">
            Building exceptional digital experiences with modern technologies and clean, scalable code
          </slot>
        </p>
        
        <div v-if="$slots.actions" class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <slot name="actions"></slot>
        </div>
        
        <div v-if="fullHeight && variant === 'gradient'" class="mt-16 opacity-0 animate-fade-in-up" style="animation-delay: 1.2s; animation-fill-mode: forwards;">
          <div class="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            <div v-for="(tech, index) in techStack" :key="tech.name" 
                 class="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 animate-float-slow"
                 :style="`animation-delay: ${1.5 + index * 0.1}s;`">
              <span class="text-2xl mr-2">{{ tech.icon }}</span>
              <span class="text-white font-medium text-sm">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Quick about section -->
    <div v-if="fullHeight && variant === 'gradient'" class="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-6">
      <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 opacity-0 animate-fade-in-up" style="animation-delay: 1s; animation-fill-mode: forwards;">
        <div class="text-center">
          <h3 class="text-2xl font-bold text-white mb-4">About Me</h3>
          <p class="text-gray-300 leading-relaxed mb-6">
            I'm a full-stack developer with strong academic foundations and practical experience in backend systems and mobile applications. 
            I build REST APIs, ERP backends, meal planning platforms, employee dashboards, and cross-platform mobile apps using modern technologies.
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-2xl font-bold text-blue-400 mb-1">50+</div>
              <div class="text-gray-400 text-sm font-medium">Projects</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-blue-400 mb-1">5+</div>
              <div class="text-gray-400 text-sm font-medium">Years Exp.</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-blue-400 mb-1">20+</div>
              <div class="text-gray-400 text-sm font-medium">Happy Clients</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-blue-400 mb-1">99%</div>
              <div class="text-gray-400 text-sm font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll hint -->
    <div v-if="fullHeight" class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <div class="flex flex-col items-center space-y-2 animate-bounce">
        <span :class="['text-sm font-medium', variant === 'gradient' ? 'text-gray-400' : 'text-gray-500']">
          Scroll down
        </span>
        <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  fullHeight: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: 'gradient',
    validator: (value) => ['gradient', 'light', 'animated'].includes(value)
  }
})

// Tech icons for the hero section
const techStack = [
  { name: 'Python', icon: '🐍' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'React Native', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Kotlin', icon: '🤖' }
]

// Different things I specialize in - cycles through these
const specialties = [
  'Backend & APIs',
  'Mobile Development',
  'Full-Stack Web Apps',
  'Academic Projects',
  'API Integration',
  'System Architecture'
]

const currentSpecialty = ref('')
let typingInterval = null
let currentIndex = 0
let currentText = ''
let isDeleting = false

// Typing animation effect
const typeSpecialty = () => {
  const currentSpecialtyText = specialties[currentIndex]
  
  if (isDeleting) {
    currentText = currentSpecialtyText.substring(0, currentText.length - 1)
  } else {
    currentText = currentSpecialtyText.substring(0, currentText.length + 1)
  }
  
  currentSpecialty.value = currentText
  
  let typeSpeed = isDeleting ? 50 : 100
  
  if (!isDeleting && currentText === currentSpecialtyText) {
    typeSpeed = 2000
    isDeleting = true
  } else if (isDeleting && currentText === '') {
    isDeleting = false
    currentIndex = (currentIndex + 1) % specialties.length
    typeSpeed = 300
  }
  
  typingInterval = setTimeout(typeSpecialty, typeSpeed)
}

const parallaxLayer1 = ref(null)
const parallaxLayer2 = ref(null)
const parallaxLayer3 = ref(null)

const backgroundStyle = computed(() => ({
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
}))

// Throttle scroll events for better performance
let ticking = false
const handleParallaxScroll = () => {
  if (!ticking && props.variant === 'gradient' && !document.hidden) {
    requestAnimationFrame(() => {
      if (document.hidden) return
      
      const scrolled = window.pageYOffset
      // Enhanced parallax intensity for better visual depth
      const rate1 = scrolled * -0.3
      const rate2 = scrolled * -0.2
      const rate3 = scrolled * -0.5
      
      if (parallaxLayer1.value) {
        parallaxLayer1.value.style.transform = `translateY(${rate1}px)`
      }
      if (parallaxLayer2.value) {
        parallaxLayer2.value.style.transform = `translateY(${rate2}px)`
      }
      if (parallaxLayer3.value) {
        parallaxLayer3.value.style.transform = `translateY(${rate3}px)`
      }
      
      ticking = false
    })
    ticking = true
  }
}



onMounted(() => {
  if (props.variant === 'gradient' && import.meta.client) {
    window.addEventListener('scroll', handleParallaxScroll, { passive: true })
    
    if (props.fullHeight) {
      setTimeout(() => {
        typeSpecialty()
      }, 1000)
    }
  }
})

onUnmounted(() => {
  if (props.variant === 'gradient' && import.meta.client) {
    window.removeEventListener('scroll', handleParallaxScroll)
    
    if (typingInterval) {
      clearTimeout(typingInterval)
      typingInterval = null
    }
  }
})
</script>