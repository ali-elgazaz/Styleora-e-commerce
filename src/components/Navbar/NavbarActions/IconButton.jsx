function IconButton({
  children,
  badge,
  onClick,
  ariaLabel,
  ariaExpanded,
  ariaHasPopup,
  ...rest
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-haspopup={ariaHasPopup}
      {...rest}
      className="
        group relative
        flex h-10 w-10
        items-center justify-center
        rounded-xl
        text-white/70
        transition-all duration-300
        hover:bg-white/[0.07]
        hover:text-white
        active:scale-95
      "
    >
      <span
        className="
          transition-transform duration-300
          group-hover:scale-110
        "
      >
        {children}
      </span>

      {badge !== undefined && (
        <span
          className="
            absolute right-0 top-0
            flex h-[17px] min-w-[17px]
            items-center justify-center
            rounded-full
            bg-gold
            px-1
            text-[9px]
            font-bold
            leading-none
            text-panel
          "
        >
          {badge}
        </span>
      )}
    </button>
  );
}

export default IconButton;
