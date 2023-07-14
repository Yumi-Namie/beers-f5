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
      <Card style={{ maxWidth: "25rem" }} key={beer._id}>
        <Row>
          <Col xs={4} className="d-flex justify-content-center">
            <Card.Img variant="top" src={beer.image_url} style={{ width: "auto", height: "9rem", objectFit: "cover" }} />
          </Col>
          <Col xs={8} className="d-flex align-items-center text-start">
            <Card.Body >
              <Card.Title>{beer.name}</Card.Title>
              <Card.Text className="text-secondary mt-2">{beer.tagline}</Card.Text>
              <Card.Text className="mt-1"> Create by: {beer.name}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Link>
  );
};

// export const BeerCard = ({ beer }: BeerCardProps) => {
//   return (
//     <Link to={`/beers/${beer._id}`}>
//       <Card style={{ width: "18rem" }} key={beer._id}>
//         <Card.Img variant="top" src={beer.image_url} />
//         <Card.Body>
//           <Card.Title>{beer.name}</Card.Title>
//           <Card.Text>{beer.tagline}</Card.Text>
//           <Card.Text>Contributed by: {beer.contributed_by}</Card.Text>
//         </Card.Body>
//       </Card>
//     </Link>
//   );
// };
