import React from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
interface Props {}

const Header = (props: Props) => {
  return (
    <header id="app-header-container" className={classes.headerContainer}>
      <h1 className="text-center">
        Secrets <span aria-label="secret" role="img">
          ㊙
        </span>
      </h1>
      <nav className={classes.nav}>
        <div className={classes.navLink}>
          <Link to="/">
            Create Secret
          </Link>
        </div>
        <div className={classes.navLink}>
          <Link to="/reveal">
            Reveal Secret
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
