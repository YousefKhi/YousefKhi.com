'use client'

import { motion } from 'framer-motion'

export default function TextShimmer({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`inline-block bg-gradient-to-r from-text-secondary-light via-text-primary-light to-text-secondary-light dark:from-text-secondary-dark dark:via-text-primary-dark dark:to-text-secondary-dark bg-[length:200%_auto] bg-clip-text text-transparent ${className}`}
      animate={{
        backgroundPosition: ['0%', '200%'],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {children}
    </motion.div>
  )
}



