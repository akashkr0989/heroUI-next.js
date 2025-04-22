// // import { getTranslations } from "@/lib/contentful";
// // import { Input } from "@/components/ui/input";
// // import { Button } from "@/components/ui/button";

// // type Props = {
// //   params: { locale: string };
// // };

// // export async function generateStaticParams() {
// //   return [{ locale: "en-US" }, { locale: "ar-AE" }];
// // }

// // export default async function LoginPage({ params }: Props) {
// //   const t = await getTranslations(params.locale);

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
// //       <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-lg space-y-6">
// //         <h1 className="text-xl font-bold text-center text-gray-800">
// //           {t["login.title"]}
// //         </h1>

// //         <form className="space-y-4">
// //           <div>
// //             <label className="text-sm font-medium">{t["login.email"]}</label>
// //             <Input placeholder={t["login.email"]} type="email" />
// //           </div>

// //           <div>
// //             <label className="text-sm font-medium">{t["login.password"]}</label>
// //             <Input placeholder={t["login.password"]} type="password" />
// //           </div>

// //           <Button>{t["login.submit"]}</Button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// import { getTranslations } from "@/lib/contentful";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// export async function generateStaticParams() {
//   return [{ locale: 'en' }, { locale: 'ar' }];
// }

// export default async function LoginPage({
//   params
// }: {
//   params: { locale: string };
// }) {
//   const t = await getTranslations(params.locale); // ✅ now safe

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-lg space-y-6">
//         <h1 className="text-xl font-bold text-center text-gray-800">
//           {t["login.title"]}
//         </h1>

//         <form className="space-y-4">
//           <div>
//             <label className="text-sm font-medium">{t["login.email"]}</label>
//             <Input placeholder={t["login.email"]} type="email" />
//           </div>

//           <div>
//             <label className="text-sm font-medium">{t["login.password"]}</label>
//             <Input placeholder={t["login.password"]} type="password" />
//           </div>

//           <Button>{t["login.submit"]}</Button>
//         </form>
//       </div>
//     </div>
//   );
// }

import { getTranslations } from "@/lib/contentful";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function LoginPage({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations(params.locale);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-lg space-y-6">
        <h1 className="text-xl font-bold text-center text-gray-800">
          {t["login.title"]}
        </h1>

        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium">{t["login.email"]}</label>
            <Input placeholder={t["login.email"]} type="email" />
          </div>

          <div>
            <label className="text-sm font-medium">{t["login.password"]}</label>
            <Input placeholder={t["login.password"]} type="password" />
          </div>

          <Button>{t["login.submit"]}</Button>
        </form>
      </div>
    </div>
  );
}
