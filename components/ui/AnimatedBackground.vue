<template>
  <div class="absolute inset-0 overflow-hidden">
    <!-- Background blobs -->
    <div 
      v-for="(blob, index) in blobs" 
      :key="`blob-${index}`"
      :class="[
        'absolute rounded-full mix-blend-multiply filter blur-3xl animate-blob',
        blob.class
      ]"
      :style="{ 
        top: blob.top, 
        left: blob.left, 
        right: blob.right, 
        bottom: blob.bottom,
        width: blob.size, 
        height: blob.size,
        animationDelay: blob.delay 
      }"
    />
    
    <!-- Floating elements -->
    <div 
      v-for="(element, index) in floatingElements" 
      :key="`float-${index}`"
      :class="[
        'absolute rounded-full',
        element.class,
        element.animation
      ]"
      :style="{ 
        top: element.top, 
        left: element.left, 
        right: element.right, 
        bottom: element.bottom,
        width: element.size, 
        height: element.size,
        animationDelay: element.delay 
      }"
    />
    
    <!-- Geometric shapes -->
    <div 
      v-for="(shape, index) in geometricShapes" 
      :key="`shape-${index}`"
      :class="[
        'absolute transform',
        shape.class,
        shape.animation,
        shape.rotation
      ]"
      :style="{ 
        top: shape.top, 
        left: shape.left, 
        right: shape.right, 
        bottom: shape.bottom,
        width: shape.size, 
        height: shape.size,
        animationDelay: shape.delay 
      }"
    />
    
    <!-- Small particles -->
    <div 
      v-for="(particle, index) in particles" 
      :key="`particle-${index}`"
      :class="[
        'absolute rounded-full',
        particle.class,
        particle.animation
      ]"
      :style="{ 
        top: particle.top, 
        left: particle.left, 
        right: particle.right, 
        bottom: particle.bottom,
        width: particle.size, 
        height: particle.size,
        animationDelay: particle.delay 
      }"
    />
    
    <!-- Animated lines (optional) -->
    <svg 
      v-if="showLines" 
      class="absolute inset-0 w-full h-full opacity-5" 
      viewBox="0 0 1200 800"
    >
      <path 
        v-for="(line, index) in animatedLines" 
        :key="`line-${index}`"
        :d="line.path" 
        :stroke="line.gradient" 
        :stroke-width="line.width" 
        fill="none" 
        :class="line.animation"
      />
      <defs>
        <linearGradient 
          v-for="gradient in gradients" 
          :key="gradient.id"
          :id="gradient.id" 
          :x1="gradient.x1" 
          :y1="gradient.y1" 
          :x2="gradient.x2" 
          :y2="gradient.y2"
        >
          <stop 
            v-for="stop in gradient.stops" 
            :key="stop.offset"
            :offset="stop.offset" 
            :style="stop.style" 
          />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['light', 'default', 'dense'].includes(value)
  },
  showLines: {
    type: Boolean,
    default: false
  }
})

