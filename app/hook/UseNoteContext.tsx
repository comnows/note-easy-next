"use client";

import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";

export const useNoteContext = () => useContext(NoteContext);
