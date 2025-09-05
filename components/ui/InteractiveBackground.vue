<template>
  <div 
    ref="containerRef"
    class="absolute inset-0 overflow-hidden"
    style="pointer-events: none;"
  >
    <div
      v-for="shape in shapes"
      :key="shape.id"
      :class="[
        'absolute transition-none',
        shape.type === 'circle' ? 'rounded-full' : '',
        shape.type === 'square' ? 'transform' : ''
      ]"
      :style="{
        left: Math.round(shape.x) + 'px',
        top: Math.round(shape.y) + 'px',
        width: shape.size + 'px',
        height: shape.size + 'px',
        background: shape.gradient,
        transform: shape.type === 'square' ? `translate3d(0, 0, 0) rotate(${Math.round(shape.rotation)}deg)` : 'translate3d(0, 0, 0)',
        filter: shape.blur > 0 ? `blur(${shape.blur}px)` : 'none',
        mixBlendMode: shape.blendMode || 'normal',
        zIndex: shape.zIndex || 1,
        pointerEvents: 'none',
        willChange: 'transform',
        backfaceVisibility: 'hidden'
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const containerRef = ref(null)
const animationId = ref(null)
const shapes = ref([])
const isVisible = ref(true)
const observer = ref(null)

// Physics constants
const GRAVITY = 0.08
const FRICTION = 0.998
const BOUNCE_DAMPING = 0.75
const MIN_BOUNCE_VELOCITY = 4
const VELOCITY_THRESHOLD = 0.3

// Initialize shapes with physics properties
const initializeShapes = () => {
  if (!containerRef.value) return
  
  const container = containerRef.value
  const width = container.clientWidth
  const height = container.clientHeight
  
  // Reduced number of shapes for better performance
  shapes.value = [
    // Large blob shapes (reduced from 3 to 2)
    {
      id: 1,
      type: 'circle',
      x: Math.random() * (width - 200),
      y: Math.random() * (height - 200),
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      size: 150 + Math.random() * 50,
      mass: 3,
      gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.1))',
      blur: 0,
      blendMode: 'normal',
      zIndex: 1
    },
    {
      id: 2,
      type: 'circle',
      x: Math.random() * (width - 180),
      y: Math.random() * (height - 180),
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      size: 120 + Math.random() * 60,
      mass: 2.5,
      gradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(236, 72, 153, 0.1))',
      blur: 0,
      blendMode: 'normal',
      zIndex: 1
    },
    
    // Medium floating elements (reduced from 3 to 2)
    {
      id: 3,
      type: 'circle',
      x: Math.random() * (width - 80),
      y: Math.random() * (height - 80),
      vx: (Math.random() - 0.5) * 6,
      vy: (Math.random() - 0.5) * 6,
      size: 60 + Math.random() * 20,
      mass: 1.5,
      gradient: 'rgba(59, 130, 246, 0.08)',
      zIndex: 2
    },
    {
      id: 4,
      type: 'circle',
      x: Math.random() * (width - 60),
      y: Math.random() * (height - 60),
      vx: (Math.random() - 0.5) * 6,
      vy: (Math.random() - 0.5) * 6,
      size: 40 + Math.random() * 20,
      mass: 1,
      gradient: 'rgba(147, 51, 234, 0.12)',
      zIndex: 2
    },
    
    // Geometric shapes (reduced from 2 to 1)
    {
      id: 5,
      type: 'square',
      x: Math.random() * (width - 40),
      y: Math.random() * (height - 40),
      vx: (Math.random() - 0.5) * 8,
      vy: (Math.random() - 0.5) * 8,
      size: 25 + Math.random() * 15,
      mass: 0.8,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 3,
      gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.1))',
      zIndex: 3
    },
    
    // Small particles (reduced from 3 to 2)
    {
      id: 6,
      type: 'circle',
      x: Math.random() * (width - 20),
      y: Math.random() * (height - 20),
      vx: (Math.random() - 0.5) * 10,
      vy: (Math.random() - 0.5) * 10,
      size: 8 + Math.random() * 8,
      mass: 0.3,
      gradient: 'rgba(59, 130, 246, 0.25)',
      zIndex: 4
    },
    {
      id: 7,
      type: 'circle',
      x: Math.random() * (width - 15),
      y: Math.random() * (height - 15),
      vx: (Math.random() - 0.5) * 10,
      vy: (Math.random() - 0.5) * 10,
      size: 6 + Math.random() * 6,
      mass: 0.2,
      gradient: 'rgba(147, 51, 234, 0.3)',
      zIndex: 4
    }
  ]
}


