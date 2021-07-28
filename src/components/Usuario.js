import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import {ListGroup,Row,Col} from 'react-bootstrap'

const Usuario = () => {
  const { id } = useParams();
  const [usuario, setUsuario] = useState([]);
  const ConsultarUsuario = async () => {
    const respuesta = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const user = await respuesta.data;
    setUsuario(user);
  };
  useEffect(() => {
    ConsultarUsuario();
    console.log(usuario);
  }, []);
  return (
    <Fragment>
 
        <h2 className="text-center">Datos de Usuario</h2>
        <div className="container ml-5">
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
            <ListGroup className="col usuarioclas">
                <ListGroup.Item>Nombres: {usuario.name}</ListGroup.Item>
                <ListGroup.Item>username: {usuario.username}</ListGroup.Item>
                <ListGroup.Item>email: {usuario.email}</ListGroup.Item>
                <ListGroup.Item>phone: {usuario.phone}</ListGroup.Item>
                <ListGroup.Item>website {usuario.website}</ListGroup.Item>
            </ListGroup>
            </Col>
           
            <Col sm={2}></Col>
          </Row>
        </div>
     
    </Fragment>
  );
};
export default Usuario;
