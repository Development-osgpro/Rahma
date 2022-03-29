import Homepage from "./Pages/Homepage";
import OurWork from './Pages/OurWork'
import ProgramsPage from "./Pages/ProgramsPage";

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
      </Router>
    </div>
  );
}

export default App;
