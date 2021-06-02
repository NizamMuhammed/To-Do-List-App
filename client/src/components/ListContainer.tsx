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
        let trueArr: itemType[] = [],
          falseArr: itemType[] = [];
        res.data.todos.map((item: itemType) => {
          return item.completed ? trueArr.push(item) : falseArr.push(item);
        });
        /**
         * Completed items are sorted into different arrays and
         * then merged back according to priority
         */
        const listItems: itemType[] = [...falseArr, ...trueArr];
        setList(listItems);
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
