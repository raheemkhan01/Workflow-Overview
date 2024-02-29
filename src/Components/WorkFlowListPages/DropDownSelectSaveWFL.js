"use client"
import React, { useState } from "react";
import Image from "next/image";
import wrong from "../../../public/assets/wrong.png";
import StackedBarChart from "../Graphs/piechart";
import { Button } from "antd";

const DropDownSelectSaveWFL = ({onSave}) => {
  const [showWrongImage, setShowWrongImage] = useState(false);

  const handleRemoveClick = () => {
    // Implement the logic to remove the specific card
    // For now, let's just log a message
    console.log("Card removed!");
  };

  const handleComponentClick = () => {
    // Toggle the visibility of the wrong image
    setShowWrongImage(!showWrongImage);
  };

  const handleSaveClick = () => {
    // Call the onSave callback function passed from the parent component
    onSave();
  };
  return (
    <>
      {/* Section div containing your component */}
      <div className="relative flex flex-row justify-end items-center bg-slate-100 gap-7 w-auto h-[350px] p-5 px-3">
        <section
          className="relative flex flex-col w-[256px] h-[316px] justify-center items-center text-center gap-5 shadow-md rounded-lg p-3 bg-white"
          onClick={handleComponentClick}
        >
          {/* Wrong icon at the top-right corner of the section (outside of the card) */}
          {showWrongImage && (
            <div
              className="absolute top-0 right-0 cursor-pointer"
              onClick={handleRemoveClick}
            >
              <Image src={wrong} width={25} height={25} />
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
          <Button
          // onClick={handleSaveClick}
            type="default"
            className="text-blue-500 font-roboto font-medium text-base leading-6 border-none"
          >
            Save
          </Button>
        </section>
      </div>
    </>
  );
};

export default DropDownSelectSaveWFL;
