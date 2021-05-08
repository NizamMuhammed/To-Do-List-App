import React from "react";

function AddItem() {
  return (
    <form className="item">
      <input type="text" placeholder="Add new task" autoComplete="off" />
      <button type="submit" className="add">
        +
      </button>
    </form>
  );
}

export default AddItem;
