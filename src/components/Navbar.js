import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/Products" activestyle>
            Products
          </NavLink>
          <NavLink to="/about" activestyle>
            About Us
          </NavLink>
          <NavLink to="/contact" activestyle>
            Contact Us
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;
