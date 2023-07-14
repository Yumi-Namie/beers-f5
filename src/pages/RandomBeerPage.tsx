import axios from "axios";
import { useState, useEffect } from "react";
import { Beer } from "../components/BeerCard";
import { Container, Row, Col } from "react-bootstrap";
import { BeerCardDetail } from "../components/BeerDetail";

export const RandomBeerPage = () => {

  const [beers, setBeers] = useState<Beer>();

  useEffect(() => {
    const fetchBeersDetails = async () => {
      try {
        const response = await axios.get<Beer>(
          `https://f5-beers-065cad3017be.herokuapp.com/beers/random`
        );
        setBeers(response.data);
      } catch (error) {
        console.error("Error fetching beer details:", error);
      }
    };

    fetchBeersDetails();
  },[]);

  return (
    <Container>
      <Row>
        <Col>
          {beers && <BeerCardDetail beer={beers} />}
        </Col>
      </Row>
    </Container>
  );

}
