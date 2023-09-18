import React from "react";

function TitleSection(props) {
  return (
    <div className="title-section">
      <span>{props.title} <img src="/arrow-down.svg" /></span>
      <span><a href={props.link}>{props.linkTitle}</a></span>
    </div>
    
  );
}

export default TitleSection;