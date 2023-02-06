import React from "react";
import { SearchBox } from "./style";

export default function Search() {
  return (
    <SearchBox>
      <input
        className="search"
        type="search"
        name="search"
        id="search"
        placeholder="Search... properties, customers here"
      />
      <img src="icons/search.svg" alt="search" height={25} />
    </SearchBox>
  );
}
