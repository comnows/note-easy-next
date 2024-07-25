import { useNoteContext } from "@/app/hook/UseNoteContext";
import React from "react";

function SortSelect() {
  const { selectedSort, setSelectedSort } = useNoteContext();

  const handleValue = selectedSort === "desc" ? "Newest" : "Oldest";

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const optionValue = e.target.value;
    optionValue === "Newest" ? setSelectedSort("desc") : setSelectedSort("asc");
  };
  return (
    <select
      name="sort"
      id="sort"
      className="outline-none rounded-full px-2"
      value={handleValue}
      onChange={handleSelectChange}
    >
      <option value="Newest">Newest</option>
      <option value="Oldest">Oldest</option>
    </select>
  );
}

export default SortSelect;
