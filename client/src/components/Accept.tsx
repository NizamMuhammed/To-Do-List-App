import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux"
import { acceptClicked } from "../redux/EditItem/EditActions"

/**
 * Uses the data sent from the Edit page as props
 * Calls the route using Axios
 * onSubmit refreshes the page
 * @param props
 * @returns JSX Form Element
 */
function Accept(props: { title: string; id: number }) {
  const dispatch = useDispatch()
  const handleClick = (event:React.MouseEvent<HTMLElement>) => {
    dispatch(acceptClicked());
    const newData = {
      title: props.title,
      id: props.id,
    };
    axios
      .post("http://localhost:4000/home/update", newData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <button type="button" onClick={handleClick} className="update">
        ✔️
    </button>
  );
}

export default Accept;
