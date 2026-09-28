import { UserRound } from "lucide-react";

import IconButton from "./IconButton";

function Account({ open = false, onClick }) {
  return (
    <IconButton
      onClick={onClick}
      ariaLabel="Account"
      ariaExpanded={open}
      ariaHasPopup="menu"
      data-account-toggle=""
    >
      <UserRound
        size={19}
        strokeWidth={1.8}
        className={`
          transition-transform duration-300
          ${open ? "scale-110 text-gold" : ""}
        `}
      />
    </IconButton>
  );
}

export default Account;
