import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'

interface Segment {
  text: string
  className?: string
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[]
  className?: string
}

export const WordsPullUpMultiStyle: React.FC<WordsPullUpMultiStyleProps> = ({
  segments,
  className = "",
}) => {
  const containerRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  // Flatten segments into words, keeping classNames mapped
  const allWords = segments.flatMap((segment) => {
    const words = segment.text.split(/\s+/).filter(Boolean)
    return words.map((word) => ({
      word,
      className: segment.className || "",
    }))
  })

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
      className={`inline-flex flex-wrap justify-center items-center ${className}`}
    >
      {allWords.map((item, idx) => (
        <motion.span
          key={idx}
          variants={childVariants}
          className={`inline-block mr-[0.25em] last:mr-0 ${item.className}`}
        >
          {item.word}
        </motion.span>
      ))}
    </motion.span>
  )
}
