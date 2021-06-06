import { editReducer } from "./EditItem/EditReducer";
import { listReducer } from "./ListItems/ListReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  edit: editReducer,
  list: listReducer,
});

export default rootReducer;
