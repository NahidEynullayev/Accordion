import React from "react";
import Header from "./AccordionHeader/Header";
import "./ComponentsContainer.scss";
import Main from "./Main/Main";
const ComponentsContainer = () => {
  return (
    <React.Fragment>
      <div className="Container">
        <Header />
        <Main />
      </div>
    </React.Fragment>
  );
};

export default ComponentsContainer;
