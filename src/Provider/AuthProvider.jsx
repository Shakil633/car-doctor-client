import { createContext, useEffect, useState } from "react";
import auth from "../FireBase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // sing Up
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sing In
  const userSingIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // const logOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Get the currently signed-in use

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      console.log("Current User", currentUser);
      setLoading(false);
      // if user exists then issue a token
      if (currentUser) {
        axios
          .post(
            "https://car-doctor-server-flame-eight.vercel.app/jwt",
            loggedUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log("token respond", res.data);
          });
      } else {
        axios
          .post(
            "https://car-doctor-server-flame-eight.vercel.app/logout",
            loggedUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res.data);
          });
      }
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    userSingIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
