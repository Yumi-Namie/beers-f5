import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BeerCard, Beer } from "../components/BeerCard";
import axios from "axios";


export const AllBeersPage = () => {
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get<Beer[]>(
          "https://f5-beers-065cad3017be.herokuapp.com/beers"
        );
        setBeers(response.data);
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
