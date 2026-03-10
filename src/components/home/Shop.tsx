'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Shop() {
  return (
    <section className="relative section-padding bg-dark overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-accent-rose/10 to-transparent rounded-full blur-[100px]" />

      <div className="relative container-custom">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div>
            <span className="inline-block text-accent-rose text-sm font-semibold tracking-wider uppercase mb-4">
              Boutique
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Produits <span className="text-gradient">Sélectionnés</span>
            </h2>
            <p className="text-white/60 max-w-xl text-lg">
              Découvrez tous les produits Barber Industries (coiffants, barbe, rasage, accessoires)
              directement dans notre boutique en ligne.
            </p>
          </div>
          <Link
            href="/boutique"
            className="inline-flex items-center gap-2 text-accent-rose hover:text-accent-rose-light transition-colors mt-2 lg:mt-0"
          >
            <span>Voir la boutique complète</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Info instead of local products */}
        <div className="card-premium p-6 sm:p-8 text-center">
          <p className="text-white/70 text-base sm:text-lg mb-4">
            La sélection de produits est gérée en temps réel sur notre boutique officielle.
          </p>
          <Link href="/boutique" className="btn-primary inline-flex items-center gap-2">
            <span>Accéder à la boutique</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
