// SYED JOHAR ALI SHAH
import React, { useState } from "react";
import Image from "next/image";

import wrong from "../../../public/assets/wrong.png";

import StackedBarChart from "./../../Components/Graphs/piechart";

const ProcurementWorkflowComp = ({ onRemove }) => {
  const [showWrongImage, setShowWrongImage] = useState(false);

  const handleRemoveClick = () => {
    // Call the parent's onRemove function
    if (onRemove) {
      onRemove();
    }
  };

  const handleComponentClick = () => {
    // Toggle the visibility of the wrong image
    setShowWrongImage(!showWrongImage);
  };

  return (
    <>
      {/* Section div containing your component */}
      <section
        className="relative flex flex-col w-[256px] h-auto text-center gap-3 shadow-md rounded-sm p-3"
        onClick={handleComponentClick}
      >
        {/* Wrong icon at the top-right corner of the section */}
        {showWrongImage && (
          <div
            className="absolute top-0 right-0 cursor-pointer"
            onClick={handleRemoveClick}
          >
            <Image src="/assests/wrong.png" width={25} height={25} />
          </div>
        )}

        {/* Rest of your component inside the section div */}
        <p className="text-blue-600 font-sans text-sm not-italic font-semibold leading-7">
          Development WorkFlow
        </p>
        <p className="text-black font-sans text-sm not-italic font-bold leading-normal">
          Total Usecases - 30
        </p>
        <p className="text-slate-300 font-sans text-sm not-italic font-semibold leading-normal">
          Task Completed - 44%
        </p>
        <p className="flex justify-center items-center">
          <StackedBarChart />
        </p>
      </section>
    </>
  );
};

export default ProcurementWorkflowComp;
