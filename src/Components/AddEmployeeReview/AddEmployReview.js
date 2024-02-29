"use client";
import React, { useState } from "react";
import { Button } from "antd";
import { Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Array from "./array";
import { useSelector, useDispatch } from "react-redux";
import { addProjectId } from "@/Context/AddresourcesSlice/addresourcesSlice";
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const AddEmployReview = () => {
  const ResourcesInfo = useSelector((state) => state.addResources);
  const MapingDataPm = ResourcesInfo.ProjectManager[0].resoucesInfo;
  const MapingDataUxDesigner = ResourcesInfo.UXDesigner[0].resoucesInfo;
  const MapingDataUiDeve = ResourcesInfo.UIDeveloper[0].resoucesInfo;
  const MapingDataApiDevel = ResourcesInfo.APIDeveloper[0].resoucesInfo;
  const MapingDataTester = ResourcesInfo.Tester[0].resoucesInfo;
  const MapingDataUxRes = ResourcesInfo.UXResearcher[0].resoucesInfo;
  const MapingDataCiCd = ResourcesInfo.CICDSpecialist[0].resoucesInfo;


  const ResourceAdded = ResourcesInfo.resoucesInfo;
  console.log(ResourceAdded)

  const [data, setData] = useState(Array);
  const projectData = useSelector((state) => state.addProject);
  console.log(projectData);

  const handleDelete = (id) => {
    const updatedData = data.filter((employee) => employee.id !== id);
    console.log(updatedData);
    setData(updatedData);
  };
  const dispatch = useDispatch();

  const ProjectId = (ProjectId) => {
    dispatch(addProjectId(ProjectId));
    // console.log(ProjectId)
  };

  return (
    <div>
      <div>
        <div className="rounded-md mt-5 space-y-5 p-5 bg-white">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold leading-snug tracking-normal text-left">
              Setup project
            </h1>
            <div className="space-x-8">
              <Button icon={<EditOutlined />}>Edit</Button>
              <Button type="primary" className="bg-blue-500">
                create
              </Button>
            </div>
          </div>
          <div className="flex space-x-10 w-screen items-center">
            <div>
              <img
                src={projectData.image_url}
                className="w-[7rem] h-[7rem] rounded-md"
              />
            </div>
            <div className="flex  ">
              <div className="p-5 space-y-10 mx-5">
                <div>
                  <p>Project Name</p>
                  <h3 className="font-semibold">{projectData.projectName}</h3>
                </div>
                <div>
                  <p>Project department</p>
                  <h3 className="font-semibold">
                    {projectData.projectDepartment}
                  </h3>
                </div>
              </div>

              <div className="p-5 space-y-10 mx-5">
                <div>
                  <p>Project Description</p>
                  <h3 className="font-semibold">
                    {projectData.projectDescription}
                  </h3>
                </div>
                <div>
                  <p>Project Duration</p>
                  <h3 className="font-semibold">
                    {projectData.startDate}TO {projectData.endDate}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //REsourcess------------------------------ */}

      <div className="mt-5 flex flex-col space-y-4 bg-white rounded-md p-10">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold leading-normal tracking-normal text-left">
            Resource Pool
          </h1>
          <div>
            <Search
              placeholder="Search employe"
              onSearch={onSearch}
              style={{
                width: "16.5rem",
                height: "2rem",
              }}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-black uppercase tracking-wider">
                  Designation
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Mail ID
                </th>
                <th
                  className="px-6 ml-9 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                  colSpan={2}
                >
                  Actions
                </th>
              </tr>
            </thead>
            {ResourceAdded.map((resource, index) => (
              console.log(resource.first_name),
              <tbody key={index} className="bg-white divide-y divide-gray-200">
                
                <tr className="bg-white">
                  <td className="py-2 whitespace-nowrap">
                    <div className="flex items-center space-x-5">
                      <div className="text-sm font-medium text-gray-900">
                        {resource.first_name} {resource.last_name}
                      </div>
                    </div>
                  </td>
                  <td className="py-2 text-sm text-center font-medium text-gray-900">
                    {resource.Designation}
                  </td>
                  <td className="py-2 text-sm font-medium text-gray-900">
                    {resource.email}
                  </td>
                  <td className="py-2 whitespace-nowrap text-sm space-x-5">
                    <Button icon={<EditOutlined />}>Edit</Button>
                    <Button
                      type="primary"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => handleDelete(resource.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
            {/* {MapingDataUxDesigner.map((resource, index) => (
              console.log(resource.first_name),
              <tbody key={index} className="bg-white divide-y divide-gray-200">
                
                <tr className="bg-white">
                  <td className="py-2 whitespace-nowrap">
                    <div className="flex items-center space-x-5">
                      <div className="text-sm font-medium text-gray-900">
                        {resource.first_name} {resource.last_name}
                      </div>
                    </div>
                  </td>
                  <td className="py-2 text-sm text-center font-medium text-gray-900">
                    {resource.Designation}
                  </td>
                  <td className="py-2 text-sm font-medium text-gray-900">
                    {resource.email}
                  </td>
                  <td className="py-2 whitespace-nowrap text-sm space-x-5">
                    <Button icon={<EditOutlined />}>Edit</Button>
                    <Button
                      type="primary"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => handleDelete(resource.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))} */}
            {/* {MapingDataUiDeve.map((resource, index) => (
              console.log(resource.first_name),
              <tbody key={index} className="bg-white divide-y divide-gray-200">
                
                <tr className="bg-white">
                  <td className="py-2 whitespace-nowrap">
                    <div className="flex items-center space-x-5">
                      <div className="text-sm font-medium text-gray-900">
                        {resource.first_name} {resource.last_name}
                      </div>
                    </div>
                  </td>
                  <td className="py-2 text-sm text-center font-medium text-gray-900">
                    {resource.Designation}
                  </td>
                  <td className="py-2 text-sm font-medium text-gray-900">
                    {resource.email}
                  </td>
                  <td className="py-2 whitespace-nowrap text-sm space-x-5">
                    <Button icon={<EditOutlined />}>Edit</Button>
                    <Button
                      type="primary"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => handleDelete(resource.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))} */}
            {/* {MapingDataApiDevel.map((resource, index) => (
              console.log(resource.first_name),
              <tbody key={index} className="bg-white divide-y divide-gray-200">
                
                <tr className="bg-white">
                  <td className="py-2 whitespace-nowrap">
                    <div className="flex items-center space-x-5">
                      <div className="text-sm font-medium text-gray-900">
                        {resource.first_name} {resource.last_name}
                      </div>
                    </div>
                  </td>
                  <td className="py-2 text-sm text-center font-medium text-gray-900">
                    {resource.Designation}
                  </td>
                  <td className="py-2 text-sm font-medium text-gray-900">
                    {resource.email}
                  </td>
                  <td className="py-2 whitespace-nowrap text-sm space-x-5">
                    <Button icon={<EditOutlined />}>Edit</Button>
                    <Button
                      type="primary"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => handleDelete(resource.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))} */}
            {/* {MapingDataTester.map((resource, index) => (
              console.log(resource.first_name),
              <tbody key={index} className="bg-white divide-y divide-gray-200">
                
                <tr className="bg-white">
                  <td className="py-2 whitespace-nowrap">
                    <div className="flex items-center space-x-5">
                      <div className="text-sm font-medium text-gray-900">
                        {resource.first_name} {resource.last_name}
                      </div>
                    </div>
                  </td>
                  <td className="py-2 text-sm text-center font-medium text-gray-900">
                    {resource.Designation}
                  </td>
                  <td className="py-2 text-sm font-medium text-gray-900">
                    {resource.email}
                  </td>
                  <td className="py-2 whitespace-nowrap text-sm space-x-5">
                    <Button icon={<EditOutlined />}>Edit</Button>
                    <Button
                      type="primary"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => handleDelete(resource.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
            {MapingDataUxRes.map((resource, index) => (
              console.log(resource.first_name),
              <tbody key={index} className="bg-white divide-y divide-gray-200">
                
                <tr className="bg-white">
                  <td className="py-2 whitespace-nowrap">
                    <div className="flex items-center space-x-5">
                      <div className="text-sm font-medium text-gray-900">
                        {resource.first_name} {resource.last_name}
                      </div>
                    </div>
                  </td>
                  <td className="py-2 text-sm text-center font-medium text-gray-900">
                    {resource.Designation}
                  </td>
                  <td className="py-2 text-sm font-medium text-gray-900">
                    {resource.email}
                  </td>
                  <td className="py-2 whitespace-nowrap text-sm space-x-5">
                    <Button icon={<EditOutlined />}>Edit</Button>
                    <Button
                      type="primary"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => handleDelete(resource.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))} 
            {Object.entries(Mainmap).map(([key, value]) => (
              <tbody key={key} className="bg-white divide-y divide-gray-200">
                {value.map((resource, index) => (
                  <tr key={index} className="bg-white">
                    <td className="py-2 whitespace-nowrap">
                      <div className="flex items-center space-x-5">
                        <div className="text-sm font-medium text-gray-900">
                          {resource.first_name} {resource.last_name}
                        </div>
                      </div>
                    </td>
                    <td className="py-2 text-sm text-center font-medium text-gray-900">
                      {resource.Designation}
                    </td>
                    <td className="py-2 text-sm font-medium text-gray-900">
                      {resource.email}
                    </td>
                    <td className="py-2 whitespace-nowrap text-sm space-x-5">
                      <Button icon={<EditOutlined />}>Edit</Button>
                      <Button
                        type="primary"
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => handleDelete(resource.id)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            ))} */}

            {/* {MapingDataCiCd.map((resource, index) => (
              console.log(resource.first_name),
              <tbody key={index} className="bg-white divide-y divide-gray-200">
                
                <tr className="bg-white">
                  <td className="py-2 whitespace-nowrap">
                    <div className="flex items-center space-x-5">
                      <div className="text-sm font-medium text-gray-900">
                        {resource.first_name} {resource.last_name}
                      </div>
                    </div>
                  </td>
                  <td className="py-2 text-sm text-center font-medium text-gray-900">
                    {resource.Designation}
                  </td>
                  <td className="py-2 text-sm font-medium text-gray-900">
                    {resource.email}
                  </td>
                  <td className="py-2 whitespace-nowrap text-sm space-x-5">
                    <Button icon={<EditOutlined />}>Edit</Button>
                    <Button
                      type="primary"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => handleDelete(resource.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))} */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddEmployReview;
