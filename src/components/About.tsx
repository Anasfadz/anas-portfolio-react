import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle'

interface AnimatedLetterProps {
  char: string
  progress: MotionValue<number>
  start: number
  end: number
}

const AnimatedLetter: React.FC<AnimatedLetterProps> = ({ char, progress, start, end }) => {
  const opacity = useTransform(progress, [start, end], [0.2, 1])
  return (
    <motion.span style={{ opacity }} className="inline">
      {char}
    </motion.span>
  )
}

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  })

  const headingSegments = [
    { text: "I am Anas Fadzrin, ", className: "font-normal" },
    { text: "a software developer & payment gateway specialist. ", className: "italic font-serif text-primary" },
    { text: "I have skills in building secure, high-concurrency payment integrations and scalable backends.", className: "font-normal" }
  ]

  const paragraphText = "Over the last five years, I have worked with Simplepay Gateway, 2EN Apps, and Senwave Retail Solutions to build secure, PCI-DSS compliant fintech systems, scalable government e-services, and custom retail dashboards."
  const characters = paragraphText.split("")
  const totalChars = characters.length

  return (
    <section id="about" ref={containerRef} className="bg-black py-16 sm:py-24 md:py-32 px-4 md:px-6 flex items-center justify-center">
      {/* Inner Card */}
      <div className="bg-[#101010] rounded-[2rem] md:rounded-[3rem] px-6 py-16 sm:px-12 sm:py-24 md:px-20 md:py-32 text-center max-w-6xl w-full border border-neutral-900 relative">
        
        {/* Small top label */}
        <span className="text-primary text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-8 sm:mb-12 block select-none">
          Visualizing Code
        </span>

        {/* Main Heading */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[1.05] sm:leading-[0.95] md:leading-[0.9] text-[#E1E0CC]">
          <WordsPullUpMultiStyle segments={headingSegments} />
        </div>

        {/* Scroll-revealing Body Paragraph */}
        <div className="text-[#DEDBC8] text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-12 sm:mt-16 md:mt-24 leading-relaxed sm:leading-loose font-normal tracking-wide">
          {characters.map((char, idx) => {
            const charProgress = idx / totalChars
            const start = charProgress - 0.1
            const end = charProgress + 0.05
            return (
              <AnimatedLetter
                key={idx}
                char={char}
                progress={scrollYProgress}
                start={start}
                end={end}
              />
            )
          })}
        </div>

      </div>
    </section>
  )
}
