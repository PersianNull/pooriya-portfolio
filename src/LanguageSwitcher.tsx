
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

type Language = "en" | "de";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const currentLanguage: Language =
    i18n.resolvedLanguage?.startsWith("de") ? "de" : "en";

  const changeLanguage = async (language: Language) => {
    await i18n.changeLanguage(language);

    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  };

  return (
    <div className="language-switcher" aria-label="Language selection">
      <button
        type="button"
        className={currentLanguage === "en" ? "active" : ""}
        onClick={() => void changeLanguage("en")}
        aria-pressed={currentLanguage === "en"}
        aria-label="Switch to English"
      >
        EN
      </button>

      <span className="language-switcher-divider" aria-hidden="true">
        /
      </span>

      <button
        type="button"
        className={currentLanguage === "de" ? "active" : ""}
        onClick={() => void changeLanguage("de")}
        aria-pressed={currentLanguage === "de"}
        aria-label="Auf Deutsch wechseln"
      >
        DE
      </button>
    </div>
  );
}
