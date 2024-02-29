// "use client";
// import { createSlice } from "@reduxjs/toolkit";
// const addresourcesSlice = createSlice({
//   name: "addResource",
//   initialState: {
//     id: [],
//     // UIUXDeveloper: [],
//     // FrontEndDeveloper: [],
//     // BackendDeveloper: [],
//     // SRE: [],
//     // DevOpsEngineer: [],
//     // AutomationTester: [],
//     // ProjectManager: [],
//     // UXDesigner: [],
//     // UIDeveloper: [],
//     // APIDeveloper: [],
//     Tester: [],
//     // UXResearcher: [],
//     // CICDSpecialist: [],
//   },

//   reducers: {
//     // addResources: (state, action) => {
//     //   state.Tester.push(action.payload.id); // Pushing the payload ID to the id array
//     // //   state.Tester = action.payload.Tester;
//     //   console.log(action.payload.Tester) // Updating the Tester array with the payload Tester data
//     // },
//     addResources: (state, action) => {
//       const { id } = action.payload;
//       // Check if the id already exists in the array

//       state.Tester.push(id);

//       console.log(action.payload);
//     },

//     removeResources: (state, action) => {
//       // Removing the specified ID from the id array
//       state.id = state.id.filter((id) => id !== action.payload.id);
//       // Clearing the Tester array
//       state.Tester = [];
//       console.log(action.payload.Tester);
//     },
//   },
// });

// export const { addResources, removeResources } = addresourcesSlice.actions;
// export default addresourcesSlice.reducer;

"use client";
import { createSlice } from "@reduxjs/toolkit";
const addresourcesSlice = createSlice({
  name: "addResource",
  initialState: {
    id: [{ prjectId: {} }],
    resoucesInfo: [],
    UIUXDeveloper: [{ resoucesInfo: {} }],
    FrontEndDeveloper: [{ resoucesInfo: {} }],
    BackendDeveloper: [{ resoucesInfo: {} }],
    SRE: [{ resoucesInfo: {} }],
    DevOpsEngineer: [{ resoucesInfo: {} }],
    AutomationTester: [{ resoucesInfo: {} }],
    ProjectManager: [{ resoucesInfo: {} }],
    UXDesigner: [{ resoucesInfo: {} }],
    UIDeveloper: [{ resoucesInfo: {} }],
    APIDeveloper: [{ resoucesInfo: {} }],
    Tester: [{ resoucesInfo: {} }],
    UXResearcher: [{ resoucesInfo: {} }],
    CICDSpecialist: [{ resoucesInfo: {} }],
  },

  reducers: {
    addResources: (state, action) => {
      state.id.push(action.payload);
      console.log(action.payload);
    },

    addProjectId: (state, action) => {
      state.id[0].prjectId = action.payload;
      console.log(action.payload);
    },
    addResourcesData: (state, action) => {
      state.resoucesInfo.push(action.payload);
      console.log("resources Data: ", action.payload);
    },
    addResourcesPM: (state, action) => {
      state.ProjectManager[0].resoucesInfo = action.payload;
      console.log("resources Data: ", action.payload);
    },
    addResourcesUxDesigner: (state, action) => {
      state.UXDesigner[0].resoucesInfo = action.payload;
      console.log("resources Data: ", action.payload);
    },
    addResourcesUiDeveloper: (state, action) => {
      state.UIDeveloper[0].resoucesInfo = action.payload;
      console.log("resources Data: ", action.payload);
    },
    addResourcesApiDeveloper: (state, action) => {
      state.APIDeveloper[0].resoucesInfo = action.payload;
      console.log("resources Data: ", action.payload);
    },
    addResourcesTester: (state, action) => {
      state.Tester[0].resoucesInfo = action.payload;
      console.log("resources Data: ", action.payload);
    },
    addResourcesUxResearch: (state, action) => {
      state.UXResearcher[0].resoucesInfo = action.payload;
      console.log("resources Data: ", action.payload);
    },
    addResourcesCiCd: (state, action) => {
      state.CICDSpecialist[0].resoucesInfo = action.payload;
      console.log("resources Data: ", action.payload);
    },
    // console.log(action.title)
    removeResources(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  addResources,
  removeResources,
  addProjectId,
  addResourcesData,
  addResourcesPM,
  addResourcesUxDesigner,
  addResourcesUiDeveloper,
  addResourcesApiDeveloper,
  addResourcesTester,
  addResourcesUxResearch,
  addResourcesCiCd,
} = addresourcesSlice.actions;
export default addresourcesSlice.reducer;
