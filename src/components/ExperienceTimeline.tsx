import React from 'react'
import { Terminal, Calendar, MapPin, Briefcase, CheckCircle2 } from 'lucide-react'

export const ExperienceTimeline: React.FC = () => {
  const experiences = [
    {
      hash: 'v2023',
      role: 'Software Developer',
      company: 'Simplepay Gateway Sdn Bhd',
      period: '2023 — Present',
      location: 'Kuala Lumpur, Malaysia',
      badge: 'CURRENT ROLE',
      badgeColor: '#10b981',
      description:
        'Lead developer for regional payment processor integrations. Designed robust FPX API processing loops and automated settlement reporting engines. Ensured strict security standards by preparing code audits for PCI-DSS validation compliance.',
      achievements: [
        'Designed fault-tolerant FPX B2B/B2C online banking redirect & webhook pipelines',
        'Implemented Redis distributed locks eliminating double-spending on duplicate bank callbacks',
        'Engineered daily automated merchant reconciliation jobs and settlement reporting',
        'Prepared code audits and cryptographic payload signing for PCI-DSS validation'
      ],
      stack: ['Laravel 11', 'PHP 8.3', 'FPX Banking', 'PCI-DSS', 'Redis', 'MySQL']
    },
    {
      hash: 'v2021',
      role: 'Freelance Software Developer',
      company: 'Various Corporate Clients',
      period: '2021 — 2023',
      location: 'Remote / Hybrid',
      badge: 'ENTERPRISE CONTRACTS',
      badgeColor: '#38bdf8',
      description:
        'Built custom CRM systems, multi-tenant inventory SaaS products, and secure APIs for external mobile clients. Successfully deployed more than 15 production applications.',
      achievements: [
        'Architected multi-tenant database connection resolver with isolated client schemas',
        'Built tokenized RESTful endpoints with Laravel Sanctum for mobile applications',
        'Engineered real-time inventory decrement mechanisms on barcode checkout scans'
      ],
      stack: ['Laravel', 'Vue.js', 'Inertia.js', 'PostgreSQL', 'Tailwind CSS']
    },
    {
      hash: 'v2020',
      role: 'Software Developer',
      company: '2EN Apps Sdn Bhd',
      period: '2020 — 2021',
      location: 'Kuala Lumpur, Malaysia',
      badge: 'AGENCY DEV',
      badgeColor: '#f59e0b',
      description:
        'Maintained and updated web applications utilizing Laravel and Vue.js. Created tailored database migrations, streamlined API query speeds, and implemented SSO integrations.',
      achievements: [
        'Integrated enterprise Single Sign-On (SSO) authentication protocols',
        'Optimized complex database queries with composite indices, reducing page loads by 40%',
        'Developed interactive, reactive client portals using Vue.js'
      ],
      stack: ['Laravel', 'Vue.js', 'MySQL', 'REST API', 'Docker']
    },
    {
      hash: 'v2019',
      role: 'PHP Developer',
      company: 'Senwave Retail Solutions',
      period: '2019 — 2020',
      location: 'Selangor, Malaysia',
      badge: 'RETAIL SOLUTIONS',
      badgeColor: '#c084fc',
      description:
        'Engineered backend catalogs sync utilities and credit card checkout processing screens for client e-commerce platforms. Assisted in upgrading legacy PHP codebases to modern Laravel architectures.',
      achievements: [
        'Engineered product catalog synchronization utilities supporting 100,000+ retail SKUs',
        'Assisted in migrating legacy PHP procedural codebases to structured Laravel MVC patterns',
        'Implemented 3D Secure credit card payment flows for client e-commerce checkouts'
      ],
      stack: ['PHP 7.x', 'Laravel', 'MySQL', 'E-Commerce', 'JavaScript']
    }
  ]

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#0a0d12] relative border-t border-[#30363d] text-left overflow-hidden">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Window Container (20% Linux Touch) */}
        <div className="rounded-2xl border border-[#30363d] bg-[#0d1117] shadow-xl overflow-hidden">
          
          {/* Window Header */}
          <div className="h-10 bg-[#161b22] px-4 sm:px-6 flex items-center justify-between border-b border-[#30363d]">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] inline-block" />
              </div>
              <span className="text-xs text-[#8b949e] font-mono ml-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#10b981]" />
                <span>career/experience.log</span>
              </span>
            </div>
            <div className="text-xs font-mono text-[#8b949e] hidden sm:inline">
              5+ Years Production Engineering
            </div>
          </div>

          {/* Section Header */}
          <div className="p-6 sm:p-10 border-b border-[#30363d]/60 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs font-mono text-[#10b981]">
              <Briefcase className="w-3.5 h-3.5" />
              <span>CAREER MILESTONES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#e6edf3] tracking-tight">
              Work Experience &amp; Journey
            </h2>
            <p className="text-sm sm:text-base text-[#8b949e] max-w-3xl leading-relaxed">
              A timeline of engineering high-availability payment systems, architecting web microservices, and delivering client satisfaction.
            </p>
          </div>

          {/* Clean Timeline List */}
          <div className="p-6 sm:p-10 space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="relative pl-6 sm:pl-8 border-l-2 border-[#30363d] space-y-3 group hover:border-[#10b981] transition-colors"
              >
                {/* Timeline Node */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0d1117] border-2 border-[#10b981] group-hover:bg-[#10b981] transition-colors shadow-[0_0_8px_rgba(16,185,129,0.4)]" />

                {/* Card Container */}
                <div className="rounded-xl border border-[#30363d] bg-[#11151c] p-6 space-y-4 hover:border-[#38bdf8]/40 transition-all shadow-md">
                  
                  {/* Role Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#30363d]/60 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#161b22] border border-[#30363d]" style={{ color: exp.badgeColor }}>
                          {exp.badge}
                        </span>
                        <span className="text-xs font-mono text-[#8b949e]">
                          tag: {exp.hash}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#e6edf3] group-hover:text-[#38ef7d] transition-colors mt-1">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-[#38bdf8]">
                        @ {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1 text-xs text-[#8b949e] font-mono">
                      <span className="flex items-center gap-1.5 text-[#e6edf3]">
                        <Calendar className="w-3.5 h-3.5 text-[#10b981]" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#38bdf8]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#8b949e] leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-mono font-bold text-[#e6edf3] block uppercase tracking-wider">
                      Key Responsibilities &amp; Impact:
                    </span>
                    <ul className="space-y-2">
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2.5 text-xs text-[#e6edf3] leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 border-t border-[#30363d]/60 flex flex-wrap items-center gap-1.5">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161b22] text-[#8b949e] border border-[#30363d]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
