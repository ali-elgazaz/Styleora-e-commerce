import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import SearchInput from "./SearchInput";
import PopularSearches from "./PopularSearches";
import RecentSearches from "./RecentSearches";
import SearchResults from "./SearchResults";

import { popularSearches, recentSearches } from "../navbar.data";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useEscapeKey } from "@/hooks/useEscapeKey";

function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");

  const [recent, setRecent] = useState(recentSearches);

  const handleSelectSearch = (value) => {
    setQuery(value);

    setRecent((current) =>
      [value, ...current.filter((item) => item !== value)].slice(0, 5),
    );
  };

  const handleRemoveRecent = (value) => {
    setRecent((current) => current.filter((item) => item !== value));
  };

  const handleClearRecent = () => {
    setRecent([]);
  };

  const handleClose = () => {
    setQuery("");
    onClose();
  };

  useEscapeKey(handleClose, open);

  useBodyScrollLock(open);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="
            fixed inset-0
            z-[100]
            bg-abyss/90
            backdrop-blur-2xl
          "
        >
          {/* Background click */}
          <button
            type="button"
            aria-label="Close search"
            onClick={handleClose}
            className="absolute inset-0 h-full w-full"
          />

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative z-10
              mx-auto
              max-h-screen
              w-full
              max-w-[1100px]
              overflow-y-auto
              px-5
              pb-12
              pt-6
              sm:px-8
              lg:px-10
            "
          >
            {/* Header */}
            <div className="mb-16 flex items-center justify-between">
              <span
                className="
                  font-serif
                  text-xl
                  tracking-tight
                  text-white
                "
              >
                Styleora
              </span>

              <button
                type="button"
                onClick={handleClose}
                className="
                  flex items-center gap-2
                  text-xs
                  text-white/40
                  transition-colors
                  hover:text-white
                "
              >
                <span>ESC</span>

                <span
                  className="
                    flex h-8 w-8
                    items-center justify-center
                    rounded-full
                    border border-white/10
                  "
                >
                  ×
                </span>
              </button>
            </div>

            {/* Search */}
            <div className="mx-auto max-w-4xl">
              <p
                className="
                  mb-5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-gold
                "
              >
                Search Styleora
              </p>

              <SearchInput
                value={query}
                onChange={setQuery}
                onClose={handleClose}
              />

              {/* Search Content */}
              <div className="mt-10 space-y-10">
                {query.trim() ? (
                  <SearchResults query={query} />
                ) : (
                  <>
                    <PopularSearches
                      searches={popularSearches}
                      onSelect={handleSelectSearch}
                    />

                    <div className="h-px bg-white/10" />

                    <RecentSearches
                      searches={recent}
                      onSelect={handleSelectSearch}
                      onRemove={handleRemoveRecent}
                      onClearAll={handleClearRecent}
                    />
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SearchOverlay;
