import axiosInstance from './AxiosInstance';

const setAuthToken = (token) => {
  if (token !== null) {
    window.localStorage.setItem("auth_token", token);
  } else {
    window.localStorage.removeItem("auth_token");
  }
};

// Fungsi untuk login
export const loginUser = async (userData) => {
  try {
    const response = await axiosInstance.post('http://localhost:8080/api/users/login', {
      username: userData.name,
      email: userData.email,
      password: userData.passcode
    });
    setAuthToken(response.data.detail.tokenJwt);
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

// Fungsi untuk register
export const createUser = async (userData) => {
  try {
    const response = await axiosInstance.post('http://localhost:8080/api/users', {
      username: userData.username,
      role: "VIEWER",
      name: userData.name,
      password: userData.passcode,
      email: userData.email
    });
    console.log("yogi = " + JSON.stringify(response.data));
    setAuthToken(response.data.detail.tokenJwt);
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};