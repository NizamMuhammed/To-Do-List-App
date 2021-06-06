import {
  LAST_ID,
  NEW_ITEM,
  SET_FALSE_ARRAY,
  SET_TRUE_ARRAY,
  DELETE_ITEM,
  listStateType,
} from "./ListActionType";

const initialState: listStateType = {
  lastID: 0,
  selectedID: 0,
  selectedTitle: "",
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
      console.log(newItem);
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
        trueArray: fiilteredTrueArray
      }
    default:
      return state;
  }
};
