import "./App.scss";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { Route, Switch } from "react-router-dom";


/* -------------------------------------------------------------------------- */
/*                           // importing component:                          */
/* -------------------------------------------------------------------------- */
// import home
import Home from './pages/Home/Home'
import {Contact}  from "./pages/Contact/Contact";
import {About} from './pages/About/About';
import Admin from "./pages/Admin/admin";
import { Demo } from "./pages/Demo/Demo";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/demo' component={Demo} />
        <Route exact path='/admin' component={Admin} />
      </Switch>
    </div>
  );
}

export default App;