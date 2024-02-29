"use client";

import React, { useState, useEffect } from "react";

import useProject, { project, setProject } from "@/HOC/Project/Project";

import api from "@/api";

// useRouter
import { useRouter } from "next/navigation";

export default function ProjectAddedResources() {
  // useProject
  const [project, setProject] = useProject();

  const [addResource, setAddResource] = useState([]);

  const router = useRouter();
  // Function to fetch team data
  const fetchTeamData = () => {
    api
      .get(`/project/${project.projectId}/team`)
      .then((response) => {
        // Handle the successful response
        setAddResource(response.data);
        console.log("Team data:", response.data);
      })
      .catch((error) => {
        // Handle the error
        console.error("Error fetching team data:", error);
      });
  };

  // Call the function when the component mounts
  React.useEffect(() => {
    fetchTeamData();
  }, []); // Empty dependency array to mimic componentDidMount behavior

  console.log("addResource");
  console.log(addResource);

  const handleOnClickNext = () => {
    router.push("/main/projects/workFlowOverView"); // Change '/new-route' to the desired route path
  };

  return (
    <>
      <div className="flex flex-col ">
        <div className="text-black font-sans text-lg  not-italic font-semibold leading-7 bg-white flex justify-between items-center  px-4 py-5 flex-shrink-0 m-2  ">
          <span>Added New Resources</span>
        </div>

        <section className="flex flex-col items-start justify-center flex-shrink-0 self-stretch rounded-sm bg-white  gap-1   m-2 px-4 py-2 ">
          {/* Added Resources- Profile Section */}
          <div className=" bg-white w-[80%]  h-auto shadow-sm border-r-slate-900 flex-shrink-0 rounded-lg p-5 gap-12 ">
            <div className=" flex flex-row justify-between items-center gap-9 py-3 mb-5">
              {/*Add Resource txt */}
              <div className="text-black  font-sans text-xl font-bold not-italic">
                Added Resources
              </div>
              <div className="flex flex-row justify-end gap-3 items-center">
                {/* <img src="\Images\AddResoucesImages\pluswhite.png" />
                <img src="\Images\AddResoucesImages\editpen.png" /> */}
              </div>
            </div>

            {/* Map over all  the resources in the project and display them on the page */}
            <div className="flex flex-wrap w-[95%] bg-white border border-slate-100 flex-shrink-0 shadow-lg p-5 shadow-slate-100 border-solid border-neutral-4 bg-neutral-1">
              <div className="text-black font-sans text-lg not-italic font-semibold">
                Project Manager
              </div>
              <div className="w-[100%] bg-slate-200 h-[1px] my-3"></div>
              {/* Profile's Project Resources */}
              <div className="flex flex-wrap gap-5 m-7">
                {/* Map through the addResource array */}

                {addResource.map((projectManager) =>
                  projectManager.projectManager.map((resource) => (
                    <div
                      key={resource.resource_id}
                      className="flex flex-wrap gap-5 m-7"
                    >
                      <div className=" w-40 h-40 flex-shrink-0 rounded-lg border-2 border-white bg-white shadow-md  flex flex-col  items-center justify-center gap-1">
                        <div>
                          <img
                            className="rounded-full w-20 h-20 "
                            src={resource.image_url}
                            alt={resource.resource_name}
                          />
                        </div>
                        <div className="text-black font-sans text-lg not-italic font-semibold leading-normal">
                          {resource.resource_name}
                        </div>
                        <div className="text-slate-400 font-sans text-sm not-italic font-normal leading-normal">
                          Project Manager
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              {/* Profile's Project Resources */}
            </div>

            {/*  */}

            {/* UI Designer */}
          </div>
          {/* Next button */}
        </section>
        <div className="btn relative bg-white mb-10 ">
          <button
            className=" absolute right-0 top-0  py-1  px-4 bg-blue-500 text-white bg-primary-6"
            onClick={handleOnClickNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}