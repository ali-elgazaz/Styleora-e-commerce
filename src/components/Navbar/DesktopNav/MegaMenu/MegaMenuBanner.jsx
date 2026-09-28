import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function MegaMenuBanner({
  eyebrow,
  title,
  description,
  buttonLabel,
  href,
  image,
}) {
  return (
    <div
      className="
        group/banner
        relative
        min-h-[250px]
        overflow-hidden
        rounded-2xl
        bg-panel-2
      "
    >
      {/* Image */}
      <img
        src={image}
        alt=""
        className="
          absolute inset-0
          h-full w-full
          object-cover
          opacity-60
          transition-transform duration-700
          group-hover/banner:scale-105
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black/90
          via-black/35
          to-black/10
        "
      />

      {/* Content */}
      <div
        className="
          relative z-10
          flex h-full min-h-[250px]
          flex-col justify-end
          p-6
        "
      >
        <span
          className="
            mb-2
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.22em]
            text-gold
          "
        >
          {eyebrow}
        </span>

        <h3
          className="
            max-w-[220px]
            font-serif
            text-2xl
            leading-tight
            text-white
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            max-w-[260px]
            text-xs
            leading-relaxed
            text-white/60
          "
        >
          {description}
        </p>

        <Link
          to={href}
          className="
            group/button
            mt-5
            flex w-fit
            items-center gap-2
            text-xs
            font-semibold
            text-white
          "
        >
          <span>{buttonLabel}</span>

          <ArrowUpRight
            size={15}
            className="
              transition-transform duration-300
              group-hover/button:translate-x-0.5
              group-hover/button:-translate-y-0.5
            "
          />
        </Link>
      </div>
    </div>
  );
}

export default MegaMenuBanner;
