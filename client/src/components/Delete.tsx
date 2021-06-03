import React from "react";
import axios from "axios";

function Delete(props: { id: string }) {
  const handleClick = () => {
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
