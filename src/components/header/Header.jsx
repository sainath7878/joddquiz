import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { BiList, BiPersonCircle } from "assets/icons/Icons.jsx";
import { IcBaselineLogout } from "assets/icons/Icons";
import { useAuth } from "context";

function Header() {
  const {
    authState: { encodedToken },
    logoutHandler,
  } = useAuth();
  return (
    <header className="header">
      <nav className="navigation d-flex">
        <div className="nav-section d-flex align-center">
          <button className="btn btn-secondary d-none mobile-view hamburger">
            <BiList className="fs-m" />
          </button>
          <Link to="/">
            <p className="nav-brand-link mr-sm">
              {" "}
              JODD<span className="brand-text">Quiz</span>
            </p>
          </Link>
        </div>

        <div className="nav-section login">
          {encodedToken ? (
            <Link to="/">
              <IcBaselineLogout
                onClick={logoutHandler}
                className="fs-ml nav-link"
              />
            </Link>
          ) : (
            <Link to="/signin">
              <BiPersonCircle className="fs-ml nav-link" />
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export { Header };
