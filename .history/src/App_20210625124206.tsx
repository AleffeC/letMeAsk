import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import {AuthContextProvider} from './contexts/AuthContext'
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';


function App() {  

  return (  //exact obriga o route a acessar exatamente oque esta em path. caso contrario ele pegara o que vier primeiro
    <BrowserRouter> 
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home}/> 
            <Route path="/rooms/new" exact component={NewRoom}/>
            <Route path="/rooms/:id" component={Room}/>
            <Route path="/admin/rooms/:id" component={AdminRoom}/>
          </Switch>
        </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
