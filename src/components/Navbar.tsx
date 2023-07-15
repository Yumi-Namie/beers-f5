import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export const NavBarGlobal = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary" style={{ padding: "0px" }}>
        <Container
          fluid="xxl"
          style={{
            backgroundColor: "#3DC4FC",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "50px",
            padding: "0px",
          }}
        >
          <Link to="/">
            <i
              className="bi bi-house-door-fill"
              style={{ color: "#FFF", fontSize: "30px" }}
            ></i>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};
