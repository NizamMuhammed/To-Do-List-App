import { EDIT_CLICKED, CANCEL_CLICKED, EDITED_TITLE } from "./EditActionType";
/**
 * Actions - Specify what operation is to be done by the Reducer
 * type, payload are used as per convention
 */

export const editClicked = (id: number, title: string) => {
  return {
    type: EDIT_CLICKED,
    payload: { id, title },
  };
};

export const editCancel = () => {
  return {
    type: CANCEL_CLICKED,
  };
};

export const editedTitle = (title: string) => {
  return {
    type: EDITED_TITLE,
    payload: title,
  };
};
