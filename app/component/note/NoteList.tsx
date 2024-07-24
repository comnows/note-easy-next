import { useNoteContext } from "@/app/hook/UseNoteContext";
import NoteCard from "../card/NoteCard";

function NoteList() {
  const { setIsEditNoteOpen } = useNoteContext();

  return (
    <div className="grid grid-cols-3 gap-4 mt-5">
      <NoteCard
        content="this is content of the note this is content of the note this is content of the note this is content of the note "
        createdBy="John Doe"
        date={new Date()}
        category="Category"
        onEditClick={() => setIsEditNoteOpen(true)}
      />
      <NoteCard
        content="this is content of the note"
        createdBy="John Doe"
        date={new Date()}
        category="Category"
        onEditClick={() => setIsEditNoteOpen(true)}
      />
    </div>
  );
}

export default NoteList;
