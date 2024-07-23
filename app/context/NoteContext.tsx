"use client";

import { createContext, useState } from "react";
import { ChildrenType } from "../lib/types";

type NoteContextType = {
  noteCategories: string[];
};

export const NoteContext = createContext<NoteContextType>(null!);

function NoteContextProvider({ children }: ChildrenType) {
  const noteCategories = ["category1", "category2", "category3"];
  return (
    <NoteContext.Provider value={{ noteCategories }}>
      {children}
    </NoteContext.Provider>
  );
}

export default NoteContextProvider;
