import "./App.scss";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

/* -------------------------------------------------------------------------- */
/*                           // importing component:                          */
/* -------------------------------------------------------------------------- */
// import home
import Home from "./components/Home/Home";
import { Contact } from "./pages/Contact/Contact";
import { Route, Switch } from "react-router-dom";
import Admin from "./pages/Admin/admin";
import CartContextProvider from "./components/CartContext/CartContext";
import Cart from "./pages/Cart/Cart";
import Header from "./components/Header/Header";



function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" >
          <Header />
              <Home />
            </Route>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
