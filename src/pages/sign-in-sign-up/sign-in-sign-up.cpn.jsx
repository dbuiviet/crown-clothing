import React from "react";

import "./sign-in-sign-up.style.scss";

import SignIn from "../../components/sign-in/sign-in.cpn";

import SignUp from "../../components/sign-up/sign-up.cpn";

const SignInSignUpPage = () => (
  <div className="sign-in-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUpPage;
