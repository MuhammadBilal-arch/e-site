import { createStore } from "redux";
import { ItemReducer } from "./Reducers/itemsReducer";

export const store = createStore(
  ItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
