import { BrowserRouter, Route } from 'react-router-dom';
import { createContext } from 'react';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

const TestContext = createContext(''); // Colocando as rotas dentro do contexto tudo que for compartilhado nesse contexto sera de conhecimento das rotas

function App() {
  return (  //exact obriga o route a acessar exatamente oque esta em path. caso contrario ele pegara o que vier primeiro
    <BrowserRouter> 
      <TestContext.Provider value={'Teste'}>    
        <Route path="/" exact component={Home}/> 
        <Route path="/rooms/new" component={NewRoom}/>
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;
