<template>
  <div 
    ref="containerRef"
    class="absolute inset-0 overflow-hidden"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    style="pointer-events: auto;"
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
        transform: shape.type === 'square' ? `rotate(${Math.round(shape.rotation)}deg)` : 'none',
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
import { ref, onMounted, onUnmounted, reactive } from 'vue'

const containerRef = ref(null)
const mouse = reactive({ x: 0, y: 0, isActive: false })
const animationId = ref(null)
const shapes = ref([])

// Physics constants
const GRAVITY = 0.08
const FRICTION = 0.998
const BOUNCE_DAMPING = 0.75
const MOUSE_FORCE = 12
const MOUSE_RADIUS = 80
const MIN_BOUNCE_VELOCITY = 4
const VELOCITY_THRESHOLD = 0.3
const GROUND_DAMPING = 0.8

// Initialize shapes with physics properties
const initializeShapes = () => {
  if (!containerRef.value) return
  
  const container = containerRef.value
  const width = container.clientWidth
  const height = container.clientHeight
  
  shapes.value = [
    // Large blob shapes
    {
      id: 1,
      type: 'circle',
      x: Math.random() * (width - 200),
      y: Math.random() * (height - 200),
      vx: (Math.random() - 0.5) * 6,
      vy: (Math.random() - 0.5) * 6,
      size: 150 + Math.random() * 100,
      mass: 3,
      gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.15))',
      blur: 0,
      blendMode: 'normal',
      zIndex: 1
    },
    {
      id: 2,
      type: 'circle',
      x: Math.random() * (width - 180),
      y: Math.random() * (height - 180),
      vx: (Math.random() - 0.5) * 6,
      vy: (Math.random() - 0.5) * 6,
      size: 120 + Math.random() * 80,
      mass: 2.5,
      gradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(236, 72, 153, 0.15))',
      blur: 0,
      blendMode: 'normal',
      zIndex: 1
    },
    {
      id: 3,
      type: 'circle',
      x: Math.random() * (width - 160),
      y: Math.random() * (height - 160),
      vx: (Math.random() - 0.5) * 6,
      vy: (Math.random() - 0.5) * 6,
      size: 100 + Math.random() * 60,
      mass: 2,
      gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(59, 130, 246, 0.15))',
      blur: 0,
      blendMode: 'normal',
      zIndex: 1
    },
    
    // Medium floating elements
    {
      id: 4,
      type: 'circle',
      x: Math.random() * (width - 80),
      y: Math.random() * (height - 80),
      vx: (Math.random() - 0.5) * 8,
      vy: (Math.random() - 0.5) * 8,
      size: 60 + Math.random() * 40,
      mass: 1.5,
      gradient: 'rgba(59, 130, 246, 0.1)',
      zIndex: 2
    },
    {
      id: 5,
      type: 'circle',
      x: Math.random() * (width - 60),
      y: Math.random() * (height - 60),
      vx: (Math.random() - 0.5) * 8,
      vy: (Math.random() - 0.5) * 8,
      size: 40 + Math.random() * 30,
      mass: 1,
      gradient: 'rgba(147, 51, 234, 0.15)',
      zIndex: 2
    },
    {
      id: 6,
      type: 'circle',
      x: Math.random() * (width - 100),
      y: Math.random() * (height - 100),
      vx: (Math.random() - 0.5) * 8,
      vy: (Math.random() - 0.5) * 8,
      size: 80 + Math.random() * 20,
      mass: 1.2,
      gradient: 'rgba(99, 102, 241, 0.1)',
      zIndex: 2
    },
    
    // Geometric shapes
    {
      id: 7,
      type: 'square',
      x: Math.random() * (width - 40),
      y: Math.random() * (height - 40),
      vx: (Math.random() - 0.5) * 10,
      vy: (Math.random() - 0.5) * 10,
      size: 30 + Math.random() * 20,
      mass: 0.8,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 4,
      gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.15))',
      zIndex: 3
    },
    {
      id: 8,
      type: 'square',
      x: Math.random() * (width - 30),
      y: Math.random() * (height - 30),
      vx: (Math.random() - 0.5) * 10,
      vy: (Math.random() - 0.5) * 10,
      size: 20 + Math.random() * 15,
      mass: 0.6,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 6,
      gradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(236, 72, 153, 0.15))',
      zIndex: 3
    },
    
    // Small particles
    {
      id: 9,
      type: 'circle',
      x: Math.random() * (width - 20),
      y: Math.random() * (height - 20),
      vx: (Math.random() - 0.5) * 12,
      vy: (Math.random() - 0.5) * 12,
      size: 8 + Math.random() * 12,
      mass: 0.3,
      gradient: 'rgba(59, 130, 246, 0.3)',
      zIndex: 4
    },
    {
      id: 10,
      type: 'circle',
      x: Math.random() * (width - 15),
      y: Math.random() * (height - 15),
      vx: (Math.random() - 0.5) * 12,
      vy: (Math.random() - 0.5) * 12,
      size: 6 + Math.random() * 8,
      mass: 0.2,
      gradient: 'rgba(147, 51, 234, 0.4)',
      zIndex: 4
    },
    {
      id: 11,
      type: 'circle',
      x: Math.random() * (width - 18),
      y: Math.random() * (height - 18),
      vx: (Math.random() - 0.5) * 12,
      vy: (Math.random() - 0.5) * 12,
      size: 10 + Math.random() * 8,
      mass: 0.25,
      gradient: 'rgba(99, 102, 241, 0.3)',
      zIndex: 4
    }
  ]
}

