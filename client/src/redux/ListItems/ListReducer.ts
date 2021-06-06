import {
  LAST_ID,
  NEW_ITEM,
  SET_FALSE_ARRAY,
  SET_TRUE_ARRAY,
  DELETE_ITEM,
  CHECKBOX_CLICKED,
  listStateType,
} from "./ListActionType";
import itemType from "../../item.type";
import { findItem, deleteItemFromList, sortList } from "./ListReducer.helper";

const initialState: listStateType = {
  lastID: 0,
  falseArray: [],
  trueArray: [],
};

export const listReducer = (
  state: listStateType = initialState,
  action: any
) => {
  switch (action.type) {
    case LAST_ID:
      return {
        ...state,
        lastID: action?.payload,
      };
    case NEW_ITEM:
      const id: number = action?.payload?.id;
      const title: string = action?.payload?.title;
      const newItem = {
        id: id,
        title: title,
        completed: false,
        _id: "",
        createdAt: "",
        updatedAt: "",
      };
      return {
        ...state,
        lastID: id,
        falseArray: state?.falseArray?.concat(newItem),
      };
    case SET_FALSE_ARRAY:
      return {
        ...state,
        falseArray: action.payload,
      };
    case SET_TRUE_ARRAY:
      return {
        ...state,
        trueArray: action.payload,
      };
    case DELETE_ITEM:
      const fiilteredFalseArray = state.falseArray.filter(
        (item) => item.id !== action.payload
      );
      const fiilteredTrueArray = state.trueArray.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        falseArray: fiilteredFalseArray,
        trueArray: fiilteredTrueArray,
      };
    case CHECKBOX_CLICKED:
      if (action.payload.completed) {
        const selectedItem = findItem(state.falseArray, action.payload.id);
        const falseArr: itemType[] = deleteItemFromList(
          state.falseArray,
          action.payload.id
        );
        const sortedTrueArr = sortList(state.trueArray, selectedItem);
        return {
          ...state,
          trueArray: sortedTrueArr,
          falseArray: falseArr,
        };
      } else {
        const selectedItem = findItem(state.trueArray, action.payload.id);
        const trueArr: itemType[] = deleteItemFromList(
          state.trueArray,
          action.payload.id
        );
        const sortedFalseArr = sortList(state.falseArray, selectedItem);
        return {
          ...state,
          falseArray: sortedFalseArr,
          trueArray: trueArr,
        };
      }
    default:
      return state;
  }
};
