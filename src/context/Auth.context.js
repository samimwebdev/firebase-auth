import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.config";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      //user is null if there is no logged in user
      if (!user) {
        setLoading(true);
        setCurrentUser(null);
      } else {
        setCurrentUser(user);
        setLoading(true);
      }
    });
  }, []);

  const value = {
    loading,
    currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
