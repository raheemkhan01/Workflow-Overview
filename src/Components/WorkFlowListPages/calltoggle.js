// SYED JOHAR ALI SHAH
// ToggleBtn.js
"use client"
import React, { useState } from "react";
import WorkFlowUserScreen from "../../app/main/projects/workFlowListPages/page";
import WorkFlowUserScreen2 from "../../app/main/projects/workFlowList2/page";

const ToggleBtn = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      {open ? (
        <WorkFlowUserScreen2 open={open} click={handleClick} />
      ) : (
        <WorkFlowUserScreen click={handleClick} />
      )}
    </div>
  );
};

export default ToggleBtn;
