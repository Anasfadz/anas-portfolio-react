import React from 'react'
import { Mail, ArrowRight } from 'lucide-react'

export const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 border-t border-neutral-900 overflow-hidden bg-black">
      
      {/* Background Image with Dark Overlay and Blur */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="/images/feature_server.png"
          alt="Server background"
          className="w-full h-full object-cover filter blur-[6px] scale-102"
        />
        <div className="absolute inset-0 bg-black/95 mix-blend-multiply" />
      </div>

      {/* Subtle Noise background */}
      <div className="absolute inset-0 bg-noise opacity-[0.10] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8 select-none">
        
        {/* Main Header Text */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <p className="text-sm font-bold text-primary uppercase tracking-widest">
            Let's Collaborate
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#E1E0CC] leading-tight">
            Ready to Scale Your Business?
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-light">
            Let's design a secure payment gateway integration, scale your customized backend portal, or develop a premium web platform tailored to your goals.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
          
          <a
            href="mailto:anasfadzrin@gmail.com"
            className="rounded-full font-bold px-8 h-12 bg-primary text-black hover:bg-[#cfcbb8] shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Mail className="h-5 w-5" />
            Start a Conversation
          </a>

          <a
            href="#projects"
            className="text-[#E1E0CC] font-semibold hover:text-primary transition-colors flex items-center gap-2"
          >
            View Portfolio
            <ArrowRight className="h-5 w-5" />
          </a>

        </div>

      </div>
    </section>
  )
}
