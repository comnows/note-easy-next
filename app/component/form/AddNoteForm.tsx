"use client";

import { useAuthContext } from "@/app/hook/UseAuthContext";
import { useNoteContext } from "@/app/hook/UseNoteContext";
import { db } from "@/app/lib/firebase";
import { addDoc, collection } from "firebase/firestore";

type AddNoteFormProps = {
  onClose: () => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => {};
};

function AddNoteForm({ onClose, onSubmit }: AddNoteFormProps) {
  const { noteCategories } = useNoteContext();
  const { currentUser } = useAuthContext();

  const handleAddNote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const note = formData.get("note") as string;
    const category = formData.get("categories") as string;

    const newNote = {
      createdBy: currentUser?.displayName,
      note: note,
      category: category,
      createdAt: new Date(),
    };

    try {
      const colRef = collection(db, "note");
      await addDoc(colRef, newNote);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative">
      <form
        onSubmit={onSubmit ? onSubmit : handleAddNote}
        className="flex flex-col gap-3"
      >
        <label htmlFor="note-textarea" className="font-semibold">
          Edit note
        </label>
        <textarea
          required
          name="note"
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
          name="categories"
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
