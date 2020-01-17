import React from "react";
import { HeaderBasicLevel, HeaderMainLevel } from "..";
import "./header.component.styles.scss";

const Header: React.FC = () => (
  <div className="cg-header">
    <HeaderBasicLevel />
    <HeaderMainLevel />
  </div>
);

export default Header;
