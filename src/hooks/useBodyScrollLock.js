import { useEffect } from "react";

/**
 * Locks body scroll while `active` is true, restoring the previous
 * inline overflow value on cleanup (e.g. when an overlay closes).
 *
 * @param {boolean} [active=true]
 */
export function useBodyScrollLock(active = true) {
  useEffect(() => {
    if (!active) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [active]);
}
