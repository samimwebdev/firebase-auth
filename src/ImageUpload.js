import React from "react";
import { storage } from "./utils/firebase.config";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

export default function ImageUpload() {
  const [displayName, setDisplayName] = React.useState("");
  const [profilePic, setProfilePic] = React.useState(null);

  const bucketRef = ref(storage, `images/${profilePic?.name}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    //const uploadTask = uploadBytesResumable(bucketRef, profilePic)
    //    uploadTask.on('state_changed', snapshot => {
    //        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //        console.log('upload is' + progress + '% Done')

    //    }, (error => console.log(error.message)), () => {
    //        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
    //            console.log('File is available at', downloadURL )
    //        })
    //    })

    uploadBytes(bucketRef, profilePic)
      .then((snapshot) => {
        console.log("File uploaded successfully");
        getDownloadURL(snapshot.ref)
          .then((url) => console.log(url))
          .catch((err) => console.log(err.message));
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(profilePic, displayName);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="profilePic"
          accept="image/*"
          onChange={(e) => {
            setProfilePic(e.target.files[0]);
            console.log(e.target.files[0]);
          }}
        />
        <input
          type="name"
          name="displayName"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
