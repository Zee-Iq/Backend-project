import "./Home.scss";
import React, { useEffect, useState, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
  MDBIcon,
  MDBCardOverlay,
} from "mdb-react-ui-kit";

import { testContext } from "../../components/CartContext/CartContext";
// import data file
// import data from "../../datas/Data.json";

export default function Home() {
  const { setUpdateCartItems, updateCartItems } = useContext(testContext);

  // importing context

  const [meals, setMeals] = useState();

  const [cartItems, setCartItems] = useState(0);
  const [cartContent, setCartContent] = useState([]);
  // const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      // NOTE here we need to put the link of the page that has the meals list, ⁡⁢⁣⁢𝗡𝗢𝗧⁡ the file who has the meal list X_X
      const response = await axios.get("/meals/list");

      // console.log('response is', response)

      setMeals([...response.data]);
    };

    getData();
  }, []);
  useEffect(() => {
    if (cartItems >= 1)
      setUpdateCartItems([...updateCartItems, ...cartContent]);
  }, [cartItems]);

  const cartHandler = (e) => {
    setCartItems(cartItems + 1);
    setCartContent([e]);
  };

  // console.log(cartContent);

  return (
    <>
      <div className="topSeller">
        <h1>Top seller</h1>
      </div>
      <MDBRow className=" row-cols-1 row-cols-md-4 g-4">
        {meals?.map((meal, idx) => (
          <MDBCol key={idx}>
            <MDBCard className="h-100">
              <MDBCardImage
                src={meal?.strMealThumb}
                alt="..."
                position="top"
                className="rounded-circle"
              />
              <MDBCardOverlay>
                <MDBCardTitle className="prices">{meal.price}€</MDBCardTitle>
              </MDBCardOverlay>
              <MDBCardHeader>{meal.strArea}</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>{meal.strMeal}</MDBCardTitle>
                <MDBCardText>some text here</MDBCardText>
                {/* <MDBBtn className="sm">add to cart</MDBBtn> */}
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">{meal.strCategory}</small>
                <MDBBtn
                  floating
                  style={{ float: "right" }}
                  tag="a"
                  onClick={() => cartHandler(meal)}
                >
                  <MDBIcon fas icon="cart-plus" size="lg" />
                </MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </>
  );
}
