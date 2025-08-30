// Middleware disabled - home page is directly accessible
// No authentication checks or redirects

export async function middleware() {
  // No middleware logic - all routes are accessible
  return
}

export const config = {
  matcher: [],  // Empty matcher - middleware doesn't run on any routes
}