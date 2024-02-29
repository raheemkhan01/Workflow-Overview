import React, { useState } from "react";
import { Button, message, Steps, Popover, theme } from "antd";

import { UseCase1Comments } from "../useCaseWorkViewDetailsComments/UseCaseComments";
import { UseCase2Comments } from "../useCaseWorkViewDetailsComments/UseCaseComments";

const { Step } = Steps;

const Step1Content = () => (
    <div className="">
        <UseCase1Comments />{" "}
    </div>
);

const Step2Content = () => (
    <div>
        <UseCase2Comments />{" "}
    </div>
);

const Step3Content = () => (
    <div>
        <UseCase1Comments />{" "}
    </div>
);

const steps = [
    {
        content: <Step1Content />,
        popoverContent: "Requirements",
    },
    {
        content: <Step2Content />,
        popoverContent: "Requirements",
    },
    {
        content: <Step1Content />,
        popoverContent: "Requirements",
    },
    {
        content: <Step1Content />,
        popoverContent: "Requirements",
    },
    {
        content: <Step1Content />,
        popoverContent: "Requirements",
    },
    {
        content: <Step1Content />,
        popoverContent: "Requirements",
    },
];
const popoverStyle = () => ({
    position: "fixed",
    border: "1px solid #399EF7",
    borderRadius: "5px",
});
const WorkViewDfrnt = ({ popoverVisible }) => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);

    const onChange = (value) => {
        console.log("onChange:", value);
        setCurrent(value);
    };
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item, index) => ({
        key: item.title,
        title: (
            <Popover
                content={item.popoverContent}
                placement={index % 2 <= 0 ? "top" : "bottom"}
                visible={popoverVisible}
                overlayStyle={popoverStyle()}
                className="my-6"
            >
                <span>
                    <div className="min-h-6 border invisible	relative"></div>
                </span>
            </Popover>
        ),
    }));
    const contentStyle = {
        // textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 100,
    };
    return (
        <>
            <Steps
                current={current}
                className="px-6"
                onChange={onChange}
                items={items}
            />
            <div style={contentStyle}>{steps[current].content}</div>
            <div
                style={{
                    marginTop: 24,
                }}
            >
                {current < steps.length - 1 && (
                    <Button
                        className="bg-blue-400 text-white rounded-lg mx-2"
                        onClick={() => next()}
                    >
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button
                        className="bg-blue-400 text-white rounded-lg mx-2"
                        onClick={() => message.success("Processing complete!")}
                    >
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button
                        className="bg-blue-400 text-white rounded-lg mx-2"
                        onClick={() => prev()}
                    >
                        Previous
                    </Button>
                )}
            </div>
        </>
    );
};

export default WorkViewDfrnt;
