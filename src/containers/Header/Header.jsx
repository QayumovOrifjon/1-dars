import React from "react";
import HeaderTopComp from "../../components/HeaderTopComp";
import HeaderBottComp from "../../components/HeaderBottComp";

const Header = () => {
  return (
    <div className="container mx-auto py-5 space-y-5">
      <HeaderTopComp />
      <HeaderBottComp />
    </div>
  );
};

export default Header;
