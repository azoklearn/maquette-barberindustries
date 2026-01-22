'use client'

import Link from 'next/link'
import { Scissors, CircleDot, Package, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Coupe Homme',
    description: 'Une coupe sur mesure qui sublime votre style. Technique précise et tendances actuelles.',
    price: 'À partir de 20€',
    href: '/services#coupe',
    gradient: 'from-primary-blue to-primary-blue-light',
  },
  {
    icon: CircleDot,
    title: 'Taille de Barbe',
    description: 'Sculptez votre barbe avec précision. Rasage, entretien et soins pour une barbe parfaite.',
    price: 'À partir de 15€',
    href: '/services#barbe',
    gradient: 'from-accent-rose to-accent-rose-light',
  },
  {
    icon: Package,
    title: 'Forfaits',
    description: 'Coupe + Barbe, soins complets. Des formules pensées pour votre confort et votre style.',
    price: 'À partir de 30€',
    href: '/services#forfaits',
    gradient: 'from-primary-blue via-accent-rose to-accent-rose-light',
  },
]

export default function Services() {
  return (
    <section className="relative section-padding bg-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-rose/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary-blue/5 rounded-full blur-[80px]" />

      <div className="relative container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent-rose text-sm font-semibold tracking-wider uppercase mb-4">
            Nos Prestations
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Services <span className="text-gradient">Premium</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Des services de qualité supérieure pour révéler votre meilleur style. 
            Chaque détail compte.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group card-premium p-8 lg:p-10 relative overflow-hidden"
            >
              {/* Hover Gradient */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 
                           group-hover:opacity-5 transition-opacity duration-500`} 
              />
              
              {/* Icon */}
              <div 
                className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} p-[1px]`}
              >
                <div className="w-full h-full bg-dark-light rounded-2xl flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-semibold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Price & Arrow */}
              <div className="flex items-center justify-between">
                <span className="text-accent-rose font-semibold">{service.price}</span>
                <ArrowRight 
                  className="w-5 h-5 text-white/40 group-hover:text-accent-rose 
                            group-hover:translate-x-2 transition-all duration-300" 
                />
              </div>
            </Link>
          ))}
        </div>

        {/* View All Services */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/60 hover:text-accent-rose transition-colors duration-300"
          >
            <span>Voir tous nos services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
