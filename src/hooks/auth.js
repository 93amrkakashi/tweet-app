import { auth } from "../utils/firebase-config";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { login, root } from "../utils/routes";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { notifybad, notifycreat, notifygood, notifymessage, notifynotcreat } from "./notify";
import { doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./../utils/firebase-config";
import isUsernameExists from "./validate-user";

export function useAuth() {
  const [authUser, authLoading, error] = useAuthState(auth);
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const ref = doc(db, "users", authUser.uid);
      const docSnap = await getDoc(ref);
    await  setUser(docSnap.data());
      setLoading(false);
      // console.log(user);
    }
    if (!authLoading) {
      if (authUser) fetchData();
      else setLoading(false); // Not signed in
    }
  }, [authLoading]);

  return { user, isLoading, error };
}


export function useRegister() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function register({
    username,
    email,
    password,
    redirectTo = root,
  }) {
    setLoading(true);

    const usernameExists = await isUsernameExists(username);

    if (usernameExists) {
      notifynotcreat();
      setLoading(false);
    } else {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        console.log(res);
        await setDoc(doc(db, "users", res.user.uid), {
          id: res.user.uid,
          username: username.toLowerCase(),
          avatar: "",
          date: Date.now(),
        });
        notifycreat();
        console.log(res.user.uid);
        
        navigate(redirectTo);
      } catch (error) {
        notifygood();
      } finally {
        setLoading(false);
      }
    }
  }

  return { register, isLoading };
}

export function useLogin() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function login({ email, password, redirectTo = root }) {
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      notifygood();
      navigate(redirectTo);
    } catch (error) {
      notifybad();
      setLoading(false);
      return false;
    } finally {
      setLoading(false);
      return true;
    }
  }

  return { login, isLoading };
}

export function useLogout() {
  const [signOut, isLoading, error] = useSignOut(auth);
  const navigate = useNavigate();

  async function logout() {
    if (await signOut()) {
      notifymessage()
      navigate(login);
    } // else: show error [signOut() returns false if failed]
  }

  return { logout, isLoading };
}
