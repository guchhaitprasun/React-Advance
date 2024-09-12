import axios from 'axios';

const API_URL = 'https://api.tes/api/v1/auth'; // Replace with your API URL


// Login and get the JWT token
export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }

  return response.data;
};

// Logout by clearing the token
export const logout = () => {
  localStorage.removeItem('token');
};

// Get the current JWT token
export const getToken = () => {
  return localStorage.getItem('token');
};

export const setAuthToken = (token) => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  };