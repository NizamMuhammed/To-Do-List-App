import { createStore } from "redux";
import { editReducer } from "./Reducers";

const store = createStore(editReducer);

export default store;
