import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

import CollectionPageContainer from "../collection/collection.container";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";

const ShopPage = ({ match, fetchCollectionsStartAsync }) => {
    useEffect(() => {
        fetchCollectionsStartAsync();
    }, [fetchCollectionsStartAsync]);

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`}>
                <CollectionsOverviewContainer />
            </Route>
            <Route path={`${match.path}/:collectionId`}>
                <CollectionPageContainer />
            </Route>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default withRouter(connect(null, mapDispatchToProps)(ShopPage));
