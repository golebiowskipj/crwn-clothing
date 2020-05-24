import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { withRouter } from "react-router-dom";

import CategoryPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`}>
            <CollectionsOverview />
        </Route>
        <Route path={`${match.path}/:collectionId`}>
            <CategoryPage />
        </Route>
    </div>
);

export default withRouter(ShopPage);
