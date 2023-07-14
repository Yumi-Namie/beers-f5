import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BeerCard } from "../components/BeerCard";
import { Beer } from "../components/BeerCard";

export const AllBeersPage = () => {
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await fetch(
          "https://f5-beers-065cad3017be.herokuapp.com/beers"
        );
        const data = (await response.json()) as Beer[];
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
          <Col sm={2} key={beer.id}>
            <BeerCard beer={beer} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
