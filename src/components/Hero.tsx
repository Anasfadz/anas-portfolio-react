import { useState } from 'react'
import { Terminal, ArrowRight, Mail, ShieldCheck, Zap, Code2, Server } from 'lucide-react'
import { WordsPullUp } from './WordsPullUp'

export const Hero: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#expertise" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ]

  return (
    <section id="hero" className="min-h-screen w-full relative bg-[#0a0d12] pt-14 pb-12 px-3 sm:px-6 flex flex-col justify-center">
      {/* Modern Developer Window Frame (20% Linux Touch) */}
      <div className="w-full max-w-7xl mx-auto rounded-2xl border border-[#30363d] bg-[#0d1117] shadow-2xl overflow-hidden relative flex flex-col justify-between">
        
        {/* Subtle Ambient Background Gradient (Clean & Readable) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(16,185,129,0.12),rgba(255,255,255,0))] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none z-0" />

        {/* Window Header */}
        <div className="relative z-20 h-11 bg-[#161b22] px-4 sm:px-6 flex items-center justify-between border-b border-[#30363d]">
          {/* Window Controls & Breadcrumb */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ef4444] inline-block shadow-[0_0_6px_rgba(239,68,68,0.5)]" />
              <span className="w-3 h-3 rounded-full bg-[#f59e0b] inline-block shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
              <span className="w-3 h-3 rounded-full bg-[#10b981] inline-block shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs text-[#8b949e] font-mono ml-2">
              <Terminal className="w-3.5 h-3.5 text-[#10b981]" />
              <span className="text-[#e6edf3] font-medium">anas@portfolio</span>
              <span>:</span>
              <span className="text-[#38bdf8]">~/welcome</span>
            </div>
          </div>

          {/* Quick Nav Bar Tabs */}
          <nav className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                  hoveredIdx === idx
                    ? 'bg-[#30363d] text-[#10b981]'
                    : 'text-[#8b949e] hover:text-[#e6edf3]'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Hero Content Body (80% Clean Content, 20% Developer Accents) */}
        <div className="relative z-20 p-6 sm:p-10 md:p-14 space-y-8 text-left">
          
          {/* Subtle Terminal Command Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#161b22] border border-[#30363d] text-xs font-mono text-[#8b949e]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span className="text-[#38ef7d] font-bold">$ whoami:</span>
            <span className="text-[#e6edf3]">Software Developer &amp; Payment Gateway Specialist</span>
          </div>

          {/* Main Hero Heading */}
          <div className="space-y-4">
            <div className="select-none">
              <WordsPullUp
                text="Anas Fadzrin"
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#e6edf3] tracking-tight leading-[0.95]"
              />
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-[#38bdf8] font-semibold tracking-tight">
              Building secure payment infrastructure &amp; scalable web platforms.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[#8b949e] leading-relaxed max-w-3xl font-normal">
              Specialized in engineering high-concurrency payment integrations (FPX &amp; Credit Cards), PCI-DSS compliance standards, and high-performance Laravel &amp; React systems that handle mission-critical financial transactions.
            </p>
          </div>

          {/* Clean Key Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
            <div className="p-4 rounded-xl bg-[#11151c] border border-[#30363d] space-y-1.5 hover:border-[#10b981]/50 transition-colors">
              <div className="flex items-center gap-2 text-[#10b981]">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-bold text-xs uppercase tracking-wider">Payments</span>
              </div>
              <p className="text-sm font-bold text-[#e6edf3]">FPX &amp; Credit Card Switch</p>
              <p className="text-xs text-[#8b949e]">Zero double-spending &amp; resilient webhook reconciliation</p>
            </div>

            <div className="p-4 rounded-xl bg-[#11151c] border border-[#30363d] space-y-1.5 hover:border-[#38bdf8]/50 transition-colors">
              <div className="flex items-center gap-2 text-[#38bdf8]">
                <Code2 className="w-4 h-4" />
                <span className="font-bold text-xs uppercase tracking-wider">Backend</span>
              </div>
              <p className="text-sm font-bold text-[#e6edf3]">Laravel 11 &amp; PHP 8.x</p>
              <p className="text-xs text-[#8b949e]">High-concurrency APIs, Redis event queues &amp; MySQL</p>
            </div>

            <div className="p-4 rounded-xl bg-[#11151c] border border-[#30363d] space-y-1.5 hover:border-[#f59e0b]/50 transition-colors">
              <div className="flex items-center gap-2 text-[#f59e0b]">
                <Server className="w-4 h-4" />
                <span className="font-bold text-xs uppercase tracking-wider">Compliance</span>
              </div>
              <p className="text-sm font-bold text-[#e6edf3]">PCI-DSS Validation</p>
              <p className="text-xs text-[#8b949e]">End-to-end cryptographic encryption &amp; audit logging</p>
            </div>

            <div className="p-4 rounded-xl bg-[#11151c] border border-[#30363d] space-y-1.5 hover:border-[#c084fc]/50 transition-colors">
              <div className="flex items-center gap-2 text-[#c084fc]">
                <Zap className="w-4 h-4" />
                <span className="font-bold text-xs uppercase tracking-wider">Experience</span>
              </div>
              <p className="text-sm font-bold text-[#e6edf3]">5+ Years in Production</p>
              <p className="text-xs text-[#8b949e]">20+ enterprise web platforms &amp; mobile clients deployed</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              id="hero-view-projects-btn"
              href="#projects"
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#10b981] text-black font-bold text-sm sm:text-base shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:brightness-110 transition-all cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              id="hero-contact-btn"
              href="#contact"
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#161b22] text-[#e6edf3] border border-[#30363d] hover:border-[#38bdf8] hover:text-[#38bdf8] font-semibold text-sm sm:text-base transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#38bdf8]" />
              <span>Contact Me</span>
            </a>

            <a
              href="#expertise"
              className="text-xs sm:text-sm text-[#8b949e] hover:text-[#e6edf3] underline underline-offset-4 transition-colors font-mono pl-2"
            >
              View Services &amp; Skills &rarr;
            </a>
          </div>

        </div>

        {/* Window Bottom Status Bar */}
        <div className="relative z-20 h-8 bg-[#161b22] px-4 sm:px-6 flex items-center justify-between border-t border-[#30363d] text-xs text-[#8b949e] font-mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10b981]" />
              <span className="text-[#e6edf3] font-medium">STATUS: READY</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Kuala Lumpur, Malaysia</span>
          </div>
          <div>
            <span>Press <code className="text-[#38ef7d] bg-[#11151c] px-1.5 py-0.5 rounded border border-[#30363d]">`</code> for CLI terminal</span>
          </div>
        </div>

      </div>
    </section>
  )
}
