import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";

export default function SearchBox() {
  const handleSearch = () => {
    console.log("searched");
  }

  return (
    <div>
      <InputBase
        onChange={handleSearch}
        placeholder="Search 1.0.0"
      />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </div>
  );
}
