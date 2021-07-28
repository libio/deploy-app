import React, { Fragment, useState } from "react";
import { Button, Row, Col, Form, ListGroup,Modal } from "react-bootstrap";
const uniqId = require("uniqid")
const Contadorv2 = () => {
  const [numero, setNumero] = useState(0);

  const [numeros, setNumeros] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [temperatura, setTemperatura] = useState(0);
  const [clasename, setClasename] = useState({ name: "invisible" });
  const [modoedition,setModoedition]=useState(false);
  // use state para datos personales
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  // almacenamos datos en un array para luego mostrarlo en una lista
  const [data, setData] = useState([]);
  const [id,setId]=useState("");

  const [modalShow, setModalShow]=useState(false);

  // funciones para manejar el contador
  const Disminuir = () => {
    if (numero > 0) {
      setNumero(numero - 1);
    }
  };
  const Aumentar = () => {
    setNumero(numero + 1);
  };
  const Reset = () => {
    setNumero(0);
  };
  const Subir = () => {
    setTemperatura(temperatura + 1);
  };
  const Bajar = () => {
    setTemperatura(temperatura - 1);
  };

  const Registrar = (e) => {
    
    Limpiar();
    setClasename({ name: "visible" });
    e.preventDefault();
    const datos = {
      id:uniqId(),
      name: nombre,
      lastname: apellidos,
      ciudad: "Peru",
    };
    if (nombre != "" && apellidos != "") {
      setData([...data, datos]);
    }
    else{
      setModalShow(true);
    }
  };

  const deleteinfo=(id) => {
    const newarray=data.filter((item) =>item.id!==id);
    setData(newarray);
  }

  const Mostrar = () => {
    setClasename({ name: "visible" });
  };
  const Limpiar = () => {
    setNombre("");
    setApellidos("");
  };
  const ModoEdition=(item) => {
    setModoedition(true);
    setNombre(item.name);
    setApellidos(item.lastname);
    setId(item.id);
  }
  const Editardatos=(e)=> {
    Limpiar();
    setModoedition(false);
    e.preventDefault()
    const newarray=data.map(item=>item.id==id ? {id:id,name:nombre,lastname:apellidos}:item);
    setData(newarray);
  }
  const VieweModal=(props)=> {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" >
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Informacion de error</h4>
          <p>
            No se puede agregar un usuario, si los campos son vacios ud dede de ingresar esos campos.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  return (
    <Fragment>
{/*       <h1 className="text-center mt-3">Contador usando useState</h1>
      <div className="text-center">
        <h2>Valor de contador: {numero}</h2>
        <Button onClick={Disminuir} variant="danger" className="mr-2">
          Disminuir
        </Button>
        <Button onClick={Reset} variant="primary" className="ml-2">
          Reset
        </Button>
        <Button onClick={Aumentar} variant="success" className="ml-2">
          Aumentar
        </Button>
      </div>
      <div className="text-center mt-5">
        <h2>List key map</h2>
        <ul>
          {numeros.map((items, index) => (
            <li key={index}>{items}</li>
          ))}
        </ul>
      </div>
      <div className="text-center mt-5">
        <h2>La temperatura es: {temperatura}</h2>
        <p>{temperatura > 21 ? "Hace Calor" : "Hace frio"}</p>
        <Button onClick={Bajar} variant="danger">
          Disminuir temperatura
        </Button>
        <Button onClick={Subir} variant="success" className="ml-1">
          Aumentar temperatura
        </Button>
      </div> */}
      <div>
      <VieweModal show={modalShow} onHide={() => setModalShow(false)} />
        <Row>
          <Col className="ml-2">
            <h1>Lista de nombre añadidos</h1>
            <div className="">
              <Row className={clasename.name}>
                <Col className="ml-2 mr-2 mt-2">
                  <div className="divfater">
                    <ListGroup variant="flush">
                      {data.map((item, index) => (
                        <ListGroup.Item key={index}>
                          {item.name} {item.lastname}{" "}
                         <div className="micontainer">
                            <Button className="MiButton" variant="danger" onClick={()=>deleteinfo(item.id)}>
                              Eliminar
                            </Button>
                            <Button className="MiButton" variant="success" onClick={()=>ModoEdition(item)}>
                              Editar
                            </Button>
                           
                         </div>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>

                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className="mr-2">
            <h1>Formulario de registro</h1>
            <Form
              onSubmit={modoedition?Editardatos:Registrar}
            >
              <Form.Group class="aling-self-center text-center">
                <div>
                  <Row>
                    <Col className="ml-5 mr-5">
                      <Form.Control
                        type="text"
                        name="Nombres"
                        placeholder="Ingrese su nombre"
                        className="col-sm my-2"
                        value={nombre}
                        onChange={(e) => {
                          setNombre(e.target.value);
                        }}
                      />
                      <Form.Control
                        type="text"
                        name="Apellidos"
                        placeholder="Ingres sus apellidos"
                        value={apellidos}
                        onChange={(e) => {
                          setApellidos(e.target.value);
                        }}
                      ></Form.Control>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col className="ml-5 mr-5 mt-2">
                      <Button
                        id="Consultar"
                        className="my-1"
                        type="submit"
                        variant="danger"
                        block  
                     >
                       {modoedition?"Guardar":"Registrar"}
                    </Button>
                        
                      
                    </Col>
                  </Row>
                </div>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};
export default Contadorv2;
