'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Award, Users, Clock, ThumbsUp } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Expertise',
    description: 'Des barbiers qualifiés et passionnés',
  },
  {
    icon: Users,
    title: 'Personnalisé',
    description: 'Un service adapté à chaque client',
  },
  {
    icon: Clock,
    title: 'Ponctualité',
    description: 'Respect de vos rendez-vous',
  },
  {
    icon: ThumbsUp,
    title: 'Qualité',
    description: 'Produits premium sélectionnés',
  },
]

export default function About() {
  return (
    <section className="relative section-padding bg-dark-light overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-bg" />
      
      <div className="relative container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 to-accent-rose/20" />
              <Image
                src="/raph.jpeg"
                alt="Raphael - Barber Industries"
                fill
                className="object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 lg:bottom-12 lg:-right-8 bg-dark-medium border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-blue to-accent-rose rounded-full flex items-center justify-center">
                  <span className="text-2xl font-display font-bold text-white">R</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Raphael</h4>
                  <p className="text-white/50 text-sm">Fondateur & Barbier</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent-rose/30 rounded-2xl" />
            <div className="absolute -bottom-4 right-1/3 w-16 h-16 border-2 border-primary-blue/30 rounded-full" />
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block text-accent-rose text-sm font-semibold tracking-wider uppercase mb-4">
              À Propos
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              L'Excellence du <br />
              <span className="text-gradient">Grooming Masculin</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Chez Barber Industries, nous croyons que chaque homme mérite une expérience 
              unique. Notre passion pour le métier, combinée à notre expertise, nous permet 
              de vous offrir des prestations d'exception dans une ambiance chic et décontractée.
            </p>
            <p className="text-white/60 leading-relaxed mb-10">
              Fondé par Raphael, notre barbershop incarne l'élégance urbaine et le savoir-faire 
              artisanal. Chaque coupe est une œuvre, chaque barbe est sculptée avec précision.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-accent-rose" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                    <p className="text-white/50 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn-primary">
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
