import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteItem } from "../redux/ListItems/ListActions";

function Delete(props: { id: number }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItem(props.id));
    axios
      .post("http://localhost:4000/home/delete", { id: props.id })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <button type="button" onClick={handleClick} className="delete">
      🗑️
    </button>
  );
}

export default Delete;
