import React from "react";
import { useDispatch } from "react-redux";
import { editClicked } from "../redux/EditItem/EditActions";

function Edit(props: { id: number; title: string }) {
  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault(); //To hinder the page refresh, which is a default Event
    dispatch(editClicked(props.id, props.title));
  };

  return (
    <button type="button" onClick={handleClick} className="update">
      ✏️
    </button>
  );
}

export default Edit;
