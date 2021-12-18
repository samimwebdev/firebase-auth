import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Fade from "@mui/material/Fade";
import Notes from "./Notes";

import { Register } from "./Register";
import { Login } from "./Login";
import { Nav } from "./Nav";
import { ForgotPassword } from "./ForgotPassword";
import { ResetPassword } from "./ResetPassword";
import { Profile } from "./Profile";
import { Private } from "./Private";
import AddNote from "./AddNote";
import EditNote from "./EditNote";
import { AuthProvider, AuthContext } from "./context/Auth.context";
import { NoteProvider } from "./context/Note.context";

const AuthRequired = ({ children }) => {
  const location = useLocation();
  const { currentUser, loading } = React.useContext(AuthContext);
  if (loading) {
    if (currentUser) {
      return children;
    } else {
      return <Navigate to="/login" state={{ from: location.pathname }} />;
    }
  } else {
    return "loading...";
  }
};

function App() {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      TransitionComponent={Fade}
    >
      <NoteProvider>
        <AuthProvider>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route index element={<Notes />} />
              <Route path="/register" element={<Register />} />
              <Route path="/notes" element={<Notes />} />
              <Route
                path="/notes/add"
                element={
                  <AuthRequired>
                    <AddNote />
                  </AuthRequired>
                }
              />
              <Route
                path="/notes/edit/:noteId"
                element={
                  <AuthRequired>
                    <EditNote />
                  </AuthRequired>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route
                path="/profile"
                element={
                  <AuthRequired>
                    <Profile />
                  </AuthRequired>
                }
              />
              <Route
                path="/private"
                element={
                  <AuthRequired>
                    <Private />{" "}
                  </AuthRequired>
                }
              />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </NoteProvider>
    </SnackbarProvider>
  );
}

export default App;
