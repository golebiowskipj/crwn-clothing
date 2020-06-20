import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { createStructuredSelector } from "reselect";
import {
    selectIsCollectionFetching,
    selectIsCollectionsLoaded
} from "../../redux/shop/shop.selectors";

import CategoryPage from "../collection/collection.component";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);

class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match, isCollectionLoaded } = this.props;

        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`}>
                    <CollectionsOverviewWithSpinner
                        isLoading={!isCollectionLoaded}
                    />
                </Route>
                <Route path={`${match.path}/:collectionId`}>
                    <CategoryPageWithSpinner isLoading={!isCollectionLoaded} />
                </Route>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ShopPage)
);
