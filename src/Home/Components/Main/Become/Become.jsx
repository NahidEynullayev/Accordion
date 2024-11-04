import React, { useState } from "react";
import "./Become.scss";
import Down2 from "../Difference/DifImage/Down.png";
import Dow2Feed from "../Difference/DifImage/Down (1).png";
const Become = () => {
  const HandleBecome = () => {
    setButImg(
      <button className="Feed" onClick={FeedBackBecome}>
        <img src={Dow2Feed} alt="" />
      </button>
    );
    setResBecome(
      <div className="ResponseBecome">
        <p>
          This is just a dummy text that has been inserted as a placeholder for
          future content. While it may seem insignificant at first glance, the
          use of dummy text is a common practice in the design and publishing
          industry, as it allows designers and developers to visualize the
          layout and overall aesthetic of a project without being distracted by
          the actual content.
        </p>
        <button onClick={FeedBackBecome}>
          <p>Learn More</p>
        </button>
      </div>
    );
  };
  const FeedBackBecome = () => {
    setButImg(
      <button onClick={HandleBecome} className="Handle">
        <img src={Down2} alt="" />
      </button>
    );
    setResBecome(<div></div>);
  };
  const [ButImg, setButImg] = useState(
    <button onClick={HandleBecome} className="Handle">
      <img src={Down2} alt="" />
    </button>
  );
  const [ResBecome, setResBecome] = useState(<div></div>);
  return (
    <React.Fragment>
      <li className="Become">
        <p>How to become a UI designer?</p>
        {ButImg}
      </li>
      {ResBecome}
    </React.Fragment>
  );
};

export default Become;
