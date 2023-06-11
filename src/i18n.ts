import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "locales/en/translationEN.json";
import translationDE from "locales/de/translationDE.json";
import translationGE from "locales/ge/translationGE.json";

const resources = {
  en: { translation: translationEN },
  de: { translation: translationDE },
  ge: { translation: translationGE },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: localStorage.getItem("lang") || "en", // need to store lang after refresh
    debug: true,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
