import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { checkboxClicked } from "../redux/ListItems/ListActions";
import { editCancel } from "../redux/EditItem/EditActions";

function Checkbox(props: { completed: boolean; id: number }) {
  const [isChecked, setChecked] = useState(props.completed);
  const dispatch = useDispatch();
  /**
   * useState hooks are used to manage changing values in a component
   * window.location.reload() is used to refresh page after checkBox is clicked
   */

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    let data = {
      id: props.id,
      completed: event.target.checked,
    };
    dispatch(checkboxClicked(props.id, event.target.checked));
    dispatch(editCancel())
    axios
      .post("http://localhost:4000/home/status", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <input type="checkbox" checked={isChecked} onChange={handleClick}></input>
  );
}

export default Checkbox;
