import { initialState } from "./EditReducer";
/**
 * Better to create action types as separate constants
 * also called in Reducer
 */
export const EDIT_CLICKED = "EDIT_CLICKED";
export const CANCEL_CLICKED = "CANCEL_CLICKED";
export const EDITED_TITLE = "EDITED_TITLE";
export const ACCEPT_CLICKED = "ACCEPT_CLICKED";

export type rootStateType = typeof initialState;
