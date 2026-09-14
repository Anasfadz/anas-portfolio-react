import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import { Terminal, CheckCircle2 } from 'lucide-react'

interface AnimatedLetterProps {
  char: string
  progress: MotionValue<number>
  start: number
  end: number
}

const AnimatedLetter: React.FC<AnimatedLetterProps> = ({ char, progress, start, end }) => {
  const opacity = useTransform(progress, [start, end], [0.3, 1])
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

  const paragraphText = "Over the last five years, I have worked with Simplepay Gateway, 2EN Apps, and Senwave Retail Solutions to build secure, PCI-DSS compliant fintech systems, scalable government e-services, and custom retail dashboards."
  const characters = paragraphText.split("")
  const totalChars = characters.length

  return (
    <section id="about" ref={containerRef} className="py-20 sm:py-28 px-3 sm:px-6 bg-[#0a0d12] flex items-center justify-center">
      {/* Clean Developer Container (20% Linux Touch) */}
      <div className="w-full max-w-5xl rounded-2xl border border-[#30363d] bg-[#0d1117] shadow-xl overflow-hidden text-left relative">
        
        {/* Top Minimal Window Header */}
        <div className="h-10 bg-[#161b22] px-4 sm:px-6 flex items-center justify-between border-b border-[#30363d]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] inline-block" />
            </div>
            <span className="text-xs text-[#8b949e] font-mono ml-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#10b981]" />
              <span>~/about-anas.md</span>
            </span>
          </div>
          <div className="text-xs text-[#8b949e] font-mono hidden sm:inline">
            // Developer Profile &amp; Journey
          </div>
        </div>

        {/* Content Area (Clean, High Readability) */}
        <div className="p-6 sm:p-10 md:p-14 space-y-8">
          
          {/* Section Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs font-mono text-[#10b981]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>BACKGROUND &amp; PHILOSOPHY</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#e6edf3] tracking-tight leading-tight">
              Software Developer &amp; Payment Gateway Specialist with a passion for robust engineering.
            </h2>
            <p className="text-base sm:text-lg text-[#38bdf8] font-medium pt-1">
              Building secure, high-concurrency payment integrations and resilient backend architectures.
            </p>
          </div>

          {/* Clean Scroll-Revealed Text Container */}
          <div className="bg-[#11151c] border border-[#30363d] rounded-xl p-6 sm:p-8 space-y-6">
            <div className="text-base sm:text-lg md:text-xl text-[#e6edf3] leading-relaxed font-normal">
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

            {/* Clean Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#30363d]/60 text-xs">
              <div className="p-3.5 rounded-lg bg-[#161b22] border border-[#30363d]/70 space-y-1">
                <span className="text-[#8b949e] block text-xs font-medium">Experience</span>
                <span className="text-[#10b981] font-bold text-base sm:text-lg block font-mono">5+ Years</span>
                <span className="text-[11px] text-[#8b949e]">Production Work</span>
              </div>
              <div className="p-3.5 rounded-lg bg-[#161b22] border border-[#30363d]/70 space-y-1">
                <span className="text-[#8b949e] block text-xs font-medium">Delivered</span>
                <span className="text-[#38bdf8] font-bold text-base sm:text-lg block font-mono">20+ Projects</span>
                <span className="text-[11px] text-[#8b949e]">SaaS &amp; Portals</span>
              </div>
              <div className="p-3.5 rounded-lg bg-[#161b22] border border-[#30363d]/70 space-y-1">
                <span className="text-[#8b949e] block text-xs font-medium">Compliance</span>
                <span className="text-[#f59e0b] font-bold text-base sm:text-lg block font-mono">PCI-DSS</span>
                <span className="text-[11px] text-[#8b949e]">Level 1 Standard</span>
              </div>
              <div className="p-3.5 rounded-lg bg-[#161b22] border border-[#30363d]/70 space-y-1">
                <span className="text-[#8b949e] block text-xs font-medium">Reliability</span>
                <span className="text-[#c084fc] font-bold text-base sm:text-lg block font-mono">99.9% Uptime</span>
                <span className="text-[11px] text-[#8b949e]">High Concurrency</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
