import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.min.js";
import "./scott.css";

import {
  Buzzee,
  Buzzor,
  Header2,
  Home,
  Login,
  Logout,
  Register
} from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from "./reducers/reducer";
import thunk from "redux-thunk";
import { FetchBuzzes } from "./actions/actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(FetchBuzzes());
setInterval(function() {
  store.dispatch(FetchBuzzes());
  console.log("fetching buzzes");
}, 3000);

const App = props => (
  <div className="backGround">
    <Provider store={store}>
      <Router>
        <div className="text-center">
          <div className="cover-container d-flex h-100 mx-auto flex-column">
            <Header2 />
            <main className="inner cover mainSection">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/buzzee" component={Buzzee} />
                <Route path="/buzzor" component={Buzzor} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/logout" component={Logout} />
                <Route
                  render={() => (
                    <div className="notFound">
                      page not found
                      <br />
                      <span
                        className="notfound"
                        role="img"
                        aria-label="not found"
                      >
                        &#x1F605;
                      </span>
                    </div>
                  )}
                />
              </Switch>
            </main>
          </div>
        </div>
      </Router>
    </Provider>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
