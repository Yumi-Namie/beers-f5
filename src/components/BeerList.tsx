import { Container, Row, Col } from "react-bootstrap";
import { Beer, BeerCard } from "./BeerCard";

interface BeerListProps {
  beers: Beer[];
}

export const BeerList = ({ beers }: BeerListProps) => {
   
      return (
        <Container>
          <Row>
            <Col>
              {beers.map((beer: Beer) => (
                <BeerCard beer={beer} key={beer._id} />
              ))}
            </Col>
          </Row>
        </Container>
      );
    };

