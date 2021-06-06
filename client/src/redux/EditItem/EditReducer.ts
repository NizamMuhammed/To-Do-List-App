import { EDIT_CLICKED, CANCEL_CLICKED, EDITED_TITLE } from "./EditActionType";

export const initialState = {
  editClicked: false,
  itemId: "",
  itemTitle: "",
};
/**
 * State value is changed according to action type
 */
export const editReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case EDIT_CLICKED:
      console.log("Edit Buton Pressed");
      return {
        editClicked: true,
        itemId: action.payload.id,
        itemTitle: action.payload.title,
      };
    case CANCEL_CLICKED:
      console.log("Update Cancelled");
      return {
        editClicked: false,
        itemId: "",
        itemTitle: "",
      };
    case EDITED_TITLE:
      return {
        ...state,
        itemTitle: action.payload,
      };
    default:
      return state;
  }
};
