"use client";

import CategoryBar from "./component/sort/CategoryBar";
import Header from "./component/header/Header";
import ProtectedRoute from "./component/auth/ProtectedRoute";
import NoteContextProvider from "./context/NoteContext";
import AddNoteButton from "./component/button/AddNoteButton";
import AddNoteModal from "./component/modal/AddNoteModal";
import UpdateNoteModal from "./component/modal/UpdateNoteModal";
import NoteList from "./component/note/NoteList";

export default function Home() {
  return (
    <ProtectedRoute>
      <NoteContextProvider>
        <div className="container h-screen mx-auto pt-8">
          <Header />

          <div className="flex justify-between mt-5">
            <CategoryBar />
            <select name="" id="" className="outline-none rounded-full px-2">
              <option value="">Newest</option>
              <option value="">Oldest</option>
            </select>
          </div>

          <NoteList />
        </div>
        <AddNoteButton />

        <AddNoteModal />
        <UpdateNoteModal />
      </NoteContextProvider>
    </ProtectedRoute>
  );
}
