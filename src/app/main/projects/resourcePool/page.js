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

import axios from "axios";

// API
import api from "@/api";

// HOC
import useProject from "@/HOC/Project/Project";

// useRouter
import { useRouter } from "next/navigation";
import { stringify } from "postcss";

export default function Home() {
  // State variables to control the visibility of each modal
  const [isProjectManagerModalOpen, setIsProjectManagerModalOpen] =
    useState(false);
  const [isUiDesignerModalOpen, setIsUiDesignerModalOpen] = useState(false);
  const [isUiDeveloperModalOpen, setIsUiDeveloperModalOpen] = useState(false);
  const [isApiDeveloperModalOpen, setIsApiDeveloperModalOpen] = useState(false);
  const [isTesterModalOpen, setIsTesterModalOpen] = useState(false);
  const [isUxResearcherModalOpen, setIsUxResearcherModalOpen] = useState(false);
  const [isCiCdModalOpen, setIsCiCdModalOpen] = useState(false);

  const [project, setProject] = useProject({});

  // Function to open the corresponding modal
  const openModal = (modalSetter) => {
    modalSetter(true);
  };

  // Function to close all modals

  const handleCloseModals = () => {
    setIsProjectManagerModalOpen(false);
    setIsUiDesignerModalOpen(false);
    setIsUiDeveloperModalOpen(false);
    setIsApiDeveloperModalOpen(false);
    setIsTesterModalOpen(false);
    setIsUxResearcherModalOpen(false);
    setIsCiCdModalOpen(false);
  };

  const router = useRouter();

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
        <h2 className="ml-4 mt-5 text-black font-segoe-ui text-2xl font-semibold leading-24">
          Resource Pool
        </h2>

        <div className="flex mt-8">
          <div className="div flex flex-col gap-4  justify-center ml-8">
            {/* Project Manager */}
            <div className=" flex flex-row items-center">
              <h3 className="text-black font-segoe-ui text-base font-normal leading-6 mr-5 w-32 ">
                Project Manager
              </h3>
              <div className="input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ">
                <a
                  href="#"
                  className="flex justify-between items-center"
                  onClick={() => openModal(setIsProjectManagerModalOpen)}
                >
                  <span className=" text-neutral-5 font-segoe-ui text-base italic font-semibold leading-6 text-gray-300">
                    Add Project Manager
                  </span>
                  <TbTriangleInvertedFilled className=" text-gray-300 text-sm" />
                </a>
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
              <div className=" text-gray-300 rounded-md bg-neutral-1 shadow-md px-6 py-5">
                <span>00</span>
              </div>
            </div>

            {/* UI Designer */}
            <div className=" flex flex-row items-center">
              <h3 className="text-black font-segoe-ui text-base font-normal leading-6 mr-5 w-32">
                UI Designer
              </h3>
              <div className="input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ">
                <a
                  href="#"
                  className="flex justify-between items-center"
                  onClick={() => openModal(setIsUiDesignerModalOpen)}
                >
                  <span className=" text-neutral-5 font-segoe-ui text-base italic font-semibold leading-6 text-gray-300">
                    Add UI Designer
                  </span>
                  <TbTriangleInvertedFilled className=" text-gray-300 text-sm" />
                </a>
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
              <div className=" text-gray-300 rounded-5 border border-solid border-neutral-5 bg-neutral-1 shadow-md px-6 py-5">
                <span>00</span>
              </div>
            </div>

            {/* UI Developer */}
            <div className=" flex flex-row items-center">
              <h3 className="text-black font-segoe-ui text-base font-normal leading-6 mr-5 w-32">
                UI Developer
              </h3>
              <div className="input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ">
                <a
                  href="#"
                  className="flex justify-between items-center"
                  onClick={() => openModal(setIsUiDeveloperModalOpen)}
                >
                  <span className=" text-neutral-5 font-segoe-ui text-base italic font-semibold leading-6 text-gray-300">
                    Add UI Developer
                  </span>
                  <TbTriangleInvertedFilled className=" text-gray-300 text-sm" />
                </a>
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
              <div className=" text-gray-300 rounded-5 border border-solid border-neutral-5 bg-neutral-1 shadow-md px-6 py-5">
                <span>00</span>
              </div>
            </div>

            {/* API Developer */}
            <div className=" flex flex-row items-center">
              <h3 className="text-black font-segoe-ui text-base font-normal leading-6 mr-5 w-32">
                API Developer
              </h3>
              <div className="input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ">
                <a
                  href="#"
                  className="flex justify-between items-center"
                  onClick={() => openModal(setIsApiDeveloperModalOpen)}
                >
                  <span className=" text-neutral-5 font-segoe-ui text-base italic font-semibold leading-6 text-gray-300">
                    Add API Developer
                  </span>
                  <TbTriangleInvertedFilled className=" text-gray-300 text-sm" />
                </a>
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
              <div className=" text-gray-300 rounded-5 border border-solid border-neutral-5 bg-neutral-1 shadow-md px-6 py-5">
                <span>00</span>
              </div>
            </div>

            {/* Tester */}
            <div className=" flex flex-row items-center">
              <h3 className="text-black font-segoe-ui text-base font-normal leading-6 mr-5 w-32">
                Tester
              </h3>
              <div className="input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ">
                <a
                  href="#"
                  className="flex justify-between items-center"
                  onClick={() => openModal(setIsTesterModalOpen)}
                >
                  <span className=" text-neutral-5 font-segoe-ui text-base italic font-semibold leading-6 text-gray-300">
                    Add Tester
                  </span>
                  <TbTriangleInvertedFilled className=" text-gray-300 text-sm" />
                </a>
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
              <div className=" text-gray-300 rounded-5 border border-solid border-neutral-5 bg-neutral-1 shadow-md px-6 py-5">
                <span>00</span>
              </div>
            </div>

            {/* UX Resercher */}
            <div className=" flex flex-row items-center">
              <h3 className="text-black font-segoe-ui text-base font-normal leading-6 mr-5 w-32">
                UX Researcher
              </h3>
              <div className="input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ">
                <a
                  href="#"
                  className="flex justify-between items-center"
                  onClick={() => openModal(setIsUxResearcherModalOpen)}
                >
                  {" "}
                  <span className=" text-neutral-5 font-segoe-ui text-base italic font-semibold leading-6 text-gray-300">
                    Add UX Researcher
                  </span>
                  <TbTriangleInvertedFilled className=" text-gray-300 text-sm" />
                </a>
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
              <div className=" text-gray-300 rounded-5 border border-solid border-neutral-5 bg-neutral-1 shadow-md px-6 py-5">
                <span>00</span>
              </div>
            </div>

            {/* CI / CD */}
            <div className=" flex flex-row mb-5 items-center">
              <h3 className="text-black font-segoe-ui text-base font-normal leading-6 mr-5 w-32">
                CI/CD
              </h3>
              <div className="input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ">
                <a
                  href="#"
                  className="flex justify-between items-center"
                  onClick={() => openModal(setIsCiCdModalOpen)}
                >
                  <span className=" text-neutral-5 font-segoe-ui text-base italic font-semibold leading-6 text-gray-300">
                    Add CI/CD
                  </span>
                  <TbTriangleInvertedFilled className=" text-gray-300 text-sm" />
                </a>
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
              <div className=" text-gray-300 rounded-5 border border-solid border-neutral-5 bg-neutral-1 shadow-md px-6 py-5">
                <span>00</span>
              </div>
            </div>
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
