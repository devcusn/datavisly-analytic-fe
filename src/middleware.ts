import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_ROUTES = [
  "/",
  "/login",
  "/sign-up",
  "/forgot-password",
  "/reset-password",
];

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const isPublic = PUBLIC_ROUTES.some(
    (path) =>
      req.nextUrl.pathname === path ||
      req.nextUrl.pathname.startsWith(`${path}/`)
  );
  try {
    if (!isPublic) {
      if (!token) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    } else {
      if (token) {
        return NextResponse.redirect(new URL("/sites", req.url));
      }
    }
  } catch (err) {
    console.log(err);
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|js|favicon/|sitemap.xml|robots.txt).*)",
  ],
};
