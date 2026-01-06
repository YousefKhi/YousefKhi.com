'use client'

import { motion } from 'framer-motion'

export default function GradientBorder({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute -inset-[1px] bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400 dark:from-gray-600 dark:via-gray-400 dark:to-gray-600 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
      <div className="relative bg-surface-light dark:bg-surface-dark rounded-lg">
        {children}
      </div>
    </motion.div>
  )
}



