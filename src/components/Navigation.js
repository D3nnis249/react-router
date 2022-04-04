import styled from "styled-components";
import { Link } from "react-router-dom";
import "./App.css";

export default function Navigation() {
  return (
    <NavStyled>
      <Link className="Button" to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link className="Button" to="/about">
        About
      </Link>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  display: flex;
  gap: 1em;
  justify-content: center;
  background-color: lightblue;
  padding: 0.2em;

  button {
    font-size: 1rem;
    padding: 0.2em 2em;
  }
`;
