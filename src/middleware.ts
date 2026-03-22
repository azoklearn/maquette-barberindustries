import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { blogPosts } from '@/data/blog-posts'

/**
 * Redirige les anciennes URLs /blog/1 … /blog/6 vers /blog/<slug>
 * pour que les liens bookmarkés ou partagés affichent toujours l’article.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const match = /^\/blog\/(\d+)$/.exec(pathname)
  if (!match) {
    return NextResponse.next()
  }
  const id = parseInt(match[1], 10)
  const post = blogPosts.find((p) => p.id === id)
  if (!post) {
    return NextResponse.next()
  }
  const url = request.nextUrl.clone()
  url.pathname = `/blog/${post.slug}`
  return NextResponse.redirect(url, 308)
}

export const config = {
  matcher: ['/blog/:path*'],
}
