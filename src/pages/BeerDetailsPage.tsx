import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { BeerCardDetail } from "../components/BeerDetail";
import { Beer } from "../components/BeerCard";
import { fetchBeerDetails } from "../components/FetchBeerDetails";
import NotFoundPage from "./NotFoundPage";

export const BeerDetailsPage = () => {
  const { beerId } = useParams();

  const [beer, setBeer] = useState<Beer | null>(null);

  useEffect(() => {
    const getBeerDetails = async () => {
      if (beerId) {
        const beerDetails = await fetchBeerDetails(beerId);
        setBeer(beerDetails);
      }
    };

    getBeerDetails();
  }, [beerId]);

  if (!beer) {
    return <NotFoundPage />;
  }

  return (
    <Container>
      <Row>
        <Col>
          {beer && <BeerCardDetail beer={beer} />}
        </Col>
      </Row>
    </Container>
  );
};


