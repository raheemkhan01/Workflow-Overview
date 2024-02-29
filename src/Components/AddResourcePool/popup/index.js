"use client";
import api from "@/api";
import React from "react";
import { useState, useEffect } from "react";
import useProject from "@/HOC/Project/Project";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

import user from "../../../../public/assets/profile1.svg";
// import { useDispatch } from "react-redux";
import {
  addResources,addResourcesData ,addResourcesPM ,addResourcesUxDesigner,addResourcesUiDeveloper,addResourcesApiDeveloper,addResourcesTester,addResourcesUxResearch,addResourcesCiCd
} from "@/Context/AddresourcesSlice/addresourcesSlice";

export const Projectmanager = (props) => {
  // All Hooks
  const [projectResource, setprojectResource] = useState({
    resourcePool: [
      {
        projectManager: [],
      },
    ],
  });

  // project
  const [projectManager, setprojectManager] = useState([]);

  // select User
  const [selectUser, setSelectUser] = useState([]);

  // useProjec

  console.log(selectUser);

  // console.log(project);

  // useEffect to fetch all users
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await api.get("/get_resource_by_role", {
          params: {
            designation: "Project Manager",
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
  const dispatch = useDispatch();
  console.log(selectUser);
  var handleResourcesAdd = (emp_id ) => {
    dispatch(addResources({ id: emp_id }));
   
    console.log(emp_id);
  };
  var handleResourcesInfo = (pm) =>{
    dispatch(addResourcesData(pm))
  }

  return (
    <div className="flex flex-col gap-4 bg-white w-[100%]">
      <div className="w-[100%] px-2 flex justify-center rounded">
        <div className=" w-[100%] ">
          {/* Project Manager useState Hook Data Map */}
          <div className="flex flex-col gap-6">
            {/* Display a static UI without mapping */}
            {projectManager.map((Manager, index) => (
              <div
                key={index}
                className="flex items-center justify-start py-3 pr-4 pl-4 gap-40 bg-white shadow-md border border-gray-200 border-t-0 rounded-lg"
              >
                <div className="flex justify-between items-center gap-6 pl-3 w-[100%]">
                  <div className="flex items-center gap-3">
                    <Image src={Manager.image_url} />
                    <div>
                      <h1 className="text-gray-800 font-segoe-ui text-base font-bold leading-normal">
                        {Manager.first_name} {Manager.last_name}
                        <span className="text-blue-300">{Manager.email}</span>
                      </h1>
                      <h3 className="text-neutral-300 font-segoe-ui text-base font-normal leading-normal"></h3>
                    </div>
                  </div>
                  <div>
                    {/* CheckBox Button */}
                    <input
                      type="checkbox"
                      onChange={() => {
                        // handleResourcesAdd(Manager.emp_id);
                        // dispatch(addResources( Manager.emp_id ));
                        handleResourcesAdd(Manager.emp_id)
                        handleResourcesInfo(projectManager)
                     
                      }}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
            {/* Repeat the above structure for each item you want to display */}
          </div>
        </div>
      </div>
    </div>
  );
};

// Api Developer
export const ApiDeveloper = (props) => {
  // All Hooks
  // const handleResourcesAdd = (emplyyId) => {
  //   dispatch(addResources({ id: emplyyId }));
    // console.log("dispatch",emplyyId)
    // if (emplyyId) {
    //   console.log("If-Else -dispatch", emplyyId);
    //   ;
    // } else {
    //   console.error("empId is undefined");
    // }
    // dispatch(addResources({id:emplyyId}));

  // API Developer
  const [apiDeveloper, setApiDeveloper] = useState([]);

  // select User
  // useEffect to fetch all API Developers
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await api.get("/get_resource_by_role", {
          params: {
            designation: "API Developer",
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
  const dispatch = useDispatch();
  var handleResourcesAdd = (emp_id ) => {
    dispatch(addResources({ id: emp_id }));
   
    console.log(emp_id);
  };
  var handleResourcesInfo = (apiDeveloper) =>{
    dispatch(addResourcesData(apiDeveloper))
  }

  return (
    <div className="flex flex-col gap-4 bg-white w-[100%]">
      <div className="w-[100%] px-2 flex justify-center rounded">
        <div className=" w-[100%] ">
          {/* Project Manager useState Hook Data Map */}
          <div className="flex flex-col gap-6">
            {/* Display a static UI without mapping */}

            {apiDeveloper.map((Manager, index) => {
              console.log("employ_id", Manager.emp_id);
              console.log(apiDeveloper)
              return (
                <div
                  key={index}
                  className="flex items-center justify-start py-3 pr-4 pl-4 gap-40 bg-white shadow-md border border-gray-200 border-t-0 rounded-lg"
                >
                  <div className="flex justify-between items-center gap-6 pl-3 w-[100%]">
                    <div className="flex items-center gap-3">
                      <Image src={Manager.image_url} />
                      <div>
                        <h1 className="text-gray-800 font-segoe-ui text-base font-bold leading-normal">
                          {Manager.first_name} {Manager.last_name}
                          <span className="text-blue-300">{Manager.email}</span>
                        </h1>
                        <h3 className="text-neutral-300 font-segoe-ui text-base font-normal leading-normal"></h3>
                      </div>
                    </div>
                    <div>
                      {/* CheckBox Button */}
                      <input
                        type="checkbox"
                        // onChange={()=>{
                        //   console.log("on changed",emplyyId),handleResourcesAdd(emplyyId)}}
                        className="cursor-pointer"
                        onChange={() => {
                          handleResourcesAdd(Manager.emp_id)
                          handleResourcesInfo(apiDeveloper)
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
            {/* Repeat the above structure for each item you want to display */}
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
  var handleResourcesAdd = (emp_id ) => {
    dispatch(addResources({ id: emp_id }));
   
    console.log(emp_id);
  };
  var handleResourcesInfo = (CiCd) =>{
    dispatch(addResourcesData(CiCd))
  }

  // console.log(project);

  // useEffect to fetch all users
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await api.get("/get_resource_by_role", {
          params: {
            designation: "CI/CD",
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
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 bg-white w-[100%]">
      <div className="w-[100%] px-2 flex justify-center rounded">
        <div className=" w-[100%] ">
          {/* Project Manager useState Hook Data Map */}
          <div className="flex flex-col gap-6">
            {/* Display a static UI without mapping */}
            {CiCd.map((Manager, index) => (
              <div
                key={index}
                className="flex items-center justify-start py-3 pr-4 pl-4 gap-40 bg-white shadow-md border border-gray-200 border-t-0 rounded-lg"
              >
                <div className="flex justify-between items-center gap-6 pl-3 w-[100%]">
                  <div className="flex items-center gap-3">
                    <Image src={Manager.image_url} />
                    <div>
                      <h1 className="text-gray-800 font-segoe-ui text-base font-bold leading-normal">
                        {Manager.first_name} {Manager.last_name}
                        <span className="text-blue-300">{Manager.email}</span>
                      </h1>
                      <h3 className="text-neutral-300 font-segoe-ui text-base font-normal leading-normal"></h3>
                    </div>
                  </div>
                  <div>
                    {/* CheckBox Button */}
                    <input
                      type="checkbox"
                      onChange={() => {
                        handleResourcesAdd(Manager.emp_id)
                        handleResourcesInfo(CiCd)
                      }}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
            {/* Repeat the above structure for each item you want to display */}
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
  const [projectResource, setprojectResource] = useState({
    Tester: [],
  });

  // HandleCheckBoxChange

  console.log(selectUser);
  var handleResourcesAdd = (emp_id ) => {
    dispatch(addResources({ id: emp_id }));
   
    console.log(emp_id);
  };
  var handleResourcesInfo = (Tester) =>{
    dispatch(addResourcesData(Tester))
  }
  // const handleResourcesAdd = (emp_id) => {

  //   setprojectResource((prevState) => ({
  //     ...prevState,
  //     Tester: [...prevState.Tester, emp_id],
  //   }));
  //   dispatch(addResources({ id: projectResource }));
  // };
  // const handleResourcesAdd = (emp_id) => {
  //   console.log(emp_id);
  //   // Check if the employee ID is already in the Tester array
  //   const isChecked = projectResource.Tester.includes(emp_id);

  //   if (isChecked) {
  //     // If already checked, remove it
  //     setprojectResource((prevState) => ({
  //       ...prevState,
  //       Tester: prevState.Tester.filter((id) => id !== emp_id),
  //     }));
  //   } else {
  //     // If not checked, add it
  //     setprojectResource((prevState) => ({
  //       ...prevState,
  //       Tester: [...prevState.Tester, emp_id],
  //     }));
  //   }
  //   // Dispatch the updated Tester array
  // };

  // console.log(projectResource);

  // console.log(project);

  // useEffect to fetch all users
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await api.get("/get_resource_by_role", {
          params: {
            designation: "Tester",
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
  var dispatch = useDispatch();


  return (
    <div className="flex flex-col gap-4 bg-white w-[100%]">
      <div className="w-[100%] px-2 flex justify-center rounded">
        <div className=" w-[100%] ">
          {/* Project Manager useState Hook Data Map */}
          <div className="flex flex-col gap-6">
            {/* Display a static UI without mapping */}
            {Tester.map((Manager, index) => (
                
              <div
                key={index}
                className="flex items-center justify-start py-3 pr-4 pl-4 gap-40 bg-white shadow-md border border-gray-200 border-t-0 rounded-lg"
              >
                <div className="flex justify-between items-center gap-6 pl-3 w-[100%]">
                  <div className="flex items-center gap-3">
                    <Image src={Manager.image_url} />
                    <div>
                      <h1 className="text-gray-800 font-segoe-ui text-base font-bold leading-normal">
                        {Manager.first_name} {Manager.last_name}
                        <span className="text-blue-300">{Manager.email}</span>
                      </h1>
                      <h3 className="text-neutral-300 font-segoe-ui text-base font-normal leading-normal"></h3>
                    </div>
                  </div>
                  <div>
                    {/* CheckBox Button */}
                    <input
                      type="checkbox"
                      onChange={() => {
                        // handleResourcesAdd(Manager.emp_id);
                        // dispatch(addResources( Manager.emp_id ));
                        handleResourcesAdd(Manager.emp_id)
                        handleResourcesInfo(Tester)
                     
                      }}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
            {/* Repeat the above structure for each item you want to display */}
          </div>
        </div>
      </div>
    </div>
  );
};

export const UxDesignResourcePool = (props) => {
  // /get_resource_by_role

  const [uxDesigner, setUxDesigners] = useState([]);
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
  var handleResourcesAdd = (emp_id ) => {
    dispatch(addResources({ id: emp_id }));
   
    console.log(emp_id);
  };
  var handleResourcesInfo = (uxDesigner) =>{
    dispatch(addResourcesData(uxDesigner))
  }

  console.log(selectUser);

  // console.log(project);

  // useEffect to fetch all users
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await api.get("/get_resource_by_role", {
          params: {
            designation: "UI Designer",
          },
        });
        console.log(response.data);
        const data = response.data;
        setUxDesigners(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 bg-white w-[100%]">
      <div className="w-[100%] px-2 flex justify-center rounded">
        <div className="rounded-lg bg-white shadow-md w-[100%] border border-gray-200 border-t-0">
          {/* Project Manager useState Hook Data Map */}
          <div>
            {/* Display a static UI without mapping */}
            <div className="flex items-center justify-start py-6 pr-4 pl-4 gap-40">
              <div className="flex justify-between items-center gap-6 pl-3 w-[100%]">
                <div className="flex flex-col gap-6">
                  {/* Display a static UI without mapping */}
                  {uxDesigner.map((Manager, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-start py-3 pr-4 pl-4 gap-40 bg-white shadow-md border border-gray-200 border-t-0 rounded-lg"
                    >
                      <div className="flex justify-between items-center gap-6 pl-3 w-[100%]">
                        <div className="flex items-center gap-3">
                          <Image src={Manager.image_url} />
                          <div>
                            <h1 className="text-gray-800 font-segoe-ui text-base font-bold leading-normal">
                              {Manager.first_name} {Manager.last_name}
                              <span className="text-blue-300">
                                {Manager.email}
                              </span>
                            </h1>
                            <h3 className="text-neutral-300 font-segoe-ui text-base font-normal leading-normal"></h3>
                          </div>
                        </div>
                        <div>
                          {/* CheckBox Button */}
                          <input
                            type="checkbox"
                            onChange={() => {
                              handleResourcesAdd(Manager.emp_id)
                        handleResourcesInfo(uxDesigner)
                            }}
                            className="cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Repeat the above structure for each item you want to display */}
                </div>
              </div>
            </div>
            {/* Repeat the above structure for each item you want to display */}
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
  var handleResourcesAdd = (emp_id ) => {
    dispatch(addResources({ id: emp_id }));
   
    console.log(emp_id);
  };
  var handleResourcesInfo = (uiDeveloper) =>{
    dispatch(addResourcesData(uiDeveloper))
  }

  console.log(selectUser);



  // console.log(project);

  // useEffect to fetch all users
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await api.get("/get_resource_by_role", {
          params: {
            designation: "UI Developer",
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
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 bg-white w-[100%]">
      <div className="w-[100%] px-2 flex justify-center rounded">
        <div className=" w-[100%] ">
          {/* Project Manager useState Hook Data Map */}
          <div className="flex flex-col gap-6">
            {/* Display a static UI without mapping */}
            {uiDeveloper.map((Manager, index) => (
              <div
                key={index}
                className="flex items-center justify-start py-3 pr-4 pl-4 gap-40 bg-white shadow-md border border-gray-200 border-t-0 rounded-lg"
              >
                <div className="flex justify-between items-center gap-6 pl-3 w-[100%]">
                  <div className="flex items-center gap-3">
                    <Image src={Manager.image_url} />
                    <div>
                      <h1 className="text-gray-800 font-segoe-ui text-base font-bold leading-normal">
                        {Manager.first_name} {Manager.last_name}
                        <span className="text-blue-300">{Manager.email}</span>
                      </h1>
                      <h3 className="text-neutral-300 font-segoe-ui text-base font-normal leading-normal"></h3>
                    </div>
                  </div>
                  <div>
                    {/* CheckBox Button */}
                    <input
                      type="checkbox"
                      onChange={() => {
                        handleResourcesAdd(Manager.emp_id)
                        handleResourcesInfo(uiDeveloper)                      }}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
            {/* Repeat the above structure for each item you want to display */}
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
  // const handleCheckboxChange = (userId) => {
  //   // Check if userId is already in selectUser
  //   if (selectUser.includes(userId)) {
  //     // If yes, remove it
  //     setSelectUser((prevState) => prevState.filter((id) => id !== userId));
  //   } else {
  //     // If no, add it
  //     setSelectUser((prevState) => [...prevState, userId]);
  //   }
  // };

 

  // console.log(project);

  // useEffect to fetch all users
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await api.get("/get_resource_by_role", {
          params: {
            designation: "Ux Researcher",
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
  const dispatch = useDispatch();

  console.log(selectUser);
  var handleResourcesAdd = (emp_id ) => {
    dispatch(addResources({ id: emp_id }));
   
    console.log(emp_id);
  };
  var handleResourcesInfo = (uxResearcher) =>{
    dispatch(addResourcesData(uxResearcher))
  }
  return (
    <div className="flex flex-col gap-4 bg-white w-[100%]">
      <div className="w-[100%] px-2 flex justify-center rounded">
        <div className=" w-[100%] ">
          {/* Project Manager useState Hook Data Map */}
          <div className="flex flex-col gap-6">
            {/* Display a static UI without mapping */}
            {uxResearcher.map((Manager, index) => (
              <div
                key={index}
                className="flex items-center justify-start py-3 pr-4 pl-4 gap-40 bg-white shadow-md border border-gray-200 border-t-0 rounded-lg"
              >
                <div className="flex justify-between items-center gap-6 pl-3 w-[100%]">
                  <div className="flex items-center gap-3">
                    <Image src={Manager.image_url} />
                    <div>
                      <h1 className="text-gray-800 font-segoe-ui text-base font-bold leading-normal">
                        {Manager.first_name} {Manager.last_name}
                        <span className="text-blue-300">{Manager.email}</span>
                      </h1>
                      <h3 className="text-neutral-300 font-segoe-ui text-base font-normal leading-normal"></h3>
                    </div>
                  </div>
                  <div>
                    {/* CheckBox Button */}
                    <input
                      type="checkbox"
                      onChange={() => {
                        handleResourcesAdd(Manager.emp_id),
                        handleResourcesInfo(uxResearcher)
                      }}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
            {/* Repeat the above structure for each item you want to display */}
          </div>
        </div>
      </div>
    </div>
  );
};
