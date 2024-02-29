// "use client";
import React, { useState } from "react";
import { Button, Steps, Popover } from "antd";

const { Step } = Steps;

const WorkViewDetails = ({ popoverVisible, onPopoverVisibilityChange, stepsNext }) => {
    const [current, setCurrent] = useState(0);


    const onChange = (value) => {
        console.log("onChange:", value);
        setCurrent(value);
    };
    const onNext = () => {
        setCurrent((prevCurrent) => prevCurrent + 1);
    };

    const onPrevious = () => {
        setCurrent((prevCurrent) => prevCurrent - 1);
    };

    const renderStepContent = (index) => (
        <div>
            {/* Add specific content for each step */}
            {index === 0 && <h2>Requirements</h2>}
            {index === 1 && <h2>Mock Development</h2>}
            {index === 2 && <h2>Actual Development</h2>}
            {index === 3 && <h2>CI/CD Tests</h2>}
            {index === 4 && <h2>Staging/Release</h2>}
            {index === 5 && <h2>Publish/Operate</h2>}
        </div>
    );

    const popoverStyle = (index) => ({
        position: "absolute",
        border: "1px solid #399EF7",
        borderRadius: "5px",
    });

    const customColors = {
        process: "#FF5733", // Custom color for the current selected step
        finish: "#33FF57", // Custom color for the completed steps
        wait: "#C0C0C0", // Custom color for the upcoming steps
    };

    return (
        <>
            <Steps
                current={current}
                onChange={onChange}
                className="relative"
                size="small"
            >
                {[0, 1, 2, 3, 4, 5].map((index) => (
                    <Step
                        key={index}
                        className="px-6"
                        title={
                            <Popover
                                content={renderStepContent(index)}
                                placement={index % 2 === 0 ? "top" : "bottom"}
                                className="absolute	"
                                visible={popoverVisible}
                                overlayStyle={popoverStyle(index)}
                            >
                                <span className="my-[2rem]">{`Step ${index + 1}`}</span>
                            </Popover>
                        }
                        status={
                            index === current
                                ? "process"
                                : index < current
                                    ? "finish"
                                    : "wait"
                        }
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <div
                                style={{
                                    background:
                                        customColors[
                                        index === current
                                            ? "process"
                                            : index < current
                                                ? "finish"
                                                : "wait"
                                        ],
                                    width: "6px",
                                    height: "6px",
                                    borderRadius: "50%",
                                }}
                            ></div>
                            {index < 5 && (
                                <div
                                    style={{
                                        background:
                                            customColors[index < current ? "finish" : "wait"],
                                        flex: 1,
                                        width: "2px",
                                    }}
                                ></div>
                            )}
                        </div>
                    </Step>
                ))}
            </Steps>
            <div className="mt-6">
                <Button type="primary" disabled={current === 0} onClick={onPrevious}>
                    Previous
                </Button>
                <Button type="primary" disabled={current === 5} onClick={onNext} className="ml-2">
                    Next
                </Button>
            </div>
        </>
    );
};

export default WorkViewDetails;