// Optimized physics simulation with visibility checks
const updatePhysics = () => {
  if (!containerRef.value || !isVisible.value) return
  
  const container = containerRef.value
  const width = container.clientWidth
  const height = container.clientHeight
  
  shapes.value.forEach(shape => {
    // Apply gravity
    shape.vy += GRAVITY * shape.mass * 0.1
    
    // Add random energy boost occasionally to keep things lively
    if (Math.random() < 0.002) {
      shape.vx += (Math.random() - 0.5) * 4
      shape.vy += (Math.random() - 0.5) * 4
    }
    
    // Prevent complete stopping by adding minimal energy when velocity is too low
    const totalVelocity = Math.abs(shape.vx) + Math.abs(shape.vy)
    if (totalVelocity < 0.1) {
      // Add small random velocity to prevent complete stopping
      shape.vx += (Math.random() - 0.5) * 1.5
      shape.vy += (Math.random() - 0.5) * 1.5
    }
    
    
    // Update position
    shape.x += shape.vx
    shape.y += shape.vy
    
    // Apply friction
    shape.vx *= FRICTION
    shape.vy *= FRICTION
    
    // Dampen very small velocities to prevent shaking, but don't completely stop
    if (Math.abs(shape.vx) < VELOCITY_THRESHOLD) {
      shape.vx *= 0.5
    }
    if (Math.abs(shape.vy) < VELOCITY_THRESHOLD && shape.y < height - shape.size - 5) {
      shape.vy *= 0.5
    }
    
    // Enhanced boundary collision detection with smooth bounces
    if (shape.x <= 0) {
      shape.x = 0
      shape.vx = Math.abs(shape.vx) * BOUNCE_DAMPING
      // Add minimum bounce velocity only if significant
      if (shape.vx < MIN_BOUNCE_VELOCITY && Math.abs(shape.vx) > VELOCITY_THRESHOLD) {
        shape.vx = MIN_BOUNCE_VELOCITY
      }
    }
    if (shape.x >= width - shape.size) {
      shape.x = width - shape.size
      shape.vx = -Math.abs(shape.vx) * BOUNCE_DAMPING
      // Add minimum bounce velocity only if significant
      if (Math.abs(shape.vx) < MIN_BOUNCE_VELOCITY && Math.abs(shape.vx) > VELOCITY_THRESHOLD) {
        shape.vx = -MIN_BOUNCE_VELOCITY
      }
    }
    if (shape.y <= 0) {
      shape.y = 0
      shape.vy = Math.abs(shape.vy) * BOUNCE_DAMPING
      // Add minimum bounce velocity only if significant
      if (shape.vy < MIN_BOUNCE_VELOCITY && Math.abs(shape.vy) > VELOCITY_THRESHOLD) {
        shape.vy = MIN_BOUNCE_VELOCITY
      }
    }
    if (shape.y >= height - shape.size) {
      shape.y = height - shape.size
      
      // Normal bounce behavior with minimum energy preservation
      shape.vy = -Math.abs(shape.vy) * BOUNCE_DAMPING
      
      // Ensure minimum bounce velocity to prevent getting stuck on ground
      if (Math.abs(shape.vy) < MIN_BOUNCE_VELOCITY) {
        shape.vy = -MIN_BOUNCE_VELOCITY
      }
      
      // Add slight random horizontal movement to prevent perfect vertical bouncing
      if (Math.abs(shape.vx) < 1) {
        shape.vx += (Math.random() - 0.5) * 2
      }
    }
    
    // Simplified collision detection - only check larger shapes with smaller ones
    if (shape.mass >= 1.5) {
      shapes.value.forEach((otherShape) => {
        if (otherShape.id === shape.id || otherShape.mass >= 1.5) return // Skip self and other large shapes
        
        const dx = (shape.x + shape.size / 2) - (otherShape.x + otherShape.size / 2)
        const dy = (shape.y + shape.size / 2) - (otherShape.y + otherShape.size / 2)
        const distance = Math.sqrt(dx * dx + dy * dy)
        const minDistance = (shape.size + otherShape.size) / 2
        
        if (distance < minDistance && distance > 0) {
          // Simplified collision response - just push smaller shape away
          const nx = dx / distance
          const ny = dy / distance
          const force = (minDistance - distance) * 0.3
          
          otherShape.x -= nx * force
          otherShape.y -= ny * force
          otherShape.vx += nx * 2
          otherShape.vy += ny * 2
        }
      })
    }
    
    // Update rotation for square shapes
    if (shape.type === 'square') {
      shape.rotation += shape.rotationSpeed
      shape.rotation %= 360
    }
  })
}

// Optimized animation loop with visibility and reduced frame rate
let lastFrameTime = 0
const TARGET_FPS = 30 // Reduced from 60fps for better performance
const FRAME_INTERVAL = 1000 / TARGET_FPS

const animate = (currentTime) => {
  if (!isVisible.value) {
    animationId.value = requestAnimationFrame(animate)
    return
  }

  if (currentTime - lastFrameTime >= FRAME_INTERVAL) {
    updatePhysics()
    lastFrameTime = currentTime
  }
  
  animationId.value = requestAnimationFrame(animate)
}

// Setup intersection observer to pause when not visible
const setupIntersectionObserver = () => {
  if (import.meta.client && 'IntersectionObserver' in window) {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible.value = entry.isIntersecting
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )
  }
}

// Handle window resize
const handleResize = () => {
  // Reinitialize shapes with new container dimensions
  setTimeout(initializeShapes, 100)
}

onMounted(() => {
  if (import.meta.client) {
    // Setup intersection observer
    setupIntersectionObserver()
    
    setTimeout(() => {
      initializeShapes()
      animate(0)
      
      // Start observing the container
      if (containerRef.value && observer.value) {
        observer.value.observe(containerRef.value)
      }
    }, 100)
    
    window.addEventListener('resize', handleResize)
  }
})

onUnmounted(() => {
  if (animationId.value) {
    cancelAnimationFrame(animationId.value)
  }
  if (observer.value) {
    observer.value.disconnect()
  }
  if (import.meta.client) {
    window.removeEventListener('resize', handleResize)
  }
})
</script>

<style scoped>
.absolute {
  /* Ensure crisp rendering and prevent blur trails */
  image-rendering: crisp-edges;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000;
  perspective: 1000;
}
</style>