import axios from "axios";
import React, { useState } from "react";

function AddItem() {
  const [textData, setText] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const newData = {
      title: textData,
      completed: false,
    };
    axios
      .post("http://localhost:4000/home", newData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <form className="item" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new task"
        name="title"
        autoComplete="off"
        autoFocus
        value={textData}
        onChange={handleChange}
      />
      <button type="submit" className="add">
        +
      </button>
    </form>
  );
}

export default AddItem;
