import React, { useState } from "react";
import axios from "axios";

function Checkbox(props: { completed: boolean; id: string }) {
  const [isChecked, setChecked] = useState(props.completed);

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
      window.location.reload()
  };

  return (
    <input type="checkbox" checked={isChecked} onChange={handleClick}></input>
  );
}

export default Checkbox;
