import React, { useState } from "react";

function Checkbox(props: { status: boolean }) {
  const [isChecked, setIsChecked] = useState(props.status)

  function handleChange() {
    setIsChecked(!isChecked)
  }
  
  return <input type="checkbox" checked={isChecked} onChange={handleChange}></input>;
}

export default Checkbox;
