import { createSlice } from "@reduxjs/toolkit";

const initialStateCustomer = {
  fullname: "",
  nationalId: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState: initialStateCustomer,
  reducers: {
    create: (state, action) => {
      const { fullname, nationalId } = action.payload;
      state.fullname = fullname;
      state.nationalId = nationalId;
      state.createdAt = new Date().toISOString();
    },
    updateName: (state, action) => {
      state.fullname = action.payload;
    },
  },
});

export const { create, updateName } = customerSlice.actions;

export default customerSlice.reducer;
