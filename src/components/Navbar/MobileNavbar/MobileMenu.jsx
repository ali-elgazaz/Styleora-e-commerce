import { Heart, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import MobileNavItem from "./MobileNavItem";
import MobileCategories from "./MobileCategories";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useEscapeKey } from "@/hooks/useEscapeKey";

function MobileMenu({
  open,
  onClose,
  onSearch,
  onCart,
  onAccount,
  cartCount = 0,
  wishlistCount = 0,
}) {
  useEscapeKey(onClose, open);

  useBodyScrollLock(open);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[90]
              bg-black/50
              backdrop-blur-sm
              lg:hidden
            "
          />

          {/* Menu */}
          <motion.aside
            initial={{
              x: "-100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "-100%",
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              left-0
              top-0
              z-[100]
              flex
              h-dvh
              w-full
              max-w-[390px]
              flex-col
              bg-ink
              text-white
              shadow-2xl
              lg:hidden
            "
          >
            {/* Header */}
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/[0.08]
                px-5
                py-5
              "
            >
              <Link
                to="/"
                onClick={onClose}
                className="
                  font-serif
                  text-xl
                  tracking-tight
                "
              >
                Styleora
              </Link>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  text-white/50
                  transition-all
                  duration-300
                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                <X size={20} strokeWidth={1.6} />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-5 py-6">
              {/* Main Navigation */}
              <div>
                <p
                  className="
                    mb-3
                    px-3
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-gold
                  "
                >
                  Menu
                </p>

                <div className="space-y-1">
                  <MobileNavItem label="Home" to="/" onClick={onClose} />

                  <MobileNavItem label="Shop" to="/shop" onClick={onClose} />

                  <MobileNavItem
                    label="New Arrivals"
                    to="/shop?filter=new"
                    onClick={onClose}
                  />

                  {/* Categories */}
                  <div>
                    <div className="mb-2">
                      <span
                        className="
                          flex
                          px-3
                          py-3.5
                          text-sm
                          font-medium
                          text-white/80
                        "
                      >
                        Categories
                      </span>
                    </div>

                    <MobileCategories />
                  </div>

                  <MobileNavItem
                    label="Sale"
                    to="/shop?filter=sale"
                    onClick={onClose}
                    danger
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-white/[0.08]" />

              {/* Actions */}
              <div>
                <p
                  className="
                    mb-3
                    px-3
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-gold
                  "
                >
                  Quick Access
                </p>

                <div className="space-y-1">
                  <button
                    type="button"
                    onClick={onSearch}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-xl
                      px-3
                      py-3.5
                      text-left
                      transition-colors
                      hover:bg-white/[0.05]
                    "
                  >
                    <Search
                      size={17}
                      strokeWidth={1.6}
                      className="text-white/35"
                    />

                    <span className="text-sm text-white/70">Search</span>
                  </button>

                  <button
                    type="button"
                    onClick={onCart}
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-xl
                      px-3
                      py-3.5
                      text-left
                      transition-colors
                      hover:bg-white/[0.05]
                    "
                  >
                    <ShoppingBag
                      size={17}
                      strokeWidth={1.6}
                      className="text-white/35"
                    />

                    <span className="text-sm text-white/70">Shopping Bag</span>

                    {cartCount > 0 && (
                      <span
                        className="
                          ml-auto
                          flex
                          h-5
                          min-w-5
                          items-center
                          justify-center
                          rounded-full
                          bg-gold
                          px-1
                          text-[9px]
                          font-bold
                          text-panel
                        "
                      >
                        {cartCount}
                      </span>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={onAccount}
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-xl
                      px-3
                      py-3.5
                      text-left
                      transition-colors
                      hover:bg-white/[0.05]
                    "
                  >
                    <UserRound
                      size={17}
                      strokeWidth={1.6}
                      className="text-white/35"
                    />

                    <span className="text-sm text-white/70">Account</span>
                  </button>

                  <Link
                    to="/wishlist"
                    onClick={onClose}
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-xl
                      px-3
                      py-3.5
                      text-left
                      transition-colors
                      hover:bg-white/[0.05]
                    "
                  >
                    <Heart
                      size={17}
                      strokeWidth={1.6}
                      className="text-white/35"
                    />

                    <span className="text-sm text-white/70">Wishlist</span>

                    {wishlistCount > 0 && (
                      <span
                        className="
                          ml-auto
                          flex
                          h-5
                          min-w-5
                          items-center
                          justify-center
                          rounded-full
                          bg-white/[0.08]
                          px-1
                          text-[9px]
                          text-white/60
                        "
                      >
                        {wishlistCount}
                      </span>
                    )}
                  </Link>
                </div>
              </div>

              {/* Language */}
              <div className="mt-7">
                <div className="flex items-center justify-between rounded-xl border border-white/[0.07] p-3">
                  <span className="text-xs text-white/45">Language</span>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      className="
                        rounded-lg
                        bg-white/[0.08]
                        px-3
                        py-1.5
                        text-[10px]
                        font-semibold
                        text-gold
                      "
                    >
                      EN
                    </button>

                    <button
                      type="button"
                      className="
                        rounded-lg
                        px-3
                        py-1.5
                        text-[10px]
                        font-semibold
                        text-white/40
                        transition-colors
                        hover:text-white
                      "
                    >
                      AR
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="border-t border-white/[0.08] p-5">
              <Link
                to="/shop"
                onClick={onClose}
                className="
                  flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  bg-gold
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-panel
                  transition-all
                  duration-300
                  hover:bg-gold-bright
                "
              >
                Shop Collection
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
