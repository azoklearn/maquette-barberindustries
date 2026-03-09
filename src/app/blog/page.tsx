import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, User, Tag } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Barber Industries',
  description: 'Conseils grooming, tendances coiffure homme, guides barbe et astuces style. Le blog Barber Industries pour être au top de votre look.',
}

const featuredPost = {
  id: 1,
  title: 'Les coupes homme qui vont marquer 2026',
  excerpt:
    "Du dégradé flou aux textures naturelles, en passant par les mèches lumineuses : je te montre les styles qui fonctionnent vraiment au quotidien, pas juste sur Instagram.",
  image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1200&h=600&fit=crop',
  category: 'Tendances',
  author: 'Raphael',
  date: '15 Jan 2026',
  readTime: '5 min',
}

const posts = [
  {
    id: 2,
    title: 'Comment entretenir ta barbe au quotidien (sans y passer 1 heure)',
    excerpt:
      "Nettoyage, hydratation, traçage des contours : je te donne une routine simple et réaliste pour avoir une barbe propre, douce et nette tous les jours, même si tu n\'as pas l\'habitude de t\'en occuper.",
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=400&fit=crop',
    category: 'Conseils',
    author: 'Raphael',
    date: '10 Jan 2026',
    readTime: '4 min',
  },
  {
    id: 3,
    title: 'Le guide du dégradé parfait : fade, mid fade, taper…',
    excerpt:
      "Tu entends parler de fade, taper, mid fade sans vraiment savoir la différence ? On décortique chaque type de dégradé avec des exemples pour que tu saches exactement quoi demander au barber.",
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=400&fit=crop',
    category: 'Guides',
    author: 'Raphael',
    date: '5 Jan 2026',
    readTime: '6 min',
  },
  {
    id: 4,
    title: 'Huile à barbe : laquelle choisir pour ton style et ta peau ?',
    excerpt:
      "Huile légère ou plus riche, parfum discret ou marqué, peau sensible ou normale : je t\'explique comment choisir une huile adaptée à ta barbe et éviter les démangeaisons et zones sèches.",
    image: 'https://images.unsplash.com/photo-1621607505837-4c5b7e894c0a?w=600&h=400&fit=crop',
    category: 'Produits',
    author: 'Raphael',
    date: '28 Dec 2025',
    readTime: '3 min',
  },
  {
    id: 5,
    title: 'Coiffure et morphologie : trouver LA coupe qui te va',
    excerpt:
      "Visage rond, ovale, carré ou allongé : je te montre quelles longueurs, volumes et contours mettent le plus en valeur ta morphologie, avec des exemples concrets que j\'utilise au salon.",
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=400&fit=crop',
    category: 'Style',
    author: 'Raphael',
    date: '20 Dec 2025',
    readTime: '5 min',
  },
  {
    id: 6,
    title: '5 erreurs que je vois tout le temps sur les barbes (et comment les éviter)',
    excerpt:
      "Raser trop haut, laisser des trous, négliger le cou, utiliser les mauvais produits… Je passe en revue les erreurs les plus fréquentes et je te donne des solutions simples pour les corriger.",
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=400&fit=crop',
    category: 'Conseils',
    author: 'Raphael',
    date: '15 Dec 2025',
    readTime: '4 min',
  },
]

const categories = ['Tous', 'Tendances', 'Conseils', 'Guides', 'Style', 'Produits']

const themes = [
  {
    title: 'Comment avoir du volume et de la texture',
    description: 'Techniques, produits et gestes simples pour donner du relief à vos cheveux.',
  },
  {
    title: 'Comment entretenir ses cheveux bouclés',
    description: 'Routine, hydratation et erreurs à éviter pour des boucles nettes et définies.',
  },
  {
    title: 'Comment choisir sa coupe',
    description: 'Adapter sa coiffure à sa morphologie, son style et son quotidien.',
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent-rose/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary-blue/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent-rose text-sm font-semibold tracking-wider uppercase mb-4">
              Blog
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Conseils & <span className="text-gradient">Inspirations</span>
            </h1>
            <p className="text-white/60 text-lg">
              La rubrique dédiée à votre style : volume, texture, barbe, boucles, morphologie… 
              Des conseils concrets pour sortir du barber avec un look que vous savez entretenir.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Themes */}
      <section className="py-10 bg-dark">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto card-premium p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Tag className="w-5 h-5 text-accent-rose" />
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-white">
                Ce que vous allez trouver dans le blog
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {themes.map((theme) => (
                <div key={theme.title} className="bg-dark-light/60 rounded-2xl p-4">
                  <p className="text-white font-semibold text-sm mb-2">
                    {theme.title}
                  </p>
                  <p className="text-white/60 text-xs">
                    {theme.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-dark border-y border-white/5">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
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

      {/* Featured Post */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <Link href={`/blog/${featuredPost.id}`} className="group block">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="aspect-[21/9] relative">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-accent-rose text-white text-xs font-semibold rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="text-white/60 text-sm flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {featuredPost.readTime}
                  </span>
                </div>
                
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 
                             group-hover:text-gradient transition-all">
                  {featuredPost.title}
                </h2>
                
                <p className="text-white/60 text-lg max-w-2xl mb-6 hidden sm:block">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-blue to-accent-rose flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">R</span>
                    </div>
                    <span className="text-white/80 text-sm">{featuredPost.author}</span>
                  </div>
                  <span className="text-white/40">•</span>
                  <span className="text-white/60 text-sm">{featuredPost.date}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding bg-dark-light">
        <div className="container-custom">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">
            Articles Récents
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group card-premium overflow-hidden"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-accent-rose transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-white/60 text-sm">{post.date}</span>
                      <span className="text-white/40">•</span>
                      <span className="text-white/60 text-sm flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-accent-rose group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Voir plus d'articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-gradient-to-br from-primary-blue to-accent-rose">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Restez informé
            </h2>
            <p className="text-white/80 mb-8">
              Recevez nos derniers articles, conseils et offres exclusives directement dans votre boîte mail.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full 
                         text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
              />
              <button type="submit" className="px-8 py-4 bg-white text-dark font-semibold rounded-full 
                                              hover:bg-white/90 transition-all hover:scale-105">
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
