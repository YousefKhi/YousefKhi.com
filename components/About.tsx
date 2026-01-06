'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

const mediaItems = [
  { type: 'image', src: '/AboutMe/first.jpg' },
  { type: 'video', src: '/AboutMe/GolfVideo.MOV' },
  { type: 'image', src: '/AboutMe/Food.PNG' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [cards, setCards] = useState([0, 1, 2])

  const cycleCards = () => {
    setCards((prev) => {
      const newCards = [...prev]
      const first = newCards.shift()!
      newCards.push(first)
      return newCards
    })
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-light dark:bg-surface-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 text-text-primary-light dark:text-text-primary-dark tracking-tight">
            About
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-text-primary-light dark:via-text-primary-dark to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
              Mechanical Engineering major with a Computer Science minor at the University of New Brunswick. I co-founded our FSAE team and my main interests are in all disciplines of autonomous vehicles and robotics.
            </p>
            <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
              Outside of that, I coach basketball, like trying new food, and golf (I went one time).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            {/* Deck of Cards */}
            <div 
              className="relative w-72 h-96 cursor-pointer"
              onClick={cycleCards}
            >
              {cards.map((cardIndex, stackPosition) => {
                const item = mediaItems[cardIndex]
                const isTop = stackPosition === 0
                
                return (
                  <motion.div
                    key={cardIndex}
                    className="absolute inset-0 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg"
                    initial={false}
                    animate={{
                      scale: 1 - stackPosition * 0.05,
                      y: stackPosition * 12,
                      zIndex: 3 - stackPosition,
                      rotateZ: stackPosition === 1 ? 3 : stackPosition === 2 ? -2 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    whileHover={isTop ? { scale: 1.02 } : {}}
                  >
                    {item.type === 'image' ? (
                      <Image
                        src={item.src}
                        alt="About me"
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <video
                        src={item.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    )}
                  </motion.div>
                )
              })}
            </div>
            <p className="mt-6 text-sm text-text-secondary-light dark:text-text-secondary-dark">
              tap to shuffle
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

