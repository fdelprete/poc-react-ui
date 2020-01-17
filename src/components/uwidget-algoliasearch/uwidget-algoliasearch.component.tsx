import React from "react";

import {
  AlgoliaBreadcrumbTrail,
  AlgoliaHierarchicalMenu,
  AlgoliaRefinementList,
  AlgoliaRangeSlider
} from "..";

import "./uwidget-algoliasearch.component.styles.scss";

const UWidgetAlgoliaSearch = () => {
  return (
    <div className="uwidget-algoliasearch">
      <AlgoliaBreadcrumbTrail
        attributes={[
          "categories.lvl0",
          "categories.lvl1",
          "categories.lvl2",
          "categories.lvl3"
        ]}
      />
      <AlgoliaHierarchicalMenu
        attributes={[
          "categories.lvl0",
          "categories.lvl1",
          "categories.lvl2",
          "categories.lvl3"
        ]}
      />
      <AlgoliaRefinementList
        attribute="marca"
        title={"BRANDS"}
        clearText="Clear all brands"
      ></AlgoliaRefinementList>
      <AlgoliaRangeSlider
        title={"RAM FREQUENCY - MHz"}
        attribute="velocità_memoria_facet"
      />
      <AlgoliaRefinementList
        attribute="risoluzione_nativa"
        title={"RESOLUTION"}
        clearText="Clear all brands"
      />
      <AlgoliaRefinementList
        attribute="categoria_colore"
        title={"COLORS"}
        clearText="Clear all colors"
      />
    </div>
  );
};

export default UWidgetAlgoliaSearch;
