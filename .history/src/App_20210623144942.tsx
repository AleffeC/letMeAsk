import { BrowserRouter, Route } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { auth, firebase } from './services/firebase';
import {AuthContextProvider} from './contexts/AuthContext'


function App() {  

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
