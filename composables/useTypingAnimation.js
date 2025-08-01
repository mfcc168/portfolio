export const useTypingAnimation = (items, options = {}) => {
  const {
    typeSpeed = 100,
    deleteSpeed = 50,
    pauseTime = 2000,
    deleteDelay = 300
  } = options
  
  const currentText = ref('')
  const currentIndex = ref(0)
  const isDeleting = ref(false)
  let typingInterval = null
  
  const typeText = () => {
    if (!items.length) return
    
    const currentItem = items[currentIndex.value]
    
    if (isDeleting.value) {
      currentText.value = currentItem.substring(0, currentText.value.length - 1)
    } else {
      currentText.value = currentItem.substring(0, currentText.value.length + 1)
    }
    
    let speed = isDeleting.value ? deleteSpeed : typeSpeed
    
    if (!isDeleting.value && currentText.value === currentItem) {
      speed = pauseTime
      isDeleting.value = true
    } else if (isDeleting.value && currentText.value === '') {
      isDeleting.value = false
      currentIndex.value = (currentIndex.value + 1) % items.length
      speed = deleteDelay
    }
    
    typingInterval = setTimeout(typeText, speed)
  }
  
  const startTyping = (delay = 0) => {
    if (delay > 0) {
      setTimeout(() => {
        typeText()
      }, delay)
    } else {
      typeText()
    }
  }
  
  const stopTyping = () => {
    if (typingInterval) {
      clearTimeout(typingInterval)
      typingInterval = null
    }
  }
  
  onUnmounted(() => {
    stopTyping()
  })
  
  return {
    currentText: readonly(currentText),
    startTyping,
    stopTyping
  }
}