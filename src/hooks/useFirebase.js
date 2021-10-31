import React, { useEffect, useState } from "react";

import firebaseInitialize from "../authentication/Firebase/firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

firebaseInitialize();

const useFirebase = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const auth = getAuth();

  const signInUsingGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
        // console.log("from useFirebase onAuthStateChanged", user);
        // ...
      } else {
        // User is signed out
        // ...
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return {
    signInUsingGoogle,
    setUser,
    setLoading,
    logOut,
    setError,
    error,
    user,
    loading,
  };
};

export default useFirebase;
