'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { getProjectBySlug } from '@/lib/projects'
import { notFound } from 'next/navigation'

export default function ProjectPage() {
  const params = useParams()
  const slug = params.slug as string
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors mb-12"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero Section - Title left, Media right */}
        <section className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={`/${project.folder}/${project.preview}`}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                {project.role ? `${project.role} • ${project.year}` : project.year}
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl sm:text-6xl font-bold text-text-primary-light dark:text-text-primary-dark mb-6"
            >
              {project.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-text-secondary-light dark:text-text-secondary-dark leading-relaxed mb-8"
            >
              {project.description}
            </motion.p>

            {/* Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-4"
            >
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-text-primary-light dark:bg-text-primary-dark text-background-light dark:text-background-dark rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Visit Website
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-surface-light dark:hover:bg-surface-dark transition-colors text-text-primary-light dark:text-text-primary-dark"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  View Code
                </a>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl overflow-hidden bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-800"
          >
            {project.heroMedia.type === 'video' ? (
              <video
                src={`/${project.folder}/${project.heroMedia.src}`}
                autoPlay
                muted
                loop
                playsInline
                className="w-full"
              />
            ) : (
              <div className="relative aspect-video">
                <Image
                  src={`/${project.folder}/${project.heroMedia.src}`}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </motion.div>
        </section>

        {/* Alternating Sections */}
        {project.sections.map((section, idx) => (
          <section
            key={idx}
            className="grid lg:grid-cols-2 gap-12 items-center mb-32"
          >
            {/* Text - alternates left/right */}
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? 80 : -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className={idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}
            >
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                className="text-3xl sm:text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4"
              >
                {section.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                className="text-lg text-text-secondary-light dark:text-text-secondary-dark leading-relaxed"
              >
                {section.description}
              </motion.p>
            </motion.div>

            {/* Media - alternates right/left */}
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className={`rounded-2xl overflow-hidden bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-800 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
            >
              {section.media.type === 'video' ? (
                <video
                  src={`/${project.folder}/${section.media.src}`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full"
                />
              ) : (
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={`/${project.folder}/${section.media.src}`}
                    alt={section.title}
                    fill
                    className="object-cover scale-90"
                  />
                </div>
              )}
            </motion.div>
          </section>
        ))}

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-20"
        >
          <h2 className="text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-6">
            Built With
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, idx) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="px-4 py-2 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-lg text-text-primary-light dark:text-text-primary-dark"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.section>

      </div>
    </main>
  )
}
