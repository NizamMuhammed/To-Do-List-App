import itemType from "../../item.type";

export const LAST_ID = "LAST_ID";
export const NEW_ITEM = "NEW_ITEM";
export const SET_FALSE_ARRAY = "SET_FALSE_ARRAY";
export const SET_TRUE_ARRAY = "SET_TRUE_ARRAY";
export const SET_FULL_ARRAY = "ET_FULL_ARRAY";
export const DELETE_ITEM = "DELETE_ITEM"

export type listStateType = {
  lastID: number;
  selectedID: number;
  selectedTitle: string;
  falseArray: itemType[];
  trueArray: itemType[];
  fullArray: itemType[];
};
