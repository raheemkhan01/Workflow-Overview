import React, { useState } from "react";
import { Button, Dropdown, Menu } from "antd";
import Image from "next/image";
// import hamburger from "../../../public";
import hamburger from "../../../public/assets/hamburger.png";


const AddRemove = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
    // Additional click handling logic if needed
  };

  const menu = (
    <Menu>
      <Menu.Item
        key="1"
        className={`addusescaseRL ${
          activeButton === "Add Usecase" ? "bg-blue-500" : ""
        }`}
        onClick={() => handleButtonClick("Add Usecase")}
      >
        Add Usecase
      </Menu.Item>
      <Menu.Item
        key="2"
        className={`addusescaseRL ${
          activeButton === "Remove Workflow" ? "bg-blue-500" : ""
        }`}
        onClick={() => handleButtonClick("Remove Workflow")}
      >
        Remove Workflow
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]} placement="bottomLeft">
      <a className="text-blue-600 cursor-pointer">
        <Image src={hamburger} width={20} height={18} className="kcndsj" />
      </a>
    </Dropdown>
  );
};

export default AddRemove;
