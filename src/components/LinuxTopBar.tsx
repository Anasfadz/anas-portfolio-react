import React, { useState, useEffect } from 'react'
import { Terminal, Cpu, HardDrive, Wifi, Clock, ShieldCheck, Sun, Moon } from 'lucide-react'

interface LinuxTopBarProps {
  onToggleTerminal: () => void
  isTerminalOpen: boolean
  isDark: boolean
  onToggleTheme: () => void
}

export const LinuxTopBar: React.FC<LinuxTopBarProps> = ({
  onToggleTerminal,
  isTerminalOpen,
  isDark,
  onToggleTheme,
}) => {
  const [time, setTime] = useState<string>('')
  const [activeWorkspace, setActiveWorkspace] = useState<number>(1)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('en-MY', {
          timeZone: 'Asia/Kuala_Lumpur',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      )
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const workspaces = [
    { id: 1, label: '01:hero', href: '#' },
    { id: 2, label: '02:about', href: '#about' },
    { id: 3, label: '03:services', href: '#expertise' },
    { id: 4, label: '04:projects', href: '#projects' },
    { id: 5, label: '05:journey', href: '#experience' },
    { id: 6, label: '06:contact', href: '#contact' },
  ]

  return (
    <div
      id="linux-top-bar"
      className="fixed top-0 left-0 right-0 z-50 h-9 bg-[#0a0d12]/95 backdrop-blur-md border-b border-[#30363d] px-3 sm:px-4 flex items-center justify-between font-mono text-[11px] text-[#8b949e] select-none"
    >
      {/* Left: Distro Indicator & Workspaces */}
      <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
        <a
          href="#"
          className="flex items-center gap-1.5 text-[#38ef7d] font-bold hover:brightness-110 shrink-0"
          title="Arch Linux Workstation"
        >
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]" />
          <span className="hidden sm:inline font-bold tracking-wider text-xs">anas@arch-linux</span>
          <span className="sm:hidden font-bold text-xs">arch:~$</span>
        </a>

        {/* Workspaces / Virtual Desktops */}
        <div className="flex items-center gap-1">
          {workspaces.map((ws) => (
            <a
              key={ws.id}
              href={ws.href}
              onClick={() => setActiveWorkspace(ws.id)}
              className={`px-1.5 py-0.5 rounded transition-colors text-[10px] sm:text-[11px] ${
                activeWorkspace === ws.id
                  ? 'bg-[#161b22] text-[#38bdf8] border border-[#30363d]'
                  : 'hover:bg-[#161b22]/60 hover:text-[#e6edf3]'
              }`}
            >
              {ws.label}
            </a>
          ))}
        </div>
      </div>

      {/* Right: System Telemetry & CLI Launcher */}
      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        {/* Telemetry Pills (Hidden on very small screens, visible on md) */}
        <div className="hidden lg:flex items-center gap-3 text-[10px] text-[#8b949e]">
          <span className="flex items-center gap-1" title="Kernel CPU load">
            <Cpu className="w-3 h-3 text-[#10b981]" />
            <span>0.8%</span>
          </span>
          <span className="flex items-center gap-1" title="Memory usage">
            <HardDrive className="w-3 h-3 text-[#38bdf8]" />
            <span>3.8G/16G</span>
          </span>
          <span className="flex items-center gap-1" title="Payment Gateway PCI-DSS active">
            <ShieldCheck className="w-3 h-3 text-[#10b981]" />
            <span>PCI-DSS: OK</span>
          </span>
          <span className="flex items-center gap-1" title="Network status">
            <Wifi className="w-3 h-3 text-[#38bdf8]" />
            <span>99.99%</span>
          </span>
        </div>

        {/* Live MYT Clock */}
        <div className="hidden sm:flex items-center gap-1 text-[#e6edf3] font-medium">
          <Clock className="w-3 h-3 text-[#f59e0b]" />
          <span>{time || '17:00:00'} MYT</span>
        </div>

        {/* Theme Toggle Button */}
        <button
          id="theme-toggle-btn"
          onClick={onToggleTheme}
          className="flex items-center gap-1 px-2 py-1 rounded text-[11px] font-bold transition-all bg-[#161b22] text-[#e6edf3] border border-[#30363d] hover:border-[#f59e0b] hover:text-[#f59e0b] cursor-pointer"
          title={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
        >
          {isDark ? (
            <>
              <Sun className="w-3 h-3 text-[#f59e0b]" />
              <span className="hidden sm:inline">LIGHT</span>
            </>
          ) : (
            <>
              <Moon className="w-3 h-3 text-[#0969da]" />
              <span className="hidden sm:inline">DARK</span>
            </>
          )}
        </button>

        {/* Terminal Toggle Button */}
        <button
          id="toggle-terminal-btn"
          onClick={onToggleTerminal}
          className={`flex items-center gap-1 px-2 py-1 rounded text-[11px] font-bold transition-all cursor-pointer ${
            isTerminalOpen
              ? 'bg-[#10b981] text-black shadow-[0_0_10px_rgba(16,185,129,0.4)]'
              : 'bg-[#161b22] text-[#38ef7d] border border-[#30363d] hover:border-[#10b981]'
          }`}
          title="Toggle interactive terminal (or press `)"
        >
          <Terminal className="w-3 h-3" />
          <span>CLI</span>
        </button>
      </div>
    </div>
  )
}
