import axiosInstance from './AxiosInstance';

// Fungsi untuk login
export const loginUser = async (userData) => {
  try {
    const response = await axiosInstance.post('http://localhost:8080/api/users/login', {
      username: userData.name,
      email: userData.email,
      password: userData.passcode
    });
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

// Fungsi untuk register
export const createUser = async (userData) => {
  try {
    const response = await axiosInstance.post('http://localhost:8080/api/users/', {
      username: userData.username,
      role: "VIEWER",
      name: userData.name,
      password: userData.passcode,
      email: userData.email
    });
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};