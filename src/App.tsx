import React from "react";
import algoliasearch from "algoliasearch";
import { InstantSearch } from "react-instantsearch-dom";

import "./App.scss";

import {
  ALGOLIA_APPLICATION_ID,
  ALGOLIA_API_KEY,
  ALGOLIA_INDEX_NAME as algoliaIndexName
} from "./config";
import { Switch, Route } from "react-router";
import { HomePage } from "./pages";

const searchClient = algoliasearch(ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY);

const App: React.FC = () => {
  return (
    <div>
      <InstantSearch searchClient={searchClient} indexName={algoliaIndexName}>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </InstantSearch>
    </div>
  );
};

export default App;
