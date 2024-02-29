"use client"
import React, { useState, useEffect } from "react";
import { Steps, Tooltip } from "antd";
import { TiTick } from "react-icons/ti";
// import { UseCase1Comments } from "../useCaseWorkViewDetailsComments/UseCaseComments";
// import { UseCase2Comments } from "../useCaseWorkViewDetailsComments/UseCaseComments";
// import { UseCase3Comments } from "../useCaseWorkViewDetailsComments/UseCaseComments";
// import CustomPopover from "./customPopover";

import Mock from "@/Components/AddUsecaseStepperForms/Mock";
import ActualDevelopmentForm from "@/Components/AddUsecaseStepperForms/ActualDevelopmentForm";
import CICDTestForm from "@/Components/AddUsecaseStepperForms/CI-CD-TestForm";
import StageReleaseForm from "@/Components/AddUsecaseStepperForms/Stage-ReleaseForm";
import PublishandOperateForm from "@/Components/AddUsecaseStepperForms/PublishandOperateForm";
import RequirementForm from "@/Components/AddUsecaseStepperForms/RequirementForm";

Mock


const Stepper = ({ popoverVisible, setWorkFlowView }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  const handleContentChange = () => {
    switch (currentStep) {
      case 0:
        return <RequirementForm />;
      case 1:
        return <Mock />;
      case 2:
        return <ActualDevelopmentForm />;
      case 3:
        return <CICDTestForm />;
      case 4:
        return <StageReleaseForm />;
      case 5:
        return <PublishandOperateForm />;
    }
  };

  const steps = [
    { title: "Requirement" },
    { title: "Mock Development" },
    { title: "Actual Development" },
    { title: "CI/CD Test" },
    { title: "Stage / Release" },
    { title: "Publish and operate" },
  ];

  return (
    <>
    <div className=" bg-white px-4 py-4 ">
          <h1 className="flex w-[100%] h-7 flex-col justify-center text-black  text-2xl non-italic font-semibold leading-snug">
            Procurement (Development workflow)
          </h1>
          <p>Form pages are used to collect or verify information to users, and basic forms are common in scenarios where there are fewer data items.</p>
        </div>
     <div className="flex w-100% ">

     <div className="w-20% h-screen ml-4 mt-4">
     <Steps
        current={currentStep}
        onChange={handleStepClick}
        direction="vertical"
        className="bg-white w-[250px] h-[100%] gap-4 p-5 justify-center"
      >
        {steps.map((step, index) => (
          <Steps.Step
            key={index}
            title={step.title}
            icon={index < currentStep ? <TiTick size={24} fontWeight={1}/> : null}
          />
        ))}
      </Steps>
     </div>
     

      <div className="my-[5rem] w-100% ml-6 p-8 mt-4 bg-white">{handleContentChange()}</div>
     </div>
      

      
    </>
  );
};

export default Stepper;
