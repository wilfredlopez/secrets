import React from "react"
import classes from "./header.module.css"
import { StyledLink } from "../styled/index"
interface Props {}

const Header = (props: Props) => {
  return (
    <header id="app-header-container" className={classes.headerContainer}>
      <h1>
        Secret Generator{" "}
        <span aria-label="secret" role="img">
          ㊙
        </span>
      </h1>
      <nav className={classes.nav}>
        <div className={classes.navLink}>
          <StyledLink to="/" exact activeClassName="active">
            Generate
          </StyledLink>
        </div>
        <div className={classes.navLink}>
          <StyledLink exact activeClassName="active" to="/reveal">
            Reveal
          </StyledLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
