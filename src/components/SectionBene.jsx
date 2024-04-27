import React from "react";
import { LiaMarsStrokeSolid } from "react-icons/lia";

const SectionBene = () => {
  return (
    <div className="w-[1180px] mx-auto">
      <h1 className="text-[48px] font-[600] leading-[150%]">Benefits</h1>
      <div className="flex justify-between">
        <p className="text-[18px] font-[400] leading-[150%]">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit <br /> dignissim lorem nibh et. Ac
          cum eget habitasse in velit fringilla feugiat senectus in.
        </p>
        <button className="bg-[#FCFCFD] rounded-lg px-[24px] py-[18px] border-[1px] border-[solid] border-[rgb(241,241,243)] hover:bg-[#C8C8C8]">
          View All
        </button>
      </div>

      <div className="flex flex-wrap mb-[100px] gap-5 mt-[80px]">
        <div className="w-[380px] bg-[#FFFFFF] px-[25px] py-[50px] rounded-lg">
          <h1 className="text-end text-[80px] font-[700] leading-6 mb-[60px]">
            01
          </h1>
          <h4 className="text-[24px] font-[600] leading-[150%] mb-[14px]">
            Flexible Learning Schedule
          </h4>
          <p className="text-[18px] font-[400] leading-[150%] mb-[50px    ]">
            Fit your coursework around your existing commitments and
            obligations.
          </p>
          <div className="pl-[270px]">
            {" "}
            <button className="p-[10px] text-[30px] bg-[#FCFCFD] rounded-lg text-[#FF9E16] hover:bg-[#FF9E16] hover:text-white">
              <LiaMarsStrokeSolid />
            </button>
          </div>
        </div>
        <div className="w-[380px] bg-[#FFFFFF] px-[25px] py-[50px] rounded-lg">
          <h1 className="text-end text-[80px] font-[700] leading-6 mb-[60px]">
            02
          </h1>
          <h4 className="text-[24px] font-[600] leading-[150%] mb-[14px]">
            Expert Instruction
          </h4>
          <p className="text-[18px] font-[400] leading-[150%] mb-[50px    ]">
            Learn from industry experts who have hands-on experience in design
            and development.
          </p>
          <div className="pl-[270px]">
            {" "}
            <button className="p-[10px] text-[30px] bg-[#FCFCFD] rounded-lg text-[#FF9E16] hover:bg-[#FF9E16] hover:text-white">
              <LiaMarsStrokeSolid />
            </button>
          </div>
        </div>{" "}
        <div className="w-[380px] bg-[#FFFFFF] px-[25px] py-[50px] rounded-lg">
          <h1 className="text-end text-[80px] font-[700] leading-6 mb-[60px]">
            03
          </h1>
          <h4 className="text-[24px] font-[600] leading-[150%] mb-[14px]">
            Diverse Course Offerings
          </h4>
          <p className="text-[18px] font-[400] leading-[150%] mb-[50px    ]">
            Explore a wide range of design and development courses covering
            various topics.
          </p>
          <div className="pl-[270px]">
            {" "}
            <button className="p-[10px] text-[30px] bg-[#FCFCFD] rounded-lg text-[#FF9E16] hover:bg-[#FF9E16] hover:text-white">
              <LiaMarsStrokeSolid />
            </button>
          </div>
        </div>{" "}
        <div className="w-[380px] bg-[#FFFFFF] px-[25px] py-[50px] rounded-lg">
          <h1 className="text-end text-[80px] font-[700] leading-6 mb-[60px]">
            04
          </h1>
          <h4 className="text-[24px] font-[600] leading-[150%] mb-[14px]">
            Updated Curriculum
          </h4>
          <p className="text-[18px] font-[400] leading-[150%] mb-[50px    ]">
            Access courses with up-to-date content reflecting the latest trends
            and industry practices..
          </p>
          <div className="pl-[270px]">
            {" "}
            <button className="p-[10px] text-[30px] bg-[#FCFCFD] rounded-lg text-[#FF9E16] hover:bg-[#FF9E16] hover:text-white">
              <LiaMarsStrokeSolid />
            </button>
          </div>
        </div>{" "}
        <div className="w-[380px] bg-[#FFFFFF] px-[25px] py-[50px] rounded-lg">
          <h1 className="text-end text-[80px] font-[700] leading-6 mb-[60px]">
            05
          </h1>
          <h4 className="text-[24px] font-[600] leading-[150%] mb-[14px]">
            Practical Projects and Assignments
          </h4>
          <p className="text-[18px] font-[400] leading-[150%] mb-[50px    ]">
            Develop a portfolio showcasing your skills and abilities to
            potential employers.
          </p>
          <div className="pl-[270px]">
            {" "}
            <button className="p-[10px] text-[30px] bg-[#FCFCFD] rounded-lg text-[#FF9E16] hover:bg-[#FF9E16] hover:text-white">
              <LiaMarsStrokeSolid />
            </button>
          </div>
        </div>{" "}
        <div className="w-[380px] bg-[#FFFFFF] px-[25px] py-[50px] rounded-lg">
          <h1 className="text-end text-[80px] font-[700] leading-6 mb-[60px]">
            06
          </h1>
          <h4 className="text-[24px] font-[600] leading-[150%] mb-[14px]">
            Interactive Learning Environment
          </h4>
          <p className="text-[18px] font-[400] leading-[150%] mb-[50px    ]">
            Collaborate with fellow learners, exchanging ideas and feedback to
            enhance your understanding.
          </p>
          <div className="pl-[270px]">
            {" "}
            <button className="p-[10px] text-[30px] bg-[#FCFCFD] rounded-lg text-[#FF9E16] hover:bg-[#FF9E16] hover:text-white">
              <LiaMarsStrokeSolid />
            </button>
          </div>
        </div>
      </div>
      <h1>Our Courses</h1>
    </div>
  );
};

export default SectionBene;
