import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Beer {
  id: number;
  image_url: string;
  name: string;
  tagline: string;
  contributed_by: string;
}

interface BeerCardProps {
  beer: Beer;
}

export const BeerCard = ({ beer }: BeerCardProps) => {
  return (
    <Link to={`/beers/${beer.id}`}>
      <Card style={{ width: "18rem" }} key={beer.id}>
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
