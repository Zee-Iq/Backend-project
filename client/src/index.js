import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { BrowserRouter } from "react-router-dom";
// import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import CartContextProvider from "./components/CartContext/CartContext";
import LoginContextProvider from "./components/LoginContext/LoginContext";
// import Navbar from "./components/Navbar/Navbar";

ReactDOM.render(
  <LoginContextProvider>
  <CartContextProvider>
    <BrowserRouter>
      {/* <Navbar /> */}

      {/* <Header /> */}
      <App />
      <Footer />
    </BrowserRouter>
  </CartContextProvider>
  </LoginContextProvider>,
  document.getElementById("root")
);
