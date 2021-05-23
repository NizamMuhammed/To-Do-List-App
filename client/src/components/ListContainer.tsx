import React, { useEffect, useState } from "react";
import axios from "axios";
import AddItem from "./AddItem";
import Item from "./Item";
import itemType from "../item.type";

function ListContainer() {
  const [list, setList] = useState<itemType[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000")
      .then((res) => {
        setList(res.data.todos);
      })
      .catch((err) => {
        console.log(`Fetch error: ${err}`);
      });
  }, []);

  return (
    <div className="box">
      <AddItem />
      {list.map((listItem) => {
        return <Item key={listItem._id} data={listItem} />;
      })}
    </div>
  );
}

export default ListContainer;
