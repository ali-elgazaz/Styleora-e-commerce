import { Link } from "react-router-dom";

import MegaMenuBanner from "./MegaMenuBanner";
import MegaMenuColumn from "./MegaMenuColumn";

import { categories, megaMenuBanner } from "../../navbar.data";

function MegaMenu({ open }) {
  return (
    <div
      id="mega-menu"
      aria-hidden={!open}
      className={`
        absolute
        left-1/2
        top-[calc(100%+12px)]
        w-[min(1100px,calc(100vw-48px))]
        -translate-x-1/2

        transition-all
        duration-300
        ease-out

        ${
          open
            ? "pointer-events-auto visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-2 opacity-0"
        }
      `}
    >
      <div
        className="
          overflow-hidden
          rounded-3xl
          border border-white/10
          bg-panel/95
          p-5
          shadow-2xl
          shadow-black/40
          backdrop-blur-2xl
          lg:p-6
        "
      >
        <div className="grid grid-cols-12 gap-6">
          {/* Categories */}
          <div className="col-span-8 grid grid-cols-3 gap-6 px-2 py-2">
            {categories.map((category) => (
              <MegaMenuColumn
                key={category.title}
                title={category.title}
                href={category.href}
                items={category.items}
              />
            ))}
          </div>

          {/* Promotional Banner */}
          <div className="col-span-4">
            <MegaMenuBanner {...megaMenuBanner} />
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="
            mt-5
            flex items-center justify-between
            border-t border-white/10
            px-2 pt-5
          "
        >
          <p className="text-xs text-white/40">
            Curated pieces. Timeless style.
          </p>

          <Link
            to="/shop"
            className="
              text-xs
              font-semibold
              text-gold
              transition-colors duration-300
              hover:text-gold-bright
            "
          >
            View all collections →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MegaMenu;
