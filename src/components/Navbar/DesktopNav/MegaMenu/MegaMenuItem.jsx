import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function MegaMenuItem({ label, href }) {
  return (
    <Link
      to={href}
      className="
        group/item
        flex items-center justify-between
        py-1.5
        text-sm
        text-white/60
        transition-colors duration-300
        hover:text-white
      "
    >
      <span>{label}</span>

      <ArrowUpRight
        size={14}
        strokeWidth={1.7}
        className="
          -translate-x-1
          translate-y-1
          opacity-0
          transition-all duration-300
          group-hover/item:translate-x-0
          group-hover/item:translate-y-0
          group-hover/item:opacity-100
          text-gold
        "
      />
    </Link>
  );
}

export default MegaMenuItem;
