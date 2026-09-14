import React, { useState } from 'react'
import { Copy, Check, Terminal, Mail, ArrowRight, MessageSquare } from 'lucide-react'

export const ContactCTA: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const email = 'anasfadzrin@gmail.com'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28 border-t border-[#30363d] bg-[#0a0d12] text-left overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contact Window Box (20% Linux Touch) */}
        <div className="rounded-2xl border border-[#30363d] bg-[#0d1117] shadow-2xl overflow-hidden">
          
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
                <span>contact/reach_out.sh</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#10b981]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>AVAILABLE FOR HIRE</span>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-10 md:p-12 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs font-mono text-[#10b981]">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>LET'S COLLABORATE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#e6edf3] tracking-tight leading-tight">
                Ready to Build or Scale Your Payment Infrastructure?
              </h2>
              <p className="text-sm sm:text-base text-[#8b949e] leading-relaxed max-w-2xl font-normal">
                Whether you need a bulletproof FPX &amp; Credit Card gateway integration, PCI-DSS compliance architecture, or scalable Laravel backend development, I would love to discuss how I can help.
              </p>
            </div>

            {/* Direct Email Box */}
            <div className="bg-[#11151c] border border-[#30363d] rounded-xl p-5 sm:p-6 space-y-3">
              <div className="flex items-center justify-between text-xs text-[#8b949e]">
                <span className="flex items-center gap-2 font-medium">
                  <Mail className="w-4 h-4 text-[#38bdf8]" />
                  <span>DIRECT INBOX</span>
                </span>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#161b22] hover:bg-[#30363d] text-[#38bdf8] text-xs font-mono transition-colors border border-[#30363d] cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10b981]" />
                      <span className="text-[#10b981] font-bold">Copied to clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-base sm:text-xl text-[#e6edf3] font-bold font-mono select-all">
                {email}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                id="contact-email-btn"
                href={`mailto:${email}`}
                className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#10b981] text-black font-bold text-sm sm:text-base shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:brightness-110 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              <a
                id="contact-view-projects-btn"
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#161b22] text-[#e6edf3] border border-[#30363d] hover:border-[#38bdf8] hover:text-[#38bdf8] font-semibold text-sm sm:text-base transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-[#38bdf8]" />
              </a>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="h-8 bg-[#161b22] px-4 sm:px-6 flex items-center justify-between border-t border-[#30363d] text-xs text-[#8b949e] font-mono">
            <span>Response Time: Typically within 24 hours</span>
            <span className="hidden sm:inline">Kuala Lumpur, Malaysia (MYT)</span>
          </div>

        </div>

      </div>
    </section>
  )
}
