import React from "react";

function Animations(props) {
  const { height, width, positionTop, positionLeft } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: positionTop,
        left: positionLeft,
      }}
      className='animate-rotate z-1'
    >
      <img src="/assets/yellowPlus.png" height={height} width={width} alt="yellowPlusAnimation" />
    </div>
  );
}

export default Animations;
