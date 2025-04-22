// import "@/styles/globals.css";
// import { Metadata, Viewport } from "next";
// import { Link } from "@heroui/link";
// import clsx from "clsx";

// import { Providers } from "./providers";

// import { siteConfig } from "@/config/site";
// import { fontSans } from "@/config/fonts";
// import { Navbar } from "@/components/navbar";

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

// export const viewport: Viewport = {
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "white" },
//     { media: "(prefers-color-scheme: dark)", color: "black" },
//   ],
// };

// export async function generateStaticParams() {
//   return [{ locale: "en" }, { locale: "ar" }];
// }

// export default function LocaleLayout({
//   children,
//   params,
// }: {
//   children: React.ReactNode;
//   params: { locale: string };
// }) {
//   const dir = params.locale === "ar" ? "rtl" : "ltr";

//   return (
//     <html suppressHydrationWarning lang="en">
//       <head />
//       <body
//         className={clsx(
//           "min-h-screen bg-background font-sans antialiased",
//           fontSans.variable,
//         )}
//         dir={dir}
//       >
//         <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
//           <div className="relative flex flex-col h-screen">
//             <Navbar />
//             <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
//               {children}
//             </main>
//             <footer className="w-full flex items-center justify-center py-3">
//               <Link
//                 isExternal
//                 className="flex items-center gap-1 text-current"
//                 href="https://heroui.com?utm_source=next-app-template"
//                 title="heroui.com homepage"
//               >
//                 <span className="text-default-600">Powered by</span>
//                 <p className="text-primary">HeroUI</p>
//               </Link>
//             </footer>
//           </div>
//         </Providers>
//       </body>
//     </html>
//   );
// }

// import "@/styles/globals.css";
// import { Link } from "@heroui/link";
// import clsx from "clsx";

// import { Providers } from "./providers";
// import { Navbar } from "@/components/navbar";
// import { fontSans } from "@/config/fonts";

// export async function generateMetadata({ params }: { params: { locale: string } }) {
//   return {
//     title: 'Bloom',
//     description: 'Localized platform',
//     other: {
//       lang: params.locale,
//       dir: params.locale === "ar" ? "rtl" : "ltr",
//     },
//   };
// }

// export default function LocaleLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {

//   return (
//     <html suppressHydrationWarning lang="en">
//       <head />
//       <body
//         className={clsx(
//           "min-h-screen bg-background font-sans antialiased",
//           fontSans.variable
//         )}
//       >
//         <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
//           <div className="relative flex flex-col h-screen">
//             <Navbar />
//             <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
//               {children}
//             </main>
//             <footer className="w-full flex items-center justify-center py-3">
//               <Link
//                 isExternal
//                 className="flex items-center gap-1 text-current"
//                 href="https://heroui.com?utm_source=next-app-template"
//                 title="heroui.com homepage"
//               >
//                 <span className="text-default-600">Powered by</span>
//                 <p className="text-primary">HeroUI</p>
//               </Link>
//             </footer>
//           </div>
//         </Providers>
//       </body>
//     </html>
//   );
// }

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
