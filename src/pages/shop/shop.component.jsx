import React from "react";
import "./shop.styles.scss";
import SHOP_DATA from "./shod.data";
import Collections from "../../components/collection-preview/collection-preview.component";
class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => {
          return <Collections key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}

export default Shop;
