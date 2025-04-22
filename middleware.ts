import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith("/_next") ||
    pathname.includes("/api/")
  ) {
    return NextResponse.next();
  }

  // Handle root redirect
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/en", request.url));
  }

  // Check if path has valid locale
  const pathnameIsMissingLocale = !["en", "ar"].some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    const locale = "en"; // default

    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

// import { NextRequest, NextResponse } from "next/server";

// const PUBLIC_FILE = /\.(.*)$/;
// const locales = ["en", "ar"];
// const defaultLocale = "en";

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   if (
//     pathname.startsWith("/api") ||
//     pathname.startsWith("/_next") ||
//     PUBLIC_FILE.test(pathname)
//   ) {
//     return NextResponse.next();
//   }

//   const pathnameLocale = pathname.split("/")[1];

//   if (locales.includes(pathnameLocale)) {
//     return NextResponse.next(); // Locale already present
//   }

//   const url = request.nextUrl.clone();

//   url.pathname = `/${defaultLocale}${pathname}`;

//   return NextResponse.redirect(url);
// }

// const PUBLIC_FILE = /\.(.*)$/;
// const locales = ["en", "ar"];
// const defaultLocale = "en";

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   if (
//     pathname.startsWith("/api") ||
//     pathname.includes("_next") ||
//     PUBLIC_FILE.test(pathname)
//   ) {
//     return NextResponse.next();
//   }

//   const pathnameLocale = pathname.split("/")[1];

//   if (locales.includes(pathnameLocale)) return NextResponse.next();

//   const redirectUrl = new URL(`/${defaultLocale}${pathname}`, request.url);

//   return NextResponse.redirect(redirectUrl);
// }

// import { NextRequest, NextResponse } from "next/server";

// const PUBLIC_FILE = /\.(.*)$/;
// const locales = ["en-US", "ar-AE"];
// const defaultLocale = "en-US";

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // Allow _next/static, favicon, etc.
//   if (
//     pathname.startsWith("/api") ||
//     pathname.startsWith("/_next") ||
//     PUBLIC_FILE.test(pathname)
//   ) {
//     return NextResponse.next();
//   }

//   // If the locale is already present in the path, do nothing
//   const pathnameLocale = pathname.split("/")[1];

//   if (locales.includes(pathnameLocale)) {
//     return NextResponse.next();
//   }

//   // Redirect to default locale if not present
//   const url = request.nextUrl.clone();

//   url.pathname = `/${defaultLocale}${pathname}`;

//   return NextResponse.redirect(url);
// }
