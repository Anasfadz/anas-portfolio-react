import React from 'react'
import { Mail, MapPin, Terminal, Cpu } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#30363d] bg-[#0a0d12] relative z-10 py-14 text-left select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* System Terminal Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-[#11151c] border border-[#30363d] rounded-lg p-3 sm:p-4 mb-12 text-xs text-[#8b949e]">
          <div className="flex items-center gap-2 text-[#38ef7d]">
            <Terminal className="w-4 h-4 text-[#10b981]" />
            <span className="font-bold">SYSTEM STATUS: 200 OK</span>
            <span className="text-[#8b949e] hidden sm:inline">|</span>
            <span className="text-[#38bdf8] hidden sm:inline">KERNEL: 6.12.9-PCI-DSS</span>
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span className="flex items-center gap-1 text-[#e6edf3]">
              <Cpu className="w-3.5 h-3.5 text-[#f59e0b]" />
              LOAD: 0.05
            </span>
            <span className="text-[#10b981]">UPTIME: 5Y+ PROD</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 text-xs">
          
          {/* Col 1 - Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="text-lg font-bold tracking-tight text-[#e6edf3] flex items-center gap-2">
              <span className="text-[#10b981]">&gt;</span>
              <span>anas@<span className="text-[#38ef7d]">fadzrin</span>:~$</span>
            </a>
            <p className="text-[#8b949e] leading-relaxed max-w-sm">
              Providing secure, PCI-DSS compliant payment gateway integrations, high-performance Laravel applications, and scalable cross-platform mobile backends.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-1">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#8b949e] hover:text-[#38ef7d] transition-colors"
                title="GitHub"
              >
                <GithubIcon className="h-5 w-5 fill-current" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#8b949e] hover:text-[#38bdf8] transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5 fill-current" />
              </a>
              <a
                href="mailto:anasfadzrin@gmail.com"
                className="text-[#8b949e] hover:text-[#f59e0b] transition-colors"
                title="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Col 2 - Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#e6edf3] border-b border-[#30363d] pb-1">
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { label: '~/hero', href: '#' },
                { label: '~/about', href: '#about' },
                { label: '~/services', href: '#expertise' },
                { label: '~/projects', href: '#projects' },
                { label: '~/timeline', href: '#experience' }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#8b949e] hover:text-[#38bdf8] transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Services */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#e6edf3] border-b border-[#30363d] pb-1">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                'Payment Integrations (FPX / Card)',
                'Laravel RESTful APIs',
                'Database & Cache Tuning',
                'Mobile Sync Pipelines',
                'PCI-DSS Compliance Audits'
              ].map((srv) => (
                <li key={srv} className="text-[#8b949e]">
                  {srv}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#e6edf3] border-b border-[#30363d] pb-1">
              Host Details
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[#8b949e]">
                <Mail className="h-4 w-4 text-[#38ef7d] shrink-0" />
                <a href="mailto:anasfadzrin@gmail.com" className="hover:text-[#38ef7d] transition-colors break-all">
                  anasfadzrin@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#8b949e]">
                <MapPin className="h-4 w-4 text-[#38bdf8] shrink-0" />
                <span>Kuala Lumpur, Malaysia</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="border-t border-[#30363d] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8b949e]">
          <p>© {currentYear} Anas Fadzrin. Linux Workstation Edition. All rights reserved.</p>
          <div className="flex space-x-6 text-[11px]">
            <span className="text-[#38ef7d]">TTY 1</span>
            <span className="text-[#38bdf8]">Arch Linux 6.12</span>
            <span className="text-[#f59e0b]">zsh 5.9</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
