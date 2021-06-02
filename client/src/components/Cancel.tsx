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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(editCancel());
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" className="delete">
        ❌
      </button>
    </form>
  );
}

export default Cancel;
