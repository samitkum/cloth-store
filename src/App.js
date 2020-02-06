import React from "react";
import Homepage from "../src/pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import Shop from "./pages/shop/shop.component";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn_SignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { auth } from "./components/firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <Header userGoogle={this.state.currentUser} />
        <div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/signin" component={SignIn_SignUp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
