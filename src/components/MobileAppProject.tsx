import React from 'react'
import { Download } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { GithubIcon } from './Icons'
import { cn } from '@/lib/utils'

export const MobileAppProject: React.FC = () => {
  return (
    <section className="py-20 border-t border-border bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - API Mock Window */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-slate-800 dark:border-slate-800 bg-[#0f141c] shadow-2xl text-left font-mono text-[13px] sm:text-[14px]">
              
              {/* API Header Row */}
              <div className="bg-[#151b24] px-4 py-3 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="text-[12px] text-slate-400 font-sans flex items-center gap-1.5 select-none">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20 text-[10px]">
                    200 OK
                  </span>
                  ApiResponse.json
                </div>
                <div className="w-12" /> {/* Spacer */}
              </div>

              {/* JSON Code Area */}
              <div className="p-4 sm:p-6 overflow-x-auto text-slate-300 font-medium leading-relaxed">
                <pre className="m-0">
                  <code>
                    {"{\n"}
                    {"  "}<span className="text-pink-400">"status"</span>: <span className="text-green-300">"success"</span>,{"\n"}
                    {"  "}<span className="text-pink-400">"message"</span>: <span className="text-green-300">"Authentication successful"</span>,{"\n"}
                    {"  "}<span className="text-pink-400">"data"</span>: {"{\n"}
                    {"    "}<span className="text-pink-400">"user"</span>: {"{\n"}
                    {"      "}<span className="text-pink-400">"id"</span>: <span className="text-orange-300">1</span>,{"\n"}
                    {"      "}<span className="text-pink-400">"name"</span>: <span className="text-green-300">"Anas Fadzrin"</span>,{"\n"}
                    {"      "}<span className="text-pink-400">"role"</span>: <span className="text-green-300">"lead_developer"</span>,{"\n"}
                    {"      "}<span className="text-pink-400">"permissions"</span>: [<span className="text-green-300">"read:gateways"</span>, <span className="text-green-300">"write:transactions"</span>]{"\n"}
                    {"    },\n"}
                    {"    "}<span className="text-pink-400">"session"</span>: {"{\n"}
                    {"      "}<span className="text-pink-400">"token_type"</span>: <span className="text-green-300">"Bearer"</span>,{"\n"}
                    {"      "}<span className="text-pink-400">"access_token"</span>: <span className="text-yellow-300">"sanctum_session_auth_7a3d90..."</span>,{"\n"}
                    {"      "}<span className="text-pink-400">"expires_in_sec"</span>: <span className="text-orange-300">3600</span>{"\n"}
                    {"    }\n"}
                    {"  }\n"}
                    {"}"}
                  </code>
                </pre>
              </div>

            </div>
          </div>

          {/* Right Column - Project Text Details */}
          <div className="lg:col-span-5 order-1 lg:order-2 text-left space-y-6">
            <div className="space-y-3">
              <Badge variant="outline" className="px-3 py-1 text-xs font-semibold text-secondary bg-secondary/5 border-secondary/20 rounded-full">
                Mobile Development
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Mobile App & Secured API
              </h2>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Cross-platform mobile applications integrated with high-performance APIs. I build mobile client systems utilizing Flutter coupled with Laravel Sanctum API authentication, secure token-refresh loops, encrypted local DB caching, and real-time push alerts.
            </p>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Flutter', 'Laravel Sanctum', 'REST API', 'Secure Storage', 'SQLite'].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-lg text-xs font-medium bg-background text-muted-foreground border border-border">
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/apk/app-release.apk"
                download
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  "rounded-full font-semibold px-6 group flex items-center gap-2 h-9"
                )}
              >
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                Download APK Mockup
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  "rounded-full font-semibold px-6 border-border flex items-center gap-2 h-9"
                )}
              >
                <GithubIcon className="h-4 w-4 fill-current" />
                GitHub Repo
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
