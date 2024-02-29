"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, message, Steps, theme } from "antd";
import AddResourcePool2 from "@/Components/AddResourcePool/AddresoucrePool2";
import AddNewProjectForm from "@/Components/AddNewProjectForm/AddNewProjectForm";
// import AddEmplyee from "@/app/main/projects/addEmployee/AddEmplyee";
import pages from "@/app/main/projects/resourcePool/page";
import AddEmployReview from "@/Components/AddEmployeeReview/AddEmployReview";
import { useDispatch, useSelector } from "react-redux";
import { updateId } from "@/Context/AddNewProjectSlice/addProjectSlice";
import { addProjectId } from "@/Context/AddresourcesSlice/addresourcesSlice";
import Link from "next/link";

const { Step } = Steps;

const steps = [
  {
    title: "Set up Project",
    content: <AddNewProjectForm />,
  },
  {
    title: "Resource pool",
    content: <AddResourcePool2 />,
  },
  {
    title: "Review",
    content: <AddEmployReview />,
  },
];

export default function page({ formNext }) {
  const projectData = useSelector((state) => state.addProject);
  const resourcesId = useSelector((state) => state.addResources.Tester);
  // const str = useSelector((state) => state);

  const projectId = useSelector((state) => state.addProject.id);
  console.log("projectId : ", projectId);
console.log("resourceIn Project",resourcesId )
  console.log(projectData);

  const [toggleValue, setToggleValue] = useState(false);
  const [formData, setFormData] = useState({});

  // Function to receive the form data from the child component
  const receiveFormDataFromChild = (data) => {
    console.log("Received data from child:", data);
    setFormData(data); // Update the state in the parent component
  };
  const ProjectId= (ProjectId)=>{

    dispatch(addProjectId(ProjectId))
    // console.log(ProjectId)
  }

  const nonViewsteps = [
    {
      title: "Set up Project",
      content: <AddNewProjectForm />,
    },
    {
      title: "Resource pool",
      content: <AddResourcePool2 />,
    },
    {
      title: "Review",
      content: <AddEmployReview />,
    },
  ];

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent(current - 1);
  };

  // const next = () => {
  //   setCurrent(current + 1);

  // };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    textAlign: "center",
    color: token.colorTextTertiary,
    marginTop: 16,
  };
  // Api project push

  const handleSubmit = async () => {
    // Api Functions
    // try {
    //   const response = await api.post("/project", projectData, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   if (response.status === 200) {
    //     const data = response.data;
    //     console.log("API Response:", data);
    //     console.log("API Response:", data.id);
    //     console.log("API working");

    //     // Update projectId in the project state
    //     setProject((prevProject) => ({
    //       ...prevProject,
    //       projectId: data.id, // Replace 'data.projectId' with the actual field from your response data
    //     }));

    //     // ... rest of the code
    //   } else {
    //     console.error(
    //       "Error sending data:",
    //       response.status,
    //       response.statusText
    //     );
    //   }
    // } catch (error) {
    //   console.error("Error sending data:", error);
    // }

    if (
      !projectData.projectName ||
      !projectData.projectDescription ||
      !projectData.projectDepartment ||
      !projectData.startDate ||
      !projectData.endDate
    ) {
      message.error(
        "Please fill in all fields before proceeding to the next step"
      );
      return;
    }
    try {
      // console.log(projectData)
      await Apisubmit(projectData);
      setCurrent(current + 1);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
    // Apisubmit(projectData);
    // console.log(projectData);
    setCurrent(current + 1);
    if (current === 1) {
      const postData = {
        project_id: projectId,
        team_name: projectData.projectName,
        created_by_id: "550e8400-e29b-41d4-a716-446655440001",
        roles: resourcesId,
      };

      console.log("Before PUT request");
      // console.log(project.projectId);
      console.log(JSON.stringify(postData));
      console.log(postData);

      let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `https://spj7xgf470.execute-api.us-east-1.amazonaws.com/dev/project/${projectId}/team`,
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json'
        },
        data : postData
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

      // fetch(
      //   `https://spj7xgf470.execute-api.us-east-1.amazonaws.com/dev/project/${projectId}/team`,
      //   {
      //     method: "PUT",
      //     headers: {
      //       "Content-Type": "application/json",
            
      //     },
      //     body: postData,
      //   }
      // )
      //   .then((response) => {
      //     console.log("After PUT request");
      //     console.log("This is the Response");
      //     console.log(response);

      //     // Check if the response indicates success (you can customize this check based on your API)
      //     if (response.status === 200 || response.status === 201) {
      //       // Navigating to the "/main/projects/addResource" route after the successful PUT request
      //       console.log("success");
      //       // router.push("/main/projects/addResource");
      //     } else {
      //       // If the response status is not successful, handle the error accordingly
      //       console.error(
      //         "PUT request was not successful. Status:",
      //         response.status
      //       );
      //       // You can also log more details about the error response if needed
      //       response.json().then((data) => console.error(data)); // Assuming there is a data property in the response
      //     }
      //   })
      //   .catch((error) => {
      //     // Catching and handling any errors that may occur during the PUT request
      //     console.error("Error during PUT request:", error.message);
      //     // You may want to log more details about the error or show a user-friendly error message
      //   });
    }
  };

  const Apisubmit = async (project) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    console.log(project);

    const projectname = project.projectName;
    console.log(projectname);

    const raw = JSON.stringify({
      name: project.projectName,
      description: project.projectDescription,
      department: project.projectDepartment,
      start_date: project.startDate,
      end_date: project.endDate,
      image_url: "https://i.imgur.com/PujQY5Y.png",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    console.log("Api.Starting");

    try {
      const response = await fetch(
        "https://spj7xgf470.execute-api.us-east-1.amazonaws.com/dev/project",
        requestOptions
      );
      const result = await response.json();
      console.log("success:", result, result.id);
      dispatch(updateId(result.id));
      return result;
    } catch (error) {
      console.error("error:", error);
      throw error;
    } finally {
      console.log("Api.ENDING");
    }
  };
  const dispatch = useDispatch();

  //  // Api of resources
  //  const handleOnClickNext = () => {
  //   console.log(JSON.stringify(project.resourcePool));

  //   console.log("resource pool");
  //   console.log(project.resourcePool);

  //   const postData = {
  //     project_id: project.projectId,
  //     team_name: project.projectName,
  //     created_by_id: "550e8400-e29b-41d4-a716-446655440001",
  //     roles: project.resourcePool,
  //   };

  //   console.log("Before PUT request");
  //   console.log(project.projectId);
  //   console.log(JSON.stringify(postData));
  //   console.log(postData);

  //   fetch(
  //     `https://jp2malu3r8.execute-api.us-east-1.amazonaws.com/dev/project/${project.projectId}/team`,
  //     {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: postData,
  //     }
  //   )
  //     .then((response) => {
  //       console.log("After PUT request");
  //       console.log("This is the Response");
  //       console.log(response);

  //       // Check if the response indicates success (you can customize this check based on your API)
  //       if (response.status === 200 || response.status === 201) {
  //         // Navigating to the "/main/projects/addResource" route after the successful PUT request
  //         router.push("/main/projects/addResource");
  //       } else {
  //         // If the response status is not successful, handle the error accordingly
  //         console.error(
  //           "PUT request was not successful. Status:",
  //           response.status
  //         );
  //         // You can also log more details about the error response if needed
  //         response.json().then((data) => console.error(data)); // Assuming there is a data property in the response
  //       }
  //     })
  //     .catch((error) => {
  //       // Catching and handling any errors that may occur during the PUT request
  //       console.error("Error during PUT request:", error.message);
  //       // You may want to log more details about the error or show a user-friendly error message
  //     });
  // };
  return (
    <>
      <div className="w-auto py-2 px-1 mb-2 bg-white">
        <h1 className="text-2xl font-semibold ">Create Project</h1>
        <p>
          Form pages are used to collect or verify information to users, and
          basic forms are common in scenarios where there are fewer data items.
        </p>
        {toggleValue.toString()}
      </div>
      <div className="w-auto py-1 bg-white">
        <Steps current={current} items={items} className="px-[10rem] py-3" />
        <div style={contentStyle}>
          {/* Render content based on current step */}
          {steps[current].content}
        </div>

        <div style={{ marginTop: 24 }}>
          {current < steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => handleSubmit()}
              className="ml-[90%] m-10 px-2 py-1 justify-center items-center rounded-sm border border-blue-500 bg-blue-500 shadow-sm h-8 font-sans text-center text-white text-sm font-normal not-italic leading-3 flex-row-reverse"
            >
              Next
            </Button>
          )}

          {current === steps.length - 1 && (
            <Link href="/main/projects/workflowlist">
            <Button
              type="primary"
              onClick={()=>{ProjectId(projectId)}}
              className="ml-[90%] m-10 px-2 py-1 justify-center items-center rounded-sm border border-blue-500 bg-blue-500 shadow-sm h-8 font-sans text-center text-white text-sm font-normal not-italic leading-3 flex-row-reverse"
            >
              Done
            </Button></Link>
          )}
          {/* {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )} */}
        </div>
      </div>
    </>
  );
}
