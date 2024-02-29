"use client";
import React from "react";
import { DataStore } from "@aws-amplify/datastore";

import { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "@/app/nav-link";

import { Form, Input, Upload, Button, message, DatePicker } from "antd";
import { useSelector } from "react-redux";
import api from "@/api";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UploadOutlined } from "@ant-design/icons";
import useProject from "@/HOC/Project/Project";

const { RangePicker } = DatePicker;

import { UploadPopul2 } from "@/app/main/projects/addNewProject/uploadPopul";

import moment from "moment";
import { useDispatch } from "react-redux";
import { updateFormData } from "@/Context/AddNewProjectSlice/addProjectSlice";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const AddNewProjectForm = ({ receiveFormDataFromChild }) => {
  const [imageBase64, setImageBase64] = useState();

  const formData = useSelector((state) => state.addProject);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    // Update the project state as the user types
    setProject({ ...project, [e.target.name]: e.target.value });
    dispatch(updateFormData({ ...project, [e.target.name]: e.target.value }));

    console.log(project)
  };
  const handleStartDateChange = (date, dateString) => {
    setProject({
      ...project,
      startDate: moment(dateString).format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
    });
    // dispatch(updateFormData({ ...project, [date.target.name]: date.target.value }))
  };

  const handleEndDateChange = (date, dateString) => {
    setProject({
      ...project,
      endDate: moment(dateString).format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
    });
    // dispatch(updateFormData({ ...project, [date.target.name]: date.target.value }))
  };

  
  const handleImageUpload = async (e) => {
    const file = e.file.originFileObj;
    if (file) {
    // Convert the image file to base64
    const base64 = await convertImageToBase64(file);
    setImageBase64(base64);
    }
    // dispatch(updateImage({ ...project, [e.target.name]: e.target.value }));
    // console.log("setImage: ",setImageBase64)
};

const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onloadend = () => {
            resolve(reader.result.split(',')[1]);
        };

        reader.onerror = (error) => {
            reject(error);
        };

        reader.readAsDataURL(file);
    });
};


  const router = useRouter();

  // useProject
  const [project, setProject] = useState({
    projectName: "",
    projectDescription: "",
    projectDepartment: "",
    startDate: "",
    endDate: "",
    projectId: "",
    image_url: "https://i.imgur.com/PujQY5Y.png",
  });

  const projectData = useSelector(state => state.addProject);
  console.log(projectData)

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const postData = {
  //     name: project.projectName,
  //     description: project.projectDescription,
  //     department: project.projectDepartment,
  //     start_date: project.startDate,
  //     end_date: project.endDate,
  //     image_url: "https://i.imgur.com/PujQY5Y.png",
  //   };

  //   // Api Functions
  //   try {
  //     const response = await api.post("/project", postData, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (response.status === 200) {
  //       const data = response.data;
  //       console.log("API Response:", data);
  //       console.log("API Response:", data.id);
  //       console.log("API working");

  //       // Update projectId in the project state
  //       setProject((prevProject) => ({
  //         ...prevProject,
  //         projectId: data.id, // Replace 'data.projectId' with the actual field from your response data
  //       }));

  //       // ... rest of the code
  //     } else {
  //       console.error(
  //         "Error sending data:",
  //         response.status,
  //         response.statusText
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Error sending data:", error);
  //   }

  //   setCurrent(current + 1);

  // };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     try {
  //         // Create a new Product instance with the base64-encoded image
  //         const postData = {
  //           name: project.projectName,
  //           description: project.projectDescription,
  //           department: project.projectDepartment,
  //           start_date: project.startDate,
  //           end_date: project.endDate,
  //           image_url: "https://i.imgur.com/PujQY5Y.png",
  //         };

  //         console.log(postData)

  //         // Save the new Product to the DataStore

  //         console.log('Product created successfully!');
  //         dispatch(updateFormData(postData))
  //         console.log("dispached data", postData)
  //     } catch (error) {
  //         console.error('Error:', error);
  //     }
  // };

  return (
    <div>
      <section className="flex flex-col items-center flex-shrink-0  w-auto py-1 bg-white ">
        <Form
          {...layout}
          name="nest-messages"
          style={{
            maxWidth: 600,
          }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["ProjectName"]}
            label="Project Name"
            rules={[
              {
                message: "Please input the project name!",
              },
            ]}
          >
            <Input
              value={project.projectName}
              onChange={handleChange}
              name="projectName"
              id="projectName"
            />
          </Form.Item>

          <Form.Item
            name={["projectDescription"]}
            label="Project Description"
            rules={[
              {
                message: "Please input the project description!",
              },
            ]}
          >
            <Input
              name="projectDescription"
              id="projectDescription"
              value={project.projectDescription}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            name={["projectDepartment"]}
            label="Project Department"
            rules={[
              {
                message: "Please input the project department!",
              },
            ]}
          >
            <Input
              name="projectDepartment"
              id="projectDepartment"
              value={project.projectDepartment}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item name="range-time-picker" label="Project Duration">
            <div className="flex">
              <DatePicker
                id="projectStartDate"
                placeholder="Start Date"
                className="text-slate-500 font-sans text-sm font-normal not-italic leading-6 pb-1 self-stretch items-center flex-1 border rounded-sm border-slate-200  px-1 py-1 h-8 w-[184px] m-1"
                onChange={handleStartDateChange}

                // value={project.startDate}
              />
              <span>-</span>
              <DatePicker
                id="projectEndDate"
                placeholder="End Date"
                className="text-slate-500 font-sans text-sm font-normal not-italic leading-6 pb-1 self-stretch items-center flex-1 border rounded-sm border-slate-200shadow px-1 py-1 h-8 w-[184px] m-1"
                // onChange={(date, dateString) =>
                //   setProject({
                //     ...project,
                //     endDate: moment(dateString).format(
                //       "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
                //     ),
                //   })
                // }
                // value={project.endDate}
                onChange={handleEndDateChange}
              />
            </div>
          </Form.Item>

          <Form.Item
            name="Project Icon"
            label="Project Icon"
            valuePropName="fileList"
            getValueFromEvent={(e) => e?.fileList}
          >
            {/* <Upload
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              listType="picture"
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload> */}
            

            <Upload
              name="image_url"
              type="file" 
              accept="image/*"
              className="flex flex-col items-start ml-1"
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              listType="picture"
              alt="Uploaded Image"
              onChange={handleImageUpload}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>

          {/* <Button
            type="submit"
            className="ml-[90%] m-10 px-2 py-1 justify-center items-center rounded-sm border border-blue-500 bg-blue-500 shadow-sm h-8 font-sans text-center text-white text-sm font-normal not-italic leading-3 flex-row-reverse"
            onClick={handleSubmit}
          >
            Submit
          </Button> */}
        </Form>
      </section>
    </div>
  );
};

export default AddNewProjectForm;
