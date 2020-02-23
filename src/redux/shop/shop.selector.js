import { createSelector } from "reselect";

const selectShops = state => state.shops;

export const selectCollections = createSelector([selectShops], shops => {
  return shops.collections;
});

export const selectCollectionsPage = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const collectionUrlSelector = urlParam => {
  return createSelector(
    [selectCollections],
    collections => collections[urlParam]
  );
};
