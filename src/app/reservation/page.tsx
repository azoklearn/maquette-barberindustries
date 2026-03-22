'use client'

import { Calendar } from 'lucide-react'
import { ODOO_APPOINTMENT_URL } from '@/constants/booking'

export default function ReservationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent-rose/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent-rose text-sm font-semibold tracking-wider uppercase mb-4">
              Réservation
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Prenez <span className="text-gradient">rendez-vous</span>
            </h1>
            <p className="text-white/60 text-lg">
              Choisissez votre type de rendez-vous (Coupe Classique, Coupe Soirée, etc.) 
              et réservez directement sur notre page officielle.
            </p>
          </div>
        </div>
      </section>

      {/* Odoo Appointment Embed */}
      <section className="section-padding bg-dark">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto card-premium p-4 sm:p-6 lg:p-8">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                  Choisissez votre rendez-vous
                </h2>
                <p className="text-white/60 text-sm sm:text-base">
                  Réservation gérée par Odoo : créneaux à jour, confirmation automatique et suivi intégré.
                </p>
              </div>
              <a
                href={ODOO_APPOINTMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Ouvrir la page rendez-vous
              </a>
            </div>

            <div className="relative w-full" style={{ paddingTop: '120%' }}>
              <iframe
                src={ODOO_APPOINTMENT_URL}
                className="absolute inset-0 w-full h-full rounded-2xl border-0"
                title="Barber Industries - Rendez-vous Odoo"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
