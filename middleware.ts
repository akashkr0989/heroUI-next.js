import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
const locales = ["en", "ar"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const pathnameLocale = pathname.split("/")[1];

  if (locales.includes(pathnameLocale)) {
    return NextResponse.next(); // Locale already present
  }

  const url = request.nextUrl.clone();

  url.pathname = `/${defaultLocale}${pathname}`;

  return NextResponse.redirect(url);
}

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
