import { EDIT_CLICKED, CANCEL_CLICKED, EDITED_TITLE } from "./ActionType";

export const editClicked = (id: string, title: string) => {
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
    payload: title
  };
};
