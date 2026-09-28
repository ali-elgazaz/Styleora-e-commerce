import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { formatPrice } from "@/utils/format";

function CartSummary({ subtotal }) {
  return (
    <div className="border-t border-black/10 pt-5">
      {/* Subtotal */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-[#777]">Subtotal</span>

        <span className="text-lg font-semibold text-[#151515]">
          {formatPrice(subtotal)}
        </span>
      </div>

      <p className="mt-2 text-[11px] leading-relaxed text-[#999]">
        Shipping and taxes are calculated at checkout.
      </p>

      {/* Actions */}
      <div className="mt-5 space-y-2.5">
        <Link
          to="/cart"
          className="
            flex h-12
            w-full
            items-center
            justify-center
            rounded-xl
            border
            border-black/10
            text-xs
            font-semibold
            uppercase
            tracking-[0.12em]
            text-[#151515]
            transition-all
            duration-300
            hover:bg-black/[0.04]
          "
        >
          View Cart
        </Link>

        <Link
          to="/checkout"
          className="
            group
            flex h-12
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[#151515]
            text-xs
            font-semibold
            uppercase
            tracking-[0.12em]
            text-white
            transition-all
            duration-300
            hover:bg-[#242424]
          "
        >
          <span>Checkout</span>

          <ArrowRight
            size={15}
            strokeWidth={1.8}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </Link>
      </div>

      {/* Trust Message */}
      <div className="mt-5 text-center">
        <p className="text-[10px] text-[#999]">
          Secure checkout · Easy returns · Worldwide shipping
        </p>
      </div>
    </div>
  );
}

export default CartSummary;
