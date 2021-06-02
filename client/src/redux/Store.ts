import { createStore } from "redux";
import { editReducer } from "./Reducers";
/**
 * Universal storage unit of states, accessible by all components
 */
const store = createStore(editReducer);

export default store;
