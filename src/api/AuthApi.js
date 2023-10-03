import cookies from "js-cookies/src/cookies";
// import {BASE_URL} from "../constant/constant";
import { axiosInstance } from "../config/AxiosInstance";

const LoginAuth = async ({ username, password }) => {
  try {
    let response = axiosInstance().post("/api/v1/auth/signin", { username, password });
    console.log("response await = " + JSON.stringify(await response));
    console.log("response tanpa await = " + JSON.stringify(response));
    console.log("response.data = " + JSON.stringify(await response.data));
    console.log("response.data = " + JSON.stringify(await response).data);

    const token = await response.data;
    console.log("cacad23456 = " + JSON.stringify(token));
    const expiryTime = new Date(new Date().getTime() + 2 * 60 * 60 * 1000);
    cookies.setItem("jwtCookie", token, { httpOnly: true, expires: expiryTime });
    return cookies.getItem("jwtCookie") !== undefined;
  } catch (e) {
    alert(e);
  }
};

const Me = async () => {
  try {
    const response = axiosInstance().get("/api/v1/auth/me");
    return (await response).data;
  } catch (e) {
    alert(e);
  }
};

const createNewUser = async (body) => {
  try {
    await axiosInstance().post("/api/v1/auth/register", body);
  } catch (e) {
    alert(e);
  }
};

const deleteUserById = async (username) => {
  try {
    await axiosInstance().delete(`/api/v1/auth/delete/${username}`);
  } catch (e) {
    alert(e);
  }
};

const editCurrentUser = async (lastUsername, body) => {
  try {
    const response = await axiosInstance().put(`/api/v1/auth/update/${lastUsername}`, body);
    return response;
  } catch (e) {
    alert(e);
  }
};

const getUsers = async () => {
  try {
    const users = await axiosInstance().get("/api/v1/auth/users");
    return users.data;
  } catch (e) {
    alert(e);
  }
};

const resetPassword = async (id) => {
  try {
    const response = await axiosInstance().put(`/api/v1/auth/reset-password/${id}`);
    return response;
  } catch (e) {
    alert(e);
  }
};

const changePassword = async (body) => {
  try {
    const response = await axiosInstance().put(`/api/v1/auth/change-password`, body);
    cookies.setItem("token", response.data.token);
  } catch (e) {
    alert(e);
  }
};

export { LoginAuth, Me, createNewUser, deleteUserById, editCurrentUser, getUsers, resetPassword, changePassword };
