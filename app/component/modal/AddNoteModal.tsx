import Modal from "./Modal";
import AddNoteForm from "../form/AddNoteForm";
import { useNoteContext } from "@/app/hook/UseNoteContext";

function AddNoteModal() {
  const { isAddNoteOpen, setIsAddNoteOpen } = useNoteContext();

  return (
    <Modal isOpen={isAddNoteOpen} onClose={() => setIsAddNoteOpen(false)}>
      <AddNoteForm
        onClose={() => {
          setIsAddNoteOpen(false);
        }}
      />
    </Modal>
  );
}

export default AddNoteModal;
