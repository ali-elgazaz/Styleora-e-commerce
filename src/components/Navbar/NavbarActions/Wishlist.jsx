import { Heart } from "lucide-react";

import IconButton from "./IconButton";

function Wishlist({ count = 0, onClick }) {
  return (
    <IconButton
      badge={count > 0 ? count : undefined}
      onClick={onClick}
      ariaLabel="Wishlist"
    >
      <Heart size={19} strokeWidth={1.8} />
    </IconButton>
  );
}

export default Wishlist;
