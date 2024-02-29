import React, { useState } from "react";
import { Button } from "antd";
import SelectTamplate from "./SelectTamplate";
import DropDownSelectSaveWFL from "./../WorkFlowListPages/DropDownSelectSaveWFL";

const WorkflowCard = ({ title, onSelect }) => {
  const handleClick = () => {
    if (onSelect) {
      onSelect(title); // Pass the title as an identifier
    }
  };

  return (
    <section className="relative flex flex-col w-[256px] h-[316px] justify-between text-center gap-3 shadow-lg rounded-lg border border-slate-50 p-3 bg-white">
      <p className="text-blue-600 font-sans text-sm not-italic font-semibold leading-7">
        {title} WorkFlow
      </p>
      <p className="text-black font-sans text-sm not-italic font-bold leading-normal"></p>
      <Button
        type="default"
        className="text-blue-500 font-roboto font-medium text-base leading-6 border-none"
        onClick={handleClick}
      >
        Select
      </Button>
    </section>
  );
};

export const SelectTemplateDropDown = ({ title, onSelect, onCloseModal, onSave ,setunSavedTamplate }) => {
  const [showWrongImage, setShowWrongImage] = useState(false);

  
  const [selectedWorkflow, setSelectedWorkflow] = useState(null);

  const handleSelect = (workflowType) => {
    setSelectedWorkflow(workflowType); // Set the selected workflow type
  };

  const handleRemoveClick = () => {
    // Implement the logic to remove the specific card
    // For now, let's just log a message
    console.log("Card removed!");
  };
  const handleSaveButtonClick = () => {
    if (onCloseModal) {
      onCloseModal(); // Call the onCloseModal function passed from the parent
    }
    if (onSave && selectedWorkflow) {
      onSave(selectedWorkflow); // Pass the selected workflow data to the onSave function
    }  };
 


  return (
    <section className="flex flex-row justify-center items-center  bg-slate-100 gap-3 w-auto h-[350px]  p-5">
      {!selectedWorkflow && (
        <>
          <WorkflowCard title="Development" onSelect={handleSelect} />
          <WorkflowCard title="Development" onSelect={handleSelect} />
        </>
      )}

      {/* Render DropDownSelectSaveWFL only for the specific workflow */}
      {selectedWorkflow === "Development" && (
        <>
        {/* Section div containing your component */}
        <SelectTamplate onCloseModal={onCloseModal} setunSavedTamplate={setunSavedTamplate}/>
      </>
      )}

      {/* Optional: Render a button for creating a new template */}
      
    </section>
  );
};


