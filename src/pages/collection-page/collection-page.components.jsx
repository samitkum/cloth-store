import React from "react";
import "./collection-page.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { collectionUrlSelector } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";
const CollectionPage = ({ match, history, collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <div className="title">{title}</div>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const MapStateToProps = (state, ownProps) => ({
  collection: collectionUrlSelector(ownProps.match.params.collectionId)(state)
});
export default connect(MapStateToProps)(CollectionPage);
