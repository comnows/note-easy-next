"use client";

import { useNoteContext } from "@/app/hook/UseNoteContext";
import CategoryButton from "./CategoryButton";

function CategoryBar() {
  const { noteCategories } = useNoteContext();
  return (
    <div className="flex gap-2">
      <CategoryButton text="All" />
      {noteCategories &&
        noteCategories.map((category, index) => (
          <CategoryButton key={index} text={category} />
        ))}
    </div>
  );
}

export default CategoryBar;
