"use client";
import api from "@/api";
import React from "react";
import { useState, useEffect } from "react";
// import { withFormData } from "@/HOC/Project/Project";

// import withSelectedData from "@/HOC/Project/selectedDetails";

// HOC
import useProject from "@/HOC/Project/Project";

export const Projectmanager = (props) => {
  // All Hooks
  // project
  const [projectManager, setprojectManager] = useState([]);

  // select User
  const [selectUser, setSelectUser] = useState([]);

  // useProject
  const [project, setProject] = useProject({
    resourcePool: [
      {
        projectManager: [],
      },
    ],
  });

  // HandleCheckBoxChange
  const handleCheckboxChange = (userId) => {
    // Check if userId is already in selectUser
    if (selectUser.includes(userId)) {
      // If yes, remove it
      setSelectUser((prevState) => prevState.filter((id) => id !== userId));
    } else {
      // If no, add it
      setSelectUser((prevState) => [...prevState, userId]);
    }

    // console.log(userId)
    // console.log(selectUser)
  };

  console.log(selectUser);

  const handleSelectionAndClose = () => {
    // console.log(selectUser);
    setProject((prevProject) => {
      const updatedResourcePool = [
        {
          projectManager: selectUser,
        },
      ];
      return {
        ...prevProject,
        resourcePool: updatedResourcePool,
      };
    });
    props.onSubmit();
  };

  // console.log(project);

  // useEffect to fetch all users
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await api.get("/get_resource_by_role", {
          params: {
            role: "Project Manager",
          },
        });
        console.log(response.data);
        const data = response.data;
        setprojectManager(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-4 bg-white p-5 w-[100%]">
      <div className="flex items-center justify-between">
        <h1 className="text-slate-700 text-xl non-italic font-semibold leading-none">
          List Of Project Managers
        </h1>
        <button
          onClick={handleSelectionAndClose}
          className="flex items-center justify-center py-1 px-[0.94rem] border border-blue-500 bg-blue-500 rounded-sm text-white cursor-pointer"
        >
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

          {/* Project Manager useState Hook Data Map */}
          <div>
            {projectManager.map((Manager, index) => (
              <div
                key={index}
                className="flex items-center justify-start py-6 pr-20 pl-4 gap-40"
              >
                <div className="flex items-center gap-6 pl-3">
                  <div>
                    {/* CheckBox Button */}
                    <input
                      type="checkbox"
                      checked={selectUser.includes(Manager.resource_id)}
                      onChange={() => handleCheckboxChange(Manager.resource_id)}
                      className="cursor-pointer"
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
    </div>
  );
};

// Api Developer
export const ApiDeveloper = (props) => {
  // All Hooks
  // API Developer
  const [apiDeveloper, setApiDeveloper] = useState([]);

  // select User
  const [selectUser, setSelectUser] = useState([]);

  // useProject
  const [project, setProject] = useProject({
    resourcePool: [
      {
        apiDeveloper: [],
      },
    ],
  });

  // useEffect to fetch all API Developers
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await api.get("/get_resource_by_role", {
          params: {
            role: "API Developer",
          },
        });
        console.log(response.data);
        const data = response.data;
        setApiDeveloper(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // HandleCheckBoxChanges
  const handleCheckboxChange = (userId) => {
    // Check if userId is already in selectUser
    if (selectUser.includes(userId)) {
      // If yes, remove it
      setSelectUser((prevState) => prevState.filter((id) => id !== userId));
    } else {
      // If no, add it
      setSelectUser((prevState) => [...prevState, userId]);
    }
  };

  // handleSelectionAndClose
  const handleSelectionAndClose = () => {
    // console.log(selectUser);
    setProject((prevProject) => {
      const updatedResourcePool = [
        ...prevProject.resourcePool, // Keep existing properties
        {
          apiDeveloper: selectUser,
        },
      ];
      return {
        ...prevProject,
        resourcePool: updatedResourcePool,
      };
    });

    props.onSubmit();
  };

  return (
    <div className="flex flex-col gap-4 bg-white p-5 w-[100%]">
      <div className="flex items-center justify-between">
        <h1 className="text-slate-700 text-xl non-italic font-semibold leading-none">
          List Of Api Developers
        </h1>
        <button
          onClick={handleSelectionAndClose}
          className="flex items-center justify-center py-1 px-[0.94rem] border border-blue-500 bg-blue-500 rounded-sm text-white cursor-pointer"
        >
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
            {apiDeveloper.map((Developer, index) => (
              <div
                key={index}
                className="flex items-center justify-start py-6 pr-20 pl-4 gap-40"
              >
                <div className="flex items-center gap-6 pl-3">
                  <div>
                    <input
                      type="checkbox"
                      checked={selectUser.includes(Developer.resource_id)}
                      onChange={() =>
                        handleCheckboxChange(Developer.resource_id)
                      }
                      className="cursor-pointer"
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

// cicd
export const CiCdResourcePool = (props) => {
  const [CiCd, setCiCd] = useState([]);
  const [selectUser, setSelectUser] = useState([]);

  // useProject
  const [project, setProject] = useProject({
    resourcePool: [
      {
        cicd: [],
      },
    ],
  });

  // handleSelectionAndCLose
  const handleSelectionAndClose = () => {
    // console.log(selectUser);

    setProject((prevProject) => {
      const updatedResourcePool = [
        {
          cicid: selectUser,
        },
      ];
      return {
        ...prevProject,
        resourcePool: updatedResourcePool,
      };
    });

    props.onSubmit();
  };

  // HandleCheckBoxChange
  const handleCheckboxChange = (userId) => {
    // Check if userId is already in selectUser
    if (selectUser.includes(userId)) {
      // If yes, remove it
      setSelectUser((prevState) => prevState.filter((id) => id !== userId));
    } else {
      // If no, add it
      setSelectUser((prevState) => [...prevState, userId]);
    }

    // console.log(userId)
    // console.log(selectUser)
  };

  // console.log(project);

  // useEffect to fetch all users
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await api.get("/get_resource_by_role", {
          params: {
            role: "CI/CD",
          },
        });

        console.log(response.data);
        const data = response.data;
        setCiCd(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-4 bg-white p-5 w-[100%]">
      <div className="flex items-center justify-between">
        <h1 className="text-slate-700 text-xl non-italic font-semibold leading-none">
          List Of CI/CD
        </h1>
        <button
          onClick={handleSelectionAndClose}
          className="flex items-center justify-center py-1 px-[0.94rem] border border-blue-500 bg-blue-500 rounded-sm text-white cursor-pointer"
        >
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
                      checked={selectUser.includes(CiCd.resource_id)}
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

// Tester
export const TesterResourcePool = (props) => {
  const [Tester, setTester] = useState([]);
  const [selectUser, setSelectUser] = useState([]);

  // useProject
  const [project, setProject] = useProject({
    resourcePool: [
      {
        tester: [],
      },
    ],
  });

  // HandleCheckBoxChange
  const handleCheckboxChange = (userId) => {
    // Check if userId is already in selectUser
    if (selectUser.includes(userId)) {
      // If yes, remove it
      setSelectUser((prevState) => prevState.filter((id) => id !== userId));
    } else {
      // If no, add it
      setSelectUser((prevState) => [...prevState, userId]);
    }

    // console.log(userId)
    // console.log(selectUser)
  };

  console.log(selectUser);

  const handleSelectionAndClose = () => {
    // console.log(selectUser);

    setProject((prevProject) => {
      const updatedResourcePool = [
        {
          tester: selectUser,
        },
      ];
      return {
        ...prevProject,
        resourcePool: updatedResourcePool,
      };
    });

    props.onSubmit();
  };

  // console.log(project);

  // useEffect to fetch all users
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await api.get("/get_resource_by_role", {
          params: {
            role: "Tester",
          },
        });
        console.log(response.data);
        const data = response.data;
        setTester(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-4 bg-white p-5 w-[100%]">
      <div className="flex items-center justify-between">
        <h1 className="text-slate-700 text-xl non-italic font-semibold leading-none">
          List Of Tester
        </h1>
        <button
          onClick={handleSelectionAndClose}
          className="flex items-center justify-center py-1 px-[0.94rem] border border-blue-500 bg-blue-500 rounded-sm text-white cursor-pointer"
        >
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
                      checked={selectUser.includes(Tester.resource_id)}
                      onChange={() => handleCheckboxChange(Tester.resource_id)}
                      className="cursor-pointer"
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

export const UiDesignResourcePool = (props) => {
  // /get_resource_by_role

  const [uiDesigner, setUiDesigners] = useState([]);
  const [selectUser, setSelectUser] = useState([]);

  // useProject
  const [project, setProject] = useProject({
    resourcePool: [
      {
        uiDesigner: [],
      },
    ],
  });

  // HandleCheckBoxChange
  const handleCheckboxChange = (userId) => {
    // Check if userId is already in selectUser
    if (selectUser.includes(userId)) {
      // If yes, remove it
      setSelectUser((prevState) => prevState.filter((id) => id !== userId));
    } else {
      // If no, add it
      setSelectUser((prevState) => [...prevState, userId]);
    }

    // console.log(userId)
    // console.log(selectUser)
  };

  console.log(selectUser);

  const handleSelectionAndClose = () => {
    // console.log(selectUser);

    setProject((prevProject) => {
      const updatedResourcePool = [
        {
          uiDesigner: selectUser,
        },
      ];
      return {
        ...prevProject,
        resourcePool: updatedResourcePool,
      };
    });

    props.onSubmit();
  };

  // console.log(project);

  // useEffect to fetch all users
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await api.get("/get_resource_by_role", {
          params: {
            role: "UI Designer",
          },
        });
        console.log(response.data);
        const data = response.data;
        setUiDesigners(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-4 bg-white p-5 w-[100%]">
      <div className="flex items-center justify-between">
        <h1 className="text-slate-700 text-xl non-italic font-semibold leading-none">
          List Of UI Designers
        </h1>
        <button
          onClick={handleSelectionAndClose}
          className="flex items-center justify-center py-1 px-[0.94rem] border border-blue-500 bg-blue-500 rounded-sm text-white cursor-pointer"
        >
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
                      checked={selectUser.includes(desigers.resource_id)}
                      onChange={() =>
                        handleCheckboxChange(desigers.resource_id)
                      }
                      className="cursor-pointer"
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

export const UiDeveloperResourcePool = (props) => {
  const [uiDeveloper, setuiDeveloper] = useState([]);
  const [selectUser, setSelectUser] = useState([]);

  // useProject
  const [project, setProject] = useProject({
    resourcePool: [
      {
        uiDeveloper: [],
      },
    ],
  });

  // HandleCheckBoxChange
  const handleCheckboxChange = (userId) => {
    // Check if userId is already in selectUser
    if (selectUser.includes(userId)) {
      // If yes, remove it
      setSelectUser((prevState) => prevState.filter((id) => id !== userId));
    } else {
      // If no, add it
      setSelectUser((prevState) => [...prevState, userId]);
    }

    // console.log(userId)
    // console.log(selectUser)
  };

  console.log(selectUser);

  // handleSelectionAndClose
  const handleSelectionAndClose = () => {
    // console.log(selectUser);

    setProject((prevProject) => {
      const updatedResourcePool = [
        {
          uiDeveloper: selectUser,
        },
      ];
      return {
        ...prevProject,
        resourcePool: updatedResourcePool,
      };
    });

    props.onSubmit();
  };

  // console.log(project);

  // useEffect to fetch all users
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await api.get("/get_resource_by_role", {
          params: {
            role: "UI Developer",
          },
        });
        console.log(response.data);
        const data = response.data;
        setuiDeveloper(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-4 bg-white p-5 w-[100%]">
      <div className="flex items-center justify-between">
        <h1 className="text-slate-700 text-xl non-italic font-semibold leading-none">
          List Of Ui Developers
        </h1>
        <button
          onClick={handleSelectionAndClose}
          className="flex items-center justify-center py-1 px-[0.94rem] border border-blue-500 bg-blue-500 rounded-sm text-white cursor-pointer"
        >
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
                      checked={selectUser.includes(Developer.resource_id)}
                      onChange={() =>
                        handleCheckboxChange(Developer.resource_id)
                      }
                      className="cursor-pointer"
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

export const UxResearcher = (props) => {
  const [uxResearcher, setuxResearcher] = useState([]);
  const [selectUser, setSelectUser] = useState([]);

  // useProject
  const [project, setProject] = useProject({
    resourcePool: [
      {
        uxResearcher: [],
      },
    ],
  });

  // HandleCheckBoxChange
  const handleCheckboxChange = (userId) => {
    // Check if userId is already in selectUser
    if (selectUser.includes(userId)) {
      // If yes, remove it
      setSelectUser((prevState) => prevState.filter((id) => id !== userId));
    } else {
      // If no, add it
      setSelectUser((prevState) => [...prevState, userId]);
    }
  };

  console.log(selectUser);

  const handleSelectionAndClose = () => {
    // console.log(selectUser);

    setProject((prevProject) => {
      const updatedResourcePool = [
        {
          uxResearcher: selectUser,
        },
      ];
      return {
        ...prevProject,
        resourcePool: updatedResourcePool,
      };
    });

    props.onSubmit();
  };

  // console.log(project);

  // useEffect to fetch all users
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await api.get("/get_resource_by_role", {
          params: {
            role: "UX Researcher",
          },
        });
        console.log(response.data);
        const data = response.data;
        setuxResearcher(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-4 bg-white p-5 w-[100%]">
      <div className="flex items-center justify-between">
        <h1 className="text-slate-700 text-xl non-italic font-semibold leading-none">
          List Of Ux Research
        </h1>
        <button
          onClick={handleSelectionAndClose}
          className="flex items-center justify-center py-1 px-[0.94rem] border border-blue-500 bg-blue-500 rounded-sm text-white cursor-pointer"
        >
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
                      checked={selectUser.includes(Researcher.resource_id)}
                      onChange={() =>
                        handleCheckboxChange(Researcher.resource_id)
                      }
                      className="cursor-pointer"
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
