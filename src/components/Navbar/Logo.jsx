import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      aria-label="Styleora - Home"
      className="group flex shrink-0 items-center gap-2"
    >
      {/* Logo Mark */}
      <span
        className="
          relative flex h-10 w-10
          items-center justify-center
          overflow-hidden
          rounded-full
          border border-gold-deep/40
          font-serif text-2xl
          text-gold
          transition-all duration-500
          group-hover:border-gold
          group-hover:rotate-6
        "
      >
        <span
          className="
            absolute inset-0
            rounded-full
            bg-gold/10
            opacity-0
            transition-opacity duration-500
            group-hover:opacity-100
          "
        />

        <span className="relative z-10">S</span>
      </span>

      {/* Brand Name */}
      <span
        className="
          hidden
          font-serif
          text-2xl
          tracking-tight
          text-cream
          sm:block
        "
      >
        Styleora
      </span>
    </Link>
  );
}

export default Logo;
