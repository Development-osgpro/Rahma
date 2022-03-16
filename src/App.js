import Homepage from "./Pages/Homepage";

import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/homepage" component={Homepage} />
      </Router>
    </div>
  );
}

export default App;
