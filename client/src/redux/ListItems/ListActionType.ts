import itemType from "../../item.type";

export const LAST_ID = "LAST_ID";
export const NEW_ITEM = "NEW_ITEM";
export const SET_FALSE_ARRAY = "SET_FALSE_ARRAY";
export const SET_TRUE_ARRAY = "SET_TRUE_ARRAY";
export const DELETE_ITEM = "DELETE_ITEM";
export const CHECKBOX_CLICKED = "CHECKBOX_CLICKED";

export type listStateType = {
  lastID: number;
  falseArray: itemType[];
  trueArray: itemType[];
};
