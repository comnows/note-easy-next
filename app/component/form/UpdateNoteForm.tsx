import { useNoteContext } from "@/app/hook/UseNoteContext";
import { useAuthContext } from "@/app/hook/UseAuthContext";
import NoteCard from "../card/NoteCard";
import AddNoteForm from "./AddNoteForm";

function UpdateNoteForm() {
  const { setIsEditNoteOpen } = useNoteContext();

  return (
    <div className="flex gap-8">
      <div className="max-w-xs">
        <h1 className="font-semibold mb-3">History</h1>
        <div className="flex flex-col gap-2 max-h-[400px] overflow-scroll">
          <NoteCard
            content="this is content of the note this is content of the note this is content of the note this is content of the note "
            createdBy="John Doe"
            date={new Date()}
            category="Category"
            canEdit={false}
          />
          <NoteCard
            content="this is content of the note"
            createdBy="John Doe"
            date={new Date()}
            category="Category"
            canEdit={false}
          />
          <NoteCard
            content="this is content of the note"
            createdBy="John Doe"
            date={new Date()}
            category="Category"
            canEdit={false}
          />
          <NoteCard
            content="this is content of the note"
            createdBy="John Doe"
            date={new Date()}
            category="Category"
            canEdit={false}
          />
        </div>
      </div>
      <AddNoteForm onClose={() => setIsEditNoteOpen(false)} />
    </div>
  );
}

export default UpdateNoteForm;
