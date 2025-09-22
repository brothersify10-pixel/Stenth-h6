import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Security and performance headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')

  // Cache control for static assets
  if (request.nextUrl.pathname.startsWith('/images/') ||
      request.nextUrl.pathname.startsWith('/icons/') ||
      request.nextUrl.pathname.endsWith('.png') ||
      request.nextUrl.pathname.endsWith('.jpg') ||
      request.nextUrl.pathname.endsWith('.jpeg') ||
      request.nextUrl.pathname.endsWith('.webp') ||
      request.nextUrl.pathname.endsWith('.avif')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }

  // Cache control for fonts
  if (request.nextUrl.pathname.endsWith('.woff') ||
      request.nextUrl.pathname.endsWith('.woff2') ||
      request.nextUrl.pathname.endsWith('.ttf') ||
      request.nextUrl.pathname.endsWith('.otf')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}