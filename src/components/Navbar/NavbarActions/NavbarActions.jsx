import { Link } from "react-router-dom";

import Search from "./Search";
import Wishlist from "./Wishlist";
import Cart from "./Cart";
import Account from "./Account";
import LanguageSwitcher from "./LanguageSwitcher";

function NavbarActions({
  onSearch,
  onCart,
  onWishlist,
  onAccount,
  cartCount = 0,
  wishlistCount = 0,
  accountOpen = false,
}) {
  return (
    <div className="hidden items-center gap-1 lg:flex">
      <Search onClick={onSearch} />

      <Wishlist count={wishlistCount} onClick={onWishlist} />

      <Cart count={cartCount} onClick={onCart} />

      <Account open={accountOpen} onClick={onAccount} />

      <div className="mx-2 h-5 w-px bg-white/10" />

      <LanguageSwitcher />

      <Link
        to="/shop"
        className="
          group ml-2
          flex h-10
          items-center gap-2
          rounded-xl
          bg-gold
          px-4
          text-xs
          font-semibold
          text-panel
          transition-all duration-300
          hover:bg-gold-bright
          hover:shadow-lg
          hover:shadow-gold/15
          active:scale-[0.98]
        "
      >
        <span>Shop Now</span>

        <span
          className="
            text-sm
            transition-transform duration-300
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </Link>
    </div>
  );
}

export default NavbarActions;
