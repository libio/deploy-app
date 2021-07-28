import React,{Fragment,useState} from 'react';
import Facebook from "./img/facebook.png";
import Google from "./img/google.png";
import {Card,Row, Col,Form,Button,Figure} from 'react-bootstrap'
const Login=() => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    return(
        <Fragment>
            <Card>
      <Card.Body>
        <Card.Title className="text-center">
        <Row className="mt-2">
            <Col md="3"></Col>
            <Col md="6" className="text-center">
              <Figure>
                <Figure.Image className="rounded-circle" src={Facebook}/>
                <Figure.Image className="rounded-circle ml-4" src={Google} />
              </Figure>
            </Col>
            <Col md="3"></Col>
          </Row>
        </Card.Title>
        <form >
          <div>
            <Row>
              <Col md="3"></Col>
              <Col md="6">
                <h5 className="text-center">Utiliza tu correo</h5>
                <Form.Group>
                  <Form.Control
                    name="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    
                  />
                
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                  />
                   
                </Form.Group>
              </Col>
              <Col md="3"></Col>
            </Row>
          </div>
          <Row>
            <Col md="3"></Col>
            <Col md="6">
              <Button
                block
                className="my-1"
                variant="info"
                type="submit"
              >
                Inicia sesión
              </Button>
            </Col>
            <Col md="3"></Col>
          </Row>

          <Row className="mt-2">
            <Col md="3"></Col>
            <Col md="6" className="text-center">
              <label>¿No tienes una cuenta? </label> 
              <a className="ml-1" href="#"><strong>Registrate gratis</strong></a> <br/> 
              <a href="#"><strong>¿Olvidaste tu contraseña?</strong></a> 
            </Col>
            <Col md="3"></Col>
          </Row>
        </form>
      </Card.Body>
    </Card>
        </Fragment>
    )
}
export default Login;