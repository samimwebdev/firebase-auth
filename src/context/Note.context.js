import React, { createContext } from "react";
import { onSnapshot, getDocs, doc, getDoc } from "firebase/firestore";

import { notesColRef } from "../utils/firebase.config";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = React.useState(null);
  //    const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    const unsubscribe = onSnapshot(notesColRef, (snapshots) => {
      const notes = snapshots.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setNotes(notes);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = { notes };
  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};
