import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export interface Beer {
  _id: string;
  image_url: string;
  name: string;
  tagline: string;
  contributed_by: string;
  first_brewed: string;
  attenuation_level: number;
  description: string;
}

interface BeerCardProps {
  beer: Beer;
}

export const BeerCard = ({ beer }: BeerCardProps) => {
  return (
    <Link className="beer-card" to={`/beers/${beer._id}`}>
      <Card className="w-100" key={beer._id}>
        <Row className="beer-card-row d-flex justify-content-center align-items-center">
          <Col xs={3} className="p-0" >
            <Card.Img src={beer.image_url} style={{ width: "auto", height: "6rem", objectFit: "cover" }} />
          </Col>
          <Col xs={8} className=" d-flex ml-auto p-0">
            <Card.Body className="text-start p-0 w-100">
              <Card.Title style={{ fontSize: "1.2rem" }} >{beer.name}</Card.Title>
              <Card.Text className="text-secondary mb-1" style={{ fontSize: ".9rem" }}>{beer.tagline}</Card.Text>
              <Card.Text className="mt-1" style={{ fontSize: ".6rem" }}> <strong>Create by:</strong> {beer.name}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Link>
  );
};