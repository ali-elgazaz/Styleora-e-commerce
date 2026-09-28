import { Menu, ShoppingBag } from "lucide-react";

import IconButton from "../NavbarActions/IconButton";
import MobileMenu from "./MobileMenu";

function MobileNavbar({
  menuOpen,
  onOpenMenu,
  onCloseMenu,
  onSearch,
  onCart,
  onAccount,
  cartCount = 0,
  wishlistCount = 0,
}) {
  const handleSearch = () => {
    onCloseMenu();
    onSearch?.();
  };

  const handleCart = () => {
    onCloseMenu();
    onCart?.();
  };

  const handleAccount = () => {
    onCloseMenu();
    onAccount?.();
  };

  return (
    <>
      <div className="flex items-center gap-1 lg:hidden">
        {/* Menu */}
        <IconButton
          onClick={onOpenMenu}
          ariaLabel="Open menu"
          ariaExpanded={menuOpen}
        >
          <Menu size={21} strokeWidth={1.7} />
        </IconButton>

        {/* Cart */}
        <IconButton
          onClick={handleCart}
          ariaLabel="Shopping bag"
          ariaHasPopup="dialog"
          badge={cartCount > 0 ? cartCount : undefined}
        >
          <ShoppingBag size={19} strokeWidth={1.7} />
        </IconButton>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={onCloseMenu}
        onSearch={handleSearch}
        onCart={handleCart}
        onAccount={handleAccount}
        cartCount={cartCount}
        wishlistCount={wishlistCount}
      />
    </>
  );
}

export default MobileNavbar;
