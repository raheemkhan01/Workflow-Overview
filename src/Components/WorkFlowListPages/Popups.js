// SYED JOHAR ALI SHAH

"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const AddCheckList = () => {
  const [isAddStageOpen, setIsAddStageOpen] = useState(false);
  const showAddStage = () => {
    setIsAddStageOpen(true);
  };
  const handleOk = () => {
    setIsAddStageOpen(false);
  };
  const handleCancel = () => {
    setIsAddStageOpen(false);
  };
  return (
    <>
      <a className="text-black cursor-pointer " onClick={showAddStage}>
        Add WorkFlow
      </a>
      <Modal
        // title="Basic Modal"
        open={isAddStageOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex flex-col w-[256px] h-auto text-center gap-3 shadow-md rounded-sm p-3">
          <p className="text-blue-600 font-sans text-sm not-italic font-semibold leading-7">
            Develpoment WorkFlow
          </p>
          <p className="text-black font-sans text-sm not-italic  font-bold leading-normal">
            Total Usecases - 30
          </p>
          <p className="text-slate-300 font-sans text-sm not-italic  font-semibold leading-normal">
            Task Completed - 44%
          </p>
          <p className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="108"
              height="108"
              viewBox="0 0 108 108"
              fill="none"
            >
              <path
                d="M108 54C108 83.8234 83.8234 108 54 108C24.1766 108 0 83.8234 0 54C0 24.1766 24.1766 0 54 0C83.8234 0 108 24.1766 108 54ZM21.376 54C21.376 72.0177 35.9823 86.624 54 86.624C72.0177 86.624 86.624 72.0177 86.624 54C86.624 35.9823 72.0177 21.376 54 21.376C35.9823 21.376 21.376 35.9823 21.376 54Z"
                fill="#F0F0F0"
              />
              <path
                d="M71.865 104.959C83.7147 100.805 93.7462 92.6511 100.234 81.9002C106.722 71.1493 109.26 58.4735 107.412 46.0535C105.564 33.6334 99.4459 22.2456 90.1094 13.8489C80.773 5.45231 68.8022 0.57186 56.2564 0.0471643L55.3611 21.4554C62.9288 21.7719 70.1496 24.7158 75.7814 29.7807C81.4131 34.8456 85.1038 41.7148 86.2184 49.2066C87.333 56.6985 85.8019 64.3445 81.8885 70.8295C77.9751 77.3145 71.924 82.233 64.7762 84.7388L71.865 104.959Z"
                fill="#096DD9"
              />
            </svg>
            {/* 44% */}
          </p>
        </div>
      </Modal>
    </>
  );
};
export default addWorkFlow;
