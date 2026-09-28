import { useState } from "react";
import { ChevronDown, Languages } from "lucide-react";

function LanguageSwitcher() {
  const [open, setOpen] = useState(false);

  const [language, setLanguage] = useState("EN");

  const handleLanguageChange = (value) => {
    setLanguage(value);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="
          flex h-10
          items-center gap-2
          rounded-xl
          px-3
          text-xs font-semibold
          text-white/70
          transition-all duration-300
          hover:bg-white/[0.07]
          hover:text-white
        "
      >
        <Languages size={16} strokeWidth={1.7} />

        <span>{language}</span>

        <ChevronDown
          size={13}
          className={`
            transition-transform duration-300
            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      <div
        className={`
          absolute
          right-0
          top-[calc(100%+10px)]
          w-32
          origin-top-right
          rounded-xl
          border border-white/10
          bg-panel-3/95
          p-1.5
          shadow-xl
          backdrop-blur-xl
          transition-all duration-200
          ${
            open
              ? "visible scale-100 opacity-100"
              : "invisible scale-95 opacity-0"
          }
        `}
        role="menu"
      >
        <button
          type="button"
          onClick={() => handleLanguageChange("EN")}
          className={`
            flex w-full
            items-center justify-between
            rounded-lg
            px-3 py-2
            text-left text-xs
            transition-colors
            ${
              language === "EN"
                ? "bg-white/[0.07] text-gold"
                : "text-white/60 hover:bg-white/[0.05] hover:text-white"
            }
          `}
          role="menuitem"
        >
          English
          {language === "EN" && <span>✓</span>}
        </button>

        <button
          type="button"
          onClick={() => handleLanguageChange("AR")}
          className={`
            flex w-full
            items-center justify-between
            rounded-lg
            px-3 py-2
            text-left text-xs
            transition-colors
            ${
              language === "AR"
                ? "bg-white/[0.07] text-gold"
                : "text-white/60 hover:bg-white/[0.05] hover:text-white"
            }
          `}
          role="menuitem"
        >
          العربية
          {language === "AR" && <span>✓</span>}
        </button>
      </div>
    </div>
  );
}

export default LanguageSwitcher;
