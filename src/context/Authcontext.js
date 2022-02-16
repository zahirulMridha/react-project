import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";

// create context api
const Authcontext = React.createContext;

// context api consumer function
export function useAuth() {
  return useContext(Authcontext);
}


//context api provider function

export function AuthProvider({ children }) {
  const [loading, setLoding] = useState(true);
  const [currentUser, setCurrentUser] = useState;


  // log in or log out status track and update current user .
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoding(false);
    });
    return unsubscribe;
  }, []);

  // sign up function
  async function signup(email, password, username) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    //   update profile
    await updateProfile(auth.currentUser, {
      displayName: username,
    });

    // our local state update
    const user = auth.currentUser;
    setCurrentUser(...user);
  }

  // log in function
  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  // log out function
  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <Authcontext.Provider value={value}>
      {!loading && children}
    </Authcontext.Provider>
  );
}
