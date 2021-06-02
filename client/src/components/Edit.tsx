import React from "react";
import { useDispatch } from "react-redux";
import { editClicked } from "../redux/Actions";

function Edit(props: { id: string; title: string }) {
  const dispatch = useDispatch();

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //To hinder the page refresh, which is a default Event
    dispatch(editClicked(props.id, props.title));
  };

  return (
    <form onSubmit={handleClick}>
      <button type="submit" className="update">
        ✏️
      </button>
    </form>
  );
}

export default Edit;
