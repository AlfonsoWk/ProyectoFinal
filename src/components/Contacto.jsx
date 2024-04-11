import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleOnChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (formValues.name === '' || formValues.email === '' || formValues.message === '') {
      alert('Por favor, complete todos los campos');
      return;
    }
  }

  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <div className="border border-3 rounded border-primary"></div>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-1">
                <h1 className="fw-bold mb-4 text-uppercase">Contacto</h1>
                <Form onSubmit={handleOnSubmit} className="mb-3">
                  <Form.Group className="mb-3" controlId="formFullName">
                      <Form.Label className="text-center">
                        Nombre y Apellido
                      </Form.Label>
                      <Form.Control 
                      type="text" 
                      placeholder="Marcos Perez"
                      name='name'
                      value={formValues.name}
                      onChange={handleOnChange}
                       />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">
                      Correo Electronico
                    </Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="hola123@gmail.com" 
                    name='email'
                    value={formValues.email}
                    onChange={handleOnChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                     <Form.Label>Ingrese su consulta</Form.Label>
                     <Form.Control 
                     rows={3}
                     as="textarea"
                     type="text" 
                     name='message' 
                     placeholder="Escriba su consulta"
                     value={formValues.message}
                     onChange={handleOnChange} 
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                      Enviar
                    </Button>
                  </div>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;