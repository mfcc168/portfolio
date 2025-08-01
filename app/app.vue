<template>
  <div>
    <NuxtRouteAnnouncer />
    
    <HomePage v-if="$route.path === '/'" />
    <ProjectsPage v-else-if="$route.path === '/projects'" />
    <AboutPage v-else-if="$route.path === '/about'" />
  </div>
</template>

<script setup>
import { watch } from 'vue'
import HomePage from '../components/HomePage.vue'
import ProjectsPage from '../components/ProjectsPage.vue'
import AboutPage from '../components/AboutPage.vue'

const route = useRoute()

watch(() => route.path, (newPath, oldPath) => {
  if (newPath !== oldPath && import.meta.client) {
    nextTick(() => {
      // Don't scroll to top if we're navigating to home with a hash
      if (!(newPath === '/' && window.location.hash)) {
        window.scrollTo({
          top: 0,
          left: 0,
        })
      }
    })
  }
}, { immediate: false })
</script>
