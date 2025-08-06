<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { watch } from 'vue'

const route = useRoute()

// This scroll-to-top logic can remain as it is
watch(() => route.path, (newPath, oldPath) => {
  if (newPath !== oldPath && import.meta.client) {
    nextTick(() => {
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