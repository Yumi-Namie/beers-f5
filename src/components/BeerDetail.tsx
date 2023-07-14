import { Card } from "react-bootstrap";
import { Beer } from "../components/BeerCard";

interface BeerDetailsProps {
    beer: Beer;
  }
  export const BeerCardDetail = ({ beer }: BeerDetailsProps) => {
    return (
        <Card style={{ width: "18rem" }} key={beer._id}>
          <Card.Img variant="top" src={beer.image_url} />
          <Card.Body>
            <Card.Title>{beer.name}</Card.Title>
            <Card.Text>{beer.tagline}</Card.Text>
            <Card.Text>{beer.attenuation_level}</Card.Text>
            <Card.Text>{beer.first_brewed}</Card.Text>
            <Card.Text>{beer.description}</Card.Text>
            <Card.Text>Contributed by: {beer.contributed_by}</Card.Text>
          </Card.Body>
        </Card>
    );
}
