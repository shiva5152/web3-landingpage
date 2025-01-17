import React from "react";
import Revenue from "./Revenue";
import Chart from "./Chart";
import Roadmap from "./Roadmap";
import Team from "./Team";
import Partnership from "./Partnership";
import Image from "next/image";
import Faq from "./Faq";
import Footer from "./Footer";

const Last = () => {
  return (
    <div className="items-center self-stretch shadow-sm flex flex-col pb-0 px-16 max-md:px-5">
      <div className="flex w-full max-w-[1200px] flex-col items-stretch mb-12 max-md:max-w-full max-md:mb-10">
        <Revenue />
        <Chart />
        <Roadmap />
        <Team />
        {/* <Partnership /> */}
        <Faq />
        {/* <Faq2 /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Last;
