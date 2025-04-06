import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Read the "user" cookie
  const userCookie = request.cookies.get("user")?.value;

  // If cookie exists, user is considered logged in
  const isLoggedIn = !!userCookie;

  // Allow public routes
  const publicRoutes = ["/","/gamestore", "/login", "/register"];
  if (publicRoutes.includes(pathname) || pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // Protect /game/:id routes
  if (pathname.startsWith("/game/") && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|public/).*)"],
};
