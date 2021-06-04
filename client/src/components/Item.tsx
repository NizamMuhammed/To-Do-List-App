import React from "react";
import Checkbox from "./Checkbox";
import ItemText from "./ItemText";
import Edit from "./Edit";
import Delete from "./Delete";
import itemType from "../item.type";
import Accept from "./Accept";
import Cancel from "./Cancel";
import { useSelector, useDispatch } from "react-redux";
import { rootStateType } from "../redux/ActionType";
import { editedTitle } from "../redux/Actions";

function Item(props: { data: itemType }) {
  const itemData: itemType = props.data;
  /**
   * useSelector() is a react-redux hook used to get the state values
   * and store it in a variable for using that in the component
   * rootStateType is of same type as the State in Redux Store
   */
  const editClickedStatus = useSelector(
    (store: rootStateType) => store.editClicked
  );
  const editClickedId = useSelector((store: rootStateType) => store.itemId);
  const editClickedTitle = useSelector(
    (store: rootStateType) => store.itemTitle
  );
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(editedTitle(event.target.value));
  };

  return (
    <div className="item">
      <Checkbox completed={itemData.completed} id={itemData._id} />
      {!(editClickedStatus && editClickedId === itemData._id) ? (
        <ItemText title={itemData.title} />
      ) : (
        <input
          type="text"
          autoComplete="off"
          autoFocus
          onChange={handleChange}
          value={editClickedTitle}
          style={{ width: "260px" }}
        />
      )}
      {!(editClickedStatus && editClickedId === itemData._id) ? (
        <Edit id={itemData._id} title={itemData.title} />
      ) : (
        <Accept title={editClickedTitle} id={itemData._id} />
      )}
      {!(editClickedStatus && editClickedId === itemData._id) ? (
        <Delete id={itemData._id} />
      ) : (
        <Cancel />
      )}
    </div>
  );
}

export default Item;
