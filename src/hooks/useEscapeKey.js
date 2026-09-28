import { useEffect } from "react";

/**
 * Invokes `onEscape` when the Escape key is pressed.
 *
 * @param {() => void} onEscape - Callback fired when Escape is pressed.
 * @param {boolean} [active=true] - Only listen while true (e.g. overlay open).
 */
export function useEscapeKey(onEscape, active = true) {
  useEffect(() => {
    if (!active) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onEscape();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onEscape, active]);
}
