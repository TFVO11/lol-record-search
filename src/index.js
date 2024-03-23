import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from "./reducers/reducer/rootReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(rootReducer);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App class="app"/>
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
