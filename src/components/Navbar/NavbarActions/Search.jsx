import { Search as SearchIcon } from "lucide-react";

import IconButton from "./IconButton";

function Search({ onClick }) {
  return (
    <IconButton onClick={onClick} ariaLabel="Search" ariaHasPopup="dialog">
      <SearchIcon size={19} strokeWidth={1.8} />
    </IconButton>
  );
}

export default Search;
