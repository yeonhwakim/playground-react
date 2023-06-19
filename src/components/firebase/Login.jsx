import React, { useState } from "react";

import app from "./firebase";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const authService = getAuth(app);
const provider = new GoogleAuthProvider();

function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [userProfile, setUserProfile] = useState("");

  const handleClickLogin = async () => {
    await signInWithPopup(authService, provider);

    onAuthStateChanged(authService, (user) => {
      if (user) {
        console.log(user);
        const { displayName, photoURL } = user;
        setIsLogin(true);
        setUserName(displayName);
        setUserProfile(photoURL);
      } else {
        setIsLogin(false);
      }
    });
  };

  const handleClickLogout = async () => {
    await signOut(authService);
    setIsLogin(false);
  };
  return (
    <div>
      {isLogin ? (
        <>
          <button onClick={handleClickLogout}>LOGOUT</button>
          <div>
            <img src={userProfile} alt={`${userName} 프로필`} />
            <span>{userName}</span>
          </div>
        </>
      ) : (
        <button onClick={handleClickLogin}>LOGIN</button>
      )}
    </div>
  );
}

export default Login;
