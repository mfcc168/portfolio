export const useScrollToContact = () => {
  const scrollToContact = async (fromCurrentPage = false) => {
    if (!import.meta.client) return
    
    // If we're not on the home page, navigate there first
    if (!fromCurrentPage && useRoute().path !== '/') {
      await navigateTo('/')
      // Need to wait for DOM to update
      await nextTick()
      setTimeout(() => {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 200)
    } else {
      // We're already on home page, just scroll
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
  
  return {
    scrollToContact
  }
}