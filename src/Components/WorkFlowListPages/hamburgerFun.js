import React, { useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const Hamburger = () => {
  const [visible, setVisible] = useState(false);
  const [showUsecaseDropdown, setShowUsecaseDropdown] = useState(false);
  const [showHamburger, setShowHamburger] = useState(true);

  const handleMenuClick = (e) => {
    if (e.key === "1") {
      // If "Add Usecase" is clicked, toggle the additional dropdown visibility
      setShowUsecaseDropdown(!showUsecaseDropdown);
      setShowHamburger(false); // Hide the Hamburger and Usecase Options button
    } else {
      console.log("Clicked on:", e);
    }
    setVisible(false);
  };

  const handleUsecaseMenuClick = (workflowType) => {
    console.log("Selected Workflow Type:", workflowType);
    setShowUsecaseDropdown(false);
    setShowHamburger(true); // Show the Hamburger and Usecase Options button
  };

  const usecaseMenu = (
    <Menu onClick={(e) => handleUsecaseMenuClick(e.key)}>
      <Menu.Item key="Development">Development Workflow</Menu.Item>
      <Menu.Item key="Marketing">Marketing Workflow</Menu.Item>
      <Menu.Item key="Budget">Budget Workflow</Menu.Item>
      <Menu.Item key="Other">Other Workflow</Menu.Item>
    </Menu>
  );

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item
        key="1"
        className="text-black font-sans text-[14px] not-italic font-normal leading-5"
      >
        Add Usecase
      </Menu.Item>
      <Menu.Item
        key="2"
        className="text-black font-sans text-[14px] not-italic font-normal leading-5"
      >
        Remove Workflow
      </Menu.Item>
    </Menu>
  );

  return (
    <div style={{ position: "relative" }}>
      {showHamburger && (
        <Dropdown
          overlay={menu}
          trigger={["click"]}
          visible={visible}
          onVisibleChange={(v) => setVisible(v)}
        >
          <Button
            type="text"
            size={50}
            className="text-blue-500"
            onClick={() => setVisible(!visible)}
          >
            <MenuOutlined style={{ fontSize: "19px", background: "white" }} />
          </Button>
        </Dropdown>
      )}

      {/* Additional Dropdown for "Add Usecase" */}
      {showUsecaseDropdown && (
        <Dropdown
          overlay={usecaseMenu}
          trigger={["click"]}
          visible={showUsecaseDropdown}
          onVisibleChange={(v) => setShowUsecaseDropdown(v)}
          placement="bottomLeft"
          // Adjust the styles for positioning
          style={{ position: "absolute", top: "100%", left: "10px" }}
        >
          <Button
            type="text"
            size={50}
            className="text-blue-500"
            onClick={() => setShowUsecaseDropdown(!showUsecaseDropdown)}
          >
            <MenuOutlined style={{ fontSize: "19px", background: "white" }} />
          </Button>
        </Dropdown>
      )}
    </div>
  );
};

export default Hamburger;
