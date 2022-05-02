import React from "react";

function StickyNotificationAtTop(props) {
  return (
    <div class="flex justify-center sticky top-0 bg-CorrectYellow font-bold p-2 text-lg">
      <div className="flex justify-center  bg-CorrectYellow">
        <div className="bg-transparent pt-1 pr-5" >
          <img src="/assets/tagIconHeaderNotification.png" className="h-6"/>
        </div>
        <div >NEW STUFF FOR YOU IN OUR STORE TODAY 25% DISCOUNT</div>
      </div>
    </div>
  );
}

export default StickyNotificationAtTop;
