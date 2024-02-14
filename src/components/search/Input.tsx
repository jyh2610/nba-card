import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";

import Dropdown from "./Dropdown";
import { searchPlayer } from "../../api/custom/PlayerApis";
import { playerState } from "../../app/player";
import { Search, SearchIconWrapper, StyledInputBase } from "../common/Nav";

function Input() {
  const [search, setSearch] = useState<string>("");
  const [specificPlayers, setSpecificPlayers] = useState<playerState>([]);

  const inputValue = async (event: { target: { value: string } }) => {
    try {
      setSearch(event.target.value);
      const res = search.length > 0 && (await searchPlayer(event.target.value));
      setSpecificPlayers(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase value={search} onChange={inputValue} placeholder="Search Player" inputProps={{ "aria-label": "search" }} />
        <Dropdown specificPlayers={specificPlayers} />
      </Search>
    </div>
  );
}

export default Input;
