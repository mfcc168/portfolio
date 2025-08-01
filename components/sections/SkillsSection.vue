<template>
  <section class="py-24 bg-gradient-to-b from-white via-gray-50/50 to-blue-50/30 relative overflow-hidden">
    <!-- Background animations -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/20 rounded-full animate-blob animation-delay-1000"></div>
      <div class="absolute top-1/3 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-100/25 to-pink-100/15 rounded-full animate-blob animation-delay-3000"></div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technologies & Tools
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            I work with modern technologies to build fast, scalable, and maintainable applications
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="skill in skills" :key="skill.name" class="group bg-gray-50 hover:bg-blue-50 p-6 rounded-xl transition-all duration-300 hover:shadow-md border border-gray-100 hover:border-blue-200">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <span class="text-2xl">{{ skill.icon }}</span>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{{ skill.name }}</h3>
                <p class="text-sm text-gray-500">{{ skill.category }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: 'Python', icon: '🐍', category: 'Language' },
  { name: 'TypeScript', icon: '📘', category: 'Language' },
  { name: 'JavaScript', icon: '💛', category: 'Language' },
  { name: 'Node.js', icon: '🟢', category: 'Backend' },
  { name: 'React Native', icon: '⚛️', category: 'Mobile' },
  { name: 'Kotlin', icon: '🤖', category: 'Mobile' },
  { name: 'Vue.js', icon: '💚', category: 'Frontend' },
  { name: 'MongoDB', icon: '🍃', category: 'Database' },
  { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
  { name: 'Docker', icon: '🐳', category: 'DevOps' },
  { name: 'REST APIs', icon: '🔗', category: 'Backend' },
  { name: 'Git', icon: '📝', category: 'Version Control' }
]
</script>