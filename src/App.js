import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.cpn";
import ShopPage from "./pages/shop/shop.cpn";
import Header from "./components/header/header.cpn";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.cpn";
import { auth, createUserProfileDoc } from "./firebase/firebase.utils";

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
    this.exitFromAuth = auth.onAuthStateChanged(async userAuth => {
      //   this.setState({ currentUser: user });
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            },
            () => {
              console.log(this.state); //due to asynchronous call in setState
            }
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
      //console.log(this.state);
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
