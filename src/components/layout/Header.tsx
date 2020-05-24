import React from "react";
import classes from "./header.module.css";
import { StyledLink } from "../styled/index";
import { Link } from "react-router-dom";
interface Props {}

const Header = (props: Props) => {
  return (
    <header id="app-header-container" className={classes.headerContainer}>
      <h1>
        <Link to="/" style={{ color: "inherit" }}>
          Secret Generator{" "}
          <span aria-label="secret" role="img">
            ㊙
          </span>
        </Link>
      </h1>
      <nav className={classes.nav}>
        <div className={classes.navLink}>
          <StyledLink to="/" exact activeClassName="active">
            GENERATE
          </StyledLink>
        </div>
        <div className={classes.navLink}>
          <StyledLink exact activeClassName="active" to="/reveal">
            {/* Reveal */}
            REVEAL
          </StyledLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
