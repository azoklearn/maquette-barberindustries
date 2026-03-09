import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boutique | Barber Industries',
  description:
    'Découvrez et commandez tous les produits officiels Barber Industries sur notre boutique en ligne.',
}

const ODOO_SHOP_URL = 'https://barber-industries.odoo.com/shop'

export default function BoutiquePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary-blue/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-rose/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent-rose text-sm font-semibold tracking-wider uppercase mb-4">
              Boutique
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Boutique <span className="text-gradient">Officielle</span>
            </h1>
            <p className="text-white/60 text-lg mb-6">
              Retrouvez tous les produits Barber Industries (coiffants, barbe, rasage, accessoires)
              directement sur notre boutique en ligne sécurisée.
            </p>
            <a
              href={ODOO_SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Ouvrir la boutique en plein écran
            </a>
          </div>
        </div>
      </section>

      {/* Odoo Shop Embed */}
      <section className="section-padding bg-dark">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="card-premium p-2 sm:p-4 lg:p-6">
            <div className="mb-4 flex items-center justify-between gap-4 flex-wrap">
              <p className="text-white/60 text-sm sm:text-base">
                Ci-dessous, la boutique en ligne Barber Industries intégrée depuis{' '}
                <span className="text-accent-rose">barber-industries.odoo.com</span>.
              </p>
              <a
                href={ODOO_SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-rose text-sm underline underline-offset-4"
              >
                Voir sur le site complet
              </a>
            </div>
            <div className="relative w-full" style={{ paddingTop: '140%' }}>
              <iframe
                src={ODOO_SHOP_URL}
                className="absolute inset-0 w-full h-full rounded-2xl border-0"
                title="Boutique Barber Industries - Odoo"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
