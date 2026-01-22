'use client'

import Link from 'next/link'
import { ArrowRight, Scissors, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-dark">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-blue/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-rose/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }} />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
      </div>

      {/* Content */}
      <div className="relative container-custom px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8
                       transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Star className="w-4 h-4 text-accent-rose" fill="currentColor" />
            <span className="text-sm text-white/80">Barbershop Premium</span>
          </div>

          {/* Main Heading */}
          <h1 
            className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6
                       transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="text-white">L'Art du</span>
            <br />
            <span className="text-gradient">Style Masculin</span>
          </h1>

          {/* Subtitle */}
          <p 
            className={`text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed
                       transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Découvrez l'excellence du grooming chez Barber Industries. 
            Coupes précises, soins barbe experts, et une expérience unique 
            qui redéfinit le style masculin.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16
                       transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Link href="/reservation" className="btn-primary group">
              <span>Réserver maintenant</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link href="/services" className="btn-secondary">
              <Scissors className="w-5 h-5 mr-2" />
              <span>Nos Services</span>
            </Link>
          </div>

          {/* Stats */}
          <div 
            className={`grid grid-cols-3 gap-8 max-w-lg mx-auto
                       transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-1">5+</div>
              <div className="text-sm text-white/50">Années d'expérience</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-3xl sm:text-4xl font-display font-bold text-accent-rose mb-1">2K+</div>
              <div className="text-sm text-white/50">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-1">4.9</div>
              <div className="text-sm text-white/50">Note moyenne</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-accent-rose rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
