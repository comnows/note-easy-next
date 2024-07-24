import { useNoteContext } from "@/app/hook/UseNoteContext";

function AddNoteButton() {
  const { setIsAddNoteOpen } = useNoteContext();
  return (
    <button
      onClick={() => setIsAddNoteOpen(true)}
      className="absolute bottom-6 right-6 bg-white text-3xl font-medium rounded-full px-4 pt-[6px] pb-[10px]"
    >
      +
    </button>
  );
}

export default AddNoteButton;
