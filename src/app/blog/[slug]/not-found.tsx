import Link from 'next/link'

export default function BlogNotFound() {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-dark flex flex-col items-center justify-center px-4">
      <h1 className="font-display text-3xl font-bold text-white mb-4">Article introuvable</h1>
      <p className="text-white/60 mb-8 text-center max-w-md">
        Cet article n’existe pas ou a été déplacé.
      </p>
      <Link href="/blog" className="btn-primary">
        Retour au blog
      </Link>
    </section>
  )
}
