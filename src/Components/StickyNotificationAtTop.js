import React from "react";

function StickyNotificationAtTop(props) {
  const { bottomToTopAnimation } = props;
  const classList =
    "flex justify-center sticky top-0 bg-CorrectYellow font-bold p-2 text-lg  w-screen " + bottomToTopAnimation;
  return (
    <div className={classList}>
      <div className="flex justify-center  bg-CorrectYellow" id='sticky'>
        <div className="bg-transparent pt-1 pr-5">
          <img src="/assets/tagIconHeaderNotification.png" className="h-6" alt="tag icon" />
        </div>
        <div className="font-oswald font-bold">NEW STUFF FOR YOU IN OUR STORE TODAY 25% DISCOUNT</div>
      </div>
    </div>
  );
}

export default StickyNotificationAtTop;
