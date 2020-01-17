import React from "react";
import "./home-page.component.styles.scss";

import PromoOne from "../../assets/promo-1.png";
import PromoTwo from "../../assets/promo-2.png";

import {
  UWidgetPromoDuo,
  UWidgetProductsPreview,
  UWidgetAlgoliaSearch,
  HeaderPrivateArea,
  Footer
} from "../../components";

const HomePage = () => (
  <div>
    <div>
      <HeaderPrivateArea />
    </div>

    <div className="home-page__container">
      <div>
        <UWidgetPromoDuo promoOne={PromoOne} promoTwo={PromoTwo} />
      </div>
      <div className="home-page__container__other-content">
        <div>
          <UWidgetAlgoliaSearch />
        </div>
        <div>
          <UWidgetProductsPreview />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default HomePage;
