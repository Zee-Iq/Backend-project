import "./Home.scss";
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
  MDBIcon,
} from "mdb-react-ui-kit";

// import data file
// import data from "../../datas/Data.json";

export default function Home() {
  const [meals, setMeals] = useState();
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
              <MDBCardHeader>{meal.strArea}</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>{meal.strMeal}</MDBCardTitle>
                <MDBCardText>some text here</MDBCardText>
                {/* <MDBBtn className="sm">add to cart</MDBBtn> */}
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">{meal.strCategory}</small>
                <MDBBtn floating style={{ float: "right" }} tag="a">
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
