import React from 'react'
import { Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-900 bg-black relative z-10 py-16 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1 - Brand Info (span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="text-xl font-bold tracking-tight text-[#E1E0CC]">
              Anas<span className="text-primary font-extrabold">Fadzrin</span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm font-light">
              Providing secure, PCI-DSS compliant payment gateway integrations, high-performance Laravel applications, and scalable cross-platform mobile backends.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3.5 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <GithubIcon className="h-5 w-5 fill-current" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <LinkedinIcon className="h-5 w-5 fill-current" />
              </a>
              <a href="mailto:anasfadzrin@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Col 2 - Quick Links (span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#E1E0CC]">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '#' },
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Experience', href: '#experience' }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-primary transition-colors duration-200 font-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Services (span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#E1E0CC]">
              Core Services
            </h3>
            <ul className="space-y-2.5">
              {[
                'Payment Integrations',
                'Laravel API Engineering',
                'Database Optimization',
                'Mobile Sync Pipelines',
                'PCI-DSS Compliance Support'
              ].map((srv) => (
                <li key={srv} className="text-sm text-gray-400 font-light">
                  {srv}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Contact Details (span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#E1E0CC]">
              Get In Touch
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:anasfadzrin@gmail.com" className="hover:text-primary transition-colors break-all font-light">
                  anasfadzrin@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="font-light">Kuala Lumpur, Malaysia</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="border-t border-neutral-900 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500">
          <p>© {currentYear} Anas Fadzrin. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
