import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import Settings from "./components/SideBar/Settings/Settings";
import SideBar from "./components/SideBar/SideBar";
import Main from "./components/Main/Main";

const App = () => {
  return (
      <BrowserRouter>
        <div className="app">
          <div className="app__sidebar">
            <SideBar/>
          </div>
          <div className="app__main">
            <Switch>
              <Route path='/login' render={() => <Login/>}/>
              <Route path='/register' render={() => <Register/>}/>
              <Route path='/main' render={() => <Main/>}/>
              <Route path='/settings' render={() => <Settings/>}/>
              <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
