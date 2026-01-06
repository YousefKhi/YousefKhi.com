'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/projects'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 text-text-primary-light dark:text-text-primary-dark tracking-tight">
            Projects
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-text-primary-light dark:via-text-primary-dark to-transparent mx-auto"></div>
        </motion.div>

        {projects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center py-12"
          >
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-lg">
              Projects coming soon...
            </p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="group h-full bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-lg dark:hover:shadow-gray-900/50 hover:-translate-y-1">
                    {/* Preview Image */}
                    <div className="relative aspect-[4/3] bg-gray-100 dark:bg-gray-900 overflow-hidden flex items-center justify-center p-8">
                      <div className="relative w-3/4 h-3/4">
                        <Image
                          src={`/${project.folder}/${project.preview}`}
                          alt={project.title}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                          {project.year}
                        </span>
                      </div>
                      
                      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-4 line-clamp-2">
                        {project.tagline}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-xs bg-gray-200 dark:bg-gray-800 text-text-secondary-light dark:text-text-secondary-dark rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-0.5 text-xs text-text-secondary-light dark:text-text-secondary-dark">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* View Project Arrow */}
                      <div className="mt-4 flex items-center text-sm font-medium text-text-primary-light dark:text-text-primary-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
                        <span>View Project</span>
                        <svg 
                          className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
