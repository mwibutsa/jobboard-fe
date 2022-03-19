import apiMiddleware from "middleware/apiMiddleware";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "reduxStore/reducers";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(apiMiddleware))
);

export default store;
