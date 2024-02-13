import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";

import { Search, SearchIconWrapper, StyledInputBase } from "./Nav";
import { searchPlayer } from "../../api/custom/PlayerApis";

function Input() {
  const [search, setSearch] = useState<string>("");
  const [player, setPlayer] = useState<string>("");
  const inputValue = async (event: { target: { value: string } }) => {
    setSearch(event.target.value);
    const res = await searchPlayer(event.target.value);
    setPlayer(res);
  };
  console.log(player);

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase value={search} onChange={inputValue} placeholder="Search Player" inputProps={{ "aria-label": "search" }} />
    </Search>
  );
}

export default Input;
