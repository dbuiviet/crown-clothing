import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/4.2.crown.svg";
import "./header.style.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options-container">
      <Link className="option-shop" to="/shop">
        SHOP
      </Link>
      <Link className="option-contact" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div
          className="option-signout"
          onClick={() => {
            auth.signOut();
          }}
        >
          SIGN OUT
        </div>
      ) : (
        <Link className="option-signin" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
