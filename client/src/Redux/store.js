import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create auth slice to manage token and authentication state
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('authToken') || null,
    role: localStorage.getItem('userRole') || null, // Initialize role from localStorage
    personname: localStorage.getItem('userName') || null, // Initialize role from localStorage
    isAuthenticated: !!localStorage.getItem('authToken'),
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.role = action.payload.role; // Store the role in the state
      state.personname = action.payload.personname;
      state.isAuthenticated = true;
      localStorage.setItem('authToken', action.payload.token);
      localStorage.setItem('userRole', action.payload.role); 
      localStorage.setItem('userName', action.payload.personname); 
    },
    logout: (state) => {
      state.token = null;
      state.role = null; // Clear the role on logout
      state.personname =null;
      state.isAuthenticated = false;
      localStorage.removeItem('authToken');
      localStorage.removeItem('userRole'); // Remove role from localStorage
      localStorage.removeItem('userName');

    },
  },
});

export const { login, logout } = authSlice.actions;


const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
