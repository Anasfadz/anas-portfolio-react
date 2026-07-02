import React from 'react'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Globe, BarChart3, ExternalLink } from 'lucide-react'

export const ProjectsGrid: React.FC = () => {
  const projects = [
    {
      title: 'Simplepay Gateway',
      category: 'FINTECH',
      tagType: 'Secure',
      role: 'Gateway Developer',
      tech: ['PHP', 'FPX API', 'Card Schemes', 'PCI-DSS'],
      image: '/images/project_payment.png',
      icon: <Shield className="h-5 w-5 text-emerald-500" />,
      description: 'Regional online payment processor gateway accepting credit cards and FPX banks, featuring automated merchant settlement files.'
    },
    {
      title: 'Government e-Services',
      category: 'GOVERNMENT',
      tagType: 'Scalable',
      role: 'Core Portal Developer',
      tech: ['Laravel', 'PostgreSQL', 'Redis Queue', 'SAML SSO'],
      image: '/images/project_dashboard.png',
      icon: <Globe className="h-5 w-5 text-blue-500" />,
      description: 'Citizens registration and licensing portal catering to high daily concurrent traffic, protected with strict rate limiting rules.'
    },
    {
      title: 'Retail Admin Dashboard',
      category: 'RETAIL & SAAS',
      tagType: 'Analytics',
      role: 'Full-Stack Developer',
      tech: ['React', 'Laravel API', 'CI/CD Pipelines', 'Docker'],
      image: '/images/project_dashboard.png',
      icon: <BarChart3 className="h-5 w-5 text-purple-500" />,
      description: 'Multi-outlet retail sales insights dashboard tracking inventory, revenue margins, and providing automated weekly PDF email reports.'
    }
  ]

  return (
    <section id="projects" className="py-20 border-t border-border bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Text */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
          <p className="text-sm font-bold text-primary uppercase tracking-wider">Other Projects</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Proven Delivery Across Verticals
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            A selection of production-grade software applications built for various industries, reflecting a commitment to high security and stellar user interfaces.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="group overflow-hidden rounded-2xl border border-border bg-card hover:shadow-xl dark:hover:shadow-black/30 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between">
              
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge className="bg-background/90 dark:bg-background/90 text-foreground backdrop-blur-sm border-border hover:bg-background">
                    {project.category}
                  </Badge>
                  <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 backdrop-blur-sm">
                    {project.tagType}
                  </Badge>
                </div>
              </div>

              {/* Card Header & Title */}
              <CardHeader className="text-left space-y-2 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    Role: {project.role}
                  </span>
                  {project.icon}
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed pt-1 line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>

              {/* Card Content & Footer */}
              <div className="px-6 flex flex-wrap gap-1.5 pt-0">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-muted text-[11px] font-semibold text-muted-foreground border border-border/60">
                    {t}
                  </span>
                ))}
              </div>

              <CardFooter className="p-6 pt-6">
                <Button variant="ghost" className="w-full justify-between rounded-xl group/btn hover:text-primary hover:bg-primary/5 p-0 h-10 px-4 border border-transparent hover:border-primary/10">
                  <span className="text-xs font-bold">Explore Details</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:text-primary" />
                </Button>
              </CardFooter>

            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="rounded-full font-semibold px-8 border-border group hover:bg-muted transition-all duration-300">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              View All Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

      </div>
    </section>
  )
}
