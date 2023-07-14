import { Card } from "react-bootstrap";
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
    <Link to={`/beers/${beer._id}`}>
      <Card style={{ width: "18rem" }} key={beer._id}>
        <Card.Img variant="top" src={beer.image_url} />
        <Card.Body>
          <Card.Title>{beer.name}</Card.Title>
          <Card.Text>{beer.tagline}</Card.Text>
          <Card.Text>Contributed by: {beer.contributed_by}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};
