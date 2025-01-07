import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
   

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
  };

  return (
    <AuthContext.Provider value={authinfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
