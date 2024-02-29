"use client";

import { TbTriangleInvertedFilled } from "react-icons/tb";
import { Button, Modal } from "antd";
import { useState, useEffect } from "react";
import { Projectmanager } from "./popup";
import { ApiDeveloper } from "./popup";
import { CiCdResourcePool } from "./popup";
import { TesterResourcePool } from "./popup";
import { UiDesignResourcePool } from "./popup";
import { UiDeveloperResourcePool } from "./popup";
import { UxResearcher } from "./popup";
//Images
import Pmimage from "../../../public/assets/PM.svg";
import UxDesign from "../../../public/assets/UxDesign.svg"
import Uidev from "../../../public/assets/UiDeveloper.svg"
import Api from "../../../public/assets/ApiDeveloper.svg"
import tester from "../../../public/assets/tester.svg"
import UxResearch from "../../../public/assets/Uxresearch.svg"
import CiCd from "../../../public/assets/ci-cd.svg"

import Image from "next/image";
import axios from "axios";

// API
import api from "@/api";

// HOC
import useProject from "@/HOC/Project/Project";

// useRouter
import { useRouter } from "next/navigation";
import { stringify } from "postcss";

export default function AddResourcePool() {
  const [project, setProject] = useProject({});
  const [selectedItem, setSelectedItem] = useState(null); // State to track the selected item


  const router = useRouter();
  
  const handleItemClick = (role) => {
    setProject({ ...project, resourcePool: role });
    setSelectedItem(role); // Update the selected item
  };


  const postData = {
    project_id: project.projectId,
    team_name: project.projectName,
    created_by_id: "550e8400-e29b-41d4-a716-446655440001",
    roles: project.resourcePool,
  };

  console.log("project");
  console.log(project.resourcePool);

  const handleOnClickNext = () => {
    console.log(project.resourcePool);
    // post Data
    console.log("post Data");
    console.log(postData);

    console.log(JSON.stringify(postData));

    fetch(
      `https://jp2malu3r8.execute-api.us-east-1.amazonaws.com/dev/project/${project.projectId}/team`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers if needed
        },
        body: JSON.stringify(postData),
      }
    )
      .then((response) => {
        // Check if the response status is ok
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response JSON
        return response.json();
      })
      .then((responseData) => {
        // Handle the response if needed
        console.log(responseData);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error sending schema to API:", error);
      });

    router.push("/main/projects/addResource"); // Change '/new-route' to the desired route path
  };

  return (
    <>
      <div className="main flex flex-col bg-white w-full rounded-lg  ">
        <div className="flex mt-8">
          <div className="div flex flex-col gap-4  justify-center ml-8">
            {/* Project Manager */}
            <div className=" flex flex-row items-center">
              <div className="input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ">
                <div
                  className="flex "
                  onClick={() => openModal(setIsProjectManagerModalOpen)}
                >
                  <div className="flex">
                    <Image src={Pmimage} />
                    <div className="flex flex-col justify-start">
                      <h2 className=" text-black font-segoe-ui text-base font-normal leading-6 mr-5 w-32 ">
                        Project Manager
                      </h2>
                      <p className=" pl-2 w-32 text-left">0 Members</p>
                    </div>
                  </div>
                </div>
                <Modal
                  open={isProjectManagerModalOpen}
                  onCancel={handleCloseModals}
                  footer={null}
                  closable={false}
                  width={1000}
                >
                  <Projectmanager onSubmit={handleCloseModals} />
                </Modal>
              </div>
              
            </div>

            {/* UI Designer */}
            <div className=" flex flex-row items-center">
              <div className="input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ">
                <div
                  className="flex justify-between items-center"
                  onClick={() => openModal(setIsUiDesignerModalOpen)}
                >
                  <div className="flex">
                    <Image src={UxDesign} />
                    <div className="flex flex-col justify-start">
                      <h2 className=" text-black font-segoe-ui text-base text-left pl-2 font-normal leading-6 mr-5 w-32 ">
                      Ux Designer
                      </h2>
                      <p className=" pl-2 w-32 text-left">0 Members</p>
                    </div>
                  </div>
                </div>
                <Modal
                  open={isUiDesignerModalOpen}
                  onCancel={handleCloseModals}
                  footer={null}
                  closable={false}
                  width={1000}
                >
                  <UiDesignResourcePool onSubmit={handleCloseModals} />
                </Modal>
              </div>
            </div>

            {/* UI Developer */}
            <div className=" flex flex-row items-center">
              
              <div className="input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ">
                <div
                  className="flex justify-between items-center"
                  onClick={() => openModal(setIsUiDeveloperModalOpen)}
                >
                 <div className="flex">
                    <Image src={Uidev} />
                    <div className="flex flex-col justify-start">
                      <h2 className=" text-black font-segoe-ui text-base text-left pl-2 font-normal leading-6 mr-5 w-32 ">
                      UI Developer
                      </h2>
                      <p className=" pl-2 w-32 text-left">0 Members</p>
                    </div>
                  </div>
                </div>
                <Modal
                  open={isUiDeveloperModalOpen}
                  onCancel={handleCloseModals}
                  footer={null}
                  closable={false}
                  width={1000}
                >
                  <UiDeveloperResourcePool onSubmit={handleCloseModals} />
                </Modal>
              </div>
            </div>

            {/* API Developer */}
            <div className=" flex flex-row items-center">
              <div className="input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ">
                <div
                  className="flex justify-between items-center"
                  onClick={() => openModal(setIsApiDeveloperModalOpen)}
                >
                  <div className="flex">
                    <Image src={Api} />
                    <div className="flex flex-col justify-start">
                      <h2 className=" text-black font-segoe-ui text-base text-left pl-2 font-normal leading-6 mr-5 w-32 ">
                      API Developer
                      </h2>
                      <p className=" pl-2 w-32 text-left">0 Members</p>
                    </div>
                  </div>
                </div>
                <Modal
                  open={isApiDeveloperModalOpen}
                  onCancel={handleCloseModals}
                  footer={null}
                  closable={false}
                  width={1000}
                >
                  <ApiDeveloper onSubmit={handleCloseModals} />
                </Modal>
              </div>
            </div>

            {/* Tester */}
            <div className=" flex flex-row items-center">
              
              <div className="input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ">
                <div
                  className="flex justify-between items-center"
                  onClick={() => openModal(setIsTesterModalOpen)}
                >
                  <div className="flex">
                    <Image src={tester} />
                    <div className="flex flex-col justify-start">
                      <h2 className=" text-black font-segoe-ui text-base text-left pl-2 font-normal leading-6 mr-5 w-32 ">
                      Tester
                      </h2>
                      <p className=" pl-2 w-32 text-left">0 Members</p>
                    </div>
                  </div>
                </div>
                <Modal
                  open={isTesterModalOpen}
                  onCancel={handleCloseModals}
                  footer={null}
                  closable={false}
                  width={1000}
                >
                  <TesterResourcePool onSubmit={handleCloseModals} />
                </Modal>
              </div>
            </div>

            {/* UX Resercher */}
            <div className=" flex flex-row items-center">
              <div className="input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ">
                <div
                  className="flex justify-between items-center"
                  onClick={() => openModal(setIsUxResearcherModalOpen)}
                >
                  <div className="flex">
                    <Image src={UxResearch} />
                    <div className="flex flex-col justify-start">
                      <h2 className=" text-black font-segoe-ui text-base text-left pl-2 font-normal leading-6 mr-5 w-32 ">
                      UX Researcher
                      </h2>
                      <p className=" pl-2 w-32 text-left">0 Members</p>
                    </div>
                  </div>
                </div>
                <Modal
                  open={isUxResearcherModalOpen}
                  onCancel={handleCloseModals}
                  footer={null}
                  closable={false}
                  width={1000}
                >
                  <UxResearcher onSubmit={handleCloseModals} />
                </Modal>
              </div>
              
            </div>

            {/* CI / CD */}
            <div className=" flex flex-row mb-5 items-center">
              <div className="input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ">
                <div
                  className="flex justify-between items-center"
                  onClick={() => openModal(setIsCiCdModalOpen)}
                >
                 <div className="flex">
                    <Image src={CiCd} />
                    <div className="flex flex-col justify-start">
                      <h2 className=" text-black font-segoe-ui text-base text-left pl-2 font-normal leading-6 mr-5 w-32 ">
                      CI/CD Specialist
                      </h2>
                      <p className=" pl-2 w-32 text-left">0 Members</p>
                    </div>
                  </div>
                </div>
                <Modal
                  open={isCiCdModalOpen}
                  onCancel={handleCloseModals}
                  footer={null}
                  closable={false}
                  width={1000}
                >
                  <CiCdResourcePool onSubmit={handleCloseModals} />
                </Modal>
              </div>
            </div>
          </div>
          <div className="Resource">
            <h2>hellow</h2>
          </div>
        </div>

        {/* Next button */}
        <div className="btn relative bg-white mb-10">
          <button
            className=" absolute right-0 top-0   py-1  px-4 bg-blue-500 text-white bg-primary-6"
            onClick={handleOnClickNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
