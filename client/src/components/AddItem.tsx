import axios from "axios";
import React, { useState } from "react";

/**
 * Uses axios to post newly entered data
 * onSubmit rerenders the page and the newly added item is listed
 * @returns JSX Form Element
 */

function AddItem() {
  const [textData, setText] = useState<string>("");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const newData = {
      id: 1,
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
    <form
      className="item"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        placeholder="Add new task"
        name="title"
        autoComplete="off"
        autoFocus
        value={textData}
        onChange={handleChange}
      />
      <button type="button" onClick={handleClick} className="add">
        +
      </button>
    </form>
  );
}

export default AddItem;
