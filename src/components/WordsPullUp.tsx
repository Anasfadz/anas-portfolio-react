import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'

interface WordsPullUpProps {
  text: string
  className?: string
  showAsterisk?: boolean
}

export const WordsPullUp: React.FC<WordsPullUpProps> = ({
  text,
  className = "",
  showAsterisk = false,
}) => {
  const containerRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const words = text.split(" ")

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const childVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
      },
    },
  }

  return (
    <motion.span
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`inline-flex flex-wrap justify-center md:justify-start ${className}`}
    >
      {words.map((word, idx) => {
        const isLastWord = idx === words.length - 1
        return (
          <motion.span
            key={idx}
            variants={childVariants}
            className={`inline-block relative mr-[0.25em] last:mr-0 ${isLastWord && showAsterisk ? 'pr-[0.2em]' : ''}`}
          >
            {word}
            {isLastWord && showAsterisk && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] pointer-events-none select-none">
                *
              </span>
            )}
          </motion.span>
        )
      })}
    </motion.span>
  )
}
