import React from "react";
import { useDispatch } from "react-redux";
import { editCancel } from "../redux/Actions";

function Cancel() {
  /**
   * useDispatch is the Redux hook used to trigger a certain actionCreator method
   * Action is carried out by Reducer after receiving from the dispatch
   * editCancel() is a ActionCreator
   * ActionCreator is used to create a certain Action
   */
  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(editCancel());
  };

  return (
    <button type="button" onClick={handleClick} className="cancel">
        ❌
    </button>
  );
}

export default Cancel;
