import { ArrowUpRight } from "lucide-react";

function PopularSearches({ searches, onSelect }) {
  return (
    <section>
      <p
        className="
          mb-4
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.2em]
          text-gold
        "
      >
        Popular Searches
      </p>

      <div className="flex flex-wrap gap-2">
        {searches.map((search) => (
          <button
            key={search}
            type="button"
            onClick={() => onSelect(search)}
            className="
              group
              flex items-center gap-2
              rounded-full
              border border-white/10
              px-4 py-2.5
              text-xs
              text-white/60
              transition-all duration-300
              hover:border-gold/40
              hover:bg-gold/5
              hover:text-white
            "
          >
            <span>{search}</span>

            <ArrowUpRight
              size={13}
              className="
                opacity-0
                transition-all duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
                group-hover:opacity-100
                group-hover:text-gold
              "
            />
          </button>
        ))}
      </div>
    </section>
  );
}

export default PopularSearches;
