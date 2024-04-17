import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import { AiFillLinkedin } from "react-icons/ai";
import alfonso from "../images/Alfonso.webp";
import facundo from "../images/Facundo Luque.webp";
import German from "../images/German.webp";
import Esteban from "../images/Esteban.webp";
import gym3 from "../images/gym3.jpg";

function Nosotros() {
  const cards = [
    { title: "Alfonso Wenk", img: `${alfonso}`, linkedin: "https://www.linkedin.com/in/alfonso-wenk/" },
    { title: "Facundo Luque", img: `${facundo}`, linkedin: "https://www.linkedin.com/in/facundo-luque-820a05245/" },
    { title: "German Valoy", img: `${German}`,  linkedin: "https://www.linkedin.com/in/augusto-germ%C3%A1n-valoy-a8b7183a/" },
    { title: "Esteban Frias", img: `${Esteban}`, linkedin: "404" },
  ];

  const handleLinkedInClick = (linkedin) => {
    window.open(linkedin, "_blank");
  };

  return (
    <div style={{ backgroundImage: `url(${gym3})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
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
