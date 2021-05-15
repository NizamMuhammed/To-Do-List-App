import React from "react";

function Checkbox(props: { status: boolean }) {
  return <input type="checkbox" checked={props.status}></input>;
}

export default Checkbox;
