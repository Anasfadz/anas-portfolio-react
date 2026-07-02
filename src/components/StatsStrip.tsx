import React from 'react'

export const StatsStrip: React.FC = () => {
  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Delivered' },
    { value: '100%', label: 'Commitment' },
    { value: '99.9%', label: 'Uptime' }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-10 mb-16">
      <div className="bg-card/45 dark:bg-card/35 backdrop-blur-xl border border-border/80 rounded-3xl p-8 sm:p-10 shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-border">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center text-center ${
                idx > 1 ? 'pt-6 md:pt-0' : idx === 1 ? 'md:pt-0' : ''
              } ${idx === 1 && 'pt-0'}`}
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mt-2.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