// Mouse interaction handlers
const handleMouseMove = (event) => {
  if (!containerRef.value) return
  
  const rect = containerRef.value.getBoundingClientRect()
  mouse.x = event.clientX - rect.left
  mouse.y = event.clientY - rect.top
  mouse.isActive = true
}

const handleMouseLeave = () => {
  mouse.isActive = false
}

// Physics simulation
const updatePhysics = () => {
  if (!containerRef.value) return
  
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
    
    // Mouse interaction force
    if (mouse.isActive) {
      const dx = mouse.x - (shape.x + shape.size / 2)
      const dy = mouse.y - (shape.y + shape.size / 2)
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance < MOUSE_RADIUS && distance > 0) {
        const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS * MOUSE_FORCE
        const angle = Math.atan2(dy, dx)
        
        // Push away from mouse
        shape.vx -= Math.cos(angle) * force / shape.mass
        shape.vy -= Math.sin(angle) * force / shape.mass
      }
    }
    
    // Update position
    shape.x += shape.vx
    shape.y += shape.vy
    
    // Apply friction
    shape.vx *= FRICTION
    shape.vy *= FRICTION
    
    // Dampen very small velocities to prevent shaking/blinking
    if (Math.abs(shape.vx) < VELOCITY_THRESHOLD) {
      shape.vx = 0
    }
    if (Math.abs(shape.vy) < VELOCITY_THRESHOLD && shape.y < height - shape.size - 5) {
      shape.vy = 0
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
      
      // Prevent ground sticking and vibration
      if (Math.abs(shape.vy) < VELOCITY_THRESHOLD) {
        // If moving very slowly, stop completely
        shape.vy = 0
      } else {
        // Normal bounce behavior
        shape.vy = -Math.abs(shape.vy) * BOUNCE_DAMPING
        // Add minimum bounce velocity only for significant movement
        if (Math.abs(shape.vy) < MIN_BOUNCE_VELOCITY) {
          shape.vy = -MIN_BOUNCE_VELOCITY
        }
        // Reduced extra bounce for ground hits
        shape.vy *= 1.1
      }
    }
    
    // Shape-to-shape collision detection
    shapes.value.forEach((otherShape, otherIndex) => {
      if (otherShape.id === shape.id) return // Skip self
      
      const dx = (shape.x + shape.size / 2) - (otherShape.x + otherShape.size / 2)
      const dy = (shape.y + shape.size / 2) - (otherShape.y + otherShape.size / 2)
      const distance = Math.sqrt(dx * dx + dy * dy)
      const minDistance = (shape.size + otherShape.size) / 2
      
      if (distance < minDistance && distance > 0) {
        // Calculate collision response
        const overlap = minDistance - distance
        const separationForce = overlap * 0.5
        
        // Normalize collision vector
        const nx = dx / distance
        const ny = dy / distance
        
        // Separate shapes to prevent overlap
        shape.x += nx * separationForce * 0.5
        shape.y += ny * separationForce * 0.5
        otherShape.x -= nx * separationForce * 0.5
        otherShape.y -= ny * separationForce * 0.5
        
        // Calculate relative velocity
        const relativeVx = shape.vx - otherShape.vx
        const relativeVy = shape.vy - otherShape.vy
        
        // Calculate relative velocity in collision normal direction
        const velocityAlongNormal = relativeVx * nx + relativeVy * ny
        
        // Only resolve if objects are moving towards each other
        if (velocityAlongNormal > 0) return
        
        // Calculate restitution (bounciness)
        const restitution = 0.8
        
        // Calculate impulse scalar
        const impulse = -(1 + restitution) * velocityAlongNormal
        const totalMass = shape.mass + otherShape.mass
        const impulseScalar = impulse / totalMass
        
        // Apply impulse to velocities
        const impulseX = impulseScalar * nx
        const impulseY = impulseScalar * ny
        
        shape.vx += impulseX * otherShape.mass
        shape.vy += impulseY * otherShape.mass
        otherShape.vx -= impulseX * shape.mass
        otherShape.vy -= impulseY * shape.mass
        
        // Small fixed offset to prevent perfect stacking
        shape.vx += 0.5
        shape.vy += 0.5
        otherShape.vx -= 0.5
        otherShape.vy -= 0.5
      }
    })
    
    // Update rotation for square shapes
    if (shape.type === 'square') {
      shape.rotation += shape.rotationSpeed
      shape.rotation %= 360
    }
  })
}

// Animation loop
const animate = () => {
  updatePhysics()
  animationId.value = requestAnimationFrame(animate)
}

// Handle window resize
const handleResize = () => {
  // Reinitialize shapes with new container dimensions
  setTimeout(initializeShapes, 100)
}

onMounted(() => {
  if (import.meta.client) {
    setTimeout(() => {
      initializeShapes()
      animate()
    }, 100)
    
    window.addEventListener('resize', handleResize)
  }
})

onUnmounted(() => {
  if (animationId.value) {
    cancelAnimationFrame(animationId.value)
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