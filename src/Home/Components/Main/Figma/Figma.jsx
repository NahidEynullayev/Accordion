import React, { useState } from "react";
import "./Figma.scss";
import Down4 from "../Difference/DifImage/Down.png";
import Down4Feed from "../Difference/DifImage/Down (1).png";
const Figma = () => {
  const HandleFig = () => {
    setButFig(
      <button onClick={FeedBackFig} className="Feed">
        <img src={Down4Feed} alt="" />
      </button>
    );
    setResFig(
      <div className="ResFig">
        <p>
          This is just a dummy text that has been inserted as a placeholder for
          future content. While it may seem insignificant at first glance, the
          use of dummy text is a common practice in the design and publishing
          industry, as it allows designers and developers to visualize the
          layout and overall aesthetic of a project without being distracted by
          the actual content.
        </p>
        <button onClick={FeedBackFig}>
          <p>Learn More</p>
        </button>
      </div>
    );
  };
  const FeedBackFig = () => {
    setButFig(
      <button onClick={HandleFig} className="Handle">
        <img src={Down4} alt="" />
      </button>
    );
    setResFig(<div></div>);
  };
  const [ButFig, setButFig] = useState(
    <button onClick={HandleFig} className="Handle">
      <img src={Down4} alt="" />
    </button>
  );
  const [ResFig, setResFig] = useState(<div></div>);
  return (
    <React.Fragment>
      <li className="Fig">
        <p>What is the best place to learn Figma?</p>
        {ButFig}
      </li>
      {ResFig}
    </React.Fragment>
  );
};

export default Figma;
