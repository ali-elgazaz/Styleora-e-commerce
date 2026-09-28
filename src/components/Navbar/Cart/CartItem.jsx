import { Minus, Plus, Trash2 } from "lucide-react";

import { formatPrice } from "@/utils/format";

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <article className="group flex gap-4">
      {/* Product Image */}
      <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-paper-dim">
        <img
          src={item.image}
          alt={item.name}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Product Info */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.15em] text-gold-muted">
              {item.category}
            </p>

            <h3 className="truncate text-sm font-medium text-[#151515]">
              {item.name}
            </h3>

            <p className="mt-1 text-xs text-[#777]">
              {item.size} / {item.color}
            </p>
          </div>

          {/* Remove */}
          <button
            type="button"
            onClick={() => onRemove(item.id)}
            aria-label={`Remove ${item.name}`}
            className="
              flex h-8 w-8
              shrink-0
              items-center justify-center
              rounded-lg
              text-[#999]
              transition-all
              duration-300
              hover:bg-red-50
              hover:text-red-500
            "
          >
            <Trash2 size={15} strokeWidth={1.7} />
          </button>
        </div>

        <div className="mt-auto flex items-end justify-between">
          {/* Quantity */}
          <div
            className="
              flex items-center
              overflow-hidden
              rounded-lg
              border
              border-black/10
            "
          >
            <button
              type="button"
              onClick={() => onDecrease(item.id)}
              disabled={item.quantity <= 1}
              aria-label="Decrease quantity"
              className="
                flex h-8 w-8
                items-center justify-center
                text-[#555]
                transition-colors
                hover:bg-black/[0.04]
                disabled:cursor-not-allowed
                disabled:opacity-30
              "
            >
              <Minus size={13} />
            </button>

            <span
              className="
                flex h-8 min-w-8
                items-center justify-center
                border-x
                border-black/10
                text-xs
                font-medium
              "
            >
              {item.quantity}
            </span>

            <button
              type="button"
              onClick={() => onIncrease(item.id)}
              aria-label="Increase quantity"
              className="
                flex h-8 w-8
                items-center justify-center
                text-[#555]
                transition-colors
                hover:bg-black/[0.04]
              "
            >
              <Plus size={13} />
            </button>
          </div>

          {/* Price */}
          <p className="text-sm font-semibold text-[#151515]">
            {formatPrice(item.price * item.quantity)}
          </p>
        </div>
      </div>
    </article>
  );
}

export default CartItem;
