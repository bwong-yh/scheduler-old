import React from "react";

import "components/DayListItem.scss";
import classNames from "classnames";

function DayListItem(props) {
  let dayClass = classNames({
    'day-list__item': true,
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0
  });

  function formatSpots() {
    const availableSpots = props.spots;

    if (availableSpots === 0) return "no spots remaining";
    if (availableSpots === 1) return "1 spot remaining";

    return `${availableSpots} spots remaining`;
  }

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}

export default DayListItem;