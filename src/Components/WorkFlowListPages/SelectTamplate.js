import React from "react";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import StackedBarChart from "./../Graphs/piechart";
// import StackedBarChart from '../Graphs/BarChart';

const SelectTamplate = ({ onCloseModal, onSave, setunSavedTamplate }) => {
  const handleRemoveClick = () => {
    // Implement the logic to remove the specific card
    // For now, let's just log a message
    console.log("Card removed!");
  };

  const router = useRouter();

  const handleSaveButtonClick = () => {
    if (onCloseModal) {
      onCloseModal(); // Call the onCloseModal function passed from the parent
    }
    // if (onSave && selectedWorkflow) {
    //   onSave(selectedWorkflow); // Pass the selected workflow data to the onSave function
    // }
    if (setunSavedTamplate) {
      setunSavedTamplate(true);
    }
  };

  const handleClick =() =>{
    router.push("/main/projects/developmentUseCases"); // Change '/new-route' to the desired route path

  }
  return (
    <div className="relative flex flex-row justify-end items-center gap-7 w-auto h-[350px] p-5 px-3">

     
      <a className="relative flex flex-col w-[256px] h-[316px] justify-center items-center text-center gap-5 shadow-md rounded-lg p-3 bg-white" onClick={handleClick}>
        {/* Wrong icon at the top-right corner of the section (outside of the card) */}

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
          type="default"
          className="text-blue-500 font-roboto font-medium text-base leading-6 border-none"
          onClick={handleSaveButtonClick}
        >
          Save
        </Button>
      </a>
    </div>
  );
};

export default SelectTamplate;
