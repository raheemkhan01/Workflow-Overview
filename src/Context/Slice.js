
import { createSlice } from "@reduxjs/toolkit";

const usersDataSlice = createSlice({
  name: "usersData",
  initialState: {
    users: [],
    selectedUsers: [], // new state to store selected users
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    selectUser: (state, action) => {
      const userId = action.payload;
      if (!state.selectedUsers.includes(userId)) {
        state.selectedUsers.push(userId);
      } else {
        state.selectedUsers = state.selectedUsers.filter((id) => id !== userId);
      }
    },
  },
});

export const { addUser, selectUser } = usersDataSlice.actions;
export default usersDataSlice.reducer;
