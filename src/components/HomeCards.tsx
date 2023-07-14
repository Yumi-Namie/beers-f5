import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

interface HomeCardsProps {
  imgSrc: string;
  title: string;
  txt: string;
  linkTo: string;
}

export const HomeCard: React.FC<HomeCardsProps> = ({
  imgSrc,
  title,
  txt,
  linkTo,
}) => {
  return (
    <Link to={linkTo}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{txt}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};


