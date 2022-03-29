import Homepage from "./Pages/Homepage";
import OurWork from './Pages/OurWork'

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
      </Router>
    </div>
  );
}

export default App;
