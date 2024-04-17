import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import "../css/productos.css";
import proteina1 from "../images/proteina1.webp";
import proteina2 from "../images/proteina2.webp";
import principal from "../images/Principal.jpg";
import vasos1 from "../images/vasos1.webp";
import vasos2 from "../images/vasos2.webp";
import aminoacidos1 from "../images/aminoacidos1.webp";
import aminoacidos2 from "../images/aminoacidos2.webp";
import energia1 from "../images/energia1.webp";
import energia2 from "../images/energia2.webp";

function Productos() {
  const variant = "black";

  const tarjetas = [
    {
      id: 1,
      title: "Whey Protein",
      categoria: "Categoria: Proteina",
      precio: "Precio: $15600",
      _img: `${proteina1}`,
      get img() {
        return this._img;
      },
      set img(value) {
        this._img = value;
      },
    },
    {
      id: 2,
      title: "Colageno Sport",
      categoria: "Categoria: Proteina",
      precio: "Precio: $17800",
      img: `${proteina2}`,
    },
    {
      id: 3,
      title: "Shaker ENA",
      categoria: "Categoria: Shakers",
      precio: "Precio: $5200",
      img: `${vasos1}`,
    },
    {
      id: 4,
      title: "Shaker Premiun",
      categoria: "Categoria: Shakers",
      precio: "Precio: $6700",
      img: `${vasos2}`,
    },
    {
      id: 5,
      title: "Glutamine",
      categoria: "Categoria: Aminoacidos",
      precio: "Precio: $12000",
      img: `${aminoacidos1}`,
    },
    {
      id: 6,
      title: "Truemade",
      categoria: "Categoria: Aminoacidos",
      precio: "Precio: $11500",
      img: `${aminoacidos2}`,
    },
    {
      id: 7,
      title: "Enargy Gel+",
      categoria: "Categoria: Energia",
      precio: "Precio: $14400",
      img: `${energia1}`,
    },
    {
      id: 8,
      title: "Multi Vitamin",
      categoria: "Categoria: Energia",
      precio: "Precio: $16900",
      img: `${energia2}`,
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `${principal}`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <NavBar />
      <Container className="px-4">
        <h1 className="mt-3 mb-5 w-100 p-3 bg-black text-white rounded text-center border">
          Nuestros productos
        </h1>
        <Row xs={1} sm={3} md={4} className="g-5 mb-5">
          {tarjetas.map((tarjeta) => (
            <Col key={tarjeta.id} id="card">
              <Link
                to={tarjeta.link || "/404"}
                style={{ textDecoration: "none", position: "relative" }}
              >
                <Card
                  className="mb-2 border-0"
                  bg={variant.toLowerCase()}
                  key={variant}
                  text={variant.toLowerCase() === "light" ? "black" : "white"}
                >
                  <Card.Img variant="top" src={tarjeta.img} />
                  <Card.Body>
                    <Card.Title
                      className="text-no-decoration"
                      style={{ textAlign: "center" }}
                    >
                      {tarjeta.title}
                    </Card.Title>
                    <Card.Text
                      className="text-no-decoration mb-1"
                      style={{ textAlign: "center" }}
                    >
                      {tarjeta.categoria}
                    </Card.Text>
                    <Card.Text
                      className="text-no-decoration"
                      style={{ textAlign: "center" }}
                    >
                      {tarjeta.precio}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default Productos;
