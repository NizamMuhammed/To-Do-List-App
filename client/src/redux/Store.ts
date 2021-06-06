import { createStore } from "redux";
import rootReducer from "./rootReducer";
/**
 * Universal storage unit of states, accessible by all components
 */
const store = createStore(rootReducer);

export default store;
