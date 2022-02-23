import "./App.scss";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { useState } from "react";
/* -------------------------------------------------------------------------- */
/*                           // importing component:                          */
/* -------------------------------------------------------------------------- */
// import home
import Home from "./pages/Home/Home";
import { Contact } from "./pages/Contact/Contact";
import { About } from "./pages/About/About";
import LogIn from "./components/RegisterLogin/login";
import Register from "./components/RegisterLogin/register";
import Cart from "./pages/Cart/Cart";
import { Demo } from "./pages/Demo/Demo";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [username, setUsername] = useState();

  const getUsername = (username) => {
    setUsername(username);
  };

  console.log("Username FROM APP is ", username);

  return (
    <>
      <Navbar username={username} />
      <div className="App">
        <Switch>
          {/*  <Register />
         <LogIn /> */}
          {/* <Route exact path='/' component={Home} /> */}
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/about" component={About} />
          <Route exact path="/register" component={Register} />
          <Route
            exact
            path="/login"
            // component={LogIn}
            render={() => <LogIn toGetUsernam={getUsername} />}
          />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/demo" component={Demo} />
          {/* <Route exact path='/admin' component={Admin} /> */}
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </div>
    </>

  );
}

export default App;
