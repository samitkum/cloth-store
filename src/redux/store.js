import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import persistReducer from "./root.reducer";
import { persistStore } from "redux-persist";

const MiddleWare = [logger];
export const store = createStore(
  persistReducer,
  applyMiddleware(...MiddleWare)
);

export const persistor = persistStore(store);
