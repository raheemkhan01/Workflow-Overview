"use client";
import AddStage from "./ModalStages/AddStages";
import AddCheckList from "./ModalStages/AddChecklist";
import SubStages from "./ModalStages/AddSubStage";
import Image from "next/image";


import useProject, { project, setProject } from "@/HOC/Project/Project";
import { useState } from "react";
import Link from "next/link";

export default function ProjectStages() {
  const [project, setProject] = useProject([]);

  const [workflow, setWorkflow] = useState({
    name: project.projectName,
    created_by_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    project_id: project.projectId,
    stages: [
      {
        Requirement: {
          tasks: [],
          checklist: [],
        },
      },
      {
        "Mock Development": {
          tasks: [],
          checklist: [],
        },
      },

      {
        "Actual Development": {
          tasks: [],
          checklist: [],
        },
      },
    ],
  });

  console.log("stages");
  // console.log(stage);

  console.log("project");
  console.log(project);

  console.log(workflow.stages);

  return (
    <>
      <div className="flex flex-row ">
        <section className="">
          <div className="text-black font-sans text-base  not-italic font-semibold leading-7 bg-white w-[80vw] flex justify-between items-center  px-4 py-4 flex-shrink-0 m-2  ">
            Stages
          </div>
          {/* <div className="flex flex-row justify-evenly"> */}
          {/* left Conatiner Box  Stages */}
          <section className="h-auto  flex flex-col items-start justify-center flex-shrink-0 self-stretch rounded-sm bg-white  gap-1   m-2 ">
            <div className="text-blue-500 font-sans text-sm  not-italic font-bold leading-6 w-auto h-6 bg-white flex px-5 py-6 flex-col items-start self-stretch shadow-sm  justify-center border-b-4">
              Add Stages
            </div>

            {/* Stages start */}
            <div className="px-6 py-4 ">
              {/* stages */}
              <div>
                {workflow.stages.map((stage, index) => (
                  <div className="border border-blue-100 rounded-lg mb-4">
                    <div
                      className="flex flex-col justify-center items-center w-[612px] h-[133px] gap-2"
                      key={index}
                    >
                      <div className=" text-blue-700 font-sans text-sm not-italic font-medium leading-7 px-2 w-[602px] h-[22] rounded-sm   bg-white ">
                        Stage {index + 1}
                      </div>

                      {Object.entries(stage).map(([stageKey, stageValue]) => (
                        <div key={stageKey}>
                          <div className="text-blue-400  font-sans text-sm font-normal leading-6 flex-1 w-[612px] h-6 flex px-3 py-3 items-center gap-1  rounded-sm bg-white">
                            {stageKey}
                          </div>

                          <div className="text-black font-sans text-sm font-medium not-italic leading-6 w-auto h-8 flex px-6 py-3 items-center gap-1  rounded-sm    bg-white">
                            <SubStages />
                          </div>

                          <div className="text-black font-sans text-sm font-normal not-italic leading-6 w-auto h-10 flex px-10 py-3 items-center gap-1  rounded-sm  bg-white  border-slate-100">
                            <AddCheckList />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border border-blue-100 rounded-lg mb-4 ">
                <div className="flex flex-col justify-center items-center w-[612px] h-[133px] gap-2">
                  <div className="text-blue-700 font-sans text-sm not-italic font-medium leading-7 px-2 w-[602px] h-[22] rounded-sm   bg-white">
                    <AddStage />
                  </div>
                  <div>
                    <div className="text-blue-700 font-sans text-sm not-italic font-medium leading-7 px-2 w-[602px] h-[22] rounded-sm   bg-white"></div>
                    <div className="text-black font-sans text-sm font-medium not-italic leading-6 w-auto h-8 flex px-6 py-3 items-center gap-1  rounded-sm    bg-white "></div>
                    <div className="text-black font-sans text-sm font-normal not-italic leading-6 w-auto h-10 flex px-10 py-3 items-center gap-1  rounded-sm  bg-white  border-slate-100"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* left Conatiner Box  Stages */}
            <button
              className="flex  px-1 py-4 justify-center items-center gap-2
             border rounded border-blue-700 bg-blue-500 hover-blue-700 w-16 h-8 m-5 ml-[85%]"
            >
              Save
            </button>
            <div className="relative">
            <Link href='/main/projects/usecaseForm' className='px-5 py-3 bg-blue-600 text-white aright-0 bottom-0'>Next</Link>
          </div>
          </section>
        </section>
      </div>
      <div className="flex flex-col">
        {/* <SubStages /> */}
        {/* <AddCheckList /> */}
        {/* <AddStage /> */}
      </div>
    </>
  );
}
