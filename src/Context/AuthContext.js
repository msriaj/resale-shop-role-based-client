import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { Axios } from "../services/axiosInstance";
import { app } from "./firebase.config.js";
export const AuthContext = createContext();
export const serverUrl = "https://next-mobile-server-msriaj.vercel.app";
// export const serverUrl = "http://localhost:5000";
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const UserContext = ({ children }) => {
  const [getItem] = useLocalStorage();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  const [userID, setUserID] = useState(null);
  console.log(userID);
  const isAuth = () => {
    return !!userID;
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateProfileInfo = (info) => {
    return updateProfile(auth.currentUser, info);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signInGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const resetPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    if (user) {
      setLoading(true);
      Axios.get(`${serverUrl}/api/check-role?email=${user?.email}`).then(
        (result) => {
          setRole(result.data.role);
          setUserID(result.data._id);
          setLoading(false);
        }
      );
    }
  }, [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!getItem("token")) {
      logOut();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const authInfo = {
    createUser,
    signInEmail,
    googleSignIn,
    signInGithub,
    logOut,
    user,
    setUser,
    loading,
    resetPass,
    updateProfileInfo,
    role,
    userID,
    isAuth,
    setRole,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
