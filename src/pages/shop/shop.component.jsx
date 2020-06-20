import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { withRouter } from "react-router-dom";
import {
    firestore,
    convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

import CategoryPage from "../collection/collection.component";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection("collections");

        collectionRef.get().then((snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

            updateCollections(collectionsMap);
            this.setState({ loading: false });
        });

        // fetch("https://firestore.googleapis.com/v1/projects/crwn-db-658ff/databases/(default)/documents/collections")
        //     .then(response => response.json())
        //     .then(collections => console.log(collections));
    }
    
    render() {
        const { match } = this.props;

        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`}>
                    <CollectionsOverviewWithSpinner
                        isLoading={this.state.loading}
                    />
                </Route>
                <Route path={`${match.path}/:collectionId`}>
                    <CategoryPageWithSpinner isLoading={this.state.loading} />
                </Route>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) =>
        dispatch(updateCollections(collectionsMap))
});

export default withRouter(connect(null, mapDispatchToProps)(ShopPage));
