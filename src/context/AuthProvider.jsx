import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from '../firebase/firebase.init';

const googleprovider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singInUser = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
   
  const singOutUser = () => {
    setLoading(true);
    return signOut(auth);
  }

  const SingWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleprovider )
  }

  useEffect(()=> {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
         console.log(currentUser)
        setLoading(false);
       })

       return () => {
        unsubscribe();
       }
  },[])





  const authinfo = {
    user,
    loading,
    createUser,
    singInUser,
    singOutUser,
    SingWithGoogle
  };

  return (
    <AuthContext.Provider value={authinfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
