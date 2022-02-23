import React, { useState, useContext, useEffect } from "react";
import "./Navbar.scss";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { testContext } from "../CartContext/CartContext";

export default function Navbar({ children }) {
  const [counter, setCounter] = useState(0);

  const { updateCartItems } = useContext(testContext);
// console.log(updateCartItems?.counter);

  return (
    // <CartItems.Provider value={{updateCartItems, setUpdateCartItems}} >
    <div className="sticky-top">
      {/* <header> */}
      <MDBNavbar expand="lg" light bgColor="white">
        <MDBContainer fluid>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <MDBNavbarNav right className="mb-2 mb-lg-0">
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current="page" to="/" >
                  <Link to="/" style={{color: 'inherit'}} >
                  Home
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>
                  <Link to='/about'>
                  About
                  </Link>
                  </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink >
                  <Link to="/contact">Contact</Link>
                  </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink >
                  <Link to='demo'>

                  Demo
                  </Link>
                  </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <div className="cartContainer">
              <Link
                to="/cart"
                className="position-realtive"
                style={{ position: "realtive !important" }}
              >
                <MDBIcon
                  fab
                  icon="opencart"
                  size="lg"
                  style={{ fontWeight: "900" }}
                  className="d-inline"
                />
                <span className="d-inline cartCounter">{updateCartItems?.length || 0}</span>
              </Link>
            </div>
            <Link to="/login" className="mx-5">
              <MDBBtn>LOGIN</MDBBtn>
            </Link>
          </div>
        </MDBContainer>
      </MDBNavbar>
      {/* </header> */}
    </div>
    // </CartItems.Provider>
  );
}
