import React, { useEffect, useState } from "react";
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
  MDBIcon
} from "mdb-react-ui-kit";

// import data file
import data from "../../datas/Data.json";

export default function Home() {
  const [meals, setMeals] = useState(data.meals);

  const history = useHistory();



  return (
    <MDBRow className=" row-cols-1 row-cols-md-4 g-4">
  

      {meals.map((meal) => (
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src={meal.strMealThumb}
              alt="..."
              position="top"
              className="rounded-circle"
            />
            <MDBCardHeader>{meal.strArea}</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>{meal.strMeal}</MDBCardTitle>
              <MDBCardText>some text here</MDBCardText>
              {/* <MDBBtn className="sm">add to cart</MDBBtn> */}
            </MDBCardBody>
            <MDBCardFooter>
              <small className="text-muted">{meal.strCategory}</small>
              <MDBBtn floating style={{float: 'right'}} tag="a">
                <MDBIcon fas icon="cart-plus" />
              </MDBBtn>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      ))}
    </MDBRow>
  );
}
