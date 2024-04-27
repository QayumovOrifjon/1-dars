import React from "react";
import { GrLinkNext } from "react-icons/gr";

const HeaderTopComp = () => {
  return (
    <div className="bg-[#FF9500] rounded-lg">
      <p className="text-white flex items-center gap-6 justify-center py-4 text-[18px] leading-6">
        Free Courses 🌟 Sale Ends Soon, Get It Now
        <GrLinkNext className="text-white" />
      </p>
    </div>
  );
};

export default HeaderTopComp;
