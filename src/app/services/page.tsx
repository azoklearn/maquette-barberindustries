import { Scissors, CircleDot, Package, Sparkles, Clock, Check } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Barber Industries',
  description: 'Découvrez nos services de coupe homme, taille de barbe et forfaits premium. Des prestations de qualité pour révéler votre style.',
}

const services = [
  {
    id: 'coupe',
    icon: Scissors,
    title: 'Coupes Homme',
    description: 'Des coupes sur mesure qui subliment votre style. Nos barbiers experts maîtrisent toutes les techniques pour vous offrir le résultat parfait.',
    items: [
      { name: 'Coupe Classique', price: '20€', duration: '30 min', description: 'Coupe traditionnelle soignée' },
      { name: 'Coupe Tendance', price: '25€', duration: '40 min', description: 'Coupe moderne avec dégradé' },
      { name: 'Coupe Premium', price: '35€', duration: '50 min', description: 'Coupe personnalisée + shampoing + coiffage' },
      { name: 'Coupe Enfant (-12 ans)', price: '15€', duration: '25 min', description: 'Coupe adaptée aux plus jeunes' },
    ],
  },
  {
    id: 'barbe',
    icon: CircleDot,
    title: 'Barbe & Rasage',
    description: 'Sculptez votre barbe avec précision. Du rasage traditionnel à l\'entretien quotidien, nous prenons soin de votre pilosité faciale.',
    items: [
      { name: 'Taille de Barbe', price: '15€', duration: '20 min', description: 'Taille et mise en forme' },
      { name: 'Rasage Traditionnel', price: '20€', duration: '30 min', description: 'Rasage au coupe-chou' },
      { name: 'Entretien Barbe Complète', price: '25€', duration: '35 min', description: 'Taille + soins + huile' },
      { name: 'Contours Barbe', price: '10€', duration: '15 min', description: 'Définition des contours' },
    ],
  },
  {
    id: 'forfaits',
    icon: Package,
    title: 'Forfaits',
    description: 'Nos formules complètes pour un service all-inclusive. Profitez de nos meilleures prestations à prix avantageux.',
    items: [
      { name: 'Forfait Essentiel', price: '30€', duration: '45 min', description: 'Coupe + Taille barbe' },
      { name: 'Forfait Premium', price: '45€', duration: '60 min', description: 'Coupe tendance + Barbe complète' },
      { name: 'Forfait VIP', price: '60€', duration: '90 min', description: 'Coupe premium + Rasage + Soins' },
      { name: 'Forfait Père & Fils', price: '40€', duration: '60 min', description: '2 coupes (1 adulte + 1 enfant)' },
    ],
  },
]

const extras = [
  { name: 'Shampoing', price: '+5€' },
  { name: 'Soins Cheveux', price: '+10€' },
  { name: 'Coloration Barbe', price: '+15€' },
  { name: 'Masque Visage', price: '+12€' },
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
                      <Link
                        href="/reservation"
                        className="px-4 py-2 bg-white/5 hover:bg-gradient-to-r hover:from-primary-blue hover:to-accent-rose 
                                 text-white text-sm font-medium rounded-full transition-all duration-300"
                      >
                        Réserver
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Extras Section */}
      <section className="section-padding bg-dark-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Sparkles className="w-8 h-8 text-accent-rose mx-auto mb-4" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Services Additionnels
            </h2>
            <p className="text-white/60">Personnalisez votre expérience</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {extras.map((extra) => (
              <div
                key={extra.name}
                className="card-premium p-4 text-center"
              >
                <span className="text-white font-medium">{extra.name}</span>
                <span className="block text-accent-rose font-semibold mt-1">{extra.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
