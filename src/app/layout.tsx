import type { Metadata } from 'next'
import './globals.css'
import SiteLaunchLoader from '@/components/SiteLaunchLoader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Barber Industries | Barbershop Premium',
  description: 'Barber Industries - Votre barbershop premium. Coupes homme, barbe, produits de qualité. Réservez en ligne et découvrez l\'excellence du grooming masculin.',
  keywords: 'barbershop, coiffeur homme, barbe, coupe homme, grooming, barber premium',
  authors: [{ name: 'Raphael - Barber Industries' }],
  openGraph: {
    title: 'Barber Industries | Barbershop Premium',
    description: 'Votre barbershop premium. Coupes homme, barbe, produits de qualité.',
    url: 'https://barber-industries.odoo.com',
    siteName: 'Barber Industries',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <SiteLaunchLoader />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
