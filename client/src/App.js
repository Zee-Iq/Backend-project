import "./App.scss";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
/* -------------------------------------------------------------------------- */
/*                           // importing component:                          */
/* -------------------------------------------------------------------------- */
// import home
import Home from './pages/Home/Home'
import {Contact}  from "./pages/Contact/Contact";
import {About} from './pages/About/About';
import LogIn from "./components/RegisterLogin/login";
import Register from "./components/RegisterLogin/register";
import Cart from "./pages/Cart/Cart";
import {Demo} from './pages/Demo/Demo'
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
     
      <Switch>
        
        {/*  <Register />
         <LogIn /> */}
        {/* <Route exact path='/' component={Home} /> */}
        <Route exact path="/" >
          <Header />
              <Home />
            </Route>
        <Route exact path='/about' component={About} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={LogIn} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/demo' component={Demo} />      
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
