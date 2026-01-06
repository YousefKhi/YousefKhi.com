'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CYCLES_PER_LETTER = 2
const SHUFFLE_TIME = 50
const CHARS = '!@#$%^&*():{};|,.<>/?'

export default function DecryptText({ text, className = '' }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState(text)
  const [hasDecrypted, setHasDecrypted] = useState(false)

  useEffect(() => {
    if (hasDecrypted) return

    let intervalId: NodeJS.Timeout | null = null
    let iteration = 0

    const decrypt = () => {
      intervalId = setInterval(() => {
        setDisplayText((prev) =>
          text
            .split('')
            .map((letter, index) => {
              if (index < iteration) {
                return text[index]
              }
              if (letter === ' ') {
                return ' '
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)]
            })
            .join('')
        )

        if (iteration >= text.length) {
          if (intervalId) clearInterval(intervalId)
          setHasDecrypted(true)
        }

        iteration += 1 / CYCLES_PER_LETTER
      }, SHUFFLE_TIME)
    }

    // Start decryption after a short delay
    const timeoutId = setTimeout(() => {
      decrypt()
    }, 500)

    return () => {
      if (intervalId) clearInterval(intervalId)
      clearTimeout(timeoutId)
    }
  }, [text, hasDecrypted])

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayText}
    </motion.div>
  )
}



