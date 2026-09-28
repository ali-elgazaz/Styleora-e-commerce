import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { categories } from "../navbar.data";

function MobileCategories() {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (title) => {
    setOpenCategory((current) => (current === title ? null : title));
  };

  return (
    <div className="space-y-2">
      {categories.map((category) => {
        const isOpen = openCategory === category.title;

        return (
          <div
            key={category.title}
            className="
              overflow-hidden
              rounded-xl
              border
              border-white/[0.06]
            "
          >
            <button
              type="button"
              onClick={() => toggleCategory(category.name)}
              className="
                flex
                w-full
                items-center
                justify-between
                px-4
                py-3.5
                text-left
              "
            >
              <span className="text-sm text-white/75">{category.title}</span>

              <ChevronDown
                size={16}
                strokeWidth={1.6}
                className={`
                  text-white/30
                  transition-transform
                  duration-300
                  ${isOpen ? "rotate-180 text-gold" : ""}
                `}
              />
            </button>

            <div
              className={`
                grid
                transition-all
                duration-300
                ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
              `}
            >
              <div className="overflow-hidden">
                <div className="space-y-1 border-t border-white/[0.06] p-2">
                  {category.items.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="
                        block
                        rounded-lg
                        px-3
                        py-2.5
                        text-xs
                        text-white/40
                        transition-colors
                        duration-300
                        hover:bg-white/[0.04]
                        hover:text-gold
                      "
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MobileCategories;
