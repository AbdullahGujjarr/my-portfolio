# Abdullah's Portfolio Website

## Overview
A personal portfolio website for Abdullah, a Full Stack Developer. Built with React + Vite featuring a Canvas 2D particle network, animated 3D-style rings, glassmorphism cards, and scroll-driven Framer Motion animations.

## Tech Stack
- **Framework**: React 18
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS with custom animations
- **State Management**: Redux Toolkit
- **Animations**: Framer Motion + Canvas 2D (particle network, animated rings)
- **Form Handling**: Formik
- **Email**: EmailJS
- **Icons**: React Icons

## Key Visual Features
- **Particle Network Background**: Full-screen Canvas 2D particle field with connecting lines, reacts to mouse movement
- **Animated Hero Rings**: Canvas 2D orbiting rings and glowing dots around profile photo
- **Scroll Progress Bar**: Gradient progress indicator at top of page
- **Glassmorphism Cards**: Frosted glass effect on skill cards, contact section, and navbar
- **Neon Glow Effects**: CSS glow text shadows on section headings
- **Marquee Ticker**: Animated scrolling banner in sub-hero section
- **Gradient Text**: Animated gradient text for selected headings
- **Custom Scrollbar**: Gradient orange-to-cyan styled scrollbar
- **Enhanced Hover States**: Spring animations, neon borders, and scale effects on all interactive elements

## Project Structure
```
src/
├── components/
│   ├── three/              # Canvas 2D visual effects (named for three.js intent)
│   │   ├── ParticleField.jsx  # Full-page animated particle network
│   │   └── HeroCanvas.jsx     # Orbiting rings around hero profile photo
│   ├── ui/
│   │   └── ScrollProgress.jsx # Scroll progress bar
│   ├── aboutMeSection/
│   ├── contactMeSection/
│   ├── footer/
│   ├── heroSection/
│   ├── navbar/
│   ├── projectsSection/
│   ├── skillsSection/
│   └── subHeroSection/
├── framerMotion/           # Animation variants (fadeIn, staggerContainer, scaleIn, slideIn)
├── state/                  # Redux store and slices
├── App.jsx                 # Main app component
└── main.jsx                # Entry point
public/
└── images/                 # Static images and CV PDF
```

## Development
- **Run Development Server**: `npm run dev`
- **Build for Production**: `npm run build`
- **Preview Production Build**: `npm run preview`

## Configuration
- Development server runs on port 5000
- Vite configured to allow all hosts for Replit proxy compatibility
- Tailwind extended with custom animations: float, marquee, glow-pulse, gradient-shift
