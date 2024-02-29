"use client";

import { TbTriangleInvertedFilled } from "react-icons/tb";
import { Button, Modal } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../Context/Slice";

export default function Addresources() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const userDispatch = () => {
    dispatch(addUser(name));
  };

  const [isResourcPoolmodelOpen, setIsResourcPoolmodelOpen] = useState(false);
  const showResourcPoolmodel = () => {
    setIsResourcPoolmodelOpen(true);
  };
  const handleOk = () => {
    setIsResourcPoolmodelOpen(false);
  };
  const handleCancel = () => {
    setIsResourcPoolmodelOpen(false);
  };

  return (

    <div className="main flex flex-col bg-white w-[1218px] rounded-lg  ">
      <h2 className="ml-4 mt-5 text-black font-segoe-ui text-2xl font-semibold leading-24">
        Resource Pool
      </h2>

      <div className="flex mt-8">
        <div className="flex flex-col items-start ml-4 gap-14 justify-center">
          <h3 className="text-black font-segoe-ui text-base font-normal leading-6 mr-10">
            Project Manager
          </h3>
          <h3 className="text-black font-segoe-ui text-base font-normal leading-6 mr-10">
            UI Designer
          </h3>
          <h3 className="text-black font-segoe-ui text-base font-normal leading-6 mr-10">
            UI Developer
          </h3>
          <h3 className="text-black font-segoe-ui text-base font-normal leading-6 mr-10">
            API Developer
          </h3>
          <h3 className="text-black font-segoe-ui text-base font-normal leading-6 mr-10">
            Tester
          </h3>
          <h3 className="text-black font-segoe-ui text-base font-normal leading-6 mr-10">
            UX Researcher
          </h3>
          <h3 className="text-black font-segoe-ui text-base font-normal leading-6 mr-10">
            CI/CD
          </h3>
        </div>
        <div className="div flex flex-col gap-4">
          <div className=" flex flex-row">
            <div className="input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ">
              <a
                href="#"
                className="flex justify-between items-center"
                onClick={showResourcPoolmodel}
              >
                <span className=" text-neutral-5 font-segoe-ui text-base italic font-semibold leading-6 text-gray-300">
                  Add Project Manager
                </span>
                <TbTriangleInvertedFilled className=" text-gray-300 text-sm" />
              </a>
              <Modal
                open={isResourcPoolmodelOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={1000}
              >
                <DisplayUsers />
              </Modal>
            </div>
            <div className=" text-gray-300 rounded-md bg-neutral-1 shadow-md px-6 py-5">
              <span>00</span>
            </div>
          </div>
          <div className=" flex flex-row">
            <div className="input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ">
              <a
                href="#"
                className="flex justify-between items-center"
                onClick={showResourcPoolmodel}
              >
                {" "}
                <span className=" text-neutral-5 font-segoe-ui text-base italic font-semibold leading-6 text-gray-300">
                  Add UI Designer
                </span>
                <TbTriangleInvertedFilled className=" text-gray-300 text-sm" />
              </a>
            </div>
            <div className=" text-gray-300 rounded-5 border border-solid border-neutral-5 bg-neutral-1 shadow-md px-6 py-5">
              <span>00</span>
            </div>
          </div>
          <div className=" flex flex-row">
            <div className="input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ">
              <a
                href="#"
                className="flex justify-between items-center"
                onClick={showResourcPoolmodel}
              >
                {" "}
                <span className=" text-neutral-5 font-segoe-ui text-base italic font-semibold leading-6 text-gray-300">
                  Add UI Developer
                </span>
                <TbTriangleInvertedFilled className=" text-gray-300 text-sm" />
              </a>
            </div>
            <div className=" text-gray-300 rounded-5 border border-solid border-neutral-5 bg-neutral-1 shadow-md px-6 py-5">
              <span>00</span>
            </div>
          </div>
          <div className=" flex flex-row">
            <div className="input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ">
              <a
                href="#"
                className="flex justify-between items-center"
                onClick={showResourcPoolmodel}
              >
                {" "}
                <span className=" text-neutral-5 font-segoe-ui text-base italic font-semibold leading-6 text-gray-300">
                  Add API Developer
                </span>
                <TbTriangleInvertedFilled className=" text-gray-300 text-sm" />
              </a>
            </div>
            <div className=" text-gray-300 rounded-5 border border-solid border-neutral-5 bg-neutral-1 shadow-md px-6 py-5">
              <span>00</span>
            </div>
          </div>
          <div className=" flex flex-row">
            <div className="input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ">
              <a
                href="#"
                className="flex justify-between items-center"
                onClick={showResourcPoolmodel}
              >
                {" "}
                <span className=" text-neutral-5 font-segoe-ui text-base italic font-semibold leading-6 text-gray-300">
                  Add Tester
                </span>
                <TbTriangleInvertedFilled className=" text-gray-300 text-sm" />
              </a>
            </div>
            <div className=" text-gray-300 rounded-5 border border-solid border-neutral-5 bg-neutral-1 shadow-md px-6 py-5">
              <span>00</span>
            </div>
          </div>
          <div className=" flex flex-row">
            <div className="input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ">
              <a
                href="#"
                className="flex justify-between items-center"
                onClick={showResourcPoolmodel}
              >
                {" "}
                <span className=" text-neutral-5 font-segoe-ui text-base italic font-semibold leading-6 text-gray-300">
                  Add UX Researcher
                </span>
                <TbTriangleInvertedFilled className=" text-gray-300 text-sm" />
              </a>
            </div>
            <div className=" text-gray-300 rounded-5 border border-solid border-neutral-5 bg-neutral-1 shadow-md px-6 py-5">
              <span>00</span>
            </div>
          </div>
          <div className=" flex flex-row mb-5">
            <div className="input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ">
              <a
                href="#"
                className="flex justify-between items-center"
                onClick={showResourcPoolmodel}
              >
                {" "}
                <span className=" text-neutral-5 font-segoe-ui text-base italic font-semibold leading-6 text-gray-300">
                  Add CI/CD
                </span>
                <TbTriangleInvertedFilled className=" text-gray-300 text-sm" />
              </a>
            </div>
            <div className=" text-gray-300 rounded-5 border border-solid border-neutral-5 bg-neutral-1 shadow-md px-6 py-5">
              <span>00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="btn relative bg-white mb-10">
        <a href="#">
          <Link href='/main/projects/addedResources' className=" relative left-[1132px] top-6 flex  py-1  px-4 justify-center items-center   bg-blue-500 text-white bg-primary-6   ">
            Next
          </Link>
        </a>
      </div>
    </div>
  );
}
