import itemType from "../../item.type";
import { LAST_ID, NEW_ITEM, SET_FALSE_ARRAY, SET_TRUE_ARRAY, DELETE_ITEM } from "./ListActionType";

export const lastId = (id: number) => {
  return {
    type: LAST_ID,
    payload: id,
  };
};

export const newItem = (id: number, title: string) => {
  return {
    type: NEW_ITEM,
    payload: { id, title },
  };
};

export const setFalseArray = (falseArr: itemType[]) => {
  return {
    type: SET_FALSE_ARRAY,
    payload: falseArr
  }
}

export const setTrueArray = (trueArr: itemType[]) => {
  return {
    type: SET_TRUE_ARRAY,
    payload: trueArr
  }
}

export const deleteItem = (id: number) => {
  return {
    type: DELETE_ITEM,
    payload: id
  }
}