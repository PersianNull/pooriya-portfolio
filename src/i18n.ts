
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { en } from "./locales/en";
import { de } from "./locales/de";

const savedLanguage =
  localStorage.getItem("language") === "de" ? "de" : "en";

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
  },
  lng: savedLanguage,
  fallbackLng: "en",
  supportedLngs: ["en", "de"],
  interpolation: {
    escapeValue: false,
  },
});

document.documentElement.lang = savedLanguage;

export default i18n;
