import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Fragment} from 'react';
import Contador from './components/Constador';
import Formulario from './components/Formulario';
import Callback from './components/Callback';
import ContadorV2 from './components/contadorv2'
import Modal from './components/VieweModal';
import {BrowserRouter as Router, Link,Route,Switch} from 'react-router-dom'
import Usuarios from './components/Usuarios'
import Usuario from './components/Usuario'
import Menu from './components/Menu'
import Home from './components/Home'
import Login from './components/Login'
import Admin from './components/Admin'
import Registro from './components/Registro'
function App() {
  return (
    <Fragment>
      <Router>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/Registro" component={Registro}></Route>
          <Route path="/Admin" component={Admin}></Route>
          <Route path="/Login" component={Login}></Route>
      
        </Switch>
      </Router>
   
    </Fragment>

  );
}

export default App;
