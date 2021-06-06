import React from "react";
import { useDispatch } from "react-redux";
import { editClicked } from "../redux/EditItem/EditActions";

function Edit(props: { id: number; title: string }) {
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
