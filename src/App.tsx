import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Parts } from "./screens/parts/register";
import { PartSearch } from "./screens/parts/search";
import { Contracts } from "./screens/contracts/register";
import { ContractSearch } from "./screens/contracts/search";
import { Associate } from "./screens/contracts/associate";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search/contracts" component={ContractSearch} />
      </Switch>
      <Switch>
        <Route path="/contracts" component={Contracts} exact />
      </Switch>
      <Switch>
        <Route path="/search/parts" component={PartSearch} />
      </Switch>
      <Switch>
        <Route path="/parts" component={Parts} exact />
      </Switch>
      <Switch>
        <Route path="/associate" component={Associate} />
      </Switch>
      <Switch>
        <Route path="/" component={Contracts} exact />
      </Switch>
    </Router>
  );
}

export default App;
