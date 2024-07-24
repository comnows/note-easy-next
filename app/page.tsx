"use client";

import { useState } from "react";
import NoteCard from "./component/card/NoteCard";
import AddNoteForm from "./component/form/AddNoteForm";
import Modal from "./component/modal/Modal";
import CategoryBar from "./component/sort/CategoryBar";
import NoteContextProvider from "./context/NoteContext";
import UpdateNoteForm from "./component/form/UpdateNoteForm";
import ProtectedRoute from "./component/auth/ProtectedRoute";
import Header from "./component/header/Header";

export default function Home() {
  const [isAddNoteOpen, setIsAddNoteOpen] = useState<boolean>(false);
  const [isEditNoteOpen, setIsEditNoteOpen] = useState<boolean>(false);

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
        </div>
        <button
          onClick={() => setIsAddNoteOpen(true)}
          className="absolute bottom-6 right-6 bg-white text-3xl font-medium rounded-full px-4 pt-[6px] pb-[10px]"
        >
          +
        </button>
        <Modal isOpen={isAddNoteOpen} onClose={() => setIsAddNoteOpen(false)}>
          <AddNoteForm />
        </Modal>

        <Modal
          isOpen={isEditNoteOpen}
          onClose={() => {
            setIsEditNoteOpen(false);
          }}
        >
          <UpdateNoteForm />
        </Modal>
      </NoteContextProvider>
    </ProtectedRoute>
  );
}
