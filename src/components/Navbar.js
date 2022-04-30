import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

function Navbar() {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Products" activestyle>
            Products
          </NavLink>
          <NavLink to="/About" activestyle>
            About Us
          </NavLink>
          <NavLink to="/Contact" activestyle>
            Contact Us
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;
