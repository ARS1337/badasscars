import React from "react";

function StickyNotificationAtTop(props) {
  const { bottomToTopAnimation } = props;
  const classList =
    "stickyNotification font-oswald flex justify-center md:sticky top-0 bg-CorrectYellow font-normal p-2 text-lg  max-w-[100vw] " + bottomToTopAnimation;
  return (
    <div className={classList}>
      <div className="flex justify-center  bg-CorrectYellow max-w-[100vw] px-1" id='sticky'>
        <div className="bg-transparent  pr-2">
          <img src="/assets/tagIconHeaderNotification.png" className="h-4 md:h-6" alt="tag icon" />
        </div>
        <div className="font-oswald font-semibold text-xs md:text-lg">NEW STUFF FOR YOU IN OUR STORE TODAY 25% DISCOUNT</div>
      </div>
    </div>
  );
}

export default StickyNotificationAtTop;