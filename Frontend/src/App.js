import Homepage from "./Pages/Homepage";
import OurWork from './Pages/OurWork'
import ProgramsPage from "./Pages/ProgramsPage";
import OurWorkAllPages from "./Pages/OurWorkAllPages";

import Contact from "./Pages/ContactPage";
import RamadanPage from "./Pages/RamadanPage";

import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/homepage" component={Homepage} />
        <Route path="/our_work" component={OurWork} />
        <Route exact path="/programs" component={ProgramsPage} />
        <Route exact path="/all_our_work" component={OurWorkAllPages} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/ramadan" component={RamadanPage} />
      </Router>
    </div>
  );
}

export default App;
