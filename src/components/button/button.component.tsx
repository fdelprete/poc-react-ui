import React from "react";
import { Button as AntButton } from "antd";

import "./button.component.styles.scss";

interface ButtonProps {
  text?: string;
  icon?: string | undefined;
  shape?: "circle" | "round" | "circle-outline" | undefined;
  style?: any;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  shape = "round",
  disabled = false,
  style = {}
}) => {
  return (
    <AntButton
      style={style}
      shape={shape}
      type="primary"
      icon={icon}
      size="large"
      disabled={disabled}
      className="cg-button"
    >
      {text}
    </AntButton>
  );
};

export default Button;
