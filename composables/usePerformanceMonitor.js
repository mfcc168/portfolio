import { ref, onMounted, onUnmounted } from 'vue'

export const usePerformanceMonitor = () => {
  const fps = ref(60)
  const isLowPerformance = ref(false)
  
  let frameCount = 0
  let lastTime = 0
  let animationId = null
  
  const measureFPS = (timestamp) => {
    frameCount++
    
    if (timestamp - lastTime >= 1000) {
      fps.value = Math.round((frameCount * 1000) / (timestamp - lastTime))
      
      // Consider performance low if consistently below 30fps
      isLowPerformance.value = fps.value < 30
      
      // Log performance warnings in development
      if (process.dev && isLowPerformance.value) {
        console.warn(`Low performance detected: ${fps.value} FPS`)
      }
      
      frameCount = 0
      lastTime = timestamp
    }
    
    animationId = requestAnimationFrame(measureFPS)
  }
  
  const startMonitoring = () => {
    if (import.meta.client && 'requestAnimationFrame' in window) {
      lastTime = performance.now()
      measureFPS(lastTime)
    }
  }
  
  const stopMonitoring = () => {
    if (animationId) {
      cancelAnimationFrame(animationId)
      animationId = null
    }
  }
  
  const getPerformanceInfo = () => {
    if (!import.meta.client) return null
    
    const navigation = performance.getEntriesByType('navigation')[0]
    const paint = performance.getEntriesByType('paint')
    
    return {
      // Core Web Vitals approximations
      loadTime: navigation?.loadEventEnd - navigation?.loadEventStart,
      domContentLoaded: navigation?.domContentLoadedEventEnd - navigation?.domContentLoadedEventStart,
      firstPaint: paint.find(p => p.name === 'first-paint')?.startTime,
      firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime,
      // Current metrics
      currentFPS: fps.value,
      isLowPerformance: isLowPerformance.value
    }
  }
  
  onMounted(() => {
    startMonitoring()
  })
  
  onUnmounted(() => {
    stopMonitoring()
  })
  
  return {
    fps: readonly(fps),
    isLowPerformance: readonly(isLowPerformance),
    startMonitoring,
    stopMonitoring,
    getPerformanceInfo
  }
}