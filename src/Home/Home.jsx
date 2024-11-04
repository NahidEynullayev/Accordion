import React from "react";
import "./Home.scss";
import ComponentsContainer from "./Components/ComponentsContainer";
import Back from "./BackGroundImage/Background.png";
const Home = () => {
  return (
    <React.Fragment>
      <div className="Page">
        <img className="Back" src={Back} alt="" />
        <ComponentsContainer />
      </div>
    </React.Fragment>
  );
};

export default Home;
