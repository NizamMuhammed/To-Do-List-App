import React from "react";
import { useDispatch } from "react-redux";
import { editClicked } from "../redux/Actions";

function Edit(props: { id: string; title: string }) {
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
