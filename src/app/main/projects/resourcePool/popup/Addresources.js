"use client";
import React from "react";
import { useState, useEffect } from "react";
// import { withFormData } from "@/HOC/Project/Project";

// import withSelectedData from "@/HOC/Project/selectedDetails";
export const Projectmanager = (props) => {
  const [projectManager, setprojectManager] = useState([]);
  const [selectedUserName, setSelectedUserIds] = useState([]);

 

  const handleCheckboxChange = (userId) => {
    // Update the selectedUserIds array when a checkbox is checked or unchecked
    if (selectedUserName.includes(userId)) {
      setSelectedUserIds(selectedUserName.filter((id) => id !== userId));
    } else {
      setSelectedUserIds([...selectedUserName, userId]);
    }
  
  };
   
    const handleSelectionAndClose = () => {
      // const selectedProjectManagers = projectManager.filter((Manager) =>
      // selectedUserName.includes(Manager.resource_name)
      // );
      // selectedProjectManagers(selectedProjectManagers);
      props.onSubmit();
    };
    // const selectedData = (selectedUserName)=>{
    //   selectedUserName = (selectedUserName)
    // }
    // getDataFromModal(selectedData)

  useEffect(() => {
    
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://siwuzhkr1i.execute-api.us-east-1.amazonaws.com/dev/get_resource_by_role?role=Project Manager"
        );
        const data = await response.json();
        setprojectManager(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData(); 
  }, []);
  
 

  return (
    <div className="flex flex-col gap-4 bg-white p-5 w-[100%] h-[584px]">
      <div className="flex items-center justify-between">
        <h1 className="text-slate-700 text-xl non-italic font-semibold leading-none">
          List Of Project Managers
        </h1>
        <button onSubmit={handleSelectionAndClose} className="flex items-center justify-center py-1 px-[0.94rem] border border-blue-500 bg-blue-500 rounded-sm text-white">
          Add
        </button>
      </div>
      <div>
        <input
          className="border border-gray-500 bg-white rounded w-64 h-9 pl-3"
          placeholder="Search"
        ></input>
      </div>
      <div className="w-[100%] border border-gray-400 p-5 flex justify-center rounded">
        <div className="rounded-lg bg-white shadow-md w-[100%] border border-gray-200 border-t-0">
          <div className=" flex flex-col gap-5 mt-3 ">
            <div className="text-black font-segoe-ui text-base font-semibold leading-normal flex items-center justify-start  px-16 pl-24 gap-60  ">
              <h1>Name</h1>
              <div className="flex w-[80%] justify-around pr-4 gap-24">
                <h1 className="">Last Active</h1>
                <h1 className=" ">Role</h1>
              </div>
            </div>
            <div className="flex items-center justify-around">
              <div className="border border-gray-200 w-[95%] "></div>
            </div>
          </div>
          <div>
            {projectManager.map((Manager, index) => (
              <div
                key={index}
                className="flex items-center justify-start py-6 pr-20 pl-4 gap-40"
              >
                <div className="flex items-center gap-6 pl-3">
                  <div>
                    <input
                      type="checkbox"
                      checked={selectedUserName.includes(Manager.resource_name)}
                      onChange={() => handleCheckboxChange(Manager.resource_name)}
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      className="rounded-full w-16 h-16"
                      src={Manager.image_url}
                    ></img>
                    <div>
                      <h1 className="text-gray-800 font-segoe-ui text-base font-bold leading-normal">
                        {Manager.resource_name}
                      </h1>
                      <h3 className="text-neutral-300 font-segoe-ui text-base font-normal leading-normal">
                        {Manager.email}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between w-[52%] ">
                  <div className="text-sm non-italic font-normal leading-none text-blue-500 align-">
                    {Manager.lastActive}
                  </div>
                  <div className="text-neutral-400 font-segoe-ui text-base font-normal mr-1">
                    Product Manager
                  </div>
                </div>
              </div>
              
            ))}
          </div>
        </div>
      </div>
      <div>
        <span>Selected User IDs Length: {selectedUserName.length}</span>
      </div>
    </div>
  );
};




