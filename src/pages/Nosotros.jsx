import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";

function Nosotros() {
  const cards = [
    { title: "Alfonso Wenk", img: "src/images/Alfonso.webp" },
    { title: "Facundo Luque", img: "src/images/Facundo Luque.webp" },
    { title: "German Valoy", img: "src/images/German.webp" },
    { title: "Esteban Frias", img: "src/images/Esteban.webp" },
  ];

  return (
    <div>
      <NavBar />
      <Container>
        <h1 className="mt-5 mb-5 bg-dark text-light text-center p-3 rounded">
          Nosotros
        </h1>
        <Row xs={2} md={2} lg={4} className="g-3 mb-5">
          {cards.map((card) => (
            <Col key={card}>
              <Card className="bg-dark text-light">
                <Card.Img className="h-100" variant="top" src={card.img} />
                <Card.Body>
                  <Card.Title className="text-center">{card.title}</Card.Title>
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
