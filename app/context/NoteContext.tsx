"use client";

import { createContext, useState } from "react";
import { ChildrenType } from "../lib/types";

type NoteContextType = {
  isAddNoteOpen: boolean;
  setIsAddNoteOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isEditNoteOpen: boolean;
  setIsEditNoteOpen: React.Dispatch<React.SetStateAction<boolean>>;
  noteCategories: string[];
};

export const NoteContext = createContext<NoteContextType>(null!);

function NoteContextProvider({ children }: ChildrenType) {
  const [isAddNoteOpen, setIsAddNoteOpen] = useState<boolean>(false);
  const [isEditNoteOpen, setIsEditNoteOpen] = useState<boolean>(false);
  const noteCategories = ["category1", "category2", "category3"];

  const noteContextValue = {
    noteCategories,
    isAddNoteOpen,
    setIsAddNoteOpen,
    isEditNoteOpen,
    setIsEditNoteOpen,
  };

  return (
    <NoteContext.Provider value={noteContextValue}>
      {children}
    </NoteContext.Provider>
  );
}

export default NoteContextProvider;
