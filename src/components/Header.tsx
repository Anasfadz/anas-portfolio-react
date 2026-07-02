import React, { useState } from 'react'
import { Sun, Moon, Menu, ArrowRight } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
  scrolled: boolean
}

export const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode, scrolled }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' }
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 dark:bg-background/80 backdrop-blur-md border-b border-border py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tight text-foreground transition-all duration-300 hover:opacity-90">
          Anas<span className="text-primary font-extrabold">Fadzrin</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full w-10 h-10 transition-transform duration-300 hover:scale-115"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5 text-slate-700" />}
          </Button>

          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: 'default' }),
              "rounded-full font-medium px-5 group flex items-center gap-1.5 h-9"
            )}
          >
            Contact Me
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full w-9 h-9"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5 text-slate-700" />}
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
              <Button variant="ghost" size="icon" className="w-9 h-9" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px] bg-background border-l border-border flex flex-col justify-between p-6">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-lg font-bold">Menu</span>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-medium text-muted-foreground hover:text-foreground py-2 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="flex flex-col gap-3 pb-6">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    buttonVariants({ variant: 'default' }),
                    "w-full rounded-xl justify-center py-5 group flex items-center gap-1.5 font-medium text-sm h-10"
                  )}
                >
                  Contact Me
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
