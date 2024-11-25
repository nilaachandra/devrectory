import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const isLoggedIn = !!req.nextauth.token
    const isAccessingLoginPage = req.nextUrl.pathname === "/dashboard/login"

    if (isLoggedIn && isAccessingLoginPage) {
      // Redirect to dashboard if trying to access login page while authenticated
      return NextResponse.redirect(new URL("/dashboard", req.url))
    }

    if (!isLoggedIn && !isAccessingLoginPage) {
      // Redirect to login if trying to access protected route while unauthenticated
      return NextResponse.redirect(new URL("/dashboard/login", req.url))
    }
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        // This will be true for all matched routes
        return true
      },
    },
  }
)

export const config = { 
  matcher: ["/dashboard", "/dashboard/:path*", "/login"]
}

