import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Error from './components/Error.jsx';

function App () {
  return (
    <main>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route component={Error}/>
      </Switch>
    </main>

  )
}

ReactDOM.render(
<BrowserRouter>
  <App/>
</BrowserRouter>
, document.getElementById('app'))