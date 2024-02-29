import React from "react";
import { SelectTemplateDropDown } from "./SelectTemplateDropDown";

const SavedComponentDisplay = ({ savedWorkflow }) => {
    if (!savedWorkflow) {
        return null; // Or you can return a placeholder or loading indicator
      }
  return (
    <div className="saved-component">
      {/* Render the saved workflow component */}
      <section className="saved-workflow">
        <SelectTemplateDropDown/>
      </section>
      <section className="relative flex flex-col w-[256px] h-[316px] justify-center text-center gap-3 shadow-lg p-3 items-center bg-white rounded-lg border border-slate-100">
          <Button
            type="default"
            className="text-black font-roboto font-medium text-base leading-6"
          >
            Create New Template
          </Button>
        </section>
    </div>
  );
};

export default SavedComponentDisplay;
