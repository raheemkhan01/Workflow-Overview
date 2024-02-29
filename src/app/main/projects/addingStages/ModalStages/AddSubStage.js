"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { PlusOutlined, PlusCircleOutlined } from "@ant-design/icons";

const AddSubStage = () => {
  const [isAddStageOpen, setIsAddStageOpen] = useState(false);

  const [subStage, setSubStage] = useState([
    "Create Usecase Document",
    "Create Screen Design",
    "Updating Usecase in Netlifi",
  ]);

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
      <a className="text-black cursor-pointer" onClick={showAddStage}>
        <PlusOutlined /> Add Sub Stages
      </a>
      <Modal
        className="w-full"
        // title="Basic Modal"
        open={isAddStageOpen}
        onSubmit={handleOk}
        onCancel={handleCancel}
        footer={null}
        closable={false}
      >
        {
          <section className="flex flex-col justify-center items-start  ">
            <p className="w-auto text-black font-sans text-base not-italic font-medium leading-6 p-5">
              Add Substage{" "}
            </p>
            <div className="w-full">
              <div className=" h-[1px] w-auto bg-slate-200"></div>

              {/* subStage */}

              <div className="w-full">
                {subStage.map((stage, index) => (
                  <div>
                    <div
                      className="flex p-5 flex-row items-center gap-3 m-2 justify-start"
                      key={index}
                    >
                      <div>
                        <input type="checkbox" className="cursor-pointer" />
                      </div>
                      <div>
                        <span className="text-black font-sans text-xs not-italic font-normal leading-7">
                          {stage}
                        </span>
                      </div>
                    </div>
                    <div className="bg-slate-200 h-[1px] w-full"></div>
                  </div>
                ))}
              </div>

              <div className="p-5">
                <PlusCircleOutlined className="text-[#D9D9D9] cursor-pointer" />
              </div>

              <div className="bg-slate-200 h-[1px] w-auto"></div>
            </div>
            <div>
              <button className=" rounded-sm border border-blue-500 bg-blue-500 w-20 h-8 text-white font-sans text-sm not-italic font-normal leading-7 m-5 ">
                Submit
              </button>
            </div>
          </section>
        }
      </Modal>
    </>
  );
};
export default AddSubStage;
