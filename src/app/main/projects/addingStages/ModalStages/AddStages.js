"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const SubStage = () => {
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
      <a className="text-blue-600 cursor-pointer" onClick={showAddStage}>
        <PlusOutlined /> Add Stage
      </a>
      <Modal
        // title="Basic Modal"
        open={isAddStageOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {
          <div className="flex flex-col justify-center items-start w-auto gap-0 border border-slate-100 border-t-2 bg-white">
            <div className="text-blue-800 font-sans text-sm not-italic font-normal leading-7 px-2 w-auto h-auto border-slate-500 rounded-sm   bg-white ">
              Stage 4
            </div>
            <div>
              <div className=" text-pink-300  font-sans text-sm font-normal leading-6 flex-1  w-[470px] h-auto flex px-[9px] py-3 items-center gap-1  rounded-sm bg-white border border-slate-50">
                Stage Name
              </div>
              <div className=" text-slate-300 font-sans text-sm font-normal not-italic leading-6  w-auto h-auto flex px-6 py-3 items-center gap-1  rounded-sm  border border-slate-100 bg-white ">
                +Add Sub Stages name
              </div>
              <div className="text-slate-300 font-sans text-sm font-normal not-italic leading-6  w-auto h-auto flex px-10 py-3 items-center gap-1  rounded-sm  bg-white border border-slate-100">
                +Add Check Lists
              </div>
            </div>
            <button className="flex  items-center justify-center m-5 ml-96 px-1 py-4 border rounded border-blue-500 bg-blue-500 w-[57px] h-8 hover:bg-blue-300">
              Add
            </button>
          </div>
        }
      </Modal>
    </>
  );
};
export default SubStage;
