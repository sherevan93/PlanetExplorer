import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login/login.js";
import Planets from "./components/Planets/planets.js";
import { makeStyles } from "@material-ui/core";
import { createStore } from "redux";
import { Provider } from "react-redux";

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        username: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

//
const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <div className={classes.root}>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/planets" component={Planets} />
              <Route exact path="/" component={Login} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
