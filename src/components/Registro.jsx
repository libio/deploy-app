import React, { useState } from "react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import Logo from "./img/man.png";
import {
  Button,
  Card,
  Form,
  Row,
  Col,
  Jumbotron,
  Figure,
} from "react-bootstrap";

const Registro = () => {
  const [registro, setRegistro] = useState([]);
  const { register, errors, handleSubmit } = useForm({});
  const handleChange = (event) => {
    setRegistro({
      ...registro,
      [event.target.name]: event.target.value,
    });
  };
  
  return (
    <Fragment>
      <Card>
        <Card.Body>
          <Jumbotron>
            <Card.Title className="text-center">
              <Figure>
                <Figure.Image className="rounded-circle" src={Logo} />
              </Figure>
            </Card.Title>
            <form onSubmit={handleSubmit()}>
              <div>
                <Row>
                  <Col md={3}></Col>
                  <Col md={6}>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        name="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                        ref={register({
                          required: "Ingrese su e-mail",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Direccion de e-mail invalido",
                          },
                        })}
                      />
                      {errors.email && (
                        <span className="text-danger text-small d-block mb-2">
                          {errors.email.message}
                        </span>
                      )}
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        ref={register({
                          required: {
                            value: true,
                            message: "Campo requerido",
                          },
                        })}
                      />
                      {errors.password && (
                        <span className="text-danger text-small d-block mb-2">
                          {errors.password.message}
                        </span>
                      )}
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword2">
                      <Form.Label>Confirmar Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password_repeat"
                        placeholder="Password"
                        onChange={handleChange}
                        ref={register({
                          validate: (value) =>
                            value === registro.password ||
                            "La contraseña no coincide",
                        })}
                      />
                      {errors.password_repeat && (
                        <span className="text-danger text-small d-block mb-2">
                          {errors.password_repeat.message}
                        </span>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={3}></Col>
                </Row>
              </div>
              <Row>
                <Col md="3"></Col>
                <Col md="6">
                  <Button block className="my-1" variant="dark" type="submit">
                    Registrarse
                  </Button>
                </Col>
                <Col md="3"></Col>
              </Row>
            </form>
          </Jumbotron>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default Registro;
