import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

function App() {
  return (  //exact obriga o route a acessar exatamente oque esta em path. caso contrario ele pegara o que vier primeiro
    <BrowserRouter>
      <Route path="/" exact component={Home}/> 
      <Route path="/rooms/new" component={NewRoom}/>
    </BrowserRouter>
  );
}

export default App;
