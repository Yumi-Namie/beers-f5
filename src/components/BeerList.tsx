import { Container, Row, Col } from "react-bootstrap";
import { Beer, BeerCard } from "./BeerCard";

interface BeerListProps {
  beers: Beer[];
}

export const BeerList = ({ beers }: BeerListProps) => {
    return (
      <Container>
        <Row>
          {beers.map((beer) => (
            <Col sm={2} key={beer._id}>
              <BeerCard beer={beer} />
            </Col>
          ))}
        </Row>
      </Container>
    );
};
