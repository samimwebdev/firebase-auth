import React from "react";
import { AuthContext } from "./context/Auth.context";
import ImageUpload from "./ImageUpload";

export const Profile = () => {
  const currentUser = React.useContext(AuthContext);

  return <ImageUpload />;
};
