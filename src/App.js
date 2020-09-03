import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/home";
import Calculator from "./components/calculator/Calculator";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={Calculator} />
      </Switch>
    </div>
  );
}

export default App;
