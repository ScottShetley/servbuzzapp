import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./scott.css";
import { Header, Home, Login, Logout, Register } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducers/reducer";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

const App = props => (
  <div className="backGround">
    <Provider store={store}>
      <Router>
        <div className="text-center">
          <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <Header />
            <main className="inner cover mainSection">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/logout" component={Logout} />
                <Route
                  render={() => (
                    <div>
                      page not found
                      <br />
                      <span
                        className="notfound"
                        role="img"
                        aria-label="not found"
                      >
                        🤬
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
