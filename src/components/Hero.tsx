import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { WordsPullUp } from './WordsPullUp'

export const Hero: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const navItems = ["About", "Projects", "Experience", "Contact"]
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true
      videoRef.current.muted = true
      videoRef.current.play().catch((err) => {
        console.warn("Video autoplay failed or was prevented:", err)
      })
    }
  }, [])

  return (
    <section className="h-screen w-full relative bg-black p-4 md:p-6 overflow-hidden">
      {/* Inner rounded container creating the inset frame */}
      <div className="w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden relative flex flex-col justify-between">
        
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            type="video/mp4"
          />
        </video>

        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none z-10" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none z-10" />

        {/* Navbar */}
        <header className="absolute top-0 left-0 right-0 flex justify-center z-20 pointer-events-none">
          <nav className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 flex items-center justify-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 pointer-events-auto">
            {navItems.map((item, idx) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: hoveredIdx === idx ? '#E1E0CC' : 'rgba(225, 224, 204, 0.8)',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="text-[10px] sm:text-xs md:text-sm tracking-wide font-normal"
              >
                {item}
              </a>
            ))}
          </nav>
        </header>

        {/* Empty flex spacer to push grid to bottom */}
        <div className="flex-grow" />

        {/* Hero Content (bottom-aligned) */}
        <div className="w-full relative z-20 p-6 sm:p-8 md:p-12 pb-8 md:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-end w-full">
            
            {/* Left Column: Heading */}
            <div className="lg:col-span-8 flex flex-col justify-end items-center md:items-start text-center md:text-left select-none">
              <WordsPullUp
                text="Anas Fadzrin"
                showAsterisk={true}
                className="font-medium leading-[0.85] tracking-[-0.07em] text-[#E1E0CC] text-[21vw] sm:text-[20vw] md:text-[16vw] lg:text-[12vw] xl:text-[11vw] 2xl:text-[11vw]"
              />
            </div>

            {/* Right Column: Description + Button */}
            <div className="lg:col-span-4 flex flex-col items-start gap-6 pb-4 lg:pb-10 lg:pl-8">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="text-primary/70 text-xs sm:text-sm md:text-base font-normal text-left"
                style={{ lineHeight: '1.2' }}
              >
               I am a software developer specializing in FPX & Credit Card payment integration, PCI-DSS compliance, and high-performance Laravel & React applications that drive business growth.
              </motion.p>

              <motion.a
                href="#projects"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.7,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="group flex items-center justify-between pl-6 pr-2 py-2 bg-primary text-black rounded-full font-medium text-sm sm:text-base gap-2 hover:gap-3 transition-all duration-300 cursor-pointer"
              >
                <span>View Projects</span>
                <span className="flex items-center justify-center bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 transform transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#E1E0CC]" />
                </span>
              </motion.a>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
