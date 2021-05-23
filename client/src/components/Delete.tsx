import React from "react";
import axios from "axios";

function Delete(props: { id: string }) {
  const handleSubmit = () => {
    axios
      .post("http://localhost:4000/home/delete", { id: props.id })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" className="delete">
        🗑️
      </button>
    </form>
  );
}

export default Delete;
