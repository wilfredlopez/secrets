import React from "react";
import classes from "./header.module.css";
import { StyledLink, FlexDiv } from "../styled/index";
import { Link } from "react-router-dom";
interface Props {}

const Header = (props: Props) => {
  return (
    <header id="app-header-container" className={classes.headerContainer}>
      <FlexDiv>
        <h1>
          <Link to="/" style={{ color: "inherit" }}>
            Secrets Generator{" "}
          </Link>
          <span aria-label="secret" role="img" className={classes.logo}>
            ㊙
          </span>
        </h1>
      </FlexDiv>
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
