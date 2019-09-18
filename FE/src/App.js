import React from "react";
import Nav from "./components/nav/nav";
import Form from "./components/form/form";
import Home from "./components/home/homePage";
import About from "./components/about/about";
import Login from "./components/login/login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/post" component={Form} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}
export default App;
