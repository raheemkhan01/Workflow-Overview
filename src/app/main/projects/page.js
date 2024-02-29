"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PlusSquareFilled, DownOutlined } from "@ant-design/icons";

import { addProjectId } from "@/Context/AddresourcesSlice/addresourcesSlice";

import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import { addResources } from "@/Context/AddresourcesSlice/addresourcesSlice";

import {
  Avatar,
  Space,
  Button,
  Card,
  Typography,
  Col,
  Row,
  Dropdown,
  message,
  Menu,
} from "antd";
import axios from "axios";
import { Pagination } from "antd";

import { InProgress, Completed, Unassigned } from "@/Components/Badges";
import api from "@/api";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
import slice from "@/Context/Slice";
import { MdOutlineWatchLater } from "react-icons/md";

const { Title, Paragraph, Text } = Typography;

const getData = async () => {
  try {
    const response = await api.get("/project");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

const ProjectLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [data, setData] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };
    fetchData();
  }, []);
  const toggleSider = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick = (e) => {
    setSelectedStatus(e.key === "all" ? null : e.key);
  };
  const capitalizeText = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };
  const dropdownText = selectedStatus
    ? `${capitalizeText(selectedStatus)}`
    : "All Projects";
  const menuProps = {
    onClick: handleMenuClick,
  };
  const filteredData = selectedStatus
    ? data.filter((item) => item.status.toLowerCase() === selectedStatus)
    : data;

  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    Math.min(currentPage * pageSize, filteredData.length)
  );

  const initialPaginatedData = paginatedData.slice(0);

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
  };

  const dispatch = useDispatch()

  const ProjectId= (ProjectId)=>{
    dispatch(addProjectId(ProjectId))
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-6">Workflow Management</h1>

        {/* Total Projects Card */}
        <div className="bg-white flex flex-row justify-between items-center py-2 px-5 rounded-lg mb-6">
          <Dropdown
            overlay={
              <Menu onClick={handleMenuClick}>
                <Menu.Item key="all">All Projects</Menu.Item>
                <Menu.Item key="inprogress">In Progress</Menu.Item>
                <Menu.Item key="completed">Completed</Menu.Item>
                <Menu.Item key="unassigned">Unassigned</Menu.Item>
              </Menu>
            }
          >
            <a key="all" onClick={(e) => e.preventDefault()} className="text-blue-500 hover:underline">
              <Space>
                {dropdownText}
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <div className="">
            <button className="py-1 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              <Link href="/main/projects/addNewProject">Create Project</Link>
            </button>
          </div>
        </div>

        {/* Complete Projects, In Progress Projects, & UnAssign Projects */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredData.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <Link href="/main/projects/workflowlist" onClick={()=>{ProjectId(item.id)}}>
                <div>
                  <Avatar src={item.image_url} className="bg-blue-200 rounded-full p-2 mb-4" size={34} shape="square" />
                  <h2 className="text-lg font-semibold mb-4">{item.name}</h2>
                  <div className="border-t border-gray-200 mb-4"></div>
                  <p className="text-lg mb-4">Total Use cases: {item.total_usecases}</p>
                  <p className="text-lg mb-4">{item.total_resources} Use cases in Progress</p>
                  <div className="flex items-center mb-4">
                    <MdOutlineWatchLater className="text-xl" />
                    <div className="pl-2">7 Days</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      {checkStatus(item.status)}
                    </div>
                    <div className="flex">
                      <Avatar src="{}" />
                      <Avatar src="{}" />
                      <Avatar src="{}" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-center">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={filteredData.length}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectLayout;
