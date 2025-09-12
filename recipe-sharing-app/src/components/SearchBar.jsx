import React from "react";
import useRecipeStore from "../store/recipeStore";

const SearchBar = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      value={searchTerm}
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: "8px",
        marginBottom: "1rem",
        width: "100%",
        maxWidth: "400px",
      }}
    />
  );
};

export default SearchBar;
