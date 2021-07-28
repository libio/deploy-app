import React, { Fragment ,useState,useEffect} from 'react';
import {Button} from 'react-bootstrap';
const Callback=()=>{

    const [info,setInfo] = useState([]);
    useEffect(()=>{
        fectdatos();
    })

    const fectdatos = async()=> {
        try{
            //https://api.reniec.cloud/dni/48106237
            const response = await fetch('https://dniruc.apisperu.com/api/v1/dni/48106237?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImxpYmlvQHlvcG1haWwuY29tIn0.-Thp2XWziFJ8i7vCqtO_hTbMdGBff8uT1edoDJAn5SM');

            const json = await response.json();

            setInfo(json);
        }
        catch(errors){{
            console.log("Error en conexion");
        }}
    }

    const Data =()=>{
        console.log(info.nombres);
    }
    return(
        <Fragment>
            <h1>Llamando a fetch con async await</h1>
            <Button variant="info" onClick={Data}>Consular</Button>
        </Fragment>

    );

}
export default Callback;