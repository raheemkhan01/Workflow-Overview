"use client";

// export default page;
import React, { useState } from "react";
import { Input, Button, notification } from "antd";
import { DeleteFilled, SaveOutlined, CloseCircleFilled } from "@ant-design/icons";
import { useSelector } from "react-redux";
import axios from "axios";

const Page = () => {
  const [workFlowName, setWorkFlowName] = useState("");
  const [stages, setStages] = useState([]);
  const setprojectIds = useSelector((state) => state.addResources);
  const ProjectId = setprojectIds.id[0].prjectId;
  const [api, contextHolder] = notification.useNotification();
console.log(ProjectId)
  const postWorkflow = async () => {
    try {
      const data = {
        name: workFlowName,
        created_by_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        project_id: ProjectId,
        stages: stages.map((stage) => ({
          name: stage.stageName,
          tasks: stage.subStages,
          checklist: stage.checklist,
        })),
      };
console.log(data)

      const response = await axios.post(
        "https://spj7xgf470.execute-api.us-east-1.amazonaws.com/dev/workflow",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      console.log(JSON.stringify(response.data));
      openNotification("topRight", "success", "Workflow saved successfully!");
    } catch (error) {
      console.error(error);
      openNotification("topRight", "error", "Failed to save workflow. Please try again later.");
    }
  };

  const handleAddStage = () => {
    setStages([
      ...stages,
      {
        stageName: "",
        subStages: [],
        checklist: [],
      },
    ]);
  };

  // const handleWorkFlowNameChange = (index, value) => {
  //   const updatedStages = [...stages];
  //   updatedStages[index].workFlowName = value;
  //   setStages(updatedStages);
  // };

  const handleStageNameChange = (index, value) => {
    const updatedStages = [...stages];
    updatedStages[index].stageName = value;
    setStages(updatedStages);
  };

  const handleAddSubstage = (index) => {
    const updatedStages = [...stages];
    updatedStages[index].subStages.push("");
    setStages(updatedStages);
  };

  const handleAddChecklist = (index) => {
    const updatedStages = [...stages];
    updatedStages[index].checklist.push("");
    setStages(updatedStages);
  };

  const openNotification = (placement, type, message) => {
    api[type]({
      message: message,
      placement: placement,
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold leading-snug tracking-normal text-left">
          Workflow Management
        </h1>
        <CloseCircleFilled style={{ fontSize: "20px", color: "blue" }} />
      </div>
      <h3 className="text-2xl font-medium leading-loose tracking-normal text-left pl-3">
        Creating Workflow
      </h3>
      <div className="flex justify-between p-4 items-center bg-white">
        <Input
          placeholder="example"
          className="w-1/2"
          onChange={(e) => setWorkFlowName(e.target.value)}
        />
        <Button
          icon={<SaveOutlined />}
          type="primary"
          className="bg-blue-500"
          onClick={handleAddStage}
        >
          Add Stage
        </Button>
      </div>

      {stages.map((stage, index) => (
        <div key={index} className="py-2 mt-2 flex flex-col space-y-2">
          <h3 className="text-base font-medium leading-normal tracking-normal text-left">
            Add Stage
          </h3>
          <div className="bg-white p-4 flex items-center justify-between">
            <h4 className="text-sm font-normal leading-snug tracking-normal">
              Stage Name :
            </h4>
            <Input
              placeholder="Requirement"
              className="w-1/2"
              value={stage.stageName}
              onChange={(e) => handleStageNameChange(index, e.target.value)}
            />
            <DeleteFilled
              style={{ color: "red" }}
              onClick={() => {
                const updatedStages = stages.filter((_, i) => i !== index);
                setStages(updatedStages);
              }}
            />

            <Button
              type="primary"
              className="bg-blue-500"
              onClick={() => {
                handleAddChecklist(index);
                ;
              }}
            >
              Add Checklist
            </Button>
            <Button
              type="primary"
              className="bg-blue-500"
              onClick={() => handleAddSubstage(index)}
            >
              Add Sub Stages
            </Button>
            {contextHolder}
          </div>

          <div>
            {/* Render Substages */}
            {stage.subStages.map((subStage, subIndex) => (
              <div
                key={subIndex}
                className="bg-white p-4 flex items-center justify-between my-1"
              >
                <h4 className="text-sm font-normal leading-snug tracking-normal">
                  Sub Stage Name :
                </h4>
                <Input
                  placeholder="Substage"
                  className="w-1/2"
                  value={subStage}
                  onChange={(e) => {
                    const updatedStages = [...stages];
                    updatedStages[index].subStages[subIndex] = e.target.value;
                    setStages(updatedStages);
                  }}
                />
                <Button
                  type="primary"
                  danger
                  onClick={() => {
                    const updatedStages = [...stages];
                    updatedStages[index].subStages.splice(subIndex, 1); // Remove the sub-stage at subIndex
                    setStages(updatedStages);
                  }}
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>

          <div>
            {/* Render Checklists */}
            {stage.checklist.map((checklist, checklistIndex) => (
              <div
                key={checklistIndex}
                className="bg-white p-4 flex items-center justify-between my-1"
              >
                <h4 className="text-sm font-normal leading-snug tracking-normal">
                  Checklist :
                </h4>
                <Input
                  placeholder="Checklist Item"
                  className="w-1/2"
                  value={checklist}
                  onChange={(e) => {
                    const updatedStages = [...stages];
                    updatedStages[index].checklist[checklistIndex] =
                      e.target.value;
                    setStages(updatedStages);
                  }}
                />
                <Button
                  type="primary"
                  danger
                  onClick={() => {
                    const updatedStages = [...stages];
                    updatedStages[index].checklist.splice(checklistIndex, 1); // Remove the checklist item at checklistIndex
                    setStages(updatedStages);
                  }}
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="flex justify-center mt-6 w-[100%]">
        <Button className="bg-blue-500 text-white" onClick={postWorkflow}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default Page;
