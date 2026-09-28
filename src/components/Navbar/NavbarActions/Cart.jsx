import { ShoppingBag } from "lucide-react";

import IconButton from "./IconButton";

function Cart({ count = 0, onClick }) {
  return (
    <IconButton
      badge={count > 0 ? count : undefined}
      onClick={onClick}
      ariaLabel="Shopping cart"
      ariaHasPopup="dialog"
    >
      <ShoppingBag size={19} strokeWidth={1.8} />
    </IconButton>
  );
}

export default Cart;
