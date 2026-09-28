import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function MobileNavItem({
  label,
  to,
  onClick,
  hasArrow = false,
  danger = false,
}) {
  const content = (
    <>
      <span
        className={`
          text-sm
          font-medium
          transition-colors
          ${danger ? "text-[#c96b6b]" : "text-white/80 group-hover:text-white"}
        `}
      >
        {label}
      </span>

      {hasArrow && (
        <ChevronRight
          size={17}
          strokeWidth={1.5}
          className="
            text-white/25
            transition-transform
            duration-300
            group-hover:translate-x-1
            group-hover:text-gold
          "
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className="
          group
          flex
          w-full
          items-center
          justify-between
          rounded-xl
          px-3
          py-3.5
          transition-colors
          duration-300
          hover:bg-white/[0.05]
        "
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group
        flex
        w-full
        items-center
        justify-between
        rounded-xl
        px-3
        py-3.5
        text-left
        transition-colors
        duration-300
        hover:bg-white/[0.05]
      "
    >
      {content}
    </button>
  );
}

export default MobileNavItem;
