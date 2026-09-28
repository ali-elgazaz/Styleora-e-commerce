import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import GuestAccount from "./GuestAccount";
import UserAccount from "./UserAccount";

import { useEscapeKey } from "@/hooks/useEscapeKey";

function AccountDropdown({
  open,
  onClose,
  isAuthenticated = false,
  user = null,
  onLogout,
}) {
  const dropdownRef = useRef(null);

  useEscapeKey(() => onClose?.(), open);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event) => {
      // Let the account toggle button handle its own open/close toggling,
      // otherwise closing here would immediately re-open on click.
      if (event.target.closest("[data-account-toggle]")) {
        return;
      }

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose?.();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={dropdownRef}
          initial={{
            opacity: 0,
            y: -8,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -8,
            scale: 0.97,
          }}
          transition={{
            duration: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            right-0
            top-[calc(100%+12px)]
            z-[110]
            w-[330px]
            origin-top-right
            rounded-2xl
            border border-black/10
            bg-paper
            p-5
            shadow-2xl
            shadow-black/15
          "
        >
          {isAuthenticated ? (
            <UserAccount
              user={user}
              onLogout={onLogout}
              onClose={onClose}
            />
          ) : (
            <GuestAccount onClose={onClose} />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AccountDropdown;
