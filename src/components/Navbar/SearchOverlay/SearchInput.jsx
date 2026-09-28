import { Search, X } from "lucide-react";

function SearchInput({ value, onChange, onClose }) {
  return (
    <div className="relative">
      <Search
        size={24}
        strokeWidth={1.6}
        className="
          absolute left-0 top-1/2
          -translate-y-1/2
          text-gold
        "
      />

      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search products, categories..."
        autoFocus
        className="
          h-16
          w-full
          border-b
          border-white/10
          bg-transparent
          pl-10
          pr-12
          text-xl
          font-light
          text-white
          outline-none
          placeholder:text-white/25
          transition-colors duration-300
          focus:border-gold/50
          md:text-2xl
        "
      />

      <button
        type="button"
        onClick={onClose}
        aria-label="Close search"
        className="
          absolute right-0 top-1/2
          flex h-10 w-10
          -translate-y-1/2
          items-center justify-center
          rounded-full
          text-white/40
          transition-all duration-300
          hover:bg-white/[0.07]
          hover:text-white
        "
      >
        <X size={20} strokeWidth={1.7} />
      </button>
    </div>
  );
}

export default SearchInput;