// Background configurations based on variant
const configs = {
  light: {
    blobs: [
      { top: '-5rem', left: '-5rem', size: '20rem', class: 'bg-gradient-to-br from-blue-200/15 to-purple-200/10', delay: '0s' },
      { top: '33%', right: '-5rem', size: '18rem', class: 'bg-gradient-to-br from-indigo-200/20 to-pink-200/10', delay: '2s' },
      { bottom: '-5rem', left: '25%', size: '16rem', class: 'bg-gradient-to-br from-purple-200/15 to-blue-200/10', delay: '4s' }
    ],
    floatingElements: [
      { top: '8rem', right: '5rem', size: '6rem', class: 'bg-blue-300/10', animation: 'animate-float-slow' },
      { top: '15rem', left: '4rem', size: '5rem', class: 'bg-purple-300/15', animation: 'animate-bounce-slow' },
      { bottom: '10rem', right: '33%', size: '8rem', class: 'bg-indigo-300/10', animation: 'animate-pulse-glow' }
    ],
    geometricShapes: [
      { top: '10rem', left: '33%', size: '3rem', class: 'bg-gradient-to-br from-blue-400/15 to-purple-400/10', animation: 'animate-spin-slow', rotation: 'rotate-45' },
      { bottom: '15rem', right: '10rem', size: '2rem', class: 'bg-gradient-to-br from-indigo-400/20 to-pink-400/10', animation: 'animate-spin-reverse', rotation: 'rotate-12' }
    ],
    particles: [
      { top: '20rem', left: '10rem', size: '0.75rem', class: 'bg-blue-500/25', animation: 'animate-bounce-slow', delay: '1s' },
      { bottom: '20rem', right: '25%', size: '0.5rem', class: 'bg-purple-500/30', animation: 'animate-float-slow', delay: '3s' }
    ]
  },
  
  default: {
    blobs: [
      { top: '-10rem', left: '-10rem', size: '24rem', class: 'bg-gradient-to-br from-blue-100/30 to-purple-100/20', delay: '0s' },
      { top: '33%', right: '-10rem', size: '24rem', class: 'bg-gradient-to-br from-indigo-100/25 to-blue-100/20', delay: '2s' },
      { bottom: '-10rem', left: '25%', size: '18rem', class: 'bg-gradient-to-br from-purple-100/20 to-pink-100/15', delay: '4s' }
    ],
    floatingElements: [
      { top: '5rem', right: '25%', size: '5rem', class: 'bg-blue-200/20', animation: 'animate-float-slow' },
      { top: '50%', left: '5rem', size: '4rem', class: 'bg-purple-200/20', animation: 'animate-bounce-slow' },
      { bottom: '10rem', right: '5rem', size: '6rem', class: 'bg-indigo-200/15', animation: 'animate-pulse-glow' }
    ],
    geometricShapes: [
      { top: '10rem', left: '33%', size: '2rem', class: 'bg-blue-300/30', animation: 'animate-spin-slow', rotation: 'rotate-45' },
      { bottom: '15rem', right: '33%', size: '1.5rem', class: 'bg-purple-300/30', animation: 'animate-spin-reverse', rotation: 'rotate-12' }
    ],
    particles: [
      { top: '15rem', left: '2.5rem', size: '0.5rem', class: 'bg-blue-400/40', animation: 'animate-bounce-slow', delay: '1s' },
      { top: '20rem', right: '10rem', size: '0.75rem', class: 'bg-purple-400/40', animation: 'animate-float-slow', delay: '3s' },
      { bottom: '20rem', left: '50%', size: '0.5rem', class: 'bg-indigo-400/40', animation: 'animate-pulse-glow', delay: '2s' }
    ]
  },
  
  dense: {
    blobs: [
      { top: '-1.25rem', left: '-1.25rem', size: '5rem', class: 'bg-blue-200/15', delay: '0s' },
      { top: '2rem', right: '5rem', size: '4rem', class: 'bg-purple-200/20', delay: '0s' },
      { bottom: '2rem', left: '25%', size: '6rem', class: 'bg-indigo-200/10', delay: '0s' }
    ],
    floatingElements: [],
    geometricShapes: [
      { top: '1.5rem', right: '2.5rem', size: '2rem', class: 'bg-gradient-to-br from-blue-300/20 to-purple-300/20', animation: 'animate-spin-slow', rotation: 'rotate-45' }
    ],
    particles: []
  }
}

const blobs = computed(() => configs[props.variant]?.blobs || [])
const floatingElements = computed(() => configs[props.variant]?.floatingElements || [])
const geometricShapes = computed(() => configs[props.variant]?.geometricShapes || [])
const particles = computed(() => configs[props.variant]?.particles || [])

// Animated lines configuration
const animatedLines = [
  { path: 'M0,200 Q300,100 600,200 T1200,200', gradient: 'url(#bgGradient1)', width: '2', animation: 'animate-draw-line-1' },
  { path: 'M0,600 Q300,500 600,600 T1200,600', gradient: 'url(#bgGradient2)', width: '1.5', animation: 'animate-draw-line-2' }
]

const gradients = [
  {
    id: 'bgGradient1',
    x1: '0%', y1: '0%', x2: '100%', y2: '0%',
    stops: [
      { offset: '0%', style: 'stop-color:rgb(59,130,246);stop-opacity:0' },
      { offset: '50%', style: 'stop-color:rgb(59,130,246);stop-opacity:1' },
      { offset: '100%', style: 'stop-color:rgb(99,102,241);stop-opacity:0' }
    ]
  },
  {
    id: 'bgGradient2',
    x1: '0%', y1: '0%', x2: '100%', y2: '0%',
    stops: [
      { offset: '0%', style: 'stop-color:rgb(139,92,246);stop-opacity:0' },
      { offset: '50%', style: 'stop-color:rgb(236,72,153);stop-opacity:1' },
      { offset: '100%', style: 'stop-color:rgb(59,130,246);stop-opacity:0' }
    ]
  }
]
</script>