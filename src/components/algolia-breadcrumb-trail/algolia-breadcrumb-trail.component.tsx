import React from "react";
import { connectBreadcrumb } from "react-instantsearch-dom";

import "./algolia-breadcrumb-trail.component.styles.scss";
import { AlgoliaBreadcrumbItem } from "..";

const AlgoliaBreadcrumbTrail: React.FC<any> = ({ items, refine }) => {
  return (
    <ul className="algolia-breadcrumb">
      <AlgoliaBreadcrumbItem
        key={`item-home`}
        value="Home"
        refine={refine}
        appendSeparator={false}
      />

      {items.map((item: any, index: any) => {
        const appendSeparator = items.length !== index;
        return (
          <AlgoliaBreadcrumbItem
            key={`item-${item.value}`}
            item={item}
            refine={refine}
            appendSeparator={appendSeparator}
          />
        );
      })}
    </ul>
  );
};

export default connectBreadcrumb(AlgoliaBreadcrumbTrail);
