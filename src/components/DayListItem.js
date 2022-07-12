import React from "react";

import "components/DayListItem.scss";
import classNames from "classnames";

function DayListItem(props) {
  let dayClass = classNames({
    'day-list__item': true,
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0
  });

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">Day Name</h2>
      <h3 className="text--light">X spots remaining</h3>
    </li>
  );
}

export default DayListItem;