import React from "react";
import Homepage from "../src/pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import Shop from "./pages/shop/shop.component";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
import Checkout from "./pages/checkout/checkout.component";
class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(user);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.CurrentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  CurrentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
