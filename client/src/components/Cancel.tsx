import React from "react";
import { useDispatch } from "react-redux"
import { editCancel } from "../redux/Actions";

function Cancel() {
  const dispatch = useDispatch()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(editCancel())
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" className="delete">
        ❌
      </button>
    </form>
  );
}

export default Cancel;
