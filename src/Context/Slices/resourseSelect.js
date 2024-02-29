import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedMemberIds: [],
};

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    selectMember(state, action) {
      const memberId = action.payload;
      if (!state.selectedMemberIds.includes(memberId)) {
        state.selectedMemberIds.push(memberId);
      }
    },
    deselectMember(state, action) {
      const memberId = action.payload;
      state.selectedMemberIds = state.selectedMemberIds.filter(
        (id) => id !== memberId
      );
    },
  },
});

export const { selectMember, deselectMember } = memberSlice.actions;

export default memberSlice.reducer;