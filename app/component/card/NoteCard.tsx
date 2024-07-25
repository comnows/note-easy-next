import { db } from "@/app/lib/firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import moment from "moment";
import { FaPen, FaTrashCan } from "react-icons/fa6";

type NoteCardProps = {
  id: string;
  content: string;
  createdBy: string;
  date: Date;
  category: string;
  onEditClick?: () => void;
  canEdit?: boolean;
};

const deleteSubDoc = async (id: string, subDocId: string) => {
  await deleteDoc(doc(db, "note", id, "history", subDocId));
};

const handleDelete = async (id: string) => {
  const subDocSnapshot = await getDocs(collection(db, "note", id, "history"));
  subDocSnapshot.forEach((document) => {
    deleteSubDoc(id, document.id);
  });

  await deleteDoc(doc(db, "note", id));
};

function NoteCard({
  id,
  content,
  createdBy,
  date,
  category,
  onEditClick,
  canEdit = true,
}: NoteCardProps) {
  return (
    <div className="flex flex-col justify-between gap-2 bg-white border rounded-lg p-4 shadow-lg">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div>
            <div className="bg-gray-200 text-gray-400 text-sm rounded-full px-2">
              {category}
            </div>
          </div>
          {canEdit && (
            <div className="flex gap-2">
              <button onClick={onEditClick} className="hover:text-blue-600">
                <FaPen />
              </button>
              <button
                onClick={() => {
                  handleDelete(id);
                }}
                className="hover:text-red-600"
              >
                <FaTrashCan />
              </button>
            </div>
          )}
        </div>
        <p className="font-medium">{content}</p>
      </div>

      <div className="flex justify-between gap-4 text-xs text-gray-500">
        <p>{createdBy}</p>
        <p>{moment(date).format("D MMM YYYY")}</p>
      </div>
    </div>
  );
}

export default NoteCard;
