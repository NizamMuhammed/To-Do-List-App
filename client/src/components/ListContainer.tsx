import React from "react";
import AddItem from "./AddItem";
import Item from "./Item";
import data from "../example-data";
import itemType from "../sample-type";

const itemList: itemType[] = data.todos;

function ListContainer() {
  return (
    <div className="box">
      <AddItem />
      {itemList.map((listItem) => {
        return <Item data={listItem} />;
      })}
    </div>
  );
}

export default ListContainer;
