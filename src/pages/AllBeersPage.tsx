import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BeerCard } from "../components/BeerCard";

export const AllBeersPage = () => {
  const [beers, setBeers] = useState<any[]>([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await fetch(
          "https://f5-beers-065cad3017be.herokuapp.com/beers"
        );
        const data = (await response.json()) as any;
        setBeers(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBeers();
  }, []);

  return (
    <Container>
      <Row>
        {beers.map((beer: any) => (
          <Col md={4} key={beer.id}>
            <BeerCard beer={beer} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
