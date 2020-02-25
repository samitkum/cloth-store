import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import persistReducer from "./root.reducer";
import { persistStore } from "redux-persist";

const MiddleWare = [];

if (process.env.NODE_ENV === "development") {
  MiddleWare.push(logger);
}
export const store = createStore(
  persistReducer,
  applyMiddleware(...MiddleWare)
);

export const persistor = persistStore(store);
