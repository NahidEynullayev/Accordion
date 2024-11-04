import React, { useState } from "react";
import Down4 from "../Difference/DifImage/Down.png";
import Down4Feed from "../Difference/DifImage/Down (1).png";
import "./Design.scss";
const Design = () => {
  const HandleDes = () => {
    setButDes(
      <button className="Feed" onClick={FeedBackDes}>
        <img src={Down4Feed} alt="" />
      </button>
    );
    setResDes(
      <div className="ResDes">
        <p>
          This is just a dummy text that has been inserted as a placeholder for
          future content. While it may seem insignificant at first glance, the
          use of dummy text is a common practice in the design and publishing
          industry, as it allows designers and developers to visualize the
          layout and overall aesthetic of a project without being distracted by
          the actual content.
        </p>
        <button onClick={FeedBackDes}>
          <p>Learn More</p>
        </button>
      </div>
    );
  };

  const FeedBackDes = () => {
    setButDes(
      <button onClick={HandleDes} className="Handle">
        <img src={Down4} alt="" />
      </button>
    );
    setResDes(<div></div>);
  };
  const [ButDes, setButDes] = useState(
    <button onClick={HandleDes} className="Handle">
      <img src={Down4} alt="" />
    </button>
  );
  const [ResDes, setResDes] = useState(<div></div>);
  return (
    <React.Fragment>
      <li className="Dg">
        <p>Should designers code?</p>
        {ButDes}
      </li>
      {ResDes}
    </React.Fragment>
  );
};
export default Design;
