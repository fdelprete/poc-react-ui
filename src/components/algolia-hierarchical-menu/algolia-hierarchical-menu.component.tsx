import React from "react";
import "./algolia-hierarchical-menu.component.styles.scss";
import { connectHierarchicalMenu } from "react-instantsearch-dom";

const AlgoliaHierarchicalMenu: React.FC<any> = ({
  items,
  refine,
  createURL
}: any) => {
  return (
    <div className="algolia-hierarchical-menu">
      <ul>
        {items.map((item: any) => (
          <li key={item.label}>
            <a
              href={createURL(item.value)}
              onClick={event => {
                event.preventDefault();
                refine(item.value);
              }}
            >
              {item.label} ({item.count})
            </a>
            {item.items && (
              <AlgoliaHierarchicalMenu
                items={item.items}
                refine={refine}
                createURL={createURL}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connectHierarchicalMenu(AlgoliaHierarchicalMenu);
