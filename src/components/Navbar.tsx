import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const NavBarGlobal = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container fluid="xxl">
          <Link to="/">
            <img
              alt=""
              src="./vite.svg"
              width="100"
              height="30"
              className="d-inline-block align-top"
            />
          </Link>
        </Container>
      </Navbar>
    </>
  );
};
