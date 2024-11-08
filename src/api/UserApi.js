import axiosInstance from './AxiosInstance';

// Fungsi untuk login
export const login = async (credentials) => {
  try {
    const response = await axiosInstance.post('/auth/login', credentials);
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
      name: userData.name,
      email: userData.email,
      passcode: userData.passcode
    });
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};