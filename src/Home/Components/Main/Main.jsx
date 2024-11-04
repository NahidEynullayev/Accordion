import React from "react";
import Difference from "./Difference/Difference";
import "./Main.scss";
import Become from "./Become/Become";
import UI from "./UI/UI";
import Figma from "./Figma/Figma";
import Design from "./Design/Design";

const Main = () => {
  return (
    <React.Fragment>
      <ul>
        <Difference />
        <Become />
        <UI />
        <Figma />
        <Design />
      </ul>
    </React.Fragment>
  );
};

export default Main;
