import React from "react";
import { useDispatch } from "react-redux"
import { editCancel } from "../redux/Actions";

function Accept(props: { title: string; id: string }) {
  const dispatch = useDispatch()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    dispatch(editCancel())
  };

  return (
    <form onSubmit={handleSubmit} style= {{marginLeft:"0px"}}>
      <button type="submit" className="update">
        ✔️
      </button>
    </form>
  );
}

export default Accept;
