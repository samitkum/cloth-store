import React from "react";
import "./shop.styles.scss";
import CollectionPage from "../collection-page/collection-page.components";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collection-overview/collection-overview.component";
const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};

export default Shop;
