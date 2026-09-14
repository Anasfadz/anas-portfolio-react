import { useState, useEffect } from 'react'
import { LinuxTopBar } from './components/LinuxTopBar'
import { TerminalDrawer } from './components/TerminalDrawer'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Expertise } from './components/Expertise'
import { Features } from './components/Features'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { ContactCTA } from './components/ContactCTA'
import { Footer } from './components/Footer'

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) {
        return saved === 'dark'
      }
      return true
    }
    return true
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTerminal = () => {
    setIsTerminalOpen((prev) => !prev)
  }

  const toggleTheme = () => {
    setIsDark((prev) => !prev)
  }

  return (
    <div className="min-h-screen bg-[#0a0d12] text-[#e6edf3] font-sans selection:bg-[#10b981]/30 selection:text-[#38ef7d] overflow-x-hidden transition-colors duration-300">
      {/* Top Linux Status Panel */}
      <LinuxTopBar
        onToggleTerminal={toggleTerminal}
        isTerminalOpen={isTerminalOpen}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Interactive Dropdown CLI Drawer */}
      <TerminalDrawer
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Expertise />
        <Features />
        <ExperienceTimeline />
        <ContactCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
