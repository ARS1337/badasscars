import React from "react";

function Animations(props) {
  const { height, width, positionTop, positionLeft, animationClassList } = props;
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  return (
    <div
      style={{
        position: "absolute",
        top: positionTop,
        left: positionLeft,
      }}
      className={animationClassList}
    >
      <img src="/assets/yellowPlus.png" height={height*windowHeight} width={width*windowWidth} alt="yellowPlusAnimation" className="hidden md:block"/>
    </div>
  );
}

export default Animations;
