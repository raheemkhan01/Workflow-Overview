"use client";
import api from "@/api";
import React from "react";
import { useState, useEffect } from "react";
import { Tabs, Button } from "antd";
const { TabPane } = Tabs;

import AssineTo from "../useCaseAssine/assineTo";
import WorkViewDetails from "../useCaseWorkViewDetails/workViewDetails";
import { UseCase1Comments } from "../useCaseWorkViewDetailsComments/UseCaseComments";
import Stepper from "../useCaseStepper/useCaseStepper";
import AssestView from "../useCaseAssiteView/useCaseassiteView";
import user from "./user";

const UseCaseTabs = () => {
  const [usetabes, setUsetabes] = useState([]);
  const [useCaseAssin, setUseCaseAssin] = useState([]);
  const [workFlowView, setWorkFlowView] = useState();

  // const [assintoData, setAssintoData] = useState([])

  const [activeTab, setActiveTab] = useState("1");
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [stepsVisible, setStepsVisible] = useState(false);
  const [stepsNext, setAtepsNext] = useState(0);
  // useEffect to fetch all API Developers

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await api.get(
          "/usecase/982a2e15-7ac6-44a1-8aee-0d0b3613ed09"
        );
        console.log(response.data);
        const data = response.data;
        setUsetabes(data);

        // const { assignee_name, role } = data;

        // Create childData object
        const childData = {
          assignee_name: data.assignee_name,
          role: data.role,
          image: data.image,
          total_task: data.total_task,

          useCase_AssinDate: data.usecase.start_date,
          useCase_PlanDate: data.usecase.creation_date,
          useCase_ActualDate: data.usecase.end_date,
        };
        setUseCaseAssin(childData);

        setWorkFlowView(data.usecase);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const onChange = (key) => {
    setActiveTab(key);
    if (key === "2") {
      setPopoverVisible(true);
    } else {
      setPopoverVisible(false);
    }
  };
  const handleTabChange = (key) => {
    setActiveTab(key);
    setStepsVisible(key === "2");
  };

  const handleNext = () => {
    // If steps are not visible, navigate to the next tab
    const nextTab = String(parseInt(activeTab, 10) + 1);
    setActiveTab(nextTab);
    if (nextTab === "2") {
      setPopoverVisible(true);
    } else {
      setPopoverVisible(false);
    }
  };

  const handlePrev = () => {
    if (stepsVisible) {
      // If steps are visible, trigger the previous step
      // Implement your logic to handle steps navigation
      return;
    }

    // If steps are not visible, navigate to the previous tab
    const prevTab = String(parseInt(activeTab, 10) - 1);
    setActiveTab(prevTab);
    if (prevTab === "2") {
      setPopoverVisible(true);
    } else {
      setPopoverVisible(false);
    }
  };

  return (
    <>
      <Tabs
        defaultActiveKey="1"
        activeKey={activeTab}
        onChange={onChange}
        tabBarStyle={{ margin: 10, fontSize: "2rem" }}
        tabBarGutter={150}
        className="bg-white p-6"
      >
        <TabPane tab={<user/>} key="1" className="py-6 bg-white">
          <AssineTo setUseCaseAssin={useCaseAssin} />
        </TabPane>
        <TabPane
          tab="Workflow View"
          key="2"
          className="py-10 relative"
          onClick={() => setPopoverVisible(!popoverVisible)}
        >
          <div className="my-8 mb-[6rem] relative  px-6 pt-[1rem]">
            {/* <WorkViewDetails popoverVisible={popoverVisible}  stepsNext={stepsNext}/> */}
            <Stepper
              popoverVisible={popoverVisible}
              stepsNext={stepsNext}
              setWorkFlowView={workFlowView}
            />
          </div>
          <div className="border-t-2 border-dashed">
            {/* <UseCase1Comments />
            <UseCase1Comments /> */}
          </div>
        </TabPane>
        <TabPane tab="Asset View" key="3">
          <div className="my-8">
            <AssestView />
          </div>
        </TabPane>
        <TabPane tab="Planning" key="4">
          <div className="my-8">{/* <WorkViewDetails /> */}</div>
        </TabPane>
      </Tabs>
      <div className="flex gap-4 justify-end mt-4">
        {activeTab > "1" && (
          <button
            className="bg-blue-400 text-white p-3 rounded-lg"
            onClick={handlePrev}
            onChange={onChange}
          >
            Previous
          </button>
        )}
        {activeTab < "4" && (
          <button
            className="bg-blue-400 text-white p-3 rounded-lg"
            onClick={handleNext}
            onChange={onChange}
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default UseCaseTabs;
