import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login/login.js";
import Planets from "./components/Planets/planets.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/planets" component={Planets} />
            <Route exact path="/" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
