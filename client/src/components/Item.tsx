import React from "react";
import Checkbox from "./Checkbox"
import ItemText from "./ItemText"
import Edit from "./Edit"
import Delete from "./Delete"

function Item() {
  return <div className="item">
      <Checkbox />
      <ItemText />
      <Edit />
      <Delete />
  </div>;
}

export default Item;
