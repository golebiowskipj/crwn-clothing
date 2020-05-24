import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = ({ match, collection }) => (
    <div className="collection-page">
        <h2>{collection.id}</h2>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default withRouter(connect(mapStateToProps)(CollectionPage));
