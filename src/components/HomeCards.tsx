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
    <Link to={linkTo} style={{ textDecoration: "none" }}>
      <Card style={{ width: "100%", border: "none" }}>
      <Card.Img
          variant="top"
          src={imgSrc}
          style={{
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            width: "100%",
            height: "180px", 
            objectFit: "cover", 
          }}
        />
        <Card.Body
          style={{
            paddingLeft: "20px",
            paddingTop: "2px",
            paddingBottom: "4px",
            textAlign: "left",
          }}
        >
          <Card.Title
            style={{
              fontSize: "30px",
              fontWeight: "350",
              letterSpacing: "-0.05rem",
              marginBottom: "0px",
              textAlign: "left",
            }}
          >
            {title}
          </Card.Title>
          <Card.Text
            style={{ color: "#9E9E9E", textAlign: "left", fontSize: "14px", lineHeight: "1.2"  }}
          >
            {txt}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};
