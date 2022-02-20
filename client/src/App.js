import "./App.scss";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

/* -------------------------------------------------------------------------- */
/*                           // importing component:                          */
/* -------------------------------------------------------------------------- */
// import home
import Home from './components/Home/Home'
import { Contact } from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Contact />
      <Home />
    </div>
  );
}

export default App;