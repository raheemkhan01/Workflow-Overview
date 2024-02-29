// SYED JOHAR ALI SHAH

"use client";
import React from "react";
import StackedBarChart from "@/Components/Graphs/BarChart/";
// import WorkFlowUserScreen2 from "./../WorkFlowList-2/page";
import ProcurementWorkflowComp from "@/Components/WorkFlowListPages/ProcurementWorkflow";
import Projectmanager from "@/Components/WorkFlowListPages/PopupsListOfPM"; 
import Image from "next/image";
// import plus from "./../../../../../../public/assets/plusSign.png";
import ListOfRole from "@/Components/WorkFlowListPages/rolelist";

export default function WorkFlowUserScreen({ click }) {
    return (
        <>
            <main className=" bg-gray-200 p-2">
                <div className="text-black font-sans text-3xl not-italic font-semibold  mb-2 px-1  ">
                    WorkFlow Management{" "}
                </div>
                <div className="flex  items-center justify-start w-full h-[56px]  bg-white px-4 py-6 flex-shrink-0 gap-3 rounded mb-3">
                    <div className="flex flex-row  rounded p-2 items-center bg-gray-100 gap-3">
                        <div
                            className="flex px-[7px] py-1 gap-[6px] rounded-sm bg-white shadow-sm  cursor-pointer"
                            onClick={click}
                        >
                            Procurement Overview
                        </div>
                        <div
                            className="flex px-[7px] py-1 items-center gap-[6px] rounded-sm bg-slate-100 cursor-pointer"
                            onClick={click}
                        >
                            Resource Pool{" "}
                        </div>
                    </div>
                </div>
                <section className="w-auto border rounded-sm  bg-white p-5 leading-10 mb-3">
                    <div className="flex  flex-row justify-between items-center">
                        <div className="text-black font-sans  text-lg not-italic font-semibold ">
                            Procurement Solution{" "}
                        </div>
                        {/* <Image src={hamburger} width={20} height={18} /> */}
                        {/* <ListOfRole /> */}
                    </div>
                    <div className="text-gray-400 font-sans not-italic text-sm font-normal py-3">
                        Created By Siddhesh.D
                    </div>
                    <p className="text-black text-start font-sans text-sm not-italic font-normal py-3">
                        Procurement is the systematic process of identifying, acquiring, and
                        managing the goods, services, or works needed by an organization to
                        meet its operational requirements.
                    </p>
                </section>

                {/* Procurement Workflow */}
                <section className="flex flex-col w-auto h-auto border rounded">
                    <div className=" flex flex-row justify-between py-2 items-center w-auto bg-white  px-5">
                        <p className="text-black font-sans text-lg not-italic font-semibold ">
                            Procurement Workflows{" "}
                        </p>

                        <ListOfRole />
                    </div>
                    {/* decelopment WorkFlow */}
                    <section className="flex flex-wrap justify-start items-center bg-white h-[300px] gap-3 px-7 ">
                        <ProcurementWorkflowComp />
                        <ProcurementWorkflowComp />
                        <div>
                            <div className=" flex flex-row w-[256px] h-[251px] text-center gap-3 shadow-md rounded-sm p-3  justify-center items-center">
                                <div className="flex flex-row justify-center items-center gap-[10px] px-1 py-4 border rounded-sm border-blue-200 bg-blue-100 w-[150px] h-[22px]  cursor-pointer  ">
                                    <Image src="/assets/plusSign.png" width={18} height={20} />
                                    <p className="text-black font-sans text-[16px] not-italic font-medium leading-6 flex items-center justify-center ">
                                        Add workflow
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* decelopment workflwo */}
                    {/* Graph Sections */}
                    <section className=" flex flex-col mt-3 pt-3 bg-white">
                        <div className="flex flex-row justify-between py-2 items-center w-auto bg-white mb-3  px-5">
                            <p className="text-black font-sans text-lg not-italic font-semibold  ">
                                Procurement Resources
                            </p>
                            <button className="flex flex-row px-2 py-4 justify-center items-center gap-2 border rounded-sm border-slate-200 bg-gray-50 shadow-sm text-slate-400 text-center font-sans text-sm not-italic font-normal leading-5 h-[22px]">
                                Monthly{" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="17"
                                    viewBox="0 0 16 17"
                                    fill="none"
                                >
                                    <path
                                        d="M4 6.5L8 10.5L12 6.5"
                                        stroke="#8C8C8C"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        <p className="text-gray-400  font-sans text-base not-italic font-normal leading-normal px-5">
                            Resources working on Procurement
                        </p>

                        <div className="flex flex-col justify-start items-end">
                            <p className="flex flex-row justify-start  items-center text-black font-sans text-xs not-italic font-normal leading-normal   w-28 gap-1">
                                <span>
                                    <Image src="/assets/dimlightblue.png" width={8} height={8} />
                                </span>
                                Pending Task
                            </p>
                            <p className="text-black font-sans text-xs not-italic font-normal leading-normal flex  justify-items-center gap-1   flex-row justify-start  items-center w-28">
                                <span className="flex">
                                    <img src="/assets/lightblue.png" width={8} height={8} />
                                </span>
                                In Progress Tak
                            </p>
                            <p className="flex flex-row justify-start  items-center text-black font-sans text-xs not-italic font-normal leading-normal   w-28 gap-1">
                                <span>
                                    <img src="/assets/darkbluepoint.png" width={8} height={8} />
                                </span>
                                Completed Task
                            </p>
                        </div>
                    </section>
                    <div className=" bg-white">
                        <StackedBarChart />
                    </div>
                </section>
            </main>
        </>
    );
}