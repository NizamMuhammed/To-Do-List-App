import React, { useEffect } from "react";
import axios from "axios";
import AddItem from "./AddItem";
import Item from "./Item";
import data from "../example-data";
import itemType from "../sample-type";

let itemList: itemType[] = data.todos;

function ListContainer() {
  useEffect(() => {
    axios.get("http://localhost:4000").then((res) => {
      itemList=res.data
      console.log(itemList)
    });
  }, []);

  return (
    <div className="box">
      <AddItem />
      {itemList.map((listItem) => {
        return <Item key={listItem._id} data={listItem} />;
      })}
    </div>
  );
}

export default ListContainer;
