import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import About from '@/components/home/About'
import Testimonials from '@/components/home/Testimonials'
import Gallery from '@/components/home/Gallery'
import Shop from '@/components/home/Shop'
import CTA from '@/components/home/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Shop />
      <CTA />
    </>
  )
}
