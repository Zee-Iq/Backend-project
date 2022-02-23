import React, { useContext } from "react";
import "./cart.scss";
import { testContext } from "../../components/CartContext/CartContext";
import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import Link from 'react-router-dom/Link'


export default function Cart() {
  const { updateCartItems } = useContext(testContext);

  return (
    <div className="cart my-5 ">
      <h1 className="display-1 text-center">
        Cart <MDBIcon icon="shopping-cart" />
      </h1>

      {updateCartItems?.items.length < 1 ? (
        <div className="w-100 text-center mt-5">
          <h4>Your Cart is empty</h4>
          <Link to="/">
            <MDBBtn rounded className="mx-2" color="info">
              Continue Shopping
            </MDBBtn>
          </Link>
        </div>
      ) : (
        updateCartItems?.items.map((item) => (
          <>
            <div className="cartImg ">
              <img src={item.strMealThumb} />
            </div>
            <div key={item.id} className="cartItems mx-5">
              <p>
                <b>Category:</b> {item.strCategory}
              </p>
              <p>
                <b>Meal Name:</b> {item.strMeal}
              </p>
            </div>

            <hr />
          </>
        ))
      )}
    </div>
  );
}
