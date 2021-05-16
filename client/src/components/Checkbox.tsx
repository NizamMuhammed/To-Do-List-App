import React, { useState } from "react";

function Checkbox(props: { completed: boolean }) {
  const [isChecked, setIsChecked] = useState(props.completed)

  function handleChange() {
    setIsChecked(!isChecked)
  }
  
  return <input type="checkbox" checked={isChecked} onChange={handleChange}></input>;
}

export default Checkbox;
