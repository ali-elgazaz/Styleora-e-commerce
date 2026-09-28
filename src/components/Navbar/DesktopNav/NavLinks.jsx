import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { navLinks } from "../navbar.data";
import { NAVBAR_PANELS } from "../navbar.constants";

function NavLinks({ activeMenu, setActiveMenu }) {
  const location = useLocation();

  const isMegaOpen = activeMenu === NAVBAR_PANELS.MEGA_MENU;

  const getLinkClasses = (isActive) => `
    group
    relative
    py-2
    text-sm
    font-medium
    transition-colors duration-300
    ${isActive ? "text-white" : "text-white/65 hover:text-white"}
  `;

  const getUnderlineClasses = (isActive) => `
    absolute
    bottom-0
    left-0
    h-[1.5px]
    bg-gold
    transition-all duration-300
    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
  `;

  return (
    <div className="flex items-center gap-7">
      {navLinks.map((link) => {
        // Mega menu trigger: hover/focus opens, click toggles.
        if (link.megaMenu) {
          return (
            <button
              key={link.label}
              type="button"
              aria-expanded={isMegaOpen}
              aria-haspopup="true"
              aria-controls="mega-menu"
              onMouseEnter={() => setActiveMenu(NAVBAR_PANELS.MEGA_MENU)}
              onFocus={() => setActiveMenu(NAVBAR_PANELS.MEGA_MENU)}
              onClick={() =>
                setActiveMenu((current) =>
                  current === NAVBAR_PANELS.MEGA_MENU
                    ? null
                    : NAVBAR_PANELS.MEGA_MENU,
                )
              }
              className={getLinkClasses(isMegaOpen)}
            >
              <span className="flex items-center gap-1">
                {link.label}

                <ChevronDown
                  size={14}
                  strokeWidth={2}
                  className={`
                    transition-transform duration-300
                    ${isMegaOpen ? "rotate-180" : ""}
                  `}
                />
              </span>

              <span className={getUnderlineClasses(isMegaOpen)} />
            </button>
          );
        }

        // Exact match on pathname + query so "/shop", "/shop?filter=new"
        // and "/shop?filter=sale" never highlight at the same time.
        const isActive =
          link.href === "/"
            ? location.pathname === "/"
            : location.pathname + location.search === link.href;

        return (
          <Link
            key={link.label}
            to={link.href}
            className={getLinkClasses(isActive)}
          >
            {link.label}

            <span className={getUnderlineClasses(isActive)} />
          </Link>
        );
      })}
    </div>
  );
}

export default NavLinks;

