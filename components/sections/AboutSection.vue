<template>
  <section id="about" class="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 relative overflow-hidden">
    <!-- Background animations -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-blue-200/15 to-purple-200/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div class="absolute top-1/2 -right-20 w-72 h-72 bg-gradient-to-br from-indigo-200/20 to-pink-200/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-20 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-200/15 to-blue-200/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a full-stack developer with 5+ years of experience building scalable web applications. 
            I specialize in modern JavaScript frameworks and have a passion for creating user-centric solutions.
          </p>
        </div>
        
        <!-- Quick stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-blue-600 mb-2">10+</div>
            <div class="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-blue-600 mb-2">5+</div>
            <div class="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-blue-600 mb-2">20+</div>
            <div class="text-gray-600 font-medium">Happy Clients</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-blue-600 mb-2">99%</div>
            <div class="text-gray-600 font-medium">Success Rate</div>
          </div>
        </div>
        
        <!-- What I do -->
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title" class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div :class="`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-6`">
              <svg :class="`w-6 h-6 ${service.iconColor}`" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ service.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Backend & APIs',
    description: 'Building robust backend systems and REST APIs with Python, handling business logic, data analytics, and integration services for complex applications.',
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    title: 'Full-Stack Web Apps',
    description: 'Creating comprehensive web applications like meal planning platforms with Node.js, MongoDB, API integrations, and modern frontend frameworks.',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    title: 'Mobile Development',
    description: 'Developing cross-platform React Native scanning applications and native Android apps with Kotlin, following modern mobile development practices.',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600'
  }
]
</script>