import React from "react";

function TitleSection(props) {
  return (
    <footer className="title-section">
      <span>{props.title} <img src="/arrow-down.svg" /></span>
    </footer>
  );
}

export default TitleSection;