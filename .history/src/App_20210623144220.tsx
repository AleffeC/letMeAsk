import { BrowserRouter, Route } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { auth, firebase } from './services/firebase';
import {AuthContextProvider} from './contexts/AuthContext'


function App() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
          const { displayName, photoURL, uid} = user

          if(!displayName || !photoURL){
            throw new Error('Missing information from Google Account.');
          }

          setUser({
            id: uid,
            name : displayName,
            avatar: photoURL
          })
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])

 async function signInWithGoogle(){
     const provider = new firebase.auth.GoogleAuthProvider();
     
     const result = await auth.signInWithPopup(provider);
	   
       if(result.user){
         const { displayName, photoURL, uid} = result.user

         if(!displayName || !photoURL){
           throw new Error('Missing information from Google Account.');
         }

         setUser({
           id: uid,
           name : displayName,
           avatar: photoURL
         })
       }
  }

  return (  //exact obriga o route a acessar exatamente oque esta em path. caso contrario ele pegara o que vier primeiro
    <BrowserRouter> 
        <AuthContextProvider>
          <Route path="/" exact component={Home}/> 
          <Route path="/rooms/new" component={NewRoom}/>
        </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
