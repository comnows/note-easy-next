import NoteCard from "./component/card/NoteCard";

export default function Home() {
  return (
    <>
      <div className="container h-screen mx-auto pt-8">
        <div className="flex justify-between gap-4 bg-white rounded-full px-20 py-3">
          <p className="text-lg font-semibold">John Doe</p>
          <button className="text-red-600 text-base">Logout</button>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-5">
          <NoteCard
            content="this is content of the note this is content of the note this is content of the note this is content of the note "
            createdBy="John Doe"
            date={new Date()}
            category="Category"
          />
          <NoteCard
            content="this is content of the note"
            createdBy="John Doe"
            date={new Date()}
            category="Category"
          />
        </div>
        <input
          type="text"
          placeholder="Take a note..."
          className="flex-1 bg-gray-200 placeholder:text-gray-500 rounded-full outline-none px-4 py-3"
        />
      </div>
      <button className="absolute bottom-6 right-6 bg-white text-3xl font-medium rounded-full px-4 pt-[6px] pb-[10px]">
        +
      </button>
    </>
  );
}
