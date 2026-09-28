import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { demoSearchResults } from "../navbar.data";

function SearchResults({ query }) {
  if (!query.trim()) {
    return null;
  }

  return (
    <section>
      <div className="mb-5 flex items-center justify-between">
        <p
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-gold
          "
        >
          Suggested Products
        </p>

        <Link
          to={`/search?q=${encodeURIComponent(query)}`}
          className="
            flex items-center gap-1
            text-[11px]
            text-white/40
            transition-colors
            hover:text-white
          "
        >
          View all
          <ArrowUpRight size={13} />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {demoSearchResults.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="
              group
              overflow-hidden
              rounded-2xl
              border border-white/10
              bg-white/[0.025]
              transition-all duration-300
              hover:-translate-y-1
              hover:border-white/15
            "
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="
                  h-full w-full
                  object-cover
                  transition-transform duration-700
                  group-hover:scale-105
                "
              />
            </div>

            <div className="p-4">
              <p className="text-[10px] uppercase tracking-wider text-gold">
                {product.category}
              </p>

              <h3 className="mt-1 text-sm text-white">{product.name}</h3>

              <p className="mt-2 text-xs text-white/50">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default SearchResults;
