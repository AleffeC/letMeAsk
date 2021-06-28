import { BrowserRouter, Route } from 'react-router-dom';
import { createContext } from 'react';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { useState } from 'react';

export const AuthContext = createContext({} as any); // Colocando as rotas dentro do contexto tudo que for compartilhado nesse contexto sera de conhecimento das rotas

function App() {
  const [user, setUser] = useState('Teste');

  return (  //exact obriga o route a acessar exatamente oque esta em path. caso contrario ele pegara o que vier primeiro
    <BrowserRouter> 
      <AuthContext.Provider value={{ user, setUser }}>    
        <Route path="/" exact component={Home}/> 
        <Route path="/rooms/new" component={NewRoom}/>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
