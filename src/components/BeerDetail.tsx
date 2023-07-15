import { Card, Col, Container, Row } from "react-bootstrap";
import { Beer } from "../components/BeerCard";
interface BeerDetailsProps {
    beer: Beer;
  }
export const BeerCardDetail = ({ beer }: BeerDetailsProps) => {
  return (
      <Card  key={beer._id} className="d-flex justify-content-center align-items-center">
        <Container className="beer-card-container">
          <Row>
            <Col >
              <Card.Img variant="top" src={beer.image_url} style={{ width: "4rem", height: "auto"}} />
              <Card.Body>
                <Row >
                  <Col xs={7} className="text-start">
                    <Card.Title style={{ fontSize: "1.5rem" }}>{beer.name}</Card.Title>
                    <Card.Text className="text-secondary" style={{ fontSize: ".9rem" }} >{beer.tagline}</Card.Text>
                  </Col>
                  <Col className="text-end">
                    <Card.Text className="text-secondary m-0" style={{ fontSize: "1.5rem"}}>{beer.attenuation_level}</Card.Text>
                    <Card.Text style={{ fontSize: ".7rem" }}><strong>{beer.first_brewed}</strong></Card.Text>
                  </Col>
                </Row>
                <Col>
                <Card.Text className="text-start py-2" style={{fontSize: ".9rem", lineHeight: "1", fontWeight:"600"}}>{beer.description}</Card.Text>
                <Card.Text className="text-start" style={{ fontSize: ".8rem" }}>{beer.contributed_by}</Card.Text>
                </Col>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Card>
  );
}