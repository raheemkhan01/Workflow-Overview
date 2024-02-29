import React from "react";
import { Input, Select, Form, DatePicker, Button } from "antd";

const { Option } = Select; 

const Mock = () => {
  return (
    <>
      <div className="w-[100%]"> 
        <Form>
        <div className="font-semibold">
            <h2 className="font-bold text-[#262626]">Development workflow use case</h2>
            <div className="flex mt-4">
              <div className="flex flex-col text-[#A8A8A8]  ">
              <p className=" ">Assign To:</p>
              <Select className="w-40 h-6 mt-2  " placeholder="Action">
                <Option value="jack"></Option>
                <Option value="lucy"></Option>
              </Select>
              </div>
              <div className="ml-20 text-[#8C8C8C] ">
              <p className="ml-16 ">Description</p>
              <Input className="w-40 h-6 mt-2 ml-16 " placeholder="example" />
              </div>
            </div>
          </div> 

          <div className="mt-7 font-semibold">
            <h2 className="font-bold text-[#262626]">MockDevelopment Sub-Stage Details</h2>
            <h4 className="mt-3 text-[#262626]">Create API Spec</h4>
            <div className="flex mt-4">
            <div className="flex flex-col text-[#A8A8A8]  ">
              <p className=" ">Assign To:</p>
              <Select className="w-40 h-6 mt-2  " placeholder="Action">
                <Option value="jack"></Option>
                <Option value="lucy"></Option>
              </Select>
              </div>

              <div className="flex  flex-col text-[#8C8C8C] ">
              <Form.Item label="Start-End date" name="selectedDate" className="ml-28 mt-0 text-[#8C8C8C]" />
                <DatePicker.RangePicker className="h-6 ml-28" name="selectedDate"/>
              </div>
             

              <div className="ml-20 text-[#8C8C8C] ">
              <p className="ml-16 ">Description</p>
              <Input className="w-40 h-6 mt-2 ml-16 " placeholder="example" />
              </div>
            </div>
          </div>

          <div className="mt-7 font-semibold">
            <h2 className="mt-3 text-[#262626]">Create Postman Test</h2>
            <div className="flex mt-4">
            <div className="flex flex-col text-[#A8A8A8]  ">
              <p className=" ">Assign To:</p>
              <Select className="w-40 h-6 mt-2  " placeholder="Action">
                <Option value="jack"></Option>
                <Option value="lucy"></Option>
              </Select>
              </div>

              <div className="flex  flex-col text-[#8C8C8C] ">
              <Form.Item label="Start-End date" name="selectedDate" className="ml-28 mt-0 text-[#8C8C8C]" />
                <DatePicker.RangePicker className="h-6 ml-28" name="selectedDate"/>
              </div>
             

              <div className="ml-20 text-[#8C8C8C] ">
              <p className="ml-16 ">Description</p>
              <Input className="w-40 h-6 mt-2 ml-16 " placeholder="example" />
              </div>
            </div>
          </div>

          <div className="mt-8 font-semibold">
            <h2 className="text-[#262626]">Create UI Screen with Mock API</h2>
            <div className="flex mt-4">
            <div className="flex flex-col text-[#A8A8A8]  ">
              <p className=" ">Assign To:</p>
              <Select className="w-40 h-6 mt-2  " placeholder="Action">
                <Option value="jack"></Option>
                <Option value="lucy"></Option>
              </Select>
              </div>

              <div className="flex  flex-col text-[#8C8C8C] ">
              <Form.Item label="Start-End date" name="selectedDate" className="ml-28 mt-0 text-[#8C8C8C]" />
                <DatePicker.RangePicker className="h-6 ml-28" name="selectedDate"/>
              </div>
             

              <div className="ml-20 text-[#8C8C8C] ">
              <p className="ml-16 ">Description</p>
              <Input className="w-40 h-6 mt-2 ml-16 " placeholder="example" />
              </div>
            </div>
          </div>

          <div className="mt-8 font-semibold">
            <h2 className="text-[#262626]">Create Test API</h2>
            <div className="flex mt-4">
            <div className="flex flex-col text-[#A8A8A8]  ">
              <p className=" ">Assign To:</p>
              <Select className="w-40 h-6 mt-2  " placeholder="Action">
                <Option value="jack"></Option>
                <Option value="lucy"></Option>
              </Select>
              </div>

              <div className="flex  flex-col text-[#8C8C8C] ">
              <Form.Item label="Start-End date" name="selectedDate" className="ml-28 mt-0 text-[#8C8C8C]" />
                <DatePicker.RangePicker className="h-6 ml-28" name="selectedDate"/>
              </div>
             

              <div className="ml-20 text-[#8C8C8C] ">
              <p className="ml-16 ">Description</p>
              <Input className="w-40 h-6 mt-2 ml-16 " placeholder="example" />
              </div>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Mock;
