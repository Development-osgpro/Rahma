import Homepage from "./Pages/Homepage";
import Contact from "./Pages/Contact";
import Ramadan from "./Pages/Ramadan";

import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/homepage" component={Homepage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/ramadan" component={Ramadan} />
      </Router>
    </div>
  );
}

export default App;
