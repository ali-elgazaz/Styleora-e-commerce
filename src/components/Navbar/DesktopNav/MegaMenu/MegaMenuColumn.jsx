import { Link } from "react-router-dom";
import MegaMenuItem from "./MegaMenuItem";

function MegaMenuColumn({ title, href, items }) {
  return (
    <div className="min-w-0">
      <Link
        to={href}
        className="
          group/title
          mb-4
          flex items-center gap-2
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.18em]
          text-gold
        "
      >
        <span>{title}</span>
        <span
          className="
            h-px w-0
            bg-gold
            transition-all duration-300
            group-hover/title:w-5
          "
        />
      </Link>

      <div className="space-y-0.5">
        {items.map((item) => (
          <MegaMenuItem key={item.label} label={item.label} href={item.href} />
        ))}
      </div>
    </div>
  );
}

export default MegaMenuColumn;
