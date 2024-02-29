"use client ";
import React, { useState, useEffect } from "react";
import { Tooltip } from "antd";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
import { UseCase1Comments } from "../useCaseWorkViewDetailsComments/UseCaseComments";
import { UseCase2Comments } from "../useCaseWorkViewDetailsComments/UseCaseComments";
import { UseCase3Comments } from "../useCaseWorkViewDetailsComments/UseCaseComments";
 
import CustomPopover from "./customPopover";
 
const Stepper = ({ popoverVisible, setWorkFlowView}) => {
    console.log("PROP" , setWorkFlowView)
    const newRRAY = setWorkFlowView.stages.map(obj => {
        console.log("obj", Object.keys(obj)[0])
        return Object.keys(obj)
    })
    console.log("RRay",newRRAY)
    const steps = [
        {newRRAY},
    ];
    const [currentStep, setCurrentStep] = useState(1); // Initialize currentStep with 1 to make step 1 active by default
    const [complete, setComplete] = useState(false);
    const [childComponent, setChildComponent] = useState(1);
 
    const nextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };
 
    const prevStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };
    const handleStepClick = (stepIndex) => {
        setCurrentStep(stepIndex + 1);
    };
 
    const handleChangeStep = () => {
        // Logic to change child component based on current step
        switch (currentStep) {
            case 1:
                setChildComponent(<UseCase1Comments />);
                break;
            case 2:
                setChildComponent(<UseCase2Comments />);
                break;
            case 3:
                setChildComponent(<UseCase3Comments />);
                break;
            case 4:
                setChildComponent(<UseCase3Comments />);
                break;
            case 5:
                setChildComponent(<UseCase2Comments />);
                break;
            case 6:
                setChildComponent(<UseCase1Comments />);
                break;
            // Add cases for other steps as needed
            default:
                setChildComponent(null);
                break;
        }
    };
 
    useEffect(() => {
        handleChangeStep();
    }, [currentStep]); // Re-run effect when current step changes
 
 
    return (
        <>
            <div className="flex justify-between h-[5rem] w-[100%] ">
                {newRRAY ?.map((step, i) => (
                    <div
                        key={i}
                        className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"
                            } `}
                        onClick={() => handleStepClick(i)}
                    >
                        {/* <Tooltip title={step}
            visible={popoverVisible}
            color="white"
            overlayStyle={popoverStyle()}
            placement={i % 2 === 0 ? "top" : "bottom"}
        >
            </Tooltip> */}
                        <div className="step">
                            {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
                        </div>
                        <CustomPopover
                            content={step}
                            visible={popoverVisible}
                            placement={i % 2 === 0 ? "top" : "bottom"}
                        ></CustomPopover>
 
                        <p className="text-gray-500">
                            <span>
                                <div className="h-6 "></div>
                            </span>
                        </p>
                    </div>
                ))}
            </div>
            <div>
                {!complete && currentStep > 1 && (
                    <button
                        className="btn bg-blue-400 text-white rounded-lg mx-2 p-2"
                        onClick={prevStep}
                    >
                        Previous
                    </button>
                )}
                {!complete && (
                    <button
                        className="btn bg-blue-400 text-white rounded-lg mx-2 p-2"
                        onClick={nextStep}
                    >
                        {currentStep === steps.length ? "Next" : "Next"}
                    </button>
                )}
            </div>
            <div className="my-[5rem]">{childComponent}</div>
        </>
    );
};
 
export default Stepper;
