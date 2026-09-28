import NavLinks from "./NavLinks";
import MegaMenu from "./MegaMenu/MegaMenu";

import { NAVBAR_PANELS } from "../navbar.constants";
import { useEscapeKey } from "@/hooks/useEscapeKey";

function DesktopNav({ activeMenu, setActiveMenu }) {
  const isMegaOpen = activeMenu === NAVBAR_PANELS.MEGA_MENU;

  useEscapeKey(() => setActiveMenu(null), isMegaOpen);

  const handleClick = (event) => {
    // Close the mega menu when a link inside it is followed (SPA nav).
    if (event.target.closest("a")) {
      setActiveMenu(null);
    }
  };

  return (
    <div
      className="relative hidden lg:block"
      onMouseLeave={() => setActiveMenu(null)}
      onClick={handleClick}
    >
      <NavLinks activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      {/* Keep mounted so CSS transitions handle both enter and exit */}
      <MegaMenu open={isMegaOpen} />
    </div>
  );
}

export default DesktopNav;

