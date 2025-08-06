<template>
  <div>
    <NavigationHeader />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
import NavigationHeader from '../../components/NavigationHeader.vue'
</script>