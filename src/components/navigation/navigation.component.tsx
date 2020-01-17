import React, { useState } from "react";
import { Menu } from "antd";

import "./navigation.component.styles.scss";

interface NavigationProps {
  items: any; // TODO create model composed by label and key and/or multi language
}

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const [current, setCurrent] = useState("");
  const listOfItems = [];
  const handleClick = (e: any) => setCurrent(e.key);

  for (let [key, label] of Object.entries(items)) {
    listOfItems.push(
      <Menu.Item key={key} onClick={handleClick}>
        {label as string}
      </Menu.Item>
    );
  }

  return (
    <div className="cg-navigation">
      <Menu mode="horizontal" selectedKeys={[current]}>
        {listOfItems}
      </Menu>
    </div>
  );
};

export default Navigation;
