import { Scissors, Clock } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
  ODOO_APPOINTMENT_COUPE_CLASSIQUE,
  ODOO_APPOINTMENT_CRENEAUX_SUPPLEMENTAIRES,
  ODOO_APPOINTMENT_COUPE_SOIREE,
} from '@/constants/booking'

export const metadata: Metadata = {
  title: 'Services | Barber Industries',
  description: 'Découvrez nos services de coupe homme, taille de barbe et forfaits premium. Des prestations de qualité pour révéler votre style.',
}

type ServiceItem = {
  name: string
  price: string
  duration: string
  description: string
  /** Lien Odoo direct (ex. coupe classique) ; sinon page réservation du site */
  bookingHref?: string
}

const services: { id: string; icon: typeof Scissors; title: string; description: string; items: ServiceItem[] }[] = [
  {
    id: 'coupe',
    icon: Scissors,
    title: 'Prestations',
    description:
      'Sélectionne le type de rendez-vous qui te correspond. Trois prestations, simples et efficaces, pour coller à ton rythme et à ton style.',
    items: [
      {
        name: 'Coupe Classique',
        price: '15€ + 5€ barbe',
        duration: '30 min',
        description: 'La coupe de base, propre et efficace. Option barbe à +5€.',
        bookingHref: ODOO_APPOINTMENT_COUPE_CLASSIQUE,
      },
      {
        name: 'Coupe Classique - Créneaux supplémentaires',
        price: '15€ + 5€ barbe',
        duration: '30 min',
        description: 'Quand les créneaux classiques sont complets, avec les mêmes prestations.',
        bookingHref: ODOO_APPOINTMENT_CRENEAUX_SUPPLEMENTAIRES,
      },
      {
        name: 'Coupe Soirée',
        price: '25€',
        duration: '30 min',
        description: 'Créneaux après 19h, parfait juste avant une soirée ou un événement.',
        bookingHref: ODOO_APPOINTMENT_COUPE_SOIREE,
      },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary-blue/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-rose/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-accent-rose text-sm font-semibold tracking-wider uppercase mb-4">
              Nos Services
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Prestations <span className="text-gradient">Premium</span>
            </h1>
            <p className="text-white/60 text-lg sm:text-xl leading-relaxed">
              Des services de qualité supérieure pour révéler votre meilleur style. 
              Chaque prestation est réalisée avec soin et expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-dark' : 'bg-dark-light'}`}
        >
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Service Header */}
              <div className="lg:col-span-1">
                <div className="sticky top-32">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-primary-blue to-accent-rose p-[1px]">
                    <div className="w-full h-full bg-dark rounded-2xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-white/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Service Items */}
              <div className="lg:col-span-2 space-y-4">
                {service.items.map((item) => (
                  <div
                    key={item.name}
                    className="group card-premium p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-white font-semibold text-lg group-hover:text-accent-rose transition-colors">
                          {item.name}
                        </h3>
                        <span className="flex items-center gap-1 text-white/40 text-sm">
                          <Clock className="w-4 h-4" />
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-white/50 text-sm">{item.description}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-display font-bold text-accent-rose">
                        {item.price}
                      </span>
                      {(() => {
                        const href = item.bookingHref ?? '/reservation'
                        const isExternal = href.startsWith('http')
                        const className =
                          'px-4 py-2 bg-white/5 hover:bg-gradient-to-r hover:from-primary-blue hover:to-accent-rose text-white text-sm font-medium rounded-full transition-all duration-300'
                        return isExternal ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={className}
                          >
                            Réserver
                          </a>
                        ) : (
                          <Link href={href} className={className}>
                            Réserver
                          </Link>
                        )
                      })()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-blue to-accent-rose">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            Prêt à prendre rendez-vous ?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Réservez en ligne en quelques clics ou appelez-nous directement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/reservation"
              className="px-8 py-4 bg-white text-dark font-semibold rounded-full hover:bg-white/90 transition-all hover:scale-105"
            >
              Réserver en ligne
            </Link>
            <a
              href="tel:0620540945"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
            >
              06 20 54 09 45
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
