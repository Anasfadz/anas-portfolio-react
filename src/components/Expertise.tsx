import React from 'react'
import { Terminal, ShieldCheck, Code2, Server, CheckCircle2, Zap } from 'lucide-react'

export const Expertise: React.FC = () => {
  const services = [
    {
      id: 'payments',
      title: 'Payment Gateway Integration',
      subtitle: 'Regional FPX & Card Processing',
      badge: 'FINTECH CORE',
      badgeColor: '#10b981',
      icon: ShieldCheck,
      description:
        'Comprehensive integration of regional payment rails including FPX B2B/B2C online banking and Visa/Mastercard processing. Designed to handle high concurrent traffic with guaranteed transaction integrity.',
      points: [
        'FPX online banking integration with automated bank redirect workflows',
        'Idempotent webhook callback handlers eliminating double-spending',
        'Automated settlement engines and merchant reconciliation pipelines',
        'Direct multi-bank routing with instant failure fallback mechanisms'
      ],
      technologies: ['FPX B2B/B2C', 'Credit Cards', 'Webhooks', 'Redis Locks', 'TLS 1.3']
    },
    {
      id: 'laravel',
      title: 'Laravel & Backend Engineering',
      subtitle: 'High-Concurrency Web APIs',
      badge: 'PHP 8.x & LARAVEL',
      badgeColor: '#38bdf8',
      icon: Code2,
      description:
        'Scalable backend systems built on modern PHP 8.3 and Laravel 11. Designed with clean modular domain architectures, event-driven queues, and optimized database indexing for enterprise workloads.',
      points: [
        'Robust RESTful API design with comprehensive documentation',
        'Asynchronous queue processing with Redis for background jobs',
        'Database query tuning, composite indexing & caching strategies',
        'Laravel Sanctum token authentication & role-based access control'
      ],
      technologies: ['Laravel 11', 'PHP 8.3', 'MySQL', 'Redis', 'Docker', 'REST API']
    },
    {
      id: 'security',
      title: 'PCI-DSS Compliance & Security',
      subtitle: 'Data Protection & Audit Standards',
      badge: 'SECURITY SENTINEL',
      badgeColor: '#f59e0b',
      icon: Server,
      description:
        'Preparing, architecting, and maintaining payment environments that satisfy strict PCI-DSS audit regulations. Prioritizing cryptographic security, zero-trust data access, and tamper-proof audit trails.',
      points: [
        'End-to-end payload encryption using AES-256-GCM standards',
        'Cryptographic request signing with RSA-4096 certificates',
        'Cardholder tokenization preventing raw PAN exposure',
        'Automated discrepancy alerts & daily settlement audit logs'
      ],
      technologies: ['PCI-DSS Level 1', 'AES-256', 'RSA-4096', 'Audit Trails', 'Tokenization']
    }
  ]

  return (
    <section id="expertise" className="py-20 sm:py-28 border-t border-[#30363d] bg-[#0a0d12] text-left relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Window Frame (20% Linux Touch) */}
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
                <span>services.conf</span>
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#10b981]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>ALL SERVICES OPERATIONAL</span>
            </div>
          </div>

          {/* Section Header */}
          <div className="p-6 sm:p-10 border-b border-[#30363d]/60 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs font-mono text-[#38bdf8]">
              <Zap className="w-3.5 h-3.5" />
              <span>WHAT I SPECIALIZE IN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#e6edf3] tracking-tight">
              Expertise &amp; Core Services
            </h2>
            <p className="text-sm sm:text-base text-[#8b949e] max-w-3xl leading-relaxed">
              Engineering secure financial technology, scalable backend microservices, and compliance-driven web portals for regional businesses.
            </p>
          </div>

          {/* 3 Core Services Cards */}
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((srv) => {
              const Icon = srv.icon
              return (
                <div
                  key={srv.id}
                  className="rounded-xl border border-[#30363d] bg-[#11151c] p-6 flex flex-col justify-between hover:border-[#10b981]/50 transition-all duration-300 group shadow-md"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 border-b border-[#30363d]/60 pb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2.5 rounded-lg bg-[#161b22] border border-[#30363d] text-[#10b981]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-bold block" style={{ color: srv.badgeColor }}>
                            {srv.badge}
                          </span>
                          <h3 className="text-lg font-bold text-[#e6edf3] group-hover:text-[#38ef7d] transition-colors leading-snug">
                            {srv.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Subtitle & Description */}
                    <p className="text-xs text-[#8b949e] font-medium leading-relaxed">
                      {srv.description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 pt-2">
                      {srv.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs text-[#e6edf3] leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Tags */}
                  <div className="pt-6 mt-6 border-t border-[#30363d]/60 flex flex-wrap items-center gap-1.5">
                    {srv.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161b22] text-[#8b949e] border border-[#30363d]"
                      >
                        {tech}
                      </span>
                    ))}
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
