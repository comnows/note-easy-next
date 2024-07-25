import { useNoteContext } from "@/app/hook/UseNoteContext";
import { useAuthContext } from "@/app/hook/UseAuthContext";
import NoteCard from "../card/NoteCard";
import AddNoteForm from "./AddNoteForm";
import {
  addDoc,
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "@/app/lib/firebase";
import { useEffect, useState } from "react";

function UpdateNoteForm() {
  const { setIsEditNoteOpen, selectedNote } = useNoteContext();
  const { currentUser } = useAuthContext();

  const [historyList, setHistoryList] = useState<DocumentData[] | null>(null);

  const handleUpdateNote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const note = formData.get("note") as string;
    const category = formData.get("categories") as string;

    const docSnap = await getDoc(doc(db, "note", `${selectedNote}`));
    await addDoc(
      collection(db, "note", `${selectedNote}`, "history"),
      docSnap.data(),
    );

    const newNote = {
      createdBy: currentUser?.displayName,
      note: note,
      category: category,
      createdAt: new Date(),
    };

    await setDoc(doc(db, "note", `${selectedNote}`), newNote);
    setIsEditNoteOpen(false);
  };

  useEffect(() => {
    const getAllHistory = async () => {
      const querySnap = await getDocs(
        query(
          collection(db, "note", `${selectedNote}`, "history"),
          orderBy("createdAt", "desc"),
        ),
      );

      const list = querySnap.docs.map((doc) => {
        const hist = doc.data();
        hist.id = doc.id;
        hist.createdAt = hist.createdAt.toDate();
        return hist;
      });

      setHistoryList(list);
    };
    getAllHistory();
  }, [selectedNote]);

  return (
    <div className="flex gap-8">
      <div className="max-w-xs">
        <h1 className="font-semibold mb-3">History</h1>
        <div className="flex flex-col gap-2 max-h-[400px] min-w-[200px] overflow-scroll">
          {historyList?.map((note) => (
            <NoteCard
              key={note.id}
              id={note.id}
              content={note.note}
              createdBy={note.createdBy}
              date={note.createdAt}
              category={note.category}
              canEdit={false}
            />
          ))}
        </div>
      </div>
      <AddNoteForm
        onClose={() => setIsEditNoteOpen(false)}
        onSubmit={handleUpdateNote}
      />
    </div>
  );
}

export default UpdateNoteForm;
