import React from "react";
import "./uwidget-promo-duo.component.styles.scss";

interface UWidgetPromoDuoProps {
  promoOne: any;
  promoTwo: any;
}

const UWidgetPromoDuo: React.FC<UWidgetPromoDuoProps> = ({
  promoOne,
  promoTwo
}) => {
  return (
    <div className="uwidget-promo-duo">
      <div className="uwidget-promo-duo--display-content">
        <img src={promoOne} alt="promo one" />
      </div>
      <div className="uwidget-promo-duo--display-content">
        <img src={promoTwo} alt="promo two" />
      </div>
    </div>
  );
};

export default UWidgetPromoDuo;
