import React from "react";

import "components/InterviewerListItem.scss";
import classNames from "classnames";

function InterviewListItem(props) {

  const { id, name, avatar, selected, setInterviewer } = props;

  let interviewClass = classNames({
    'interviewers__item': true,
    'interviewers__item--selected': selected
  });

  return (
    <li className={interviewClass} onClick={setInterviewer}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {/* display name IF props:selected is valid */}
      {selected && name}
    </li>
  );
}

export default InterviewListItem;