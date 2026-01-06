'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import DotPattern from './ui/DotPattern'
import TextShimmer from './ui/TextShimmer'
import DecryptText from './ui/DecryptText'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <DotPattern />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto w-full relative z-10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          {/* Left side - Text content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary-light dark:text-text-primary-dark tracking-tighter leading-none">
                <DecryptText text="Yousef Khirallah" />
              </h1>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center md:justify-start gap-3"
            >
              <div className="h-px w-8 bg-text-primary-light dark:bg-text-primary-dark"></div>
              <TextShimmer>
                <p className="text-sm uppercase tracking-widest font-light">
                  Mechatronics Engineer
                </p>
              </TextShimmer>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center md:justify-start gap-6 pt-4"
            >
              <a
                href="https://github.com/yousefkhi"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="GitHub"
              >
                <div className="absolute inset-0 bg-text-primary-light dark:bg-text-primary-dark rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <Github className="w-5 h-5 text-text-secondary-light dark:text-text-secondary-dark group-hover:text-text-primary-light dark:group-hover:text-text-primary-dark transition-colors duration-300" />
              </a>
              <a
                href="https://linkedin.com/in/yousef-khirallah"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="LinkedIn"
              >
                <div className="absolute inset-0 bg-text-primary-light dark:bg-text-primary-dark rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <Linkedin className="w-5 h-5 text-text-secondary-light dark:text-text-secondary-dark group-hover:text-text-primary-light dark:group-hover:text-text-primary-dark transition-colors duration-300" />
              </a>
              <a
                href="mailto:yousefkhi@outlook.com"
                className="group relative"
                aria-label="Email"
              >
                <div className="absolute inset-0 bg-text-primary-light dark:bg-text-primary-dark rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <Mail className="w-5 h-5 text-text-secondary-light dark:text-text-secondary-dark group-hover:text-text-primary-light dark:group-hover:text-text-primary-dark transition-colors duration-300" />
              </a>
            </motion.div>
          </div>

          {/* Right side - Profile photo */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0 relative"
          >
            {/* Decorative ring */}
            <motion.div 
              className="absolute inset-0 rounded-full border border-gray-300 dark:border-gray-700"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-800 shadow-2xl">
              <img
                src="/profile.jpg"
                alt="Yousef Khirallah"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

