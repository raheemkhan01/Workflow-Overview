"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import useProject, { project, setProject } from "@/HOC/Project/Project";

const AddCheckList = () => {
  // HOC
  const [project, setProject] = useProject({});

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

  console.log("project");
  console.log(project);

  return (
    <>
      <a className="text-black cursor-pointer " onClick={showAddStage}>
        <PlusOutlined /> Add Checklist
      </a>
      <Modal
        // title="Basic Modal"
        open={isAddStageOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        closable={false}
      >
        <section className="flex flex-col justify-center items-start  ">
          <p className="w-auto text-black font-sans text-base not-italic font-medium leading-6 p-5">
            Add CheckList{" "}
          </p>
          <div className="">
            <div className=" h-[1px] w-auto bg-slate-200"></div>

            <div className="flex p-5 flex-row items-center gap-3 m-2 justify-start">
              <div>
                <input type="checkbox" />
              </div>
              <span className="text-black  font-sans text-xs not-italic font-normal leading-7">
                Use Case Document is Stitched in netlify site in Use Case
                Matrix.
              </span>
            </div>
            <div className="bg-slate-200 h-[1px]  w-auto"></div>
            <div className="flex p-5 flex-row items-center gap-3 m-2 justify-start">
              <div>
                <input type="checkbox" />
              </div>
              <span className="text-black  font-sans text-xs not-italic font-normal leading-7">
                Screens Design is Stitched in netlify site in Use Case matrix.
              </span>
            </div>
            <div className="bg-slate-200 h-[1px] w-auto"></div>
            <div className="flex p-5 flex-row items-center gap-3 m-2 justify-start">
              <div>
                <input type="checkbox" />
              </div>
              <span className="text-black  font-sans text-xs not-italic font-normal leading-7">
                Funtional Design Review meeting is done with Technical Team.
              </span>
            </div>
            <div className="bg-slate-200 h-[1px] w-auto"></div>
            <div className="flex p-5 flex-row items-center gap-3 m-2 justify-start">
              <div>
                <input type="checkbox" />
              </div>
              <span className="text-black  font-sans text-sm not-italic font-normal leading-7">
                Add Checklist
              </span>
            </div>
            <div className="bg-slate-200 h-[1px] w-auto"></div>

            <div className="p-5">
              <img src="/Images/Plus.png" />
            </div>
            <div className="bg-slate-200 h-[1px] w-auto"></div>
          </div>
          <div>
            <button className=" rounded-sm border border-blue-500 bg-blue-500 w-20 h-8 text-white font-sans text-sm not-italic font-normal leading-7 m-5 ">
              Submit
            </button>
          </div>
        </section>
      </Modal>
    </>
  );
};
export default AddCheckList;
