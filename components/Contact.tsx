'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Linkedin, Github, MapPin } from 'lucide-react'
import GradientBorder from './ui/GradientBorder'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'yousefkhi@outlook.com',
      href: 'mailto:yousefkhi@outlook.com',
      color: 'from-gray-700 to-gray-900',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'yousef-khirallah',
      href: 'https://linkedin.com/in/yousef-khirallah',
      color: 'from-gray-600 to-gray-800',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'yousefkhi',
      href: 'https://github.com/yousefkhi',
      color: 'from-gray-800 to-black',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Fredericton, NB, Canada',
      href: null,
      color: 'from-gray-500 to-gray-700',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-light dark:bg-surface-dark">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 text-text-primary-light dark:text-text-primary-dark tracking-tight">
            Contact
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-text-primary-light dark:via-text-primary-dark to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {method.href ? (
                <GradientBorder>
                  <a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block p-4"
                  >
                    <div className="flex items-center gap-3">
                      <method.icon className="w-4 h-4 text-text-secondary-light dark:text-text-secondary-dark" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark truncate">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </a>
                </GradientBorder>
              ) : (
                <GradientBorder>
                  <div className="p-4">
                    <div className="flex items-center gap-3">
                      <method.icon className="w-4 h-4 text-text-secondary-light dark:text-text-secondary-dark" />
                      <div className="flex-1">
                        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </GradientBorder>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center"
        >
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
            © {new Date().getFullYear()} Yousef Khirallah
          </p>
        </motion.div>
      </div>
    </section>
  )
}

