import {
  ChevronRight,
  Heart,
  LogOut,
  Package,
  Settings,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

function UserAccount({ user, onLogout, onClose }) {
  return (
    <div>
      {/* User Header */}
      <div
        className="
          flex
          items-center
          gap-3
          rounded-xl
          bg-black/[0.035]
          p-3
        "
      >
        <div
          className="
            flex h-11 w-11
            shrink-0
            items-center justify-center
            rounded-full
            bg-[#151515]
            text-sm
            font-semibold
            text-white
          "
        >
          {user?.name?.charAt(0)?.toUpperCase() || "A"}
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-[#151515]">
            {user?.name || "Ali"}
          </p>

          <p className="truncate text-[11px] text-[#999]">
            {user?.email || "ali@example.com"}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-4 space-y-1">
        <AccountLink
          to="/account"
          icon={<UserRound size={16} />}
          label="My Account"
          onClick={onClose}
        />

        <AccountLink
          to="/orders"
          icon={<Package size={16} />}
          label="My Orders"
          onClick={onClose}
        />

        <AccountLink
          to="/wishlist"
          icon={<Heart size={16} />}
          label="Wishlist"
          onClick={onClose}
        />

        <AccountLink
          to="/settings"
          icon={<Settings size={16} />}
          label="Settings"
          onClick={onClose}
        />
      </div>

      {/* Logout */}
      <div className="mt-4 border-t border-black/10 pt-4">
        <button
          type="button"
          onClick={() => {
            onLogout?.();
            onClose?.();
          }}
          className="
            flex w-full
            items-center gap-3
            rounded-xl
            px-3 py-2.5
            text-xs
            text-red-500
            transition-all duration-300
            hover:bg-red-50
          "
        >
          <LogOut size={16} strokeWidth={1.7} />
          Sign Out
        </button>
      </div>
    </div>
  );
}

function AccountLink({ to, icon, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="
        group
        flex
        items-center
        gap-3
        rounded-xl
        px-3 py-2.5
        text-xs
        text-[#666]
        transition-all duration-300
        hover:bg-black/[0.04]
        hover:text-[#151515]
      "
    >
      <span className="text-[#999] transition-colors group-hover:text-[#151515]">
        {icon}
      </span>

      <span>{label}</span>

      <ChevronRight
        size={14}
        className="
          ml-auto
          text-[#ccc]
          transition-transform duration-300
          group-hover:translate-x-0.5
        "
      />
    </Link>
  );
}

export default UserAccount;
