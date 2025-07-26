import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLink = styled(Link)`
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #ff8c00;
  }
`;

function Footer() {
  return (
    <footer>
      <NavLink to="/">Home</NavLink> | <NavLink to="/basket">Basket</NavLink>
    </footer>
  );
}

export default Footer;
