import axiosInstance from './AxiosInstance';

export const getUser = async () => {
  try {
    const response = await axiosInstance.get('http://localhost:8080/api/users/joko');
    return response;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

export const userAccess = async () => {
  try {
    const response = await axiosInstance.get('http://localhost:8080/api/users/access/joko');
    return response;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};