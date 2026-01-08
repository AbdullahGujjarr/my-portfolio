# Abdullah's Portfolio Website

## Overview
A personal portfolio website for Abdullah, a Full Stack Developer. Built with React, Vite, and Tailwind CSS featuring smooth animations with Framer Motion.

## Tech Stack
- **Framework**: React 18
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Animations**: Framer Motion
- **Form Handling**: Formik
- **Email**: EmailJS

## Project Structure
```
src/
├── components/           # React components
│   ├── aboutMeSection/   # About section
│   ├── contactMeSection/ # Contact form and info
│   ├── experienceSection/# Work experience
│   ├── footer/           # Footer component
│   ├── heroSection/      # Hero/landing section
│   ├── navbar/           # Navigation bar
│   ├── projectsSection/  # Portfolio projects
│   ├── skillsSection/    # Skills display
│   └── subHeroSection/   # Sub-hero section
├── framerMotion/         # Animation variants
├── state/                # Redux store and slices
├── App.jsx               # Main app component
└── main.jsx              # Entry point
public/
└── images/               # Static images
```

## Development
- **Run Development Server**: `npm run dev`
- **Build for Production**: `npm run build`
- **Preview Production Build**: `npm run preview`

## Configuration
- Development server runs on port 5000
- Vite configured to allow all hosts for Replit proxy compatibility
