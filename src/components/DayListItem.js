import React from "react";

function DayListItem(props) {
  return (
    <li onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">Day Name</h2>
      <h3 className="text--light">X spots remaining</h3>
    </li>
  );
}

export default DayListItem;