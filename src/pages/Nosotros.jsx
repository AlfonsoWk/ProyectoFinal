import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import { AiFillLinkedin } from "react-icons/ai";

function Nosotros() {
  const cards = [
    { title: "Alfonso Wenk", img: "src/images/Alfonso.webp", linkedin: "https://www.linkedin.com/in/alfonso-wenk/" },
    { title: "Facundo Luque", img: "src/images/Facundo Luque.webp", linkedin: "https://www.linkedin.com/in/facundo-luque-820a05245/" },
    { title: "German Valoy", img: "src/images/German.webp",  linkedin: "https://www.linkedin.com/in/augusto-germ%C3%A1n-valoy-a8b7183a/" },
    { title: "Esteban Frias", img: "src/images/Esteban.webp", linkedin: "404" },
  ];

  const handleLinkedInClick = (linkedin) => {
    window.open(linkedin, "_blank");
  };

  return (
    <div style={{ backgroundImage: `url('src/images/gym3.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <NavBar />
      <Container>
        <h1 className="mt-5 mb-5 bg-black text-light text-center p-3 rounded">
          Nosotros
        </h1>
        <Row xs={2} md={2} lg={4} className="g-3 mb-5">
          {cards.map((card, index) => (
            <Col key={index}>
              <Card className="bg-black text-light" style={{ cursor: 'pointer' }} onClick={() => handleLinkedInClick(card.linkedin)}>
                <Card.Img className="h-100" variant="top" src={card.img} />
                <Card.Body>
                  <Card.Title className="text-center">{card.title}</Card.Title>
                  <div className="text-center">
                    <AiFillLinkedin style={{ fontSize: '2em' }} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Nosotros;
