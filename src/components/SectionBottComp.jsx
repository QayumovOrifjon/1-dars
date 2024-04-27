import React from "react";
import Vector_1 from "../../src/assets/Vector_1.svg";
import Vector_2 from "../../src/assets/Vector_2.svg";
import Vector_3 from "../../src/assets/Vector_3.svg";
import Vector_4 from "../../src/assets/Vector_4.svg";
import Vector_5 from "../../src/assets/Vector_5.svg";
import Vector_6 from "../../src/assets/Vector_6.svg";
import Vector_8 from "../../src/assets/Vector_8.svg";
import Container from "../../src/assets/Container.png";

const SectionBottComp = () => {
  return (
    <div>
      <div className="w-[1200px] mx-auto">
        <div className="flex justify-center bg-[#FCFCFD] gap-10 mt-[100px] py-[30px] mb-20 rounded-lg">
          <img src={Vector_1} alt="" />
          <span className="w-[0] h-[94px] border-[1px] border-[solid] border-[rgb(241,241,243)]"></span>
          <img src={Vector_2} alt="" />
          <span className="w-[0] h-[94px] border-[1px] border-[solid] border-[rgb(241,241,243)]"></span>
          <img src={Vector_3} alt="" />
          <span className="w-[0] h-[94px] border-[1px] border-[solid] border-[rgb(241,241,243)]"></span>
          <img src={Vector_4} alt="" />
          <span className="w-[0] h-[94px] border-[1px] border-[solid] border-[rgb(241,241,243)]"></span>
          <img src={Vector_5} alt="" />
          <span className="w-[0] h-[94px] border-[1px] border-[solid] border-[rgb(241,241,243)]"></span>
          <img src={Vector_6} alt="" />
          <span className="w-[0] h-[94px] border-[1px] border-[solid] border-[rgb(241,241,243)]"></span>
          <img src={Vector_8} alt="" />
        </div>
      </div>
      <img className="mx-auto w-[1200px] mb-[100px]" src={Container} alt="" />
    </div>
  );
};

export default SectionBottComp;
