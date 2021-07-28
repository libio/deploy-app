import React,{useState} from 'react';
import {Button,Row,Col, Container} from 'react-bootstrap';


const Contador=()=>{

    const [numero,setNumero]=useState(0);
    const [nro,setNro] = useState(1);

    const [array,setArray] = useState([]);
    const Aumentar=()=>{
        
        setNumero(numero+1);
    }
    const Agregar=()=>{
        setNro(nro+1);
        setArray(
            [
                ...array,nro
            ]
            
        );
    }
    const Reset=()=>{
        setNro(1);
        setArray([]);
    }
    const Quitar=()=>{
        setArray([
            ...array,nro
        ]);
    }

return(
    <div className="mt-5">
            <Container>
                <Row className="justify-content-md-center">
                    <Col ></Col>
                    <Col xs={6} >
                        <h2>Nro de click {numero}</h2>
                    <center> <Button variant="danger" onClick={Aumentar}>Aumentar</Button></center>
                    </Col>
                    <Col >

                    </Col>
                </Row>
            </Container>
            <Container fluid="md">
                
                <Row>
                    <Col></Col>
                    <Col>
                    <h3>Recorriendo mi array</h3>
                        {
                            array.map((item,index) =>
                            <p key={index} > {item} - {index}</p>)
                        }
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col><Button onClick={Quitar} variant="primary">Quitar</Button></Col>
                    <Col><Button onClick={Reset} variant="danger">reset</Button></Col>
                    <Col><Button onClick={Agregar} variant="info">Agregar</Button></Col>
                </Row>
               
            </Container>
          
            
     
        
        
    </div>
    
);

}
export default Contador;