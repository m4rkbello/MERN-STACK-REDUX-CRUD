// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    getUser: (state, action) => {
      state.users = action.payload.map(user => ({
        id: user._id, // Use _id as id
        name: user.name,
        email: user.email,
        age: user.age
      }));
    },
    addUser: (state, action) => {
      state.users.push(action.payload)
    }
  },
});

export const { getUser, addUser } = userSlice.actions;
export default userSlice.reducer;
