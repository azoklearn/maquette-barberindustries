import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag, Star, Filter } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boutique | Barber Industries',
  description: 'Découvrez notre sélection de produits premium pour homme. Huiles à barbe, cires coiffantes, soins et accessoires de qualité.',
}

const categories = ['Tous', 'Barbe', 'Cheveux', 'Rasage', 'Soins', 'Accessoires']

const products = [
  {
    id: 1,
    name: 'Huile à Barbe Premium',
    description: 'Huile nourrissante aux huiles essentielles naturelles',
    price: 29.90,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1621607505837-4c5b7e894c0a?w=400&h=400&fit=crop',
    category: 'Barbe',
    tag: 'Bestseller',
    rating: 4.9,
    reviews: 127,
  },
  {
    id: 2,
    name: 'Cire Coiffante Matte',
    description: 'Tenue forte, finition matte naturelle',
    price: 24.90,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=400&h=400&fit=crop',
    category: 'Cheveux',
    tag: 'Nouveau',
    rating: 4.8,
    reviews: 89,
  },
  {
    id: 3,
    name: 'Baume Après-Rasage',
    description: 'Apaise et hydrate après le rasage',
    price: 19.90,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop',
    category: 'Rasage',
    tag: null,
    rating: 4.7,
    reviews: 64,
  },
  {
    id: 4,
    name: 'Kit Entretien Barbe',
    description: 'Tout pour une barbe parfaite',
    price: 49.90,
    originalPrice: 59.90,
    image: 'https://images.unsplash.com/photo-1621607505835-caeac71c0d80?w=400&h=400&fit=crop',
    category: 'Barbe',
    tag: 'Pack',
    rating: 5.0,
    reviews: 156,
  },
  {
    id: 5,
    name: 'Shampoing Fortifiant',
    description: 'Renforce et volumise les cheveux',
    price: 18.90,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop',
    category: 'Cheveux',
    tag: null,
    rating: 4.6,
    reviews: 42,
  },
  {
    id: 6,
    name: 'Rasoir de Sûreté Premium',
    description: 'Rasoir en métal chromé pour un rasage parfait',
    price: 45.00,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=400&h=400&fit=crop',
    category: 'Accessoires',
    tag: 'Premium',
    rating: 4.9,
    reviews: 78,
  },
  {
    id: 7,
    name: 'Peigne en Bois',
    description: 'Peigne artisanal en bois de santal',
    price: 15.00,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?w=400&h=400&fit=crop',
    category: 'Accessoires',
    tag: null,
    rating: 4.5,
    reviews: 35,
  },
  {
    id: 8,
    name: 'Crème Hydratante Visage',
    description: 'Hydratation intense pour hommes',
    price: 22.90,
    originalPrice: 27.90,
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4d8a609?w=400&h=400&fit=crop',
    category: 'Soins',
    tag: 'Promo',
    rating: 4.7,
    reviews: 91,
  },
]

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
              Produits <span className="text-gradient">Premium</span>
            </h1>
            <p className="text-white/60 text-lg">
              Des produits de qualité professionnelle sélectionnés pour vous. 
              Prolongez l'expérience Barber Industries chez vous.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-dark border-y border-white/5 sticky top-[72px] z-30">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-white/60 hover:text-white transition-colors">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filtrer</span>
            </button>
            <div className="w-px h-6 bg-white/10" />
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
                  ${index === 0 
                    ? 'bg-gradient-to-r from-primary-blue to-accent-rose text-white' 
                    : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
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
                    <span className={`absolute top-4 left-4 px-3 py-1 text-white text-xs font-semibold rounded-full
                      ${product.tag === 'Bestseller' ? 'bg-accent-rose' : 
                        product.tag === 'Nouveau' ? 'bg-primary-blue' :
                        product.tag === 'Promo' ? 'bg-green-500' :
                        product.tag === 'Premium' ? 'bg-gradient-to-r from-primary-blue to-accent-rose' :
                        'bg-white/20'}`}>
                      {product.tag}
                    </span>
                  )}

                  {/* Quick Add Button */}
                  <button className="absolute bottom-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full 
                                   flex items-center justify-center text-white opacity-0 group-hover:opacity-100 
                                   transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 
                                   hover:bg-accent-rose">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <span className="text-accent-rose text-xs font-medium uppercase tracking-wider">
                    {product.category}
                  </span>
                  
                  {/* Name */}
                  <h3 className="text-white font-semibold text-lg mt-2 mb-1 group-hover:text-accent-rose transition-colors">
                    {product.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/50 text-sm mb-3 line-clamp-2">{product.description}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-accent-rose" fill="currentColor" />
                      <span className="text-white text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-white/40 text-sm">({product.reviews} avis)</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-accent-rose font-bold text-xl">{product.price.toFixed(2)}€</span>
                    {product.originalPrice && (
                      <span className="text-white/40 line-through text-sm">{product.originalPrice.toFixed(2)}€</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Voir plus de produits
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-dark-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              -10% sur votre première commande
            </h2>
            <p className="text-white/60 mb-8">
              Inscrivez-vous à notre newsletter et recevez un code promo exclusif.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-6 py-4 bg-dark border border-white/10 rounded-full text-white
                         placeholder:text-white/30 focus:outline-none focus:border-accent-rose transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
