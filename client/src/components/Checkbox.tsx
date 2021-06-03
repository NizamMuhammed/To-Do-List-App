import React, { useState } from "react";
import axios from "axios";

function Checkbox(props: { completed: boolean; id: string }) {
  const [isChecked, setChecked] = useState(props.completed);
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
