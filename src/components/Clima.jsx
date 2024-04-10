import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "../css/Clima.css"

import consultarClima from "../helpers/consultarClima"

const Clima = () => {

  

  const handleSubmit = (e) =>{
    e.preventDefault()
   consultarClima()
   
  }

   
  return (

    <>
    
    <Form onSubmit={handleSubmit}>
      

     
      <Button variant="outline-light" type="submit">
        Consultar clima
      </Button>
    </Form> 
    
    
   
    <div id='infoClima'>

    </div>
    
    </>
  )
}

export default Clima