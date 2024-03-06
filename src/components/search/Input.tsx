import { useEffect, useState } from "react";

import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";

import Dropdown from "./Dropdown";
import { getPlayer } from "../../api/custom/PlayerApis";
import { playerState } from "../../app/player";
import { Search, SearchIconWrapper, StyledInputBase } from "../common/Nav";

function Input() {
  const [search, setSearch] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [specificPlayers, setSpecificPlayers] = useState<playerState>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsOpen(true);
        const res = search.length > 0 && (await getPlayer(search));
        setSpecificPlayers(res);
      } catch (err) {
        console.error(err);
      }
    };

    if (search.length > 0) {
      fetchData();
    } else {
      setIsOpen(false);
      setSpecificPlayers([]);
    }
  }, [search]);

  return (
    <Div>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Player" inputProps={{ "aria-label": "search" }} />
      </Search>
      {isOpen && <Dropdown setIsOpen={setIsOpen} setSearch={setSearch} specificPlayers={specificPlayers} />}
    </Div>
  );
}

export default Input;

const Div = styled.div`
  position: relative;
`;
