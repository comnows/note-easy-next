import moment from "moment";
import { FaPen, FaTrashCan } from "react-icons/fa6";

type NoteCardProps = {
  content: string;
  createdBy: string;
  date: Date;
  category: string;
};

function NoteCard({ content, createdBy, date, category }: NoteCardProps) {
  return (
    <div className="flex flex-col justify-between gap-2 bg-white border rounded-lg p-4 shadow-lg">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div>
            <div className="bg-gray-200 text-gray-400 text-sm rounded-full px-2">
              {category}
            </div>
          </div>
          <div className="flex gap-2">
            <button className="hover:text-blue-600">
              <FaPen />
            </button>
            <button className="hover:text-red-600">
              <FaTrashCan />
            </button>
          </div>
        </div>
        <p className="font-medium">{content}</p>
      </div>

      <div className="flex justify-between text-xs text-gray-500">
        <p>{createdBy}</p>
        <p>{moment(date).format("D MMM YYYY")}</p>
      </div>
    </div>
  );
}

export default NoteCard;
