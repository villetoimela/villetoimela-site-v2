import React from "react";

const TitleSection = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="title-section">
      <span>{props.title} <img src="/arrow-down.svg" /></span>
      <span><a href={props.link}>{props.linkTitle}</a></span>
    </div>
  );
})

export default TitleSection;
