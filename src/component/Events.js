import React from "react";

const Events = () => {
  const handleClick = () => {
    alert("button clicked");
  };
  return (
    <div>
      <h1>handling event</h1>
      <button className="btn" onClick={handleClick}>
        {/* <button
        className="btn"
        onClick={() => {
          alert("button clicked");
        }}
      > */}
        click
      </button>
    </div>
  );
};

export default Events;
