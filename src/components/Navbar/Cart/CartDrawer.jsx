import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import {
  decreaseQty,
  increaseQty,
  removeItem,
  selectCartCount,
  selectCartItems,
  selectSubtotal,
} from "@/store/cartSlice";

function CartDrawer({ open, onClose }) {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const cartCount = useSelector(selectCartCount);

  const subtotal = useSelector(selectSubtotal);

  useEscapeKey(onClose, open);

  useBodyScrollLock(open);

  /*
   * Cart mutation handlers
   */
  const handleIncrease = (id) => {
    dispatch(increaseQty(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQty(id));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close cart"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              fixed
              inset-0
              z-[90]
              cursor-default
              bg-black/40
              backdrop-blur-[3px]
            "
          />

          {/* Drawer */}
          <motion.aside
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              right-0
              top-0
              z-[100]
              flex
              h-dvh
              w-full
              max-w-[460px]
              flex-col
              bg-paper
              text-[#151515]
              shadow-2xl
            "
          >
            {/* Header */}
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-black/10
                px-5
                py-5
                sm:px-7
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-xl
                    bg-black/[0.04]
                  "
                >
                  <ShoppingBag size={18} strokeWidth={1.7} />
                </div>

                <div>
                  <h2 className="text-sm font-semibold">Your Bag</h2>

                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-[#999]">
                    {cartCount} {cartCount === 1 ? "Item" : "Items"}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close cart"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  text-[#777]
                  transition-all
                  duration-300
                  hover:bg-black/[0.05]
                  hover:text-[#151515]
                "
              >
                <X size={20} strokeWidth={1.7} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-7">
              {cartItems.length > 0 ? (
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onIncrease={handleIncrease}
                      onDecrease={handleDecrease}
                      onRemove={handleRemove}
                    />
                  ))}
                </div>
              ) : (
                <EmptyCart onClose={onClose} />
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div
                className="
                  border-t
                  border-black/10
                  bg-paper
                  px-5
                  py-5
                  sm:px-7
                "
              >
                <CartSummary subtotal={subtotal} />
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

/*
 * Empty cart
 */
function EmptyCart({ onClose }) {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <div
        className="
          flex h-20 w-20
          items-center justify-center
          rounded-full
          bg-black/[0.04]
        "
      >
        <ShoppingBag size={28} strokeWidth={1.4} className="text-[#999]" />
      </div>

      <h3 className="mt-6 text-lg font-semibold">Your bag is empty</h3>

      <p className="mt-2 max-w-[260px] text-xs leading-relaxed text-[#999]">
        Looks like you haven't added anything to your bag yet.
      </p>

      <button
        type="button"
        onClick={onClose}
        className="
          mt-6
          flex items-center gap-2
          rounded-xl
          bg-[#151515]
          px-5 py-3
          text-xs
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-[#292929]
        "
      >
        <ArrowLeft size={14} />
        Continue Shopping
      </button>
    </div>
  );
}

export default CartDrawer;
