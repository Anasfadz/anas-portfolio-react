import React from 'react'
import { Briefcase, Calendar } from 'lucide-react'

export const ExperienceTimeline: React.FC = () => {
  const experiences = [
    {
      role: 'Software Developer',
      company: 'Simplepay Gateway Sdn Bhd',
      period: '2023 — Present',
      description: 'Lead developer for regional payment processor integrations. Designed robust FPX API processing loops and automated settlement reporting engines. Ensured strict security standards by preparing code audits for PCI-DSS validation compliance.'
    },
    {
      role: 'Freelance Software Developer',
      company: 'Various Corporate Clients',
      period: '2021 — 2023',
      description: 'Built custom CRM systems, multi-tenant inventory SaaS products, and secure APIs for external mobile clients. Successfully deployed more than 15 production applications.'
    },
    {
      role: 'Software Developer',
      company: '2EN Apps Sdn Bhd',
      period: '2020 — 2021',
      description: 'Maintained and updated web applications utilizing Laravel and Vue.js. Created tailored database migrations, streamlined API query speeds, and implemented SSO integrations.'
    },
    {
      role: 'PHP Developer',
      company: 'Senwave Retail Solutions',
      period: '2019 — 2020',
      description: 'Engineered backend catalogs sync utilities and credit card checkout processing screens for client e-commerce platforms. Assisted in upgrading legacy PHP codebases to modern Laravel architectures.'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-black relative border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16 select-none">
          <p className="text-sm font-bold text-primary uppercase tracking-widest">My Journey</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#E1E0CC]">
            Professional Experience
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto font-light">
            A history of building secure payment systems, architecting high-performance portals, and delivering client satisfaction.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-neutral-900 pl-6 sm:pl-8 ml-4 sm:ml-6 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.company} className="relative text-left group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[39px] sm:-left-[47px] top-1 bg-black border-2 border-primary/50 group-hover:border-primary text-primary p-1.5 sm:p-2 rounded-full shadow-md transition-colors duration-300">
                <Briefcase className="h-4 w-4 stroke-[2.2]" />
              </div>

              {/* Card Container */}
              <div className="bg-[#101010] border border-neutral-900 rounded-2xl p-6 shadow-sm group-hover:shadow-md group-hover:border-primary/20 transition-all duration-300">
                
                {/* Meta details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-900 pb-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#E1E0CC] leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-bold text-primary mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#212121] border border-neutral-800 text-xs font-semibold text-gray-400 w-fit">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.period}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {exp.description}
                </p>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
