import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get("http://localhost:3005/users");

  // DEV ONLY!!!
  // await pause(5000);

  return response.data;
});

// When a thunk is created three properties associated with it 
// fetchUsers.pending: 'users/fetch/pending'
// fetchUsers.fulfilled: 'users/fetch/fulfilled'
// fetchUsers.rejected: 'users/fetch/rejected'
// These could be used in reducer. 

// DEV ONLY!!!
const pause = (duration) => {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  })
}

export { fetchUsers };