import React from "react";
import { Input, Checkbox, Button } from "antd";
import { Highlight } from "react-instantsearch-dom";

import "./algolia-refinement-list.component.styles.scss";
import { Hit, connectRefinementList } from "react-instantsearch-core";

interface AlgoliaRefinementListProps {
  title: string;
  clearText: string;
  refine: (value: string[] | string) => any;
  createURL: (...args: any[]) => any;
  currentRefinement: string[];
  items: Array<
    Hit<{ count: number; isRefined: boolean; label: string; value: string[] }>
  >;
  searchForItems: (...args: any[]) => any;
  isFromSearch: boolean;
  canRefine: boolean;
}

const AlgoliaRefinementList: React.FC<AlgoliaRefinementListProps> = ({
  title,
  clearText,
  items,
  isFromSearch,
  refine,
  searchForItems
}) => (
  <div className="algolia-refinement-list">
    <h5>{title}</h5>

    <Input
      type="search"
      placeholder="Search here..."
      onChange={(event: any) => searchForItems(event.currentTarget.value)}
      className="algolia-refinement-list__search-box"
    />

    <div>
      <ul>
        <li />
        {items.map((item: any) => (
          <li key={item.label}>
            <Checkbox
              checked={item.isRefined ? true : false}
              onClick={event => {
                event.preventDefault();
                refine(item.value);
              }}
            >
              {isFromSearch ? (
                <Highlight attribute="label" hit={item} />
              ) : (
                item.label
              )}
              <span className="algolia-refinement-list__item-count">
                {item.count}
              </span>
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
    <div className="algolia-refinement-list--clear-list-button">
      <Button onClick={() => refine("")} disabled={!items.length}>
        {clearText}
      </Button>
    </div>
  </div>
);

export default connectRefinementList(AlgoliaRefinementList);
