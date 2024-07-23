"use client";

import { useNoteContext } from "@/app/hook/UseNoteContext";

function AddNoteForm() {
  const { noteCategories } = useNoteContext();
  return (
    <div className="relative">
      <form className="flex flex-col gap-3">
        <label htmlFor="note-textarea" className="font-semibold">
          Edit note
        </label>
        <textarea
          name=""
          id="note-textarea"
          cols={50}
          rows={10}
          placeholder="Take a note..."
          className="bg-slate-100 outline-none rounded-lg px-3 py-2"
        />
        <label htmlFor="categories" className="font-semibold">
          Categories
        </label>
        <select
          name=""
          id="categories"
          className="bg-slate-100 rounded-full outline-none px-2 py-1"
        >
          {noteCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button className="bg-black hover:bg-black/80 text-white rounded-full py-1 mt-4">
          Confirm
        </button>
      </form>
    </div>
  );
}

export default AddNoteForm;
