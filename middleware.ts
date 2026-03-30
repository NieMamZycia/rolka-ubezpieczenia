import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Nie blokuj /admin-login
  if (path === "/admin-login") {
    return NextResponse.next();
  }

  // Sprawdź auth tylko na /admin
  if (path === "/admin" || path.startsWith("/admin/")) {
    const authCookie = request.cookies.get("admin_auth");

    if (!authCookie || authCookie.value !== "authenticated") {
      return NextResponse.redirect(new URL("/admin-login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
