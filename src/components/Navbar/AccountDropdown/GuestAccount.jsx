import { ArrowRight, LogIn, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

function GuestAccount({ onClose }) {
  return (
    <div>
      {/* Header */}
      <div className="mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-muted">
          Welcome to Styleora
        </p>

        <h3 className="mt-2 text-lg font-semibold text-[#151515]">
          Your account
        </h3>

        <p className="mt-1 text-xs leading-relaxed text-[#888]">
          Sign in to manage your orders, wishlist and preferences.
        </p>
      </div>

      {/* Login */}
      <Link
        to="/login"
        onClick={onClose}
        className="
          group
          flex h-11
          w-full
          items-center justify-between
          rounded-xl
          bg-[#151515]
          px-4
          text-xs
          font-semibold
          text-white
          transition-all duration-300
          hover:bg-[#292929]
        "
      >
        <span className="flex items-center gap-2">
          <LogIn size={15} strokeWidth={1.7} />
          Sign In
        </span>

        <ArrowRight
          size={14}
          className="
            transition-transform duration-300
            group-hover:translate-x-1
          "
        />
      </Link>

      {/* Register */}
      <Link
        to="/register"
        onClick={onClose}
        className="
          mt-2
          flex h-11
          w-full
          items-center justify-center
          gap-2
          rounded-xl
          border border-black/10
          text-xs
          font-semibold
          text-[#151515]
          transition-all duration-300
          hover:bg-black/[0.04]
        "
      >
        <UserPlus size={15} strokeWidth={1.7} />
        Create Account
      </Link>

      {/* Benefits */}
      <div className="mt-5 border-t border-black/10 pt-4">
        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#999]">
          Member benefits
        </p>

        <ul className="mt-3 space-y-2 text-xs text-[#777]">
          <li className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-gold" />
            Faster checkout
          </li>

          <li className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-gold" />
            Track your orders
          </li>

          <li className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-gold" />
            Save your wishlist
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GuestAccount;
