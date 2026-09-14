import React, { useState, useEffect, useRef } from 'react'
import { Terminal, X, Minus, Square } from 'lucide-react'

interface TerminalDrawerProps {
  isOpen: boolean
  onClose: () => void
  isDark?: boolean
  onToggleTheme?: () => void
}

interface CommandHistory {
  command: string
  output: React.ReactNode
}

export const TerminalDrawer: React.FC<TerminalDrawerProps> = ({
  isOpen,
  onClose,
  isDark,
  onToggleTheme,
}) => {
  const [inputVal, setInputVal] = useState('')
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'neofetch',
      output: (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 text-xs">
          <div className="md:col-span-4 text-[#38ef7d] font-bold whitespace-pre leading-tight">
{`   /\\
  /  \\
 / /\\ \\     anas@archlinux
/ /__\\ \\    --------------
\\/      \\   OS: Arch Linux x86_64
            Kernel: 6.12.9-pci-dss
            Uptime: 5+ years in prod`}
          </div>
          <div className="md:col-span-8 space-y-0.5 text-[#e6edf3]">
            <p><span className="text-[#38bdf8] font-semibold">Role:</span> Senior Software Developer & Payment Specialist</p>
            <p><span className="text-[#38bdf8] font-semibold">Core:</span> Laravel 11, PHP 8.3, React 19, FPX, PCI-DSS</p>
            <p><span className="text-[#38bdf8] font-semibold">Location:</span> Kuala Lumpur, Malaysia</p>
            <p className="text-[#8b949e]">Type <span className="text-[#f59e0b] font-bold">help</span> to view available commands.</p>
          </div>
        </div>
      ),
    },
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  // Keyboard shortcut listener for toggle: backtick key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' && !e.ctrlKey && !e.metaKey && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault()
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = inputVal.trim()
    if (!trimmed) return

    const lower = trimmed.toLowerCase()
    let output: React.ReactNode = null

    switch (lower) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs text-[#e6edf3]">
            <p className="text-[#f59e0b] font-bold">Available Commands:</p>
            <p><span className="text-[#38ef7d] font-bold">neofetch</span> - Display developer system information</p>
            <p><span className="text-[#38ef7d] font-bold">whoami</span> - Print current developer profile</p>
            <p><span className="text-[#38ef7d] font-bold">skills</span> - List technologies, languages, and tools</p>
            <p><span className="text-[#38ef7d] font-bold">projects</span> - View featured production projects</p>
            <p><span className="text-[#38ef7d] font-bold">experience</span> - View company work history</p>
            <p><span className="text-[#38ef7d] font-bold">contact</span> - Display email and social links</p>
            <p><span className="text-[#38ef7d] font-bold">theme</span> - Toggle between dark and light mode</p>
            <p><span className="text-[#38ef7d] font-bold">clear</span> - Clean terminal buffer</p>
            <p><span className="text-[#38ef7d] font-bold">exit</span> - Close terminal drawer</p>
          </div>
        )
        break

      case 'theme':
      case 'theme light':
      case 'theme dark':
        if (onToggleTheme) {
          onToggleTheme()
          output = (
            <p className="text-[#10b981] text-xs font-bold">
              [THEME UPDATED] Switched workstation mode to {isDark ? 'LIGHT' : 'DARK'}.
            </p>
          )
        } else {
          output = <p className="text-[#e6edf3] text-xs">Theme toggling is not available.</p>
        }
        break

      case 'whoami':
        output = (
          <p className="text-[#e6edf3] text-xs">
            Anas Fadzrin — Software Developer specializing in FPX & Credit Card payment gateway integration, PCI-DSS compliance, and high-performance Laravel & React architectures.
          </p>
        )
        break

      case 'skills':
      case 'stack':
        output = (
          <div className="space-y-1 text-xs text-[#e6edf3]">
            <p><span className="text-[#38bdf8] font-bold">Languages & Frameworks:</span> PHP 8.x, Laravel, TypeScript, React 19, Node.js, Python</p>
            <p><span className="text-[#38bdf8] font-bold">Payment Systems:</span> FPX B2B/B2C, Visa/Mastercard processing, Webhook reconciliation, Idempotency</p>
            <p><span className="text-[#38bdf8] font-bold">Databases & Infrastructure:</span> MySQL, PostgreSQL, Redis, Docker, Nginx, Linux (Arch/Debian)</p>
            <p><span className="text-[#38bdf8] font-bold">Compliance:</span> PCI-DSS level specifications, ISO 27001 secure code practices</p>
          </div>
        )
        break

      case 'projects':
        output = (
          <div className="space-y-1.5 text-xs text-[#e6edf3]">
            <p>1. <a href="#projects" className="text-[#38bdf8] underline hover:text-[#38ef7d]">Simplepay Gateway</a> - PCI-DSS compliant regional payment switch</p>
            <p>2. <a href="#projects" className="text-[#38bdf8] underline hover:text-[#38ef7d]">StockOps Inventory</a> - Multi-tenant SaaS with Laravel 11 & Vue 3</p>
            <p>3. <a href="#projects" className="text-[#38bdf8] underline hover:text-[#38ef7d]">Mobile App & API</a> - Flutter native client + Sanctum token auth</p>
          </div>
        )
        break

      case 'experience':
        output = (
          <div className="space-y-1 text-xs text-[#e6edf3]">
            <p><span className="text-[#f59e0b]">2023 — Present:</span> Simplepay Gateway Sdn Bhd (Software Developer)</p>
            <p><span className="text-[#f59e0b]">2021 — 2023:</span> Freelance Software Developer (15+ production apps)</p>
            <p><span className="text-[#f59e0b]">2020 — 2021:</span> 2EN Apps Sdn Bhd (Software Developer)</p>
            <p><span className="text-[#f59e0b]">2019 — 2020:</span> Senwave Retail Solutions (PHP Developer)</p>
          </div>
        )
        break

      case 'contact':
        output = (
          <div className="space-y-1 text-xs text-[#e6edf3]">
            <p>Email: <a href="mailto:anasfadzrin@gmail.com" className="text-[#38bdf8] underline">anasfadzrin@gmail.com</a></p>
            <p>GitHub: <a href="https://github.com" target="_blank" rel="noreferrer" className="text-[#38bdf8] underline">github.com</a></p>
            <p>Location: Kuala Lumpur, Malaysia</p>
          </div>
        )
        break

      case 'uptime':
        output = <p className="text-[#e6edf3] text-xs">up 5 years, 142 days, 1 user, load average: 0.08, 0.05, 0.02</p>
        break

      case 'neofetch':
      case 'fastfetch':
        output = (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 text-xs">
            <div className="md:col-span-4 text-[#38ef7d] font-bold whitespace-pre leading-tight">
{`   /\\
  /  \\
 / /\\ \\     anas@archlinux
/ /__\\ \\    --------------
\\/      \\   OS: Arch Linux x86_64
            Kernel: 6.12.9-pci-dss
            Uptime: 5+ years in prod`}
            </div>
            <div className="md:col-span-8 space-y-0.5 text-[#e6edf3]">
              <p><span className="text-[#38bdf8] font-semibold">Role:</span> Senior Software Developer & Payment Specialist</p>
              <p><span className="text-[#38bdf8] font-semibold">Core:</span> Laravel 11, PHP 8.3, React 19, FPX, PCI-DSS</p>
              <p><span className="text-[#38bdf8] font-semibold">Location:</span> Kuala Lumpur, Malaysia</p>
            </div>
          </div>
        )
        break

      case 'clear':
        setHistory([])
        setInputVal('')
        return

      case 'exit':
        onClose()
        setInputVal('')
        return

      case 'sudo rm -rf /':
      case 'rm -rf /':
        output = (
          <p className="text-[#ef4444] text-xs font-bold">
            [ACCESS DENIED] Nice try! The production server is protected by strict Linux SELinux & PCI-DSS safeguards.
          </p>
        )
        break

      default:
        output = (
          <p className="text-[#ef4444] text-xs">
            zsh: command not found: {trimmed}. Type <span className="text-[#f59e0b] underline">help</span> for commands.
          </p>
        )
    }

    setHistory((prev) => [...prev, { command: trimmed, output }])
    setInputVal('')
  }

  if (!isOpen) return null

  return (
    <div
      id="terminal-drawer-modal"
      className="fixed inset-x-0 top-9 z-40 max-w-4xl mx-auto px-2 sm:px-4 transition-all duration-300 animate-in fade-in slide-in-from-top-4 font-mono select-none"
    >
      <div className="bg-[#0a0d12]/95 backdrop-blur-xl border border-[#30363d] rounded-b-xl shadow-2xl overflow-hidden terminal-scanlines">
        {/* Terminal Title Bar */}
        <div className="h-8 bg-[#161b22] px-3 flex items-center justify-between border-b border-[#30363d]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span onClick={onClose} className="w-3 h-3 rounded-full bg-[#ef4444] inline-block cursor-pointer hover:opacity-80" title="Close" />
              <span className="w-3 h-3 rounded-full bg-[#f59e0b] inline-block cursor-pointer hover:opacity-80" title="Minimize" />
              <span className="w-3 h-3 rounded-full bg-[#10b981] inline-block cursor-pointer hover:opacity-80" title="Maximize" />
            </div>
            <span className="text-xs text-[#8b949e] font-mono ml-2 flex items-center gap-1">
              <Terminal className="w-3 h-3 text-[#10b981]" />
              anas@archlinux: ~/terminal-console (bash)
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#8b949e]">
            <button onClick={onClose} className="hover:text-[#e6edf3]">
              <Minus className="w-3 h-3" />
            </button>
            <button onClick={onClose} className="hover:text-[#e6edf3]">
              <Square className="w-2.5 h-2.5" />
            </button>
            <button onClick={onClose} className="hover:text-[#ef4444]">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 max-h-[380px] overflow-y-auto space-y-3 text-left">
          <div className="text-[11px] text-[#8b949e] pb-1 border-b border-[#30363d]/40">
            Welcome to Anas Fadzrin Workstation Terminal (v6.12). Press <span className="text-[#38bdf8]">`</span> or type <span className="text-[#38ef7d]">exit</span> to close.
          </div>

          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-[#38ef7d] font-bold">anas@archlinux</span>
                <span className="text-[#8b949e]">:</span>
                <span className="text-[#38bdf8]">~</span>
                <span className="text-[#8b949e]">$</span>
                <span className="text-[#e6edf3] font-medium">{item.command}</span>
              </div>
              <div className="pl-2 pt-0.5">{item.output}</div>
            </div>
          ))}

          {/* Current input line */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 text-xs pt-1">
            <span className="text-[#38ef7d] font-bold shrink-0">anas@archlinux</span>
            <span className="text-[#8b949e] shrink-0">:</span>
            <span className="text-[#38bdf8] shrink-0">~</span>
            <span className="text-[#8b949e] shrink-0">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-1 bg-transparent text-[#e6edf3] outline-none border-none font-mono text-xs focus:ring-0 p-0"
              placeholder="type 'help' or any command..."
              autoFocus
            />
            <span className="inline-block w-2 h-4 bg-[#10b981] terminal-cursor shrink-0" />
          </form>
          <div ref={terminalEndRef} />
        </div>
      </div>
    </div>
  )
}
