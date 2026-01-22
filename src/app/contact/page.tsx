'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, Instagram, Facebook, Check } from 'lucide-react'
import Image from 'next/image'

const contactInfo = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: '06 20 54 09 45',
    href: 'tel:0620540945',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'barber.industries82@gmail.com',
    href: 'mailto:barber.industries82@gmail.com',
  },
  {
    icon: Clock,
    label: 'Horaires',
    value: 'Lun - Sam: 9h - 19h',
    href: null,
  },
]

const hours = [
  { day: 'Lundi', hours: '9h00 - 19h00' },
  { day: 'Mardi', hours: '9h00 - 19h00' },
  { day: 'Mercredi', hours: '9h00 - 19h00' },
  { day: 'Jeudi', hours: '9h00 - 19h00' },
  { day: 'Vendredi', hours: '9h00 - 19h00' },
  { day: 'Samedi', hours: '9h00 - 19h00' },
  { day: 'Dimanche', hours: 'Fermé' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary-blue/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-rose/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent-rose text-sm font-semibold tracking-wider uppercase mb-4">
              Contact
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Parlons de <span className="text-gradient">Votre Style</span>
            </h1>
            <p className="text-white/60 text-lg">
              Une question ? Une demande particulière ? N'hésitez pas à nous contacter.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-8 bg-dark border-y border-white/5">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
            {contactInfo.map((info) => (
              info.href ? (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-3 text-white/80 hover:text-accent-rose transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-accent-rose" />
                  </div>
                  <div>
                    <span className="block text-xs text-white/50 uppercase tracking-wider">{info.label}</span>
                    <span className="font-medium">{info.value}</span>
                  </div>
                </a>
              ) : (
                <div key={info.label} className="flex items-center gap-3 text-white/80">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-accent-rose" />
                  </div>
                  <div>
                    <span className="block text-xs text-white/50 uppercase tracking-wider">{info.label}</span>
                    <span className="font-medium">{info.value}</span>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                Envoyez-nous un message
              </h2>
              <p className="text-white/60 mb-8">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>

              {isSubmitted && (
                <div className="mb-8 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-green-500">Message envoyé avec succès !</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Nom complet</label>
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
                    <label className="block text-white font-medium mb-2">Téléphone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-6 py-4 bg-dark-light border border-white/10 rounded-xl text-white
                               placeholder:text-white/30 focus:outline-none focus:border-accent-rose transition-colors"
                      placeholder="06 00 00 00 00"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
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
                  <label className="block text-white font-medium mb-2">Sujet</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-6 py-4 bg-dark-light border border-white/10 rounded-xl text-white
                             focus:outline-none focus:border-accent-rose transition-colors"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="reservation">Question sur une réservation</option>
                    <option value="services">Information sur les services</option>
                    <option value="boutique">Question sur la boutique</option>
                    <option value="partenariat">Proposition de partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-6 py-4 bg-dark-light border border-white/10 rounded-xl text-white
                             placeholder:text-white/30 focus:outline-none focus:border-accent-rose transition-colors resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Raphael Card */}
              <div className="card-premium p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
                      alt="Raphael"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-display text-xl font-semibold">Raphael</h3>
                    <p className="text-accent-rose">Fondateur & Barbier</p>
                  </div>
                </div>
                <p className="text-white/60 mb-6">
                  Passionné par mon métier depuis plus de 5 ans, je suis à votre écoute pour 
                  toute question ou demande particulière. N'hésitez pas à me contacter directement !
                </p>
                <div className="flex gap-3">
                  <a
                    href="tel:0620540945"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary-blue to-accent-rose 
                             text-white font-medium rounded-xl hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Appeler
                  </a>
                  <a
                    href="mailto:barber.industries82@gmail.com"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 
                             text-white font-medium rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="card-premium p-8">
                <h3 className="text-white font-display text-xl font-semibold mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent-rose" />
                  Horaires d'ouverture
                </h3>
                <div className="space-y-3">
                  {hours.map((item) => (
                    <div
                      key={item.day}
                      className={`flex justify-between py-2 border-b border-white/5 last:border-0
                        ${item.hours === 'Fermé' ? 'text-white/40' : 'text-white'}`}
                    >
                      <span>{item.day}</span>
                      <span className={item.hours === 'Fermé' ? '' : 'text-accent-rose font-medium'}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="card-premium p-8">
                <h3 className="text-white font-display text-xl font-semibold mb-6">
                  Suivez-nous
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500
                             text-white font-medium rounded-xl hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600
                             text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-blue to-accent-rose">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            Prêt à prendre rendez-vous ?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Réservez en ligne en quelques clics et venez découvrir l'expérience Barber Industries.
          </p>
          <a
            href="/reservation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-dark font-semibold rounded-full 
                     hover:bg-white/90 transition-all hover:scale-105"
          >
            Réserver maintenant
          </a>
        </div>
      </section>
    </>
  )
}
