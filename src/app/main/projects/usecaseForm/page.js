"use client";
import { Form, Input, Upload, Button, message, DatePicker } from "antd";
import Link from "next/link";
import React, { useState } from "react";


const layout = {
  labelCol: {
    span: 8,
    labelCol: {
        span: 8,
        style: {
          fontsize : "medium", // Darken the label color
        },
      },
      wrapperCol: {
        span: 16,
      },
  },
  wrapperCol: {
    span: 16,
  },
};

const newform = () => {
  const details = {
    assignto: "",
    describe: "",
    select1: "",
    date1: "",
    comm1: "",
    select2: "",
    date2: "",
    comm2: "",
    select3: "",
    date3: "",
    comm3: "",
  };
  const Second = {
    Sassignto: "",
    Sdescribe: "",
    Sselect1: "",
    Sdate1: "",
    Scomm1: "",
    Sselect2: "",
    Sdate2: "",
    Scomm2: "",
    Sselect3: "",
    Sdate3: "",
    Scomm3: "",
    Sselect4: "",
    Sdate4: "",
    Scomm4: "",
  };
  const Third = {
    Tassignto: "",
    Tdescribe: "",
    Tselect1: "",
    Tdate1: "",
    Tcomm1: "",
    Tselect2: "",
    Tdate2: "",
    Tcomm2: "",
    Tselect3: "",
    Tdate3: "",
    Tcomm3: "",
    Tselect4: "",
    Tdate4: "",
    Tcomm4: "",
    Tselect5: "",
    Tdate5: "",
    Tcomm5: "",
    Tselect6: "",
    Tdate6: "",
    Tcomm6: "",
    Tselect7: "",
    Tdate7: "",
    Tcomm7: "",
    Tselect8: "",
    Tdate8: "",
    Tcomm8: "",
  };
  const Fourth = {
    Fassignto: "",
    Fdescribe: "",
    Fselect1: "",
    Fdate1: "",
    Fcomm1: "",
    Fselect2: "",
    Fdate2: "",
    Fcomm2: "",
    Fselect3: "",
    Fdate3: "",
    Fcomm3: "",
    Fselect4: "",
    Fdate4: "",
    Fcomm4: "",
    Fselect5: "",
    Fdate5: "",
    Fcomm5: "",
    Fselect6: "",
    Fdate6: "",
    Fcomm6: "",
  };
  const Fifth = {
    Fiassignto: "",
    Fidescribe: "",
    Fiselect1: "",
    Fidate1: "",
    Ficomm1: "",
    Fiselect2: "",
    Fidate2: "",
    Ficomm2: "",
    Fiselect3: "",
    Fidate3: "",
    Ficomm3: "",
    Fiselect4: "",
    Fidate4: "",
    Ficomm4: "",
  };
  const Six = {
    Siassignto: "",
    Sidescribe: "",
    Siselect1: "",
    Sidate1: "",
    Sicomm1: "",
    Siselect2: "",
    Sidate2: "",
    Sicomm2: "",
  };
  const [Details, setDetails] = useState(details);
  const [MockDev, setMOckDev] = useState(Second);
  const [ActualDev, setAcutalDev] = useState(Third);
  const [CiCdTest, setCiCdTest] = useState(Fourth);
  const [Stage, steStage] = useState(Fifth);
  const [Publish, setPublish] = useState(Six);

  const setOnchange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...Details, [name]: value });
    setMOckDev({ ...MockDev, [name]: value });
    setAcutalDev({ ...ActualDev, [name]: value });
    setCiCdTest({ ...CiCdTest, [name]: value });
    steStage({ ...Stage, [name]: value });
    setPublish({ ...Publish, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const Data = [Details, MockDev, ActualDev, CiCdTest, Stage, Publish];
    console.log(Data);
  };

  return (
    <div className="">
      <div className="flex w-[100%] flex-col items-start gap-5">
      <div className=" bg-white px-4 py-4 w-[100%] ">
          <h1 className="flex w-[100%] h-7 flex-col justify-center text-black  text-2xl non-italic font-semibold leading-snug">
            Procurement (Development workflow)
          </h1>
          <p>Form pages are used to collect or verify information to users, and basic forms are common in scenarios where there are fewer data items.</p>
        </div>
      </div>

      <section className="flex flex-col items-center flex-shrink-0 mt-4  w-auto py-1 h-screen bg-white">
      <h1 className="text-black text-2xl font-semibold leading-normal  px-4 py-4 w-[100%] flex items-center">
          Basic Details
        </h1>
        <Form
          {...layout}
          name="nest-messages"
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            name={["UsecaseName"]}
            label="Usecase Name :"
            rules={[
              {
                message: "Please input the project name!",
              },
            ]}
          >
            <Input
             
              name="projectName"
              id="projectName"
            />
          </Form.Item>

          <Form.Item
            name={["AssignTo"]}
            label="Assign To :"
            rules={[
              {
                message: "Please input the project description!",
              },
            ]}
          >
            <Input
              name="projectDescription"
              id="projectDescription"
              
            />
          </Form.Item>

          <Form.Item
            name={["UsecaseDescription"]}
            label="Usecase Description :"
            rules={[
              {
                message: "Please input the project department!",
              },
            ]}
          >
            <Input
              name="projectDepartment"
              id="projectDepartment"
              
            />
          </Form.Item>

          <Form.Item name="range-time-picker" label="Project Duration">
            <div className="flex">
              <DatePicker
                id="projectStartDate"
                placeholder="Start Date"
                className="text-slate-500 font-sans text-sm font-normal not-italic leading-6 pb-1 self-stretch items-center flex-1 border rounded-sm border-slate-200 shadow px-1 py-1 h-8 w-[184px] m-1"
                
                // value={project.startDate}
              />
              <span>-</span>
              <DatePicker
                id="projectEndDate"
                placeholder="End Date"
                className="text-slate-500 font-sans text-sm font-normal not-italic leading-6 pb-1 self-stretch items-center flex-1 border rounded-sm border-slate-200shadow px-1 py-1 h-8 w-[184px] m-1"
                
                // value={project.endDate}
              />
            </div>
          </Form.Item>

          {/* <Button
            type="submit"
            className="ml-[90%] m-10 px-2 py-1 justify-center items-center rounded-sm border border-blue-500 bg-blue-500 shadow-sm h-8 font-sans text-center text-white text-sm font-normal not-italic leading-3 flex-row-reverse"
            onClick={handleSubmit}
          >
            Next
          </Button> */}
          <Link href="/main/projects/usecaseFormStepper">
        <Button>Next</Button>
      </Link>
        </Form>
      </section>

      {/* //Workflow Head section */}
      
    </div>
  );
};

export default newform;
