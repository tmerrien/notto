// Middleware disabled - home page is directly accessible
// No authentication checks or redirects

import { type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // No middleware logic - all routes are accessible
  return
}

export const config = {
  matcher: [],  // Empty matcher - middleware doesn't run on any routes
}