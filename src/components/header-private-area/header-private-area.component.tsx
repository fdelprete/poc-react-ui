import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Navigation, Button } from "..";
import "./header-private-area.component.styles.scss";
import AlgoliaSearchBox from "../algolia-search-box";

const itemsList = {
  products: "PRODOTTI",
  configurators: "CONFIGURATORI",
  promo: "PROMO",
  outlet: "OUTLET",
  events: "EVENTI",
  services: "SERVIZI"
};

const HeaderPrivateArea: React.FC = () => (
  <div className="cg-header">
    <div className="cg-header__main-level">
      <div className="cg-header__main-level--display-logo">
        <Logo />
      </div>
      <div className="cg-header__main-level--search-container">
        <AlgoliaSearchBox />
      </div>
      <span className="spacer"></span>
      <div className="cg-header__main-level--display-navigation">
        <Navigation items={itemsList} />
      </div>
      <div className="cg-header__main-level--display-button">
        <Button icon={"user"} shape="circle"></Button>
      </div>
      <div className="cg-header__main-level--display-button">
        <Button icon={"shopping-cart"} shape="circle"></Button>
      </div>
    </div>
  </div>
);

export default HeaderPrivateArea;
