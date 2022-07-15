import React from "react";

import "components/InterviewerList.scss";
import InterviewListItem from "./InterviewerListItem";

function InterviewerList(props) {
  const interviewers = props.interviewers;

  const interviewersListData = interviewers.map(interviewer => {
    return <InterviewListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={interviewer.id === props.interviewer}
      setInterviewer={() => props.setInterviewer(interviewer.id)}
    />;
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewersListData}</ul>
    </section>
  );
}

export default InterviewerList;