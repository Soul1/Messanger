import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import Body from "./components/Body/Body";
import Settings from "./components/SideBar/Settings/Settings";

const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' render={() => <Login/>}/>
          <Route path='/register' render={() => <Register/>}/>
          <Route path='/main' render={() => <Body/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
          <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
