// SYED JOHAR ALI SHAH

import React, { useState } from "react";
import { Button, Modal } from "antd";
import Image from "next/image";
import hamburger from "./../../../public/assets/hamburger.png";
import profileDummy from "./../../../public/assets/porfileDummy.png";
import search from "./../../../public/assets/Search.png";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS first
// import "./../../../../../../src/app/globals.css";

const ListOfRole = () => {
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
        <Image
          src="/assets/hamburger.png"
          width={20}
          height={18}
          className="kcndsj"
        />
      </a>
      <Modal
        title={<span className="Lfeujfujfbeujbfwui">List of Roles</span>}
        open={isAddStageOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <section className="flex flex-col justify-start items-start gap-3">
          <div className="flex flex-row justify-start items-center gap-2 px-2  w-[314.414px] h-[39.657px] rounded-md border border-gray-300 bg-white">
            <Image
              src="/assets/Search.png"
              alt="Search Icon"
              width={15}
              height={15}
              className="py-3"
            />
            <input
              placeholder="Search"
              className="text-gray-500 font-sans text-base font-normal"
            />
          </div>

          <div className="w-[315px] h-auto flex-shrink-0 rounded-md border  border-gray-800 ">
            {/* profile */}
            <div
              className=" w-[275px] h-auto flex-shrink-0 rounded-xl bg-white   flex items-center justify-center
"
            >
              <div className="flex flex-row justify-start items-center gap-3 p-3 border-slate-50  w-[220px] ">
                <Image src="/assets/porfileDummy.png" width={25} height={25} />
                <div className="flex  flex-col justify-end items-start ">
                  <p className="text-gray-700 font-sans text-[18px] not-italic font-semibold leading-normal">
                    Project Manager
                  </p>
                  <div className="text-slate-300 font-sans text-[14px]  not-italic font-normal leading-normal">
                    4 Resoucres
                  </div>
                </div>
              </div>
            </div>
            {/*P end */}
            {/* profile */}
            <div
              className=" w-[275px] h-auto flex-shrink-0 rounded-xl bg-white   flex items-center justify-center
"
            >
              <div className="flex flex-row justify-start items-center gap-3 p-3 border-slate-50  w-[220px] ">
                <Image src="/assets/porfileDummy.png" width={25} height={25} />
                <div className="flex  flex-col justify-end items-start ">
                  <p className="text-gray-700 font-sans text-[18px] not-italic font-semibold leading-normal">
                    UI Designer
                  </p>
                  <div className="text-slate-300 font-sans text-[14px]  not-italic font-normal leading-normal">
                    4 Resoucres
                  </div>
                </div>
              </div>
            </div>
            {/*P end */}
            {/* profile */}
            <div
              className=" w-[275px] h-auto flex-shrink-0 rounded-xl bg-white   flex items-center justify-center
"
            >
              <div className="flex flex-row justify-start items-center gap-3 p-3 border-slate-50  w-[220px] ">
                <Image src="/assets/porfileDummy.png" width={25} height={25} />
                <div className="flex  flex-col justify-end items-start ">
                  <p className="text-gray-700 font-sans text-[18px] not-italic font-semibold leading-normal">
                    UI Developer
                  </p>
                  <div className="text-slate-300 font-sans text-[14px]  not-italic font-normal leading-normal">
                    4 Resoucres
                  </div>
                </div>
              </div>
            </div>
            {/*P end */}
            {/* profile */}
            <div
              className=" w-[275px] h-auto flex-shrink-0 rounded-xl bg-white   flex items-center justify-center
"
            >
              <div className="flex flex-row justify-start items-center gap-3 p-3 border-slate-50  w-[220px] ">
                <Image src="/assets/porfileDummy.png" width={25} height={25} />
                <div className="flex  flex-col justify-end items-start ">
                  <p className="text-gray-700 font-sans text-[18px] not-italic font-semibold leading-normal">
                    Tester
                  </p>
                  <div className="text-slate-300 font-sans text-[14px]  not-italic font-normal leading-normal">
                    4 Resoucres
                  </div>
                </div>
              </div>
            </div>
            {/*P end */}
            {/* profile */}
          </div>
        </section>
      </Modal>
    </>
  );
};
export default ListOfRole;
