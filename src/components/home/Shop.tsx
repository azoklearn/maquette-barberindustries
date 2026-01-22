'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag, ArrowRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Huile à Barbe Premium',
    description: 'Huile nourrissante aux huiles essentielles',
    price: '29.90€',
    image: 'https://images.unsplash.com/photo-1621607505837-4c5b7e894c0a?w=400&h=400&fit=crop',
    tag: 'Bestseller',
  },
  {
    id: 2,
    name: 'Cire Coiffante Matte',
    description: 'Tenue forte, finition matte naturelle',
    price: '24.90€',
    image: 'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=400&h=400&fit=crop',
    tag: 'Nouveau',
  },
  {
    id: 3,
    name: 'Baume Après-Rasage',
    description: 'Apaise et hydrate après le rasage',
    price: '19.90€',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop',
    tag: null,
  },
  {
    id: 4,
    name: 'Kit Entretien Barbe',
    description: 'Tout pour une barbe parfaite',
    price: '49.90€',
    image: 'https://images.unsplash.com/photo-1621607505835-caeac71c0d80?w=400&h=400&fit=crop',
    tag: 'Pack',
  },
]

export default function Shop() {
  return (
    <section className="relative section-padding bg-dark overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-accent-rose/10 to-transparent rounded-full blur-[100px]" />

      <div className="relative container-custom">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <span className="inline-block text-accent-rose text-sm font-semibold tracking-wider uppercase mb-4">
              Boutique
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Produits <span className="text-gradient">Sélectionnés</span>
            </h2>
            <p className="text-white/60 max-w-xl text-lg">
              Des produits premium pour prolonger l'expérience Barber Industries chez vous.
            </p>
          </div>
          <Link
            href="/boutique"
            className="inline-flex items-center gap-2 text-accent-rose hover:text-accent-rose-light transition-colors mt-6 lg:mt-0"
          >
            <span>Voir la boutique</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/boutique/${product.id}`}
              className="group card-premium overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                
                {/* Tag */}
                {product.tag && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-accent-rose text-white text-xs font-semibold rounded-full">
                    {product.tag}
                  </span>
                )}

                {/* Quick Add Button */}
                <button className="absolute bottom-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent-rose">
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-accent-rose transition-colors">
                  {product.name}
                </h3>
                <p className="text-white/50 text-sm mb-3">{product.description}</p>
                <span className="text-accent-rose font-bold text-lg">{product.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
