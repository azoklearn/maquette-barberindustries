'use client'

import Image from 'next/image'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=600&fit=crop',
    alt: 'Coupe moderne',
  },
  {
    src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=800&fit=crop',
    alt: 'Taille de barbe',
  },
  {
    src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=600&fit=crop',
    alt: 'Style urbain',
  },
  {
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=800&fit=crop',
    alt: 'Finitions parfaites',
  },
  {
    src: 'https://images.unsplash.com/photo-1593702288056-7927b442d0fa?w=600&h=600&fit=crop',
    alt: 'Ambiance barbershop',
  },
]

export default function Gallery() {
  return (
    <section className="relative section-padding bg-dark overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent-rose text-sm font-semibold tracking-wider uppercase mb-4">
            Notre Travail
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Galerie <span className="text-gradient">Inspiration</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Découvrez notre savoir-faire à travers nos réalisations. 
            Chaque coupe raconte une histoire.
          </p>
        </div>

        {/* Gallery Grid - Masonry Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {/* Large Image */}
          <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white">
                Coupes Modernes
              </span>
            </div>
          </div>

          {/* Regular Images */}
          <div className="relative aspect-square rounded-2xl overflow-hidden group">
            <Image
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden group">
            <Image
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden group">
            <Image
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden group">
            <Image
              src={galleryImages[4].src}
              alt={galleryImages[4].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>
    </section>
  )
}
