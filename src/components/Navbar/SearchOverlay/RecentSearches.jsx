import { Clock3, X } from "lucide-react";

function RecentSearches({ searches, onSelect, onRemove, onClearAll }) {
  if (!searches.length) {
    return null;
  }

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <p
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-white/35
          "
        >
          Recent Searches
        </p>

        <button
          type="button"
          onClick={onClearAll}
          className="
            text-[10px]
            text-white/30
            transition-colors
            hover:text-white
          "
        >
          Clear all
        </button>
      </div>

      <div className="space-y-1">
        {searches.map((search) => (
          <div
            key={search}
            className="
              flex w-full
              items-center gap-3
              rounded-xl
              px-3 py-3
              transition-colors duration-300
              hover:bg-white/[0.04]
            "
          >
            <button
              type="button"
              onClick={() => onSelect(search)}
              className="
                flex flex-1
                items-center gap-3
                text-left text-sm
                text-white/50
                transition-colors duration-300
                hover:text-white
              "
            >
              <Clock3 size={15} strokeWidth={1.6} className="text-white/25" />

              <span>{search}</span>
            </button>

            <button
              type="button"
              onClick={() => onRemove(search)}
              aria-label={`Remove ${search} from recent searches`}
              className="text-white/20 transition-colors hover:text-white"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentSearches;

