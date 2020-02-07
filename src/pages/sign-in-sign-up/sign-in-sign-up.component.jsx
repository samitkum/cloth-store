import React from "react";
import "./sign-in-sign-up.styles.scss";
import SignIn from "../../components/signIn/signIn.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignIn_SignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignIn_SignUp;
