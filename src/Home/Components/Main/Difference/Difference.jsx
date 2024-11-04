import React, { useState } from "react";
import "./Difference.scss";
import Down from "./DifImage/Down.png";
import NewImage from "./DifImage/Down (1).png";

const Difference = () => {
  const HandleChange = () => {
    setImage(
      <button className="Feed" onClick={Feedback}>
        <img src={NewImage} alt="" />
      </button>
    );
    setRes(
      <div className="ResponseDif">
        <p>
          This is just a dummy text that has been inserted as a placeholder for
          future content. While it may seem insignificant at first glance, the
          use of dummy text is a common practice in the design and publishing
          industry, as it allows designers and developers to visualize the
          layout and overall aesthetic of a project without being distracted by
          the actual content.
        </p>
        <button onClick={Feedback}>
          <p>Learn More</p>
        </button>
      </div>
    );
  };
  const Feedback = () => {
    setImage(
      <button className="Handle" onClick={HandleChange}>
        <img src={Down} alt="" />
      </button>
    );
    setRes(<div></div>);
  };

  const [button, setImage] = useState(
    <button className="Handle" onClick={HandleChange}>
      <img src={Down} alt="" />
    </button>
  );
  const [Res, setRes] = useState(<div></div>);
  return (
    <React.Fragment>
      <li className="Dif">
        <p>What is the difference between a UI and UX Designer?</p>

        {button}
      </li>
      {Res}
    </React.Fragment>
  );
};

export default Difference;
