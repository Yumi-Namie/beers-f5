import axios from "axios";
import { useState, useEffect } from "react";
import { Beer } from "../components/BeerCard";
import { useParams } from "react-router-dom";
import { Container, Row, Col} from "react-bootstrap";
import { BeerCardDetail } from "../components/BeerDetail";



export const BeerDetailsPage = () => {

  const { beerId } = useParams<{ beerId: string }>();

    const [beers, setBeers] = useState<Beer>();
  
    useEffect(() => {
      const fetchBeersDetails = async () => {
        try {
          const response = await axios.get<Beer>(
            `https://f5-beers-065cad3017be.herokuapp.com/beers/${beerId}`
          );
          setBeers(response.data);
        } catch (error) {
          console.error("Error fetching beer details:", error);
        }
      };
  
      fetchBeersDetails();
    },[beerId]);
  

    return (
      <Container>
        <Row>
          <Col>
            {beers && <BeerCardDetail beer={beers} />}
          </Col>
        </Row>
      </Container>
    );
    // return{
      
    //   <>
    //   <h2>
    //   {beer.name}
    //   </h2></>


    // }


    // return (
    //   <Container>
    //     <Row>
    //       {beers.map((beer: any) => (
    //         <Col sm={2} key={beer.id}>
    //           <BeerCardDetail beer={beer} />
    //         </Col>
    //       ))}
    //     </Row>
    //   </Container>
    // );
}
