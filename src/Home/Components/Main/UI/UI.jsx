import React, { useState } from "react";
import "./UI.scss";
import Down3 from "../Difference/DifImage/Down.png";
import Down3Feed from "../Difference/DifImage/Down (1).png";
const UI = () => {
  const HandleUI = () => {
    setButUI(
      <button onClick={FeedBackUI} className="Feed">
        <img src={Down3Feed} alt="" />
      </button>
    );
    setTextUI(
      <div className="TextUI">
        <p>
          This is just a dummy text that has been inserted as a placeholder for
          future content. While it may seem insignificant at first glance, the
          use of dummy text is a common practice in the design and publishing
          industry, as it allows designers and developers to visualize the
          layout and overall aesthetic of a project without being distracted by
          the actual content.
        </p>
        <button onClick={FeedBackUI}>
          <p>Learn More</p>
        </button>
      </div>
    );
  };
  const FeedBackUI = () => {
    setButUI(
      <button onClick={HandleUI} className="Handle">
        <img src={Down3} alt="" />
      </button>
    );
    setTextUI(<div></div>);
  };
  const [ButUI, setButUI] = useState(
    <button onClick={HandleUI} className="Handle">
      <img src={Down3} alt="" />
    </button>
  );
  const [TextUI, setTextUI] = useState(<div></div>);
  return (
    <React.Fragment>
      <li className="UI">
        <p>What is the best UI design tool?</p>

        {ButUI}
      </li>
      {TextUI}
    </React.Fragment>
  );
};

export default UI;
