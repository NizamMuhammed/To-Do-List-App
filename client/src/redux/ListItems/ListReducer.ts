import {
  LAST_ID,
  NEW_ITEM,
  SET_FALSE_ARRAY,
  SET_TRUE_ARRAY,
  SET_FULL_ARRAY,
  DELETE_ITEM,
  listStateType,
} from "./ListActionType";

const initialState: listStateType = {
  lastID: 0,
  selectedID: 0,
  selectedTitle: "",
  falseArray: [],
  trueArray: [],
  fullArray: [],
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
    case SET_FULL_ARRAY:
      return {
        ...state,
        fullArray: action.payload,
      };
    case DELETE_ITEM:
      let fiilteredArray = state.fullArray.filter(
        (item) => item.id !== action.payload
      );
      return state
    default:
      return state;
  }
};
