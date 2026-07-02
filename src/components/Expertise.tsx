import React from 'react'
import { ShieldCheck, Code } from 'lucide-react'

export const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-20 border-t border-neutral-900 bg-black relative overflow-hidden">
      {/* Background Noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.10] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Stacked / Overlapping Media (Image & Video) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center py-8 lg:py-0 select-none">
            <div className="relative w-full max-w-[440px] aspect-[4/3] sm:aspect-square">
              {/* Bottom Image Container */}
              <div className="absolute top-12 left-0 w-3/4 aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden shadow-xl border border-neutral-900 bg-card transform -rotate-2 hover:rotate-0 transition-all duration-500 z-10">
                <img
                  src="/images/cinematic_canvas.png"
                  alt="Cinematic abstract code lines"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top Image Container (Generated Cinematic Dashboard) */}
              <div className="absolute top-[-20px] right-0 w-3/4 aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-neutral-900 bg-[#101010] transform rotate-3 hover:rotate-0 transition-all duration-500 z-20">
                <img
                  src="/images/cinematic_dashboard.png"
                  alt="Cinematic payment dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Skill details */}
          <div className="lg:col-span-6 order-1 lg:order-2 text-left space-y-6">
            <div className="space-y-2 select-none">
              <p className="text-sm font-bold text-primary uppercase tracking-widest">Expertise & Services</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#E1E0CC] leading-tight">
                Robust Payment Gateways & Scalable Apps
              </h2>
            </div>
            
            <p className="text-gray-400 leading-relaxed text-base sm:text-lg font-light">
              I specialize in designing and engineering high-availability, highly secure payment solutions and complex web architectures. My engineering practices prioritize security, testability, and standard-compliant practices.
            </p>

            <div className="space-y-6 pt-2">
              
              {/* Point 1 */}
              <div className="flex gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-2xl h-fit">
                  <ShieldCheck className="h-6 w-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#E1E0CC]">Payment Gateway Integration</h3>
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed font-light">
                    Integration of regional options (FPX online banking, credit/debit card processors), designing bulletproof webhook handlers, resolving double-spend issues, and ensuring PCI-DSS compliance audits.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-2xl h-fit">
                  <Code className="h-6 w-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#E1E0CC]">Laravel & PHP Specialists</h3>
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed font-light">
                    Building microservices, secure API endpoints, scalable database models, and maintaining standard MVC architectures using modern PHP 8.x + Laravel patterns, unit-tested and fully documented.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
