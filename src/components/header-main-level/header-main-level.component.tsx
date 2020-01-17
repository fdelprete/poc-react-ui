import React from "react";
import { Button, Navigation } from "..";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header-main-level.component.styles.scss";

interface HeaderMainLevelProps {}

const itemsList = {
  offers: "COSA OFFRIAMO",
  solutions: "SOLUZIONI",
  services: "SERVIZI",
  b2bStore: "B2B STORE",
  about: "MONDO COMPUTER GROSS",
  contact: "CONTATTI"
};

const HeaderMainLevel: React.FC<HeaderMainLevelProps> = () => {
  return (
    <div className="cg-header__main-level">
      <div className="cg-header__main-level--display-logo">
        <Logo />
      </div>
      <span className="spacer"></span>
      <div className="cg-header__main-level--display-navigation">
        <Navigation items={itemsList} />
      </div>
      <div className="cg-header__main-level--display-button">
        <Button icon={"login"} text={"ACCEDI ALL'AREA RISERVATA"}></Button>
      </div>
    </div>
  );
};

export default HeaderMainLevel;
