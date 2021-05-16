import React from "react";
import Checkbox from "./Checkbox";
import ItemText from "./ItemText";
import Edit from "./Edit";
import Delete from "./Delete";
import itemType from "../sample-type";

function Item(props: { data: itemType }) {
  const itemData: itemType = props.data;
  return (
    <div className="item">
      <Checkbox completed={itemData.completed} />
      <ItemText title={itemData.title} />
      <Edit />
      <Delete />
    </div>
  );
}

export default Item;
