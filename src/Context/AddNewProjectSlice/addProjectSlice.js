import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: "",
  description: "",
  department: "",
  start_date: "",
  end_date: "",
  image_url: "",
  id:""
};

const addProjectSlice = createSlice({
  name: 'addProject',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      // Update the form data in the state
   console.log(action.payload)
      return { ...state, ...action.payload }
      ;
      
    },
    updateId: (state, action) => {
      console.log("project d", action.payload)
      state.id = action.payload;
    },
    
  }
  
});

export const { updateFormData , updateId} = addProjectSlice.actions;

export default addProjectSlice.reducer;
