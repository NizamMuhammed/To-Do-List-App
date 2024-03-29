import itemType from "../../item.type";
import {
  LAST_ID,
  NEW_ITEM,
  SET_FALSE_ARRAY,
  SET_TRUE_ARRAY,
  DELETE_ITEM,
  CHECKBOX_CLICKED,
  ACCEPT_CLICKED_LIST,
} from "./ListActionType";

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
    payload: falseArr,
  };
};

export const setTrueArray = (trueArr: itemType[]) => {
  return {
    type: SET_TRUE_ARRAY,
    payload: trueArr,
  };
};

export const deleteItem = (id: number) => {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
};

export const checkboxClicked = (id: number, completed: boolean) => {
  return {
    type: CHECKBOX_CLICKED,
    payload: { id, completed },
  };
};

export const acceptClickedList = (id: number, title: string) => {
  return {
    type: ACCEPT_CLICKED_LIST,
    payload: { id, title },
  };
};
