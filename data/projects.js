export const categories = [
  { 
    id: 'all', 
    name: 'All Projects',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    color: 'blue'
  },
  { 
    id: 'backend', 
    name: 'Backend & APIs',
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    color: 'indigo'
  },
  { 
    id: 'fullstack', 
    name: 'Full-Stack Apps',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9',
    color: 'green'
  },
  { 
    id: 'mobile', 
    name: 'Mobile Apps',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    color: 'purple'
  },
  { 
    id: 'academic', 
    name: 'Academic Projects',
    icon: 'M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
    color: 'orange'
  }
]

export const projects = [
  {
    id: 1,
    title: 'Lafarge ERP System',
    description: 'A comprehensive Enterprise Resource Planning (ERP) backend system with REST APIs for managing core business processes. Features financial management, HR, supply chain, and analytics modules with robust data handling.',
    category: 'backend',
    technologies: ['Python', 'REST API', 'SQL', 'Data Analytics', 'Business Logic'],
    githubUrl: 'https://github.com/mfcc168/Lafarge-ERP-System',
    featured: true
  },
  {
    id: 2,
    title: 'Lafarge Employee Dashboard',
    description: 'Modern employee management dashboard with separate backend and frontend architecture, featuring containerized deployment with Docker. Provides real-time employee data management and analytics.',
    category: 'fullstack',
    technologies: ['TypeScript', 'Python', 'Docker', 'REST API', 'Database'],
    githubUrl: 'https://github.com/mfcc168/Lafarge-Employee-Dashboard',
    featured: true
  },
  {
    id: 3,
    title: 'Lafarge Scanner Mobile App',
    description: 'Cross-platform mobile scanning application built with React Native and TypeScript. Features document scanning, data processing, and real-time synchronization capabilities.',
    category: 'mobile',
    technologies: ['React Native', 'TypeScript', 'JavaScript', 'Mobile APIs', 'Camera'],
    githubUrl: 'https://github.com/mfcc168/Lafarge-Scanner'
  },
  {
    id: 4,
    title: 'WVC Mobile Application',
    description: 'Native Android application built with Kotlin and modern Android development practices. Features clean architecture and follows Material Design guidelines.',
    category: 'mobile',
    technologies: ['Kotlin', 'Android', 'Gradle', 'Material Design', 'MVVM'],
    githubUrl: 'https://github.com/mfcc168/WVC',
    featured: false
  },
  {
    id: 5,
    title: 'Plan My Plate',
    description: 'A comprehensive meal planning web application that allows users to search recipes, create weekly meal schedules, generate shopping lists, and find nearby supermarkets. Built as a university group project.',
    category: 'academic',
    technologies: ['Node.js', 'MongoDB', 'JavaScript', 'Spoonacular API', 'Google Maps API'],
    githubUrl: 'https://github.com/UOA-CS732-SE750-Students-2023/project-group-turquoise-tuataras',
    featured: true
  },
  {
    id: 6,
    title: 'Academic Project Demo',
    description: 'University project demonstration showcasing advanced development skills and technical implementation. View the complete project walkthrough and features.',
    category: 'academic',
    technologies: ['Project Demo', 'Technical Presentation'],
    liveUrl: 'https://youtu.be/WIi3Q6ymm6I',
    featured: false
  },
  {
    id: 7,
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website built with Nuxt.js and Vue 3. Features advanced animations, parallax effects, and professional design patterns.',
    category: 'fullstack',
    technologies: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'TypeScript', 'Animation'],
    githubUrl: 'https://github.com/mfcc168/portfolio',
    featured: false
  }
]