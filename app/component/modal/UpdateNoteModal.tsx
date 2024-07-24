import Modal from "./Modal";
import UpdateNoteForm from "../form/UpdateNoteForm";
import { useNoteContext } from "@/app/hook/UseNoteContext";

function UpdateNoteModal() {
  const { isEditNoteOpen, setIsEditNoteOpen } = useNoteContext();

  return (
    <Modal
      isOpen={isEditNoteOpen}
      onClose={() => {
        setIsEditNoteOpen(false);
      }}
    >
      <UpdateNoteForm />
    </Modal>
  );
}

export default UpdateNoteModal;
