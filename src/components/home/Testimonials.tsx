'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Lucas M.',
    role: 'Client régulier',
    content: 'Le meilleur barbershop de la région ! Raphael est un vrai artiste. Ma coupe est toujours parfaite et l\'ambiance est top.',
    rating: 5,
    avatar: 'L',
  },
  {
    name: 'Thomas D.',
    role: 'Première visite',
    content: 'Excellente première expérience. Le service est impeccable, les conseils personnalisés et le résultat au-delà de mes attentes.',
    rating: 5,
    avatar: 'T',
  },
  {
    name: 'Alexandre B.',
    role: 'Client fidèle',
    content: 'Je viens ici depuis 2 ans et je ne changerais pour rien au monde. Qualité constante, produits premium et accueil chaleureux.',
    rating: 5,
    avatar: 'A',
  },
  {
    name: 'Maxime R.',
    role: 'Client régulier',
    content: 'Un vrai barber qui prend le temps de comprendre ce que tu veux. La barbe est taillée à la perfection. Je recommande à 100%.',
    rating: 5,
    avatar: 'M',
  },
]

export default function Testimonials() {
  return (
    <section className="relative section-padding bg-dark-light overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary-blue/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent-rose/5 rounded-full blur-[100px] -translate-y-1/2" />
      </div>

      <div className="relative container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent-rose text-sm font-semibold tracking-wider uppercase mb-4">
            Témoignages
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ce Que Disent <span className="text-gradient">Nos Clients</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            La satisfaction de nos clients est notre plus belle récompense. 
            Découvrez leurs retours d'expérience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group card-premium p-8 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-accent-rose/10 transition-colors duration-500" />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-accent-rose"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-blue to-accent-rose flex items-center justify-center">
                  <span className="text-lg font-semibold text-white">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-white/50 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-white mb-2">4.9/5</div>
            <div className="text-white/50 text-sm">Note moyenne</div>
          </div>
          <div className="w-px h-12 bg-white/10 hidden sm:block" />
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-accent-rose mb-2">500+</div>
            <div className="text-white/50 text-sm">Avis positifs</div>
          </div>
          <div className="w-px h-12 bg-white/10 hidden sm:block" />
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-white mb-2">98%</div>
            <div className="text-white/50 text-sm">Clients satisfaits</div>
          </div>
        </div>
      </div>
    </section>
  )
}
