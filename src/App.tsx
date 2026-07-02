import { Hero } from './components/Hero'
import { About } from './components/About'
import { Expertise } from './components/Expertise'
import { Features } from './components/Features'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { ContactCTA } from './components/ContactCTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-[#E1E0CC] selection:bg-primary/20 overflow-x-hidden">
      <Hero />
      <About />
      <Expertise />
      <Features />
      <ExperienceTimeline />
      <ContactCTA />
      <Footer />
    </div>
  )
}

export default App
