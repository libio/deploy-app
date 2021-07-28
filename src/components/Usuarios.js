import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom'

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  const ConsultarUsuarios = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = await res.data;
    setUsuarios(users);
    users.map((item)=>(
        console.log(item)
    ))
  };

  useEffect(()=>{
      ConsultarUsuarios()
  },[])
  return (
    <Fragment>
      <div className="text-center mt-3">
        <h1>Lista de Usuarios</h1>
        {
            usuarios.map((item)=>(
                <div className="midiv">
                    <Link to={`/usuario/${item.id}`}>{item.name}</Link>
                </div>
            )
            )
        }
      </div>
    </Fragment>
  );
};
export default Usuarios;
