import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.cpn";
import ShopPage from "./pages/shop/shop.cpn";
import Header from "./components/header/header.cpn";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.cpn";
import { auth } from "./firebase/firebase.utils";

import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  exitFromAuth = null;

  componentDidMount() {
    this.exitFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.exitFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
