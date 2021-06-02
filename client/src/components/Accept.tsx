import React from "react";
import axios from "axios";

/**
 * Uses the data sent from the Edit page as props
 * Calls the route using Axios
 * onSubmit refreshes the page
 * @param props
 * @returns JSX Form Element
 */
function Accept(props: { title: string; id: string }) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
    <form onSubmit={handleSubmit} style={{ marginLeft: "0px" }}>
      <button type="submit" className="update">
        ✔️
      </button>
    </form>
  );
}

export default Accept;
