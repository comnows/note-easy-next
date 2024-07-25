import { useNoteContext } from "@/app/hook/UseNoteContext";
import NoteCard from "../card/NoteCard";
import { useEffect, useState } from "react";
import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/app/lib/firebase";

function NoteList() {
  const { setIsEditNoteOpen, setSelectedNote, selectedSort, selectedCategory } =
    useNoteContext();
  const [noteList, setNoteList] = useState<DocumentData[] | null>(null);

  useEffect(() => {
    const colRef = collection(db, "note");
    const queryRef =
      selectedCategory === "All"
        ? query(colRef, orderBy("createdAt", selectedSort))
        : query(
            colRef,
            where("category", "==", `${selectedCategory}`),
            orderBy("createdAt", selectedSort),
          );

    const unsub = onSnapshot(
      queryRef,
      (snapshot) => {
        const list = snapshot.docs.map((doc) => {
          let note = doc.data();
          note.noteId = doc.id;
          note.createdAt = note.createdAt.toDate();
          return note;
        });

        setNoteList(list);
      },
      (error) => {
        console.log(error);
      },
    );

    return unsub;
  }, [selectedCategory, selectedSort]);

  return (
    <div className="grid grid-cols-3 gap-4 mt-5">
      {noteList?.map((note) => (
        <NoteCard
          key={note.noteId}
          id={note.noteId}
          content={note.note}
          createdBy={note.createdBy}
          date={note.createdAt}
          category={note.category}
          onEditClick={() => {
            setSelectedNote(note.noteId);
            setIsEditNoteOpen(true);
          }}
        />
      ))}
    </div>
  );
}

export default NoteList;
