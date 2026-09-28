import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav/DesktopNav";
import NavbarActions from "./NavbarActions/NavbarActions";
import SearchOverlay from "./SearchOverlay/SearchOverlay";
import AccountDropdown from "./AccountDropdown/AccountDropdown";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import CartDrawer from "./Cart/CartDrawer";

import { NAVBAR_PANELS } from "./navbar.constants";
import { selectCartCount } from "@/store/cartSlice";
import { selectWishlistCount } from "@/store/wishlistSlice";

const SCROLL_THRESHOLD = 30;

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [activePanel, setActivePanel] = useState(null);

  const cartCount = useSelector(selectCartCount);

  const wishlistCount = useSelector(selectWishlistCount);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openPanel = (panel) => {
    setActivePanel(panel);
  };

  const togglePanel = (panel) => {
    setActivePanel((current) => (current === panel ? null : panel));
  };

  const closePanel = () => {
    setActivePanel(null);
  };

  const isSearchOpen = activePanel === NAVBAR_PANELS.SEARCH;

  const isCartOpen = activePanel === NAVBAR_PANELS.CART;

  const isAccountOpen = activePanel === NAVBAR_PANELS.ACCOUNT;

  const isMenuOpen = activePanel === NAVBAR_PANELS.MOBILE;

  return (
    <>
      <header
        className={`
          fixed
          left-0
          top-0
          z-50
          w-full
          px-4
          transition-all
          duration-500
          sm:px-5
          md:px-6
          lg:px-8
          ${isScrolled ? "pt-3" : "pt-5"}
        `}
      >
        <nav
          className={`
            relative
            mx-auto
            flex
            max-w-[1450px]
            items-center
            justify-between
            rounded-2xl
            border
            border-white/10
            bg-ink/90
            text-cream
            backdrop-blur-xl
            transition-all
            duration-500
            ${
              isScrolled
                ? "px-4 py-3 shadow-2xl shadow-black/20"
                : "px-5 py-4 lg:px-6"
            }
          `}
        >
          {/* Logo */}
          <Logo />

          {/* Desktop */}
          <DesktopNav activeMenu={activePanel} setActiveMenu={setActivePanel} />

          {/* Desktop Actions */}
          <NavbarActions
            onSearch={() => openPanel(NAVBAR_PANELS.SEARCH)}
            onCart={() => openPanel(NAVBAR_PANELS.CART)}
            onAccount={() => togglePanel(NAVBAR_PANELS.ACCOUNT)}
            cartCount={cartCount}
            wishlistCount={wishlistCount}
            accountOpen={isAccountOpen}
          />

          {/* Mobile */}
          <MobileNavbar
            menuOpen={isMenuOpen}
            onOpenMenu={() => openPanel(NAVBAR_PANELS.MOBILE)}
            onCloseMenu={closePanel}
            onSearch={() => openPanel(NAVBAR_PANELS.SEARCH)}
            onCart={() => openPanel(NAVBAR_PANELS.CART)}
            onAccount={() => togglePanel(NAVBAR_PANELS.ACCOUNT)}
            cartCount={cartCount}
            wishlistCount={wishlistCount}
          />

          {/* Account */}
          <AccountDropdown
            open={isAccountOpen}
            onClose={closePanel}
            isAuthenticated={false}
          />
        </nav>
      </header>

      {/* Search */}
      <SearchOverlay open={isSearchOpen} onClose={closePanel} />

      {/* Cart */}
      <CartDrawer open={isCartOpen} onClose={closePanel} />
    </>
  );
}

export default Navbar;
