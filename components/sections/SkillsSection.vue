<template>
  <section class="py-24 relative overflow-hidden">
    
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