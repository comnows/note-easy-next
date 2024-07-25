"use client";

import { createContext, useState } from "react";
import { ChildrenType } from "../lib/types";

type NoteContextType = {
  isAddNoteOpen: boolean;
  setIsAddNoteOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isEditNoteOpen: boolean;
  setIsEditNoteOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedNote: string | null;
  setSelectedNote: React.Dispatch<React.SetStateAction<string | null>>;
  selectedSort: "desc" | "asc";
  setSelectedSort: React.Dispatch<React.SetStateAction<"desc" | "asc">>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  noteCategories: string[];
};

export const NoteContext = createContext<NoteContextType>(null!);

function NoteContextProvider({ children }: ChildrenType) {
  const [isAddNoteOpen, setIsAddNoteOpen] = useState<boolean>(false);
  const [isEditNoteOpen, setIsEditNoteOpen] = useState<boolean>(false);
  const [selectedNote, setSelectedNote] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedSort, setSelectedSort] = useState<"desc" | "asc">("desc");
  const noteCategories = ["category1", "category2", "category3"];

  const noteContextValue = {
    noteCategories,
    isAddNoteOpen,
    setIsAddNoteOpen,
    isEditNoteOpen,
    setIsEditNoteOpen,
    selectedNote,
    setSelectedNote,
    selectedSort,
    setSelectedSort,
    selectedCategory,
    setSelectedCategory,
  };

  return (
    <NoteContext.Provider value={noteContextValue}>
      {children}
    </NoteContext.Provider>
  );
}

export default NoteContextProvider;
