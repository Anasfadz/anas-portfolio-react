import React from 'react'
import { Terminal, Check, GitBranch, ExternalLink, Layers, CreditCard, Boxes, Smartphone } from 'lucide-react'

export const Features: React.FC = () => {
  const projects = [
    {
      id: 'simplepay',
      title: 'Simplepay Gateway',
      category: 'Fintech & Payment Gateway',
      icon: CreditCard,
      badge: 'PCI-DSS LEVEL 1',
      badgeColor: '#10b981',
      description:
        'High-availability payment switch engine integrating regional FPX online banking and credit card processors with zero double-spending guarantees and automated merchant settlements.',
      features: [
        'FPX B2B & B2C multi-bank redirect & asynchronous server callbacks',
        'Cryptographic RSA-4096 request signing meeting PCI-DSS audits',
        'Automated settlement batch reconciliation and merchant payout reports',
        'High-concurrency Redis idempotency locks preventing duplicate transactions'
      ],
      stack: ['Laravel 11', 'PHP 8.3', 'FPX B2B/B2C', 'PCI-DSS', 'Redis', 'MySQL'],
      metric: '99.99% Uptime in Production'
    },
    {
      id: 'stockops',
      title: 'StockOps Inventory SaaS',
      category: 'Enterprise Cloud Platform',
      icon: Boxes,
      badge: 'MULTI-TENANT SAAS',
      badgeColor: '#38bdf8',
      description:
        'Multi-tenant cloud inventory & POS sync platform engineered for enterprise retailers with multi-branch synchronization and real-time warehouse catalog updates.',
      features: [
        'Multi-tenant database segregation with automated tenant onboarding',
        'Real-time retail inventory synchronization with barcode & POS integration',
        'Inertia.js + Vue 3 dynamic dashboard with zero-reload state management',
        'Role-based granular access control (RBAC) with detailed audit trail logs'
      ],
      stack: ['Laravel 11', 'Inertia.js', 'Vue 3', 'Tailwind CSS', 'PostgreSQL'],
      metric: '50+ Retail Branches Synced'
    },
    {
      id: 'mobile-api',
      title: 'Mobile App & REST API',
      category: 'Cross-Platform Client',
      icon: Smartphone,
      badge: 'MOBILE & API',
      badgeColor: '#c084fc',
      description:
        'Fluid native cross-platform mobile client client-backend solution built with Flutter and paired with high-performance, tokenized Laravel Sanctum REST APIs.',
      features: [
        'Flutter compiled client delivering responsive 60fps mobile interfaces',
        'Laravel Sanctum token authentication with automatic token rotation',
        'Optimized JSON serialization payloads minimizing cellular data transfer',
        'Background data synchronization with offline-first local SQLite caching'
      ],
      stack: ['Flutter', 'Dart', 'Laravel Sanctum', 'RESTful API', 'Docker'],
      metric: '< 120ms API Response Time'
    }
  ]

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#0a0d12] relative border-t border-[#30363d] text-left overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Window Frame (20% Linux Touch) */}
        <div className="rounded-2xl border border-[#30363d] bg-[#0d1117] shadow-xl overflow-hidden">
          
          {/* Minimal Terminal Header */}
          <div className="h-10 bg-[#161b22] px-4 sm:px-6 flex items-center justify-between border-b border-[#30363d]">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] inline-block" />
              </div>
              <span className="text-xs text-[#8b949e] font-mono ml-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#10b981]" />
                <span>repositories/featured</span>
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs font-mono text-[#8b949e]">
              <GitBranch className="w-3 h-3 text-[#10b981]" />
              <span>branch: production</span>
            </div>
          </div>

          {/* Section Heading */}
          <div className="p-6 sm:p-10 border-b border-[#30363d]/60 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs font-mono text-[#10b981]">
              <Layers className="w-3.5 h-3.5" />
              <span>PROVEN PRODUCTION SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#e6edf3] tracking-tight">
              Featured Projects &amp; Platforms
            </h2>
            <p className="text-sm sm:text-base text-[#8b949e] max-w-3xl leading-relaxed">
              A selection of enterprise applications, payment switches, and multi-tenant platforms delivered for corporate clients.
            </p>
          </div>

          {/* Projects Cards Grid */}
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map((proj) => {
              const Icon = proj.icon
              return (
                <div
                  key={proj.id}
                  className="rounded-xl border border-[#30363d] bg-[#11151c] p-6 flex flex-col justify-between hover:border-[#10b981]/50 transition-all duration-300 group shadow-md"
                >
                  <div className="space-y-4">
                    {/* Card Header */}
                    <div className="flex items-start justify-between gap-3 border-b border-[#30363d]/60 pb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-xl border border-[#30363d] bg-[#161b22] flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform"
                          style={{ color: proj.badgeColor }}
                        >
                          <Icon className="w-6 h-6 stroke-[2]" />
                        </div>
                        <div>
                        <span className="text-[10px] font-mono font-bold block" style={{ color: proj.badgeColor }}>
                          {proj.badge}
                        </span>
                        <h3 className="text-lg font-bold text-[#e6edf3] group-hover:text-[#38ef7d] transition-colors leading-snug">
                          {proj.title}
                        </h3>
                        <span className="text-xs text-[#8b949e] block">{proj.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#8b949e] leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-mono font-bold text-[#e6edf3] block uppercase tracking-wider">
                      Key Highlights:
                    </span>
                    <ul className="space-y-2">
                      {proj.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-[#e6edf3] leading-relaxed">
                          <Check className="w-3.5 h-3.5 text-[#10b981] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metric Pill */}
                  <div className="p-2.5 rounded-lg bg-[#161b22] border border-[#30363d]/70 text-xs font-mono text-[#38ef7d] flex items-center justify-between">
                    <span className="text-[#8b949e] text-[11px]">Metric:</span>
                    <span className="font-bold">{proj.metric}</span>
                  </div>
                </div>

                {/* Footer: Tech Stack & Link */}
                <div className="pt-6 mt-6 border-t border-[#30363d]/60 space-y-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {proj.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161b22] text-[#8b949e] border border-[#30363d]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="flex items-center justify-between text-xs font-semibold text-[#38bdf8] hover:text-[#10b981] transition-colors pt-1 group/link"
                  >
                    <span>Inquire project integration &rarr;</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            )
          })}
          </div>

        </div>

      </div>
    </section>
  )
}
