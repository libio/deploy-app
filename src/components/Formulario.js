import React, { Fragment, useState } from "react";
import { Form, Button, Row, Col,Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

//Optional include of the default css styles
import ReactWeather, { useOpenWeather } from "react-open-weather";

const Formulario = () => {

  const [count,setCount]=useState(0);
  const [info, setInfo] = useState({
    estado: false,
  });
  const {name,setName}=useState({on: false});
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "a48262a74b1ee94cfe352c3d9830d6c7",
    lat: "-14.024226981186487",
    lon: "-71.45514256068651",
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });
  const { register, errors, handleSubmit } = useForm();

  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });

  const handlechangue = (event) => {
    // console.log(event.target.value);
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };
  const handlechangue2 = (event) => {
    //console.log(event.target.value);
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const EnviarDatos = (event) => {
    event.preventDefault();
    console.log(
      `los datos de son: email: ${datos.email} y password: ${datos.password}`
    );
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  const cambiar=()=>{
    setName(prevState => ({
      name: !prevState.name
    }));
  }
const Mostrar=()=>{
  console.log(info.estado)
}
const handleClick=()=> {
  setInfo(prevState => ({
    estado: !prevState.estado
  }));
}
  return (
    <Fragment>
      <Row className="mt-5">
        <Col></Col>
        <Col>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                onChange={handlechangue}
                ref={register({
                  required: {
                    value: true,
                    message: "Campo es requerido",
                  },
                })}
              />
              {errors.email && (
                <span className="text-danger text-small d-block mb-2">
                  {errors.email.message}
                </span>
              )}
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                onChange={handlechangue2}
                ref={register({
                  required: {
                    value: true,
                    message: "Campo es requerido",
                  },
                  minLength: {
                    value: 6,
                    message: "Tiene que ser mas de 6 caracteres",
                  },
                })}
              />
              {errors.password && (
                <span className="text-danger text-small d-block mb-2">
                  {errors.password.message}
                </span>
              )}
            </Form.Group>
            <Button className="btn" variant="danger" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
      <div>
        <Container className="mt-5 text-center">
        <Row>
          <p><h1>{count}</h1></p>
          <Button onClick={handleClick}  variant="success" block>
            {info.estado ?"OFF":"ON" }
          </Button>
        </Row>
        </Container>
        
      </div>
      <div>
        <h1>El Clima de hoy es</h1>
      </div>
    </Fragment>
  );
};
export default Formulario;
