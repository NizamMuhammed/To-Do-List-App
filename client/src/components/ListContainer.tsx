import React, { useEffect } from "react";
import axios from "axios";
import AddItem from "./AddItem";
import Item from "./Item";
import itemType from "../item.type";
import { useSelector, useDispatch } from "react-redux";
import {
  setFalseArray,
  setTrueArray,
  setFullArray,
  lastId,
} from "../redux/ListItems/ListActions";

function ListContainer() {
  const fullArray: itemType[] = useSelector(
    (listStore: any) => listStore.list.fullArray
  );
  const dispatch = useDispatch();

  const findMax = (arr: itemType[]) => {
    let idArray = arr.map((item) => item.id);
    const maxID: number = Math.max(...idArray);
    return maxID;
  };

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
        dispatch(setFalseArray(falseArr));
        dispatch(setTrueArray(trueArr));
        const listItems: itemType[] = [...falseArr, ...trueArr];
        dispatch(setFullArray(listItems));
        const maxId = findMax(listItems);
        dispatch(lastId(maxId));
      })
      .catch((err) => {
        console.log(`Fetch error: ${err}`);
      });
  }, [dispatch]);

  return (
    <div className="box">
      <AddItem />
      {fullArray.map((listItem) => {
        return <Item key={listItem.id} data={listItem} />;
      })}
    </div>
  );
}

export default ListContainer;
