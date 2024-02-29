import React, { useState } from "react";
import { Button, Dropdown, Menu, Modal } from "antd";
import { FileTextOutlined, PlusOutlined } from "@ant-design/icons";
import { SelectTemplateDropDown } from "./../WorkFlowListPages/SelectTemplateDropDown";
import Link from 'next/link';
import DropDownSelectSaveWFL from "./DropDownSelectSaveWFL"; // Importing the modified DropDownSelectSaveWFL component
import SavedComponentDisplay from "./SavedComponet";
import SelectTamplate from "./SelectTamplate";

const WorkFlowDropDown = ({ onSelect, setunSavedTamplate }) => {

  const [visible, setVisible] = useState(false);
  const [showSelectTemplate, setShowSelectTemplate] = useState(false);
  const [savedWorkflow, setSavedWorkflow] = useState(null);
  const [selectedWorkflow, setSelectedWorkflow] = useState(null);


  const handleSaveWorkflow = (workflowData) => {
    // Here, you can save the workflow data to your backend or do any other necessary processing
    setSavedWorkflow(workflowData);
  };

  const openModal = (modalSetter) => {
    modalSetter(true);
  };
  const handleCloseModals = () => {
    setShowSelectTemplate(false);
    if (onSelect) {
      onSelect(title); // Pass the title as an identifier
    }
  };
  // const handleClick = () => {
  //   if (onSelect) {
  //     onSelect(title); // Pass the title as an identifier
  //   }
  // };
  const handleMenuClick = (e) => {
    if (e.key === "selectTemplate") {
      setVisible(false);
      setShowSelectTemplate(true);
    } else if (e.key === "createNewTemplate") {
      setVisible(false);
      setShowSelectTemplate(false);
    }
  };


  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item
        key="selectTemplate"
        icon={<FileTextOutlined />}
        onClick={() => openModal(setShowSelectTemplate)}
      >
        Select Template
      </Menu.Item>
      <Menu.Item key="createNewTemplate" icon={<PlusOutlined />}>
        <Link href="/main/projects/addingStages">
          Create New Template
        </Link>
      </Menu.Item>
    </Menu>
  );

  const handleButtonClick = () => {
    setVisible(!visible);
    setShowSelectTemplate(false); // Hide SelectTemplateDropDown on button click
  };
  const handleCloseModalAndSave = () => {
    handleCloseModals();
    setVisible(false); // Close the modal
  };

  return (

    <>

      <Dropdown
        overlay={menu}
        placement="bottomCenter"
        arrow
        visible={visible}
        onClick={handleButtonClick}
        className="z-0"
      >
        <Button
          type="primary"
          size={50}
          className="bg-blue-500 hover:bg-blue-400"
        >
          Add Workflow
        </Button>
      </Dropdown>
      <Modal
        open={showSelectTemplate}
        onCancel={handleCloseModals}
        width={1000}
        footer={null}
        closable={false}

      >
        <div className="flex flex-row justify-center items-center  bg-slate-100">
          {!selectedWorkflow && (
            <SelectTemplateDropDown onCloseModal={handleCloseModals}
              setunSavedTamplate={setunSavedTamplate}

              title="Your Title"
              onSave={handleSaveWorkflow} />)}

          <section className="relative flex flex-col w-[256px] h-[316px] justify-center text-center gap-3 shadow-lg p-3 items-center bg-white rounded-lg border border-slate-100">
            <Link
              href="/main/projects/addingStages"
              type="default"
              className="text-black border p-2 rounded-md border-cyan-600 font-roboto font-medium text-base leading-6"
            >
              Create New Template
            </Link>
          </section>
        </div>
      </Modal>
      {/* <SavedComponentDisplay savedWorkflow={savedWorkflow} /> */}

    </>
  );
};

export default WorkFlowDropDown;
