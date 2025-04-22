import { createClient } from "contentful";

const client = createClient({
  // space: process.env.CONTENTFUL_SPACE_ID!,
  // accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN!,
  space: "osrdh3oln2ne",
  accessToken: "A3HeJuyBHjsOBFYTDOqeAcDjgdmpat_2yGdfeSdB1Cw",
});

const LOCALE_MAP: Record<string, string> = {
  en: "en-US", // Contentful uses en-US
  ar: "ar-AE", // Contentful uses ar-AE
};

export async function getTranslations(locale: string) {
  const contentfulLocale = LOCALE_MAP[locale] || "en-US";

  const res = await client.getEntries({
    content_type: "translation",
    locale: contentfulLocale,
  });

  const translations: Record<string, string> = {};

  res.items.forEach((item: any) => {
    translations[item.fields.key] = item.fields.value;
  });

  return translations;
}
