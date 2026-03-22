export type BlogPost = {
  id: number
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  author: string
  date: string
  readTime: string
  seoTitle: string
  seoDescription: string
  sections: { heading?: string; paragraphs: string[] }[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'coupes-homme-2026',
    title: 'Les coupes homme qui vont marquer 2026',
    excerpt:
      "Du dégradé flou aux textures naturelles, en passant par les mèches lumineuses : je te montre les styles qui fonctionnent vraiment au quotidien, pas juste sur Instagram.",
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1200&h=600&fit=crop',
    category: 'Tendances',
    author: 'Raphael',
    date: '15 Jan 2026',
    readTime: '5 min',
    seoTitle: 'Tendances coiffure homme 2026 | Barber Industries',
    seoDescription:
      'Fade, texture, mèches : les coupes qui cartonnent en 2026 et comment les adapter à ton style de vie.',
    sections: [
      {
        paragraphs: [
          "En 2026, on mise sur des coupes qui tiennent la route entre deux visites chez le barber. Le dégradé reste roi, mais il se fait plus naturel : moins de ligne ultra nette, plus de fondu doux qui grandit bien.",
          "Les textures travaillées à la main (pâte mat, poudre texturisante) remplacent le gel brillant d’il y a dix ans. L’idée : un look qui bouge, qui vit, pas une casquette figée.",
        ],
      },
      {
        heading: 'Les incontournables',
        paragraphs: [
          "Le mid fade qui laisse un peu de volume sur le dessus, le crop texturé pour les cheveux épais, et les mèches discrètes (caramel ou blond froid) pour ceux qui veulent un twist sans changer de coupe entière.",
          "Mon conseil : ramène des photos, mais explique surtout ton rythme (sport, bureau, soirées). Une bonne coupe, c’est celle que tu sais coiffer en 3 minutes le matin.",
        ],
      },
      {
        heading: 'À retenir',
        paragraphs: [
          "Prends rendez-vous tous les 3 à 4 semaines pour entretenir le dégradé, et investis dans un bon shampoing + une cire ou une poudre adaptée à ton type de cheveux. Ton barber peut te orienter selon ta texture.",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: 'entretenir-barbe-quotidien',
    title: 'Comment entretenir ta barbe au quotidien (sans y passer 1 heure)',
    excerpt:
      "Nettoyage, hydratation, traçage des contours : je te donne une routine simple et réaliste pour avoir une barbe propre, douce et nette tous les jours, même si tu n'as pas l'habitude de t'en occuper.",
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1200&h=600&fit=crop',
    category: 'Conseils',
    author: 'Raphael',
    date: '10 Jan 2026',
    readTime: '4 min',
    seoTitle: 'Routine barbe quotidienne | Barber Industries',
    seoDescription:
      'Routine express pour une barbe propre : lavage, huile, contours et fréquence des visites au barber.',
    sections: [
      {
        paragraphs: [
          "Une barbe nickel, ce n’est pas la quantité de produits, c’est la régularité. Deux fois par semaine, un shampoing dédié barbe (ou un shampoing doux) pour enlever sébum et résidus. Tous les jours ou tous les deux jours : quelques gouttes d’huile pour hydrater la peau en dessous.",
          "Les contours : une fois par semaine au rasoir ou à la tondeuse pour garder une ligne nette sur les joues et le cou. Entre deux, tu peux juste repasser une tondeuse sur la longueur si ça dérape.",
        ],
      },
      {
        heading: 'Le matin en 5 minutes',
        paragraphs: [
          "1) Rince à l’eau tiède si tu n’as pas shampoing ce jour-là. 2) Séche en tapotant avec une serviette. 3) Huile ou baume sur barbe encore légèrement humide. 4) Brosse dans le sens des poils puis contre pour redonner du volume. 5) Cire ou cire à moustache si besoin.",
        ],
      },
      {
        heading: 'Chez le pro',
        paragraphs: [
          "Un passage au barber toutes les 3 à 4 semaines pour uniformiser la forme et les contours, ça change tout. On ajuste la longueur selon la pousse de ton visage et on te conseille les bons gestes pour chez toi.",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: 'guide-degrade-fade-taper',
    title: 'Le guide du dégradé parfait : fade, mid fade, taper…',
    excerpt:
      "Tu entends parler de fade, taper, mid fade sans vraiment savoir la différence ? On décortique chaque type de dégradé avec des exemples pour que tu saches exactement quoi demander au barber.",
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1200&h=600&fit=crop',
    category: 'Guides',
    author: 'Raphael',
    date: '5 Jan 2026',
    readTime: '6 min',
    seoTitle: 'Fade, taper, mid fade : le guide | Barber Industries',
    seoDescription:
      'Comprendre les dégradés homme : skin fade, low fade, taper et comment les demander à ton barber.',
    sections: [
      {
        paragraphs: [
          "Le dégradé, c’est la transition entre les zones très courtes (parfois à la peau) et les cheveux plus longs sur le dessus. Plus la transition est haute sur la tête, plus le dégradé est « fort » visuellement.",
        ],
      },
      {
        heading: 'Low fade, mid fade, high fade',
        paragraphs: [
          "Low fade : la transition commence bas, près des oreilles — discret et pro. Mid fade : au milieu de la tempe, équilibré et moderne. High fade : la transition monte haut, look très marqué, souvent associé au crop ou au buzz.",
          "Le skin fade (ou bald fade) va jusqu’à la peau au plus bas : contraste maximum, entretien plus fréquent pour garder la ligne nette.",
        ],
      },
      {
        heading: 'Taper vs fade',
        paragraphs: [
          "Le taper atténue surtout la nuque et les tempes sans forcément monter haut sur les côtés. C’est souvent le choix pour un look pro ou une première approche du dégradé. Le fade est plus visible, plus « street » selon la hauteur.",
          "Quand tu viens au salon, dis : « je veux un mid fade avec 2 cm sur le dessus » ou montre une photo + précise si tu veux la nuque fondu ou carré. On s’occupe du reste.",
        ],
      },
    ],
  },
  {
    id: 4,
    slug: 'huile-barbe-choisir',
    title: 'Huile à barbe : laquelle choisir pour ton style et ta peau ?',
    excerpt:
      "Huile légère ou plus riche, parfum discret ou marqué, peau sensible ou normale : je t'explique comment choisir une huile adaptée à ta barbe et éviter les démangeaisons et zones sèches.",
    image: 'https://images.unsplash.com/photo-1621607505837-4c5b7e894c0a?w=1200&h=600&fit=crop',
    category: 'Produits',
    author: 'Raphael',
    date: '28 Dec 2025',
    readTime: '3 min',
    seoTitle: 'Choisir son huile à barbe | Barber Industries',
    seoDescription:
      'Ingrédients, texture, parfum : comment trouver l’huile à barbe qui convient à ta peau et à ta barbe.',
    sections: [
      {
        paragraphs: [
          "Une bonne huile à barbe hydrate la peau sous les poils, pas seulement les poils eux-mêmes. Regarde la liste d’ingrédients : huiles végétales de base (jojoba, argan, amande douce) en tête, évite les silicones lourds si tu as tendance aux boutons.",
        ],
      },
      {
        heading: 'Barbe courte vs longue',
        paragraphs: [
          "Barbe de 3 jours à 1 cm : une huile légère, quelques gouttes suffisent. Barbe longue : tu peux partir sur une formule un peu plus nourrissante, surtout en hiver.",
          "Peau sensible : parfums légers ou sans parfum au début. Tu testes sur une petite zone avant d’en mettre partout.",
        ],
      },
      {
        heading: 'Application',
        paragraphs: [
          "2 à 4 gouttes dans la main, chauffe entre les paumes, puis masse la peau sous la barbe avant de répartir sur les poils. Une fois par jour ou tous les deux jours selon ta sécheresse.",
        ],
      },
    ],
  },
  {
    id: 5,
    slug: 'coiffure-morphologie-coupe',
    title: 'Coiffure et morphologie : trouver LA coupe qui te va',
    excerpt:
      "Visage rond, ovale, carré ou allongé : je te montre quelles longueurs, volumes et contours mettent le plus en valeur ta morphologie, avec des exemples concrets que j'utilise au salon.",
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=600&fit=crop',
    category: 'Style',
    author: 'Raphael',
    date: '20 Dec 2025',
    readTime: '5 min',
    seoTitle: 'Coupe homme et morphologie du visage | Barber Industries',
    seoDescription:
      'Quelle coupe pour quel visage ? Conseils pour allonger, équilibrer ou adoucir les traits.',
    sections: [
      {
        paragraphs: [
          "Il n’y a pas une « bonne » coupe universelle, il y a une coupe qui équilibre ton visage. Un visage rond gagne souvent en structure avec du volume sur le dessus et des tempes un peu plus serrées. Un visage long peut se rééquilibrer avec un peu de largeur sur les côtés ou une frange légère.",
        ],
      },
      {
        heading: 'Les grandes familles',
        paragraphs: [
          "Ovale : tu as de la marge, la plupart des coupes passent. Carré : adoucis les angles avec un dégradé progressif ou un peu de longueur sur le dessus. Rond : crée de la hauteur ou un dégradé medium/high pour allonger visuellement.",
          "Le mieux reste une vraie discussion avec des photos de profil : on adapte la ligne du dégradé et la texture selon ta mâchoire et ton style de vie.",
        ],
      },
    ],
  },
  {
    id: 6,
    slug: 'erreurs-barbe-eviter',
    title: '5 erreurs que je vois tout le temps sur les barbes (et comment les éviter)',
    excerpt:
      "Raser trop haut, laisser des trous, négliger le cou, utiliser les mauvais produits… Je passe en revue les erreurs les plus fréquentes et je te donne des solutions simples pour les corriger.",
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1200&h=600&fit=crop',
    category: 'Conseils',
    author: 'Raphael',
    date: '15 Dec 2025',
    readTime: '4 min',
    seoTitle: 'Erreurs entretien barbe | Barber Industries',
    seoDescription:
      'Les erreurs fréquentes sur la barbe et comment les corriger : contours, produits, fréquence.',
    sections: [
      {
        heading: '1. La ligne de joue trop haute',
        paragraphs: [
          "Beaucoup montent la barbe trop sur la joue pour « faire propre ». Résultat : visage qui paraît long ou creux. Garde la ligne naturelle de ton poil et fais ajuster au barber la première fois.",
        ],
      },
      {
        heading: '2. Négliger le cou',
        paragraphs: [
          "Le cou mal rasé ou poilu sous le menton gâche une belle barbe. Une passe régulière sur la nuque et sous la mâchoire, c’est le détail qui fait propre.",
        ],
      },
      {
        heading: '3. Trop ou pas assez de produit',
        paragraphs: [
          "Trop de cire ou de baume : barbe grasse. Pas d’hydratation : peau qui tiraille et pellicules. Trouve l’équilibre : huile légère + shampoing adapté, et on ajuste ensemble en salon si besoin.",
        ],
      },
      {
        heading: '4. Couper au hasard entre deux salons',
        paragraphs: [
          "Les trous et les longueurs incohérentes viennent souvent de coupes maison irrégulières. Mieux vaut espacer un peu et laisser un pro uniformiser la forme.",
        ],
      },
      {
        heading: '5. Oublier la brosse',
        paragraphs: [
          "Brosser distribue le sébum naturel et évite les poils qui partent dans tous les sens. 1 minute le matin, ça suffit.",
        ],
      },
    ],
  },
]

export function getPostById(id: string | number): BlogPost | undefined {
  const n = typeof id === 'string' ? parseInt(id, 10) : id
  return blogPosts.find((p) => p.id === n)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getAllPostIds(): number[] {
  return blogPosts.map((p) => p.id)
}

/** Slugs pour les pages statiques /blog/[slug] */
export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug)
}
