import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "./crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.utils";

const Header = ({ userGoogle }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="">
        <Logo className="logo" to="/" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        {userGoogle ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
