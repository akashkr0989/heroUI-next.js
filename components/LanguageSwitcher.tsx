"use client";

import { usePathname, useRouter } from "next/navigation";
import { useParams } from "next/navigation";

const locales = [
  { code: "en-US", label: "🇬🇧 English" },
  { code: "ar-AE", label: "🇸🇦 Arabic" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useParams(); // current locale from route

  const handleSwitch = (newLocale: string) => {
    if (!locale || !pathname) return;
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);

    router.push(newPath);
  };

  return (
    <div className="flex gap-2 items-center">
      {locales.map((lang) => (
        <button
          key={lang.code}
          className={`px-3 py-1 rounded-md border ${
            locale === lang.code
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-800"
          }`}
          onClick={() => handleSwitch(lang.code)}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
