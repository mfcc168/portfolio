<template>
  <div>
    <NuxtRouteAnnouncer />
    
    <HomePage v-if="$route.path === '/'" />
    <ProjectsPage v-else-if="$route.path === '/projects'" />
  </div>
</template>

<script setup>
import { watch } from 'vue'
import HomePage from '../components/HomePage.vue'
import ProjectsPage from '../components/ProjectsPage.vue'

const route = useRoute()

watch(() => route.path, (newPath, oldPath) => {
  if (newPath !== oldPath && import.meta.client) {
    nextTick(() => {
      window.scrollTo({
        top: 0,
        left: 0,
      })
    })
  }
}, { immediate: false })
</script>
