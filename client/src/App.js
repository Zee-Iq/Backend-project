import "./App.scss";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

/* -------------------------------------------------------------------------- */
/*                           // importing component:                          */
/* -------------------------------------------------------------------------- */
// import home
import Home from './components/Home/Home'
import {Contact}  from "./pages/Contact/Contact";
import { Route, Switch } from "react-router-dom";
import Admin from "./pages/Admin/admin";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/admin' component={Admin} />
      </Switch>
    </div>
  );
}

export default App;