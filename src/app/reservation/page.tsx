'use client'

import { useState } from 'react'
import { Calendar, Clock, User, Phone, Mail, Check, ChevronRight, Scissors, CircleDot, Package } from 'lucide-react'
import Link from 'next/link'

const services = [
  { id: 'coupe-classique', name: 'Coupe Classique', price: '20€', duration: '30 min', icon: Scissors },
  { id: 'coupe-tendance', name: 'Coupe Tendance', price: '25€', duration: '40 min', icon: Scissors },
  { id: 'coupe-premium', name: 'Coupe Premium', price: '35€', duration: '50 min', icon: Scissors },
  { id: 'taille-barbe', name: 'Taille de Barbe', price: '15€', duration: '20 min', icon: CircleDot },
  { id: 'rasage-traditionnel', name: 'Rasage Traditionnel', price: '20€', duration: '30 min', icon: CircleDot },
  { id: 'forfait-essentiel', name: 'Forfait Essentiel', price: '30€', duration: '45 min', icon: Package },
  { id: 'forfait-premium', name: 'Forfait Premium', price: '45€', duration: '60 min', icon: Package },
  { id: 'forfait-vip', name: 'Forfait VIP', price: '60€', duration: '90 min', icon: Package },
]

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30'
]

export default function ReservationPage() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const selectedServiceData = services.find(s => s.id === selectedService)

  if (isSubmitted) {
    return (
      <section className="min-h-screen pt-32 pb-20 bg-dark flex items-center">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary-blue to-accent-rose flex items-center justify-center">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-display text-4xl font-bold text-white mb-4">
              Réservation Confirmée !
            </h1>
            <p className="text-white/60 mb-8">
              Merci {formData.name} ! Votre rendez-vous pour une <span className="text-accent-rose">{selectedServiceData?.name}</span> est confirmé 
              le <span className="text-white">{selectedDate}</span> à <span className="text-white">{selectedTime}</span>.
            </p>
            <p className="text-white/40 text-sm mb-8">
              Un email de confirmation vous a été envoyé à {formData.email}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary">
                Retour à l'accueil
              </Link>
              <a href="tel:0620540945" className="btn-secondary">
                <Phone className="w-5 h-5 mr-2" />
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }

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
              Prenez <span className="text-gradient">Rendez-vous</span>
            </h1>
            <p className="text-white/60 text-lg">
              Réservez votre créneau en quelques clics. Simple, rapide, efficace.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-dark border-y border-white/5">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 sm:gap-8">
            {[
              { num: 1, label: 'Service' },
              { num: 2, label: 'Date & Heure' },
              { num: 3, label: 'Vos infos' },
            ].map((s, i) => (
              <div key={s.num} className="flex items-center gap-2 sm:gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all
                  ${step >= s.num ? 'bg-gradient-to-r from-primary-blue to-accent-rose text-white' : 'bg-white/5 text-white/40'}`}>
                  {step > s.num ? <Check className="w-5 h-5" /> : s.num}
                </div>
                <span className={`hidden sm:block text-sm font-medium ${step >= s.num ? 'text-white' : 'text-white/40'}`}>
                  {s.label}
                </span>
                {i < 2 && <ChevronRight className="w-5 h-5 text-white/20" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-dark">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div className="animate-fade-in">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
                  Choisissez votre prestation
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`p-6 rounded-2xl border text-left transition-all duration-300
                        ${selectedService === service.id 
                          ? 'bg-gradient-to-br from-primary-blue/20 to-accent-rose/20 border-accent-rose' 
                          : 'bg-dark-light border-white/5 hover:border-white/20'}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center
                          ${selectedService === service.id ? 'bg-accent-rose' : 'bg-white/5'}`}>
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-semibold mb-1">{service.name}</h3>
                          <div className="flex items-center gap-3 text-sm">
                            <span className="text-accent-rose font-semibold">{service.price}</span>
                            <span className="text-white/40 flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {service.duration}
                            </span>
                          </div>
                        </div>
                        {selectedService === service.id && (
                          <Check className="w-6 h-6 text-accent-rose" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <button
                    onClick={() => selectedService && setStep(2)}
                    disabled={!selectedService}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continuer
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <div className="animate-fade-in">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
                  Choisissez votre créneau
                </h2>
                
                {/* Date Input */}
                <div className="mb-8">
                  <label className="block text-white font-medium mb-3">Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-6 py-4 bg-dark-light border border-white/10 rounded-xl text-white
                             focus:outline-none focus:border-accent-rose transition-colors"
                  />
                </div>

                {/* Time Slots */}
                <div className="mb-8">
                  <label className="block text-white font-medium mb-3">Heure</label>
                  <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 rounded-lg text-sm font-medium transition-all
                          ${selectedTime === time 
                            ? 'bg-gradient-to-r from-primary-blue to-accent-rose text-white' 
                            : 'bg-dark-light text-white/60 hover:text-white hover:bg-white/5'}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 justify-center">
                  <button onClick={() => setStep(1)} className="btn-secondary">
                    Retour
                  </button>
                  <button
                    onClick={() => selectedDate && selectedTime && setStep(3)}
                    disabled={!selectedDate || !selectedTime}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continuer
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Info */}
            {step === 3 && (
              <div className="animate-fade-in">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
                  Vos informations
                </h2>

                {/* Summary */}
                <div className="card-premium p-6 mb-8">
                  <h3 className="text-white/50 text-sm uppercase tracking-wider mb-4">Récapitulatif</h3>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <Scissors className="w-4 h-4 text-accent-rose" />
                      <span className="text-white">{selectedServiceData?.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent-rose" />
                      <span className="text-white">{selectedDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-accent-rose" />
                      <span className="text-white">{selectedTime}</span>
                    </div>
                    <div className="ml-auto">
                      <span className="text-accent-rose font-bold text-xl">{selectedServiceData?.price}</span>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Nom complet
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-6 py-4 bg-dark-light border border-white/10 rounded-xl text-white
                                 placeholder:text-white/30 focus:outline-none focus:border-accent-rose transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-6 py-4 bg-dark-light border border-white/10 rounded-xl text-white
                                 placeholder:text-white/30 focus:outline-none focus:border-accent-rose transition-colors"
                        placeholder="06 00 00 00 00"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-6 py-4 bg-dark-light border border-white/10 rounded-xl text-white
                               placeholder:text-white/30 focus:outline-none focus:border-accent-rose transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Notes (optionnel)
                    </label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      rows={3}
                      className="w-full px-6 py-4 bg-dark-light border border-white/10 rounded-xl text-white
                               placeholder:text-white/30 focus:outline-none focus:border-accent-rose transition-colors resize-none"
                      placeholder="Des demandes particulières ?"
                    />
                  </div>

                  <div className="flex gap-4 justify-center pt-4">
                    <button type="button" onClick={() => setStep(2)} className="btn-secondary">
                      Retour
                    </button>
                    <button type="submit" className="btn-primary">
                      <Check className="w-5 h-5 mr-2" />
                      Confirmer la réservation
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
