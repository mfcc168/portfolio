# Portfolio Website

A modern, responsive portfolio website showcasing my work as a full-stack developer. Built with Nuxt.js 3, Vue.js, and Tailwind CSS, featuring advanced animations, parallax effects, and professional design patterns.

## ✨ Features

- **Modern Design**: Clean, professional UI with glassmorphism effects and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dynamic Navigation**: Transparent navbar with scroll-based styling transitions
- **Parallax Effects**: Multi-layer parallax animations in the hero section
- **Project Showcase**: Categorized project gallery with filtering capabilities
- **Performance Optimized**: SSR-ready with optimized animations and lazy loading
- **Professional Branding**: Custom favicon and consistent color scheme

## 🛠️ Tech Stack

- **Framework**: [Nuxt.js 3](https://nuxt.com/)
- **Frontend**: [Vue.js 3](https://vuejs.org/) with Composition API
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: Inter & Space Grotesk fonts
- **Animations**: Custom CSS keyframes and transitions
- **Icons**: Custom SVG icons and emojis

## 📂 Project Structure

```
portfolio/
├── app/
│   └── app.vue                 # Main app component with routing
├── components/
│   ├── HomePage.vue           # Home page component
│   ├── ProjectsPage.vue       # Projects showcase page
│   ├── HeroSection.vue        # Hero section with parallax
│   ├── NavigationHeader.vue   # Dynamic navigation bar
│   └── ProjectCard.vue        # Project card component
├── assets/
│   └── css/
│       └── main.css          # Global styles and animations
└── public/
    ├── favicon.ico           # Custom developer-themed favicon
    └── favicon.svg           # SVG version of favicon
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, pnpm, yarn, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mfcc168/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build & Deploy

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deployment Options

- **Static Hosting**: Use `npm run generate` for static site generation
- **Server Deployment**: Deploy the `.output` folder to any Node.js hosting
- **Vercel/Netlify**: Connect your repository for automatic deployments

## 🎨 Customization

### Colors
The primary color scheme uses blue gradients. Update colors in:
- `tailwind.config.js` for theme colors
- `assets/css/main.css` for custom CSS variables
- `components/` files for component-specific styling

### Content
- **Projects**: Update project data in `components/ProjectsPage.vue`
- **Skills**: Modify tech stack in `components/HomePage.vue`
- **Personal Info**: Update hero section and about content

### Animations
All animations are defined in `assets/css/main.css` and can be customized:
- Parallax effects in `HeroSection.vue`
- Scroll animations and keyframes in `main.css`

## 📱 Features Overview

### Home Page
- Hero section with animated typing effect
- About section with statistics
- Services overview
- Technologies & tools showcase
- Contact information

### Projects Page
- Category-based project filtering
- Project cards with technology tags
- GitHub and live demo links
- Academic and professional projects

### Navigation
- Transparent navbar on home page
- Dynamic styling based on scroll position
- Smooth transitions between pages

## 🔧 Development

### File Structure
- Components are organized by page/functionality
- Shared styles in `assets/css/main.css`
- Public assets (favicon, robots.txt) in `public/`

### Performance
- SSR-compatible with proper hydration
- Optimized animations with `requestAnimationFrame`
- Tab visibility API for performance optimization
- Lazy loading for images and components

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: yuhoklai168@gmail.com
- **GitHub**: [mfcc168](https://github.com/mfcc168)


---