export const ApiDeveloper= () => {

  const [ApiDeveloper, setApiDeveloper] = useState([]);
  const [selectedUserIds, setSelectedUserIds] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://siwuzhkr1i.execute-api.us-east-1.amazonaws.com/dev/get_resource_by_role?role=UI Developer"
        );
        const data = await response.json();
        setApiDeveloper(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleCheckboxChange = (userId) => {
    // Update the selectedUserIds array when a checkbox is checked or unchecked
    if (selectedUserIds.includes(userId)) {
      setSelectedUserIds(selectedUserIds.filter((id) => id !== userId));
    } else {
      setSelectedUserIds([...selectedUserIds, userId]);
    }
    console.log("Selected IDs:", userId);
  };

  return (
    <div className="flex flex-col gap-4 bg-white p-5 w-[100%] h-[584px]">
      <div className="flex items-center justify-between">
        <h1 className="text-slate-700 text-xl non-italic font-semibold leading-none">
          List Of Project Managers
        </h1>
        <button className="flex items-center justify-center py-1 px-[0.94rem] border border-blue-500 bg-blue-500 rounded-sm text-white">
          Add
        </button>
      </div>
      <div>
        <input
          className="border border-gray-500 bg-white rounded w-64 h-9 pl-3"
          placeholder="Search"
        ></input>
      </div>
      <div className="w-[100%] border border-gray-400 p-5 flex justify-center rounded">
        <div className="rounded-lg bg-white shadow-md w-[100%] border border-gray-200 border-t-0">
          <div className=" flex flex-col gap-5 mt-3 ">
            <div className="text-black font-segoe-ui text-base font-semibold leading-normal flex items-center justify-start  px-16 pl-24 gap-60  ">
              <h1>Name</h1>
              <div className="flex w-[80%] justify-around pr-4 gap-24">
                <h1 className="">Last Active</h1>
                <h1 className=" ">Role</h1>
              </div>
            </div>
            <div className="flex items-center justify-around">
              <div className="border border-gray-200 w-[95%] "></div>
            </div>
          </div>
          <div>
            {ApiDeveloper.map((Developer, index) => (
              <div
                key={index}
                className="flex items-center justify-start py-6 pr-20 pl-4 gap-40"
              >
                <div className="flex items-center gap-6 pl-3">
                  <div>
                    <input
                      type="checkbox"
                      id="checkBox"
                      checked={selectedUserIds.includes(Developer.resource_id)}
                      onChange={() =>
                        handleCheckboxChange(Developer.resource_id)
                      }
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      className="rounded-full w-16 h-16"
                      src={Developer.image_url}
                    ></img>
                    <div>
                      <h1 className="text-gray-800 font-segoe-ui text-base font-bold leading-normal">
                        {Developer.resource_name}
                      </h1>
                      <h3 className="text-neutral-300 font-segoe-ui text-base font-normal leading-normal">
                        {Developer.email}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between w-[52%] ">
                  <div className="text-sm non-italic font-normal leading-none text-blue-500 align-">
                    {Developer.lastActive}
                  </div>
                  <div className="text-neutral-400 font-segoe-ui text-base font-normal mr-1">
                    API Developer
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const CiCdResourcePool = () => {
  const [CiCd, setCiCd] = useState([]);
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://siwuzhkr1i.execute-api.us-east-1.amazonaws.com/dev/get_resource_by_role?role=CI/CD"
        );
        const data = await response.json();
        setCiCd(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleCheckboxChange = (userId) => {
    // Update the selectedUserIds array when a checkbox is checked or unchecked
    if (selectedUserIds.includes(userId)) {
      setSelectedUserIds(selectedUserIds.filter((id) => id !== userId));
    } else {
      setSelectedUserIds([...selectedUserIds, userId]);
    }
    console.log("Selected IDs:", userId);
  };

  return (
    <div className="flex flex-col gap-4 bg-white p-5 w-[100%] h-[584px]">
      <div className="flex items-center justify-between">
        <h1 className="text-slate-700 text-xl non-italic font-semibold leading-none">
          List Of Project Managers
        </h1>
        <button className="flex items-center justify-center py-1 px-[0.94rem] border border-blue-500 bg-blue-500 rounded-sm text-white">
          Add
        </button>
      </div>
      <div>
        <input
          className="border border-gray-500 bg-white rounded w-64 h-9 pl-3"
          placeholder="Search"
        ></input>
      </div>
      <div className="w-[100%] border border-gray-400 p-5 flex justify-center rounded">
        <div className="rounded-lg bg-white shadow-md w-[100%] border border-gray-200 border-t-0">
          <div className=" flex flex-col gap-5 mt-3 ">
            <div className="text-black font-segoe-ui text-base font-semibold leading-normal flex items-center justify-start  px-16 pl-24 gap-60  ">
              <h1>Name</h1>
              <div className="flex w-[80%] justify-around pr-4 gap-24">
                <h1 className="">Last Active</h1>
                <h1 className=" ">Role</h1>
              </div>
            </div>
            <div className="flex items-center justify-around">
              <div className="border border-gray-200 w-[95%] "></div>
            </div>
          </div>
          <div>
            {CiCd.map((CiCd, index) => (
              <div
                key={index}
                className="flex items-center justify-start py-6 pr-20 pl-4 gap-40"
              >
                <div className="flex items-center gap-6 pl-3">
                  <div>
                    <input
                      type="checkbox"
                      checked={selectedUserIds.includes(CiCd.resource_id)}
                      onChange={() => handleCheckboxChange(CiCd.resource_id)}
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      className="rounded-full w-16 h-16"
                      src={CiCd.image_url}
                    ></img>
                    <div>
                      <h1 className="text-gray-800 font-segoe-ui text-base font-bold leading-normal">
                        {CiCd.resource_name}
                      </h1>
                      <h3 className="text-neutral-300 font-segoe-ui text-base font-normal leading-normal">
                        {CiCd.email}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between w-[52%] ">
                  <div className="text-sm non-italic font-normal leading-none text-blue-500 align-">
                    {CiCd.lastActive}
                  </div>
                  <div className="text-neutral-400 font-segoe-ui text-base font-normal mr-1">
                    CI/CD
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const TesterResourcePool = () => {
  const [Tester, setTester] = useState([]);
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://siwuzhkr1i.execute-api.us-east-1.amazonaws.com/dev/get_resource_by_role?role=Tester"
        );
        const data = await response.json();
        setTester(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleCheckboxChange = (userId) => {
    // Update the selectedUserIds array when a checkbox is checked or unchecked
    if (selectedUserIds.includes(userId)) {
      setSelectedUserIds(selectedUserIds.filter((id) => id !== userId));
    } else {
      setSelectedUserIds([...selectedUserIds, userId]);
    }
    console.log("Selected IDs:", userId);
  };

  return (
    <div className="flex flex-col gap-4 bg-white p-5 w-[100%] h-[584px]">
      <div className="flex items-center justify-between">
        <h1 className="text-slate-700 text-xl non-italic font-semibold leading-none">
          List Of Project Managers
        </h1>
        <button className="flex items-center justify-center py-1 px-[0.94rem] border border-blue-500 bg-blue-500 rounded-sm text-white">
          Add
        </button>
      </div>
      <div>
        <input
          className="border border-gray-500 bg-white rounded w-64 h-9 pl-3"
          placeholder="Search"
        ></input>
      </div>
      <div className="w-[100%] border border-gray-400 p-5 flex justify-center rounded">
        <div className="rounded-lg bg-white shadow-md w-[100%] border border-gray-200 border-t-0">
          <div className=" flex flex-col gap-5 mt-3 ">
            <div className="text-black font-segoe-ui text-base font-semibold leading-normal flex items-center justify-start  px-16 pl-24 gap-60  ">
              <h1>Name</h1>
              <div className="flex w-[80%] justify-around pr-4 gap-24">
                <h1 className="">Last Active</h1>
                <h1 className=" ">Role</h1>
              </div>
            </div>
            <div className="flex items-center justify-around">
              <div className="border border-gray-200 w-[95%] "></div>
            </div>
          </div>
          <div>
            {Tester.map((Tester, index) => (
              <div
                key={index}
                className="flex items-center justify-start py-6 pr-20 pl-4 gap-40"
              >
                <div className="flex items-center gap-6 pl-3">
                  <div>
                    <input
                      type="checkbox"
                      id="checkBox"
                      checked={selectedUserIds.includes(Tester.resource_id)}
                      onChange={() => handleCheckboxChange(Tester.resource_id)}
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      className="rounded-full w-16 h-16"
                      src={Tester.image_url}
                    ></img>
                    <div>
                      <h1 className="text-gray-800 font-segoe-ui text-base font-bold leading-normal">
                        {Tester.resource_name}
                      </h1>
                      <h3 className="text-neutral-300 font-segoe-ui text-base font-normal leading-normal">
                        {Tester.email}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between w-[52%] ">
                  <div className="text-sm non-italic font-normal leading-none text-blue-500 align-">
                    {Tester.lastActive}
                  </div>
                  <div className="text-neutral-400 font-segoe-ui text-base font-normal mr-1">
                    Tester
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const UiDesignResourcePool = () => {
  // /get_resource_by_role

  const [uiDesigner, setUiDesigners] = useState([]);
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://siwuzhkr1i.execute-api.us-east-1.amazonaws.com/dev/get_resource_by_role?role=UI Designer"
        );
        const data = await response.json();
        setUiDesigners(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleCheckboxChange = (userId) => {
    // Update the selectedUserIds array when a checkbox is checked or unchecked
    if (selectedUserIds.includes(userId)) {
      setSelectedUserIds(selectedUserIds.filter((id) => id !== userId));
    } else {
      setSelectedUserIds([...selectedUserIds, userId]);
    }
    console.log("Selected IDs:", userId);
  };

  return (
    <div className="flex flex-col gap-4 bg-white p-5 w-[100%] h-[584px]">
      <div className="flex items-center justify-between">
        <h1 className="text-slate-700 text-xl non-italic font-semibold leading-none">
          List Of Project Managers
        </h1>
        <button className="flex items-center justify-center py-1 px-[0.94rem] border border-blue-500 bg-blue-500 rounded-sm text-white">
          Add
        </button>
      </div>
      <div>
        <input
          className="border border-gray-500 bg-white rounded w-64 h-9 pl-3"
          placeholder="Search"
        ></input>
      </div>
      <div className="w-[100%] border border-gray-400 p-5 flex justify-center rounded">
        <div className="rounded-lg bg-white shadow-md w-[100%] border border-gray-200 border-t-0">
          <div className=" flex flex-col gap-5 mt-3 ">
            <div className="text-black font-segoe-ui text-base font-semibold leading-normal flex items-center justify-start  px-16 pl-24 gap-60  ">
              <h1>Name</h1>
              <div className="flex w-[80%] justify-around pr-4 gap-24">
                <h1 className="">Last Active</h1>
                <h1 className=" ">Role</h1>
              </div>
            </div>
            <div className="flex items-center justify-around">
              <div className="border border-gray-200 w-[95%] "></div>
            </div>
          </div>
          <div>
            {uiDesigner.map((desigers, index) => (
              <div
                key={index}
                className="flex items-center justify-start py-6 pr-20 pl-4 gap-40"
              >
                <div className="flex items-center gap-6 pl-3">
                  <div>
                    <input
                      type="checkbox"
                      checked={selectedUserIds.includes(desigers.resource_id)}
                      onChange={() =>
                        handleCheckboxChange(desigers.resource_id)
                      }
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      className="rounded-full w-16 h-16"
                      src={desigers.image_url}
                    ></img>
                    <div>
                      <h1 className="text-gray-800 font-segoe-ui text-base font-bold leading-normal">
                        {desigers.resource_name}
                      </h1>
                      <h3 className="text-neutral-300 font-segoe-ui text-base font-normal leading-normal">
                        {desigers.email}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between w-[52%] ">
                  <div className="text-sm non-italic font-normal leading-none text-blue-500 align-">
                    {desigers.lastActive}
                  </div>
                  <div className="text-neutral-400 font-segoe-ui text-base font-normal mr-1">
                    UI Designer
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const UiDeveloperResourcePool = () => {

  const [uiDeveloper, setuiDeveloper] = useState([]);
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://siwuzhkr1i.execute-api.us-east-1.amazonaws.com/dev/get_resource_by_role?role=UI Developer"
        );
        const data = await response.json();
        setuiDeveloper(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleCheckboxChange = (userId) => {
    // Update the selectedUserIds array when a checkbox is checked or unchecked
    if (selectedUserIds.includes(userId)) {
      setSelectedUserIds(selectedUserIds.filter((id) => id !== userId));
    } else {
      setSelectedUserIds([...selectedUserIds, userId]);
    }
    console.log("Selected IDs:", userId);
  };

  return (
    <div className="flex flex-col gap-4 bg-white p-5 w-[100%] h-[584px]">
      <div className="flex items-center justify-between">
        <h1 className="text-slate-700 text-xl non-italic font-semibold leading-none">
          List Of Project Managers
        </h1>
        <button className="flex items-center justify-center py-1 px-[0.94rem] border border-blue-500 bg-blue-500 rounded-sm text-white">
          Add
        </button>
      </div>
      <div>
        <input
          className="border border-gray-500 bg-white rounded w-64 h-9 pl-3"
          placeholder="Search"
        ></input>
      </div>
      <div className="w-[100%] border border-gray-400 p-5 flex justify-center rounded">
        <div className="rounded-lg bg-white shadow-md w-[100%] border border-gray-200 border-t-0">
          <div className=" flex flex-col gap-5 mt-3 ">
            <div className="text-black font-segoe-ui text-base font-semibold leading-normal flex items-center justify-start  px-16 pl-24 gap-60  ">
              <h1>Name</h1>
              <div className="flex w-[80%] justify-around pr-4 gap-24">
                <h1 className="">Last Active</h1>
                <h1 className=" ">Role</h1>
              </div>
            </div>
            <div className="flex items-center justify-around">
              <div className="border border-gray-200 w-[95%] "></div>
            </div>
          </div>
          <div>
            {uiDeveloper.map((Developer, index) => (
              <div
                key={index}
                className="flex items-center justify-start py-6 pr-20 pl-4 gap-40"
              >
                <div className="flex items-center gap-6 pl-3">
                  <div>
                    <input
                      type="checkbox"
                      id="checkBox"
                      checked={selectedUserIds.includes(Developer.resource_id)}
                      onChange={() =>
                        handleCheckboxChange(Developer.resource_id)
                      }
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      className="rounded-full w-16 h-16"
                      src={Developer.image_url}
                    ></img>
                    <div>
                      <h1 className="text-gray-800 font-segoe-ui text-base font-bold leading-normal">
                        {Developer.resource_name}
                      </h1>
                      <h3 className="text-neutral-300 font-segoe-ui text-base font-normal leading-normal">
                        {Developer.email}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between w-[52%] ">
                  <div className="text-sm non-italic font-normal leading-none text-blue-500 align-">
                    {Developer.lastActive}
                  </div>
                  <div className="text-neutral-400 font-segoe-ui text-base font-normal mr-1">
                    UI Developer
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const UxResearcher = ()=> {

  const [uxResearcher, setuxResearcher] = useState([]);
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://siwuzhkr1i.execute-api.us-east-1.amazonaws.com/dev/get_resource_by_role?role=UI Developer"
        );
        const data = await response.json();
        setuxResearcher(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleCheckboxChange = (userId) => {
    // Update the selectedUserIds array when a checkbox is checked or unchecked
    if (selectedUserIds.includes(userId)) {
      setSelectedUserIds(selectedUserIds.filter((id) => id !== userId));
    } else {
      setSelectedUserIds([...selectedUserIds, userId]);
    }
    console.log("Selected IDs:", userId);
  };

  return (
    <div className="flex flex-col gap-4 bg-white p-5 w-[100%] h-[584px]">
      <div className="flex items-center justify-between">
        <h1 className="text-slate-700 text-xl non-italic font-semibold leading-none">
          List Of Project Managers
        </h1>
        <button className="flex items-center justify-center py-1 px-[0.94rem] border border-blue-500 bg-blue-500 rounded-sm text-white">
          Add
        </button>
      </div>
      <div>
        <input
          className="border border-gray-500 bg-white rounded w-64 h-9 pl-3"
          placeholder="Search"
        ></input>
      </div>
      <div className="w-[100%] border border-gray-400 p-5 flex justify-center rounded">
        <div className="rounded-lg bg-white shadow-md w-[100%] border border-gray-200 border-t-0">
          <div className=" flex flex-col gap-5 mt-3 ">
            <div className="text-black font-segoe-ui text-base font-semibold leading-normal flex items-center justify-start  px-16 pl-24 gap-60  ">
              <h1>Name</h1>
              <div className="flex w-[80%] justify-around pr-4 gap-24">
                <h1 className="">Last Active</h1>
                <h1 className=" ">Role</h1>
              </div>
            </div>
            <div className="flex items-center justify-around">
              <div className="border border-gray-200 w-[95%] "></div>
            </div>
          </div>
          <div>
            {uxResearcher.map((Researcher, index) => (
              <div
                key={index}
                className="flex items-center justify-start py-6 pr-20 pl-4 gap-40"
              >
                <div className="flex items-center gap-6 pl-3">
                  <div>
                    <input
                      type="checkbox"
                      id="checkBox"
                      checked={selectedUserIds.includes(Researcher.resource_id)}
                      onChange={() =>
                        handleCheckboxChange(Researcher.resource_id)
                      }
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      className="rounded-full w-16 h-16"
                      src={Researcher.image_url}
                    ></img>
                    <div>
                      <h1 className="text-gray-800 font-segoe-ui text-base font-bold leading-normal">
                        {Researcher.resource_name}
                      </h1>
                      <h3 className="text-neutral-300 font-segoe-ui text-base font-normal leading-normal">
                        {Researcher.email}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between w-[52%] ">
                  <div className="text-sm non-italic font-normal leading-none text-blue-500 align-">
                    {Researcher.lastActive}
                  </div>
                  <div className="text-neutral-400 font-segoe-ui text-base font-normal mr-1">
                    UX Researcher
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
