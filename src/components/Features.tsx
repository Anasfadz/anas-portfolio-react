import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle'

export const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const headerSegments1 = [
    { text: "Robust Payment Gateways & Scalable Apps.", className: "text-[#E1E0CC] font-normal" }
  ]
  const headerSegments2 = [
    { text: "Built for compliance. Powered by code.", className: "text-gray-500 font-normal" }
  ]

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const cards = [
    {
      type: 'image',
      imageUrl: '/images/cinematic_canvas.png',
      text: '5+ Years Experience • 20+ Projects • 99.9% Uptime'
    },
    {
      type: 'text',
      num: '01',
      title: 'Simplepay Gateway.',
      icon: '/images/icon_payment.png',
      items: [
        'FPX & Credit Card integration',
        'PCI-DSS compliance standard',
        'Secure webhooks & callbacks',
        'Government e-Services portal'
      ]
    },
    {
      type: 'text',
      num: '02',
      title: 'StockOps Inventory.',
      icon: '/images/icon_inventory.png',
      items: [
        'Multi-tenant inventory SaaS',
        'Inertia.js & Vue 3 frontend',
        'Laravel 11 backend api',
        'Retail Admin Dashboard sync'
      ]
    },
    {
      type: 'text',
      num: '03',
      title: 'Mobile App & API.',
      icon: '/images/icon_mobile.png',
      items: [
        'Flutter mobile native client',
        'Laravel Sanctum authentication',
        'Secure REST API development',
        'Downloadable release APK'
      ]
    }
  ]

  return (
    <section id="projects" className="min-h-screen bg-black relative py-20 md:py-32 overflow-hidden flex flex-col justify-center items-center">
      {/* Background Subtle Noise Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none z-0" />

      {/* Header Container */}
      <div className="w-full text-center px-4 z-10 select-none flex flex-col gap-2">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          <WordsPullUpMultiStyle segments={headerSegments1} />
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          <WordsPullUpMultiStyle segments={headerSegments2} />
        </div>
      </div>

      {/* Staggered Grid Container */}
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 z-10"
      >
        {cards.map((card, idx) => {
          if (card.type === 'image') {
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="relative overflow-hidden rounded-2xl md:rounded-[1.5rem] h-[320px] lg:h-full group"
              >
                <img
                  src={card.imageUrl}
                  alt={card.text}
                  className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-10" />
                <div className="absolute bottom-6 left-6 right-6 z-20 text-left">
                  <p className="text-[#E1E0CC] text-sm sm:text-base font-semibold leading-relaxed tracking-wide font-mono">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            )
          } else {
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-[#212121] rounded-2xl md:rounded-[1.5rem] p-6 sm:p-8 flex flex-col justify-between h-[360px] lg:h-full border border-neutral-800 text-left group"
              >
                {/* Card Header Info */}
                <div className="flex flex-col items-start w-full">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-xl pointer-events-none select-none"
                  />
                  <div className="flex justify-between items-center w-full mt-6">
                    <h3 className="text-[#E1E0CC] text-lg sm:text-xl font-medium tracking-tight">
                      {card.title}
                    </h3>
                    <span className="text-gray-500 font-mono text-xs sm:text-sm">
                      ({card.num})
                    </span>
                  </div>
                </div>

                {/* Card Checklist */}
                <ul className="flex flex-col gap-3 my-6 text-left">
                  {card.items?.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-400 text-xs sm:text-sm font-normal">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Card Footer Link */}
                <a
                  href="#contact"
                  className="group/link flex items-center gap-1.5 text-[#E1E0CC] text-xs sm:text-sm font-medium hover:underline mt-auto select-none"
                >
                  <span>Inquire integration</span>
                  <ArrowRight className="w-3.5 h-3.5 transform -rotate-45 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </motion.div>
            )
          }
        })}
      </motion.div>
    </section>
  )
}
