import React from 'react'
import { ExternalLink, Code } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { GithubIcon } from './Icons'
import { cn } from '@/lib/utils'

export const FeaturedCaseStudy: React.FC = () => {
  return (
    <section className="py-20 border-t border-border bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Details */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="space-y-3">
              <Badge variant="outline" className="px-3 py-1 text-xs font-semibold text-primary bg-primary/5 border-primary/20 rounded-full">
                Featured Case Study
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                StockOps — Inventory System
              </h2>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              StockOps is a robust, multi-tenant inventory & product management application engineered with Laravel 11, Inertia.js, and Vue 3. It utilizes tenant isolation database scopes to guarantee secure data segmentation, alongside background queues for CSV inventory imports and exports.
            </p>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Laravel 11', 'MySQL', 'Inertia.js', 'Vue 3', 'Tailwind CSS'].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-lg text-xs font-medium bg-muted text-muted-foreground border border-border">
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  "rounded-full font-semibold px-6 group flex items-center gap-2 h-9"
                )}
              >
                <GithubIcon className="h-4 w-4 fill-current" />
                View Source Code
              </a>
              <a
                href="https://demo.example.com"
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  "rounded-full font-semibold px-6 border-border flex items-center gap-1.5 h-9"
                )}
              >
                Live Demo
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column - IDE Mockup */}
          <div className="lg:col-span-7">
            {/* Editor Container */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 dark:border-slate-800 bg-[#0f141c] shadow-2xl text-left font-mono text-[13px] sm:text-[14px] leading-relaxed">
              {/* Window Header Bar */}
              <div className="bg-[#151b24] px-4 py-3 flex items-center justify-between border-b border-slate-800">
                <div className="flex space-x-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="text-[12px] text-slate-400 font-sans flex items-center gap-1.5 select-none">
                  <Code className="h-3.5 w-3.5 text-sky-400" />
                  ProductController.php
                </div>
                <div className="w-12" /> {/* Spacer */}
              </div>

              {/* Code Panel */}
              <div className="p-4 sm:p-6 overflow-x-auto text-slate-300 font-medium">
                <pre className="m-0">
                  <code>
                    {/* Hand-highlighted snippet representing clean typography */}
                    <span className="text-orange-400">&lt;?php</span>{"\n\n"}
                    <span className="text-pink-400">namespace</span> App\Http\Controllers;{"\n\n"}
                    <span className="text-pink-400">use</span> App\Models\Product;{"\n"}
                    <span className="text-pink-400">use</span> Illuminate\Http\Request;{"\n"}
                    <span className="text-pink-400">use</span> Inertia\Inertia;{"\n\n"}
                    <span className="text-pink-400">class</span> <span className="text-yellow-400">ProductController</span> <span className="text-pink-400">extends</span> <span className="text-yellow-400">Controller</span>{"\n"}{"{\n"}
                    {"    "}<span className="text-slate-500">/**{"\n"}
                    {"     "} * Display a listing of inventory products.{"\n"}
                    {"     "} */</span>{"\n"}
                    {"    "}<span className="text-pink-400">public function</span> <span className="text-sky-400">index</span>(Request <span className="text-orange-400">$request</span>){"\n"}
                    {"    "}{"{\n"}
                    {"        "}<span className="text-orange-400">$products</span> = Product::<span className="text-sky-400">query</span>(){"\n"}
                    {"            "}-&gt;<span className="text-sky-400">with</span>(<span className="text-green-300">'category'</span>){"\n"}
                    {"            "}-&gt;<span className="text-sky-400">filterByTenant</span>(){"\n"}
                    {"            "}-&gt;<span className="text-sky-400">search</span>(<span className="text-orange-400">$request</span>-&gt;<span className="text-sky-400">input</span>(<span className="text-green-300">'search'</span>)){"\n"}
                    {"            "}-&gt;<span className="text-sky-400">paginate</span>(<span className="text-orange-300">15</span>);{"\n\n"}
                    {"        "}<span className="text-pink-400">return</span> Inertia::<span className="text-sky-400">render</span>(<span className="text-green-300">'Products/Index'</span>, [{"\n"}
                    {"            "}<span className="text-green-300">'filters'</span>  =&gt; <span className="text-orange-400">$request</span>-&gt;<span className="text-sky-400">only</span>([<span className="text-green-300">'search'</span>]),{"\n"}
                    {"            "}<span className="text-green-300">'products'</span> =&gt; ProductResource::<span className="text-sky-400">collection</span>(<span className="text-orange-400">$products</span>){"\n"}
                    {"        "}]);{"\n"}
                    {"    }\n"}
                    {"}"}
                  </code>
                </pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
