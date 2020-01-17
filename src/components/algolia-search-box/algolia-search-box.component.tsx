import React from "react";
import { Input } from "antd";
import { connectSearchBox } from "react-instantsearch-dom";

import "./algolia-search-box.component.styles.scss";

const { Search } = Input;

const AlgoliaSearchBox: React.FC<any> = ({ currentRefinement, refine }) => {
  return (
    <div className="algolia-search-box">
      <Search
        placeholder="Search.."
        type="search"
        size="large"
        autoFocus={true}
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
      />
    </div>
  );
};

export default connectSearchBox(AlgoliaSearchBox);
