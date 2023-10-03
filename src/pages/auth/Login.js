import React, { useState, useCallback } from "react";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo-dark.png";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../config/AxiosInstance";
import {
  Block,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockTitle,
  Button,
  Icon,
  PreviewCard,
} from "../../components/Component";
import { Form, Spinner, Alert } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { LoginAuth } from "../../api/AuthApi";
import Cookies from "js-cookies/src/cookies";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [passState, setPassState] = useState(false);
  const [errorVal, setError] = useState("");
  const navigate = useNavigate();
  const [jwtCookie, setJwtCookie] = useState();
  const [passwordWeb, setPasswordWeb] = useState();
  const [usernameWeb, setUsernameWeb] = useState("");

  const onFormSubmit = (formData) => {
    setLoading(true);
    const loginName = "info@softnio.com";
    const pass = "123456";
    if (formData.name === loginName && formData.passcode === pass) {
      localStorage.setItem("accessToken", "token");
      setTimeout(() => {
        window.history.pushState(
          `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}`,
          "auth-login",
          `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}`,
        );
        window.location.reload();
      }, 1000);
    } else {
      setTimeout(() => {
        setError("Cannot login with credentials");
        setLoading(false);
      }, 1000);
    }
  };

  const handleLogin = async () => {
    login(usernameWeb, passwordWeb);
  };

  const login = useCallback(
    async (e) => {
      console.log("username", usernameWeb);
      console.log("password", passwordWeb);
      e.preventDefault();
      let requestBody = {
        username: usernameWeb,
        password: passwordWeb,
      };
      let response = await axiosInstance().post("/api/v1/auth/signin", requestBody);
      console.log("yogiresponse = " + JSON.stringify(response.data.data.jwtCookie.value));

      if (response.status === 200) {
        // setTotalData(response.data.totalData);
        // setTotalPages(response.data.totalPages);
        const total = JSON.stringify(response.data.totalPages);
        setPassState(true);
        Cookies.setItem("jwtCookie", response.data.data.jwtCookie.value);
        navigate("/admin/masternews");
      } else {
        // setRequestChanges([]);
        // setMessage(response.data.message);
      }
      // setShouldFetchData(false);
    },
    [usernameWeb, passwordWeb],
  );

  const routeChange = () => {
    let path = "/admin";
    navigate(path);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Head title="Login" />
      <Block className="nk-block-middle nk-auth-body  wide-xs">
        <div className="brand-logo pb-4 text-center">
          <Link to={"http://localhost:3000/landing"} className="logo-link">
            <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
            <img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
          </Link>
        </div>

        <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
          <BlockHead>
            <BlockContent>
              <BlockTitle tag="h4">Sign-In</BlockTitle>
              <BlockDes>{/* <p>Access Administator </p> */}</BlockDes>
            </BlockContent>
          </BlockHead>
          {errorVal && (
            <div className="mb-3">
              <Alert color="danger" className="alert-icon">
                <Icon name="alert-circle" /> Unable to login because username or password is wrong{" "}
              </Alert>
            </div>
          )}
          {/* <Form className="is-alter" onSubmit={login}> */}
          <Form className="is-alter">
            <div className="form-group">
              <div className="form-label-group">
                <label className="form-label" htmlFor="username" value="Username">
                  Email or Username
                </label>
              </div>
              <div className="form-control-wrap">
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your email address or username"
                  className="form-control-lg form-control"
                  required
                  onChange={(event) => setUsernameWeb(event.target.value)}
                />
                {errors.name && <span className="invalid">{errors.name.message}</span>}
              </div>
            </div>
            <div className="form-group">
              <div className="form-label-group">
                <label className="form-label" htmlFor="password" value="Password">
                  Password
                </label>
                <Link className="link link-primary link-sm" to={`${process.env.PUBLIC_URL}/auth-reset`}>
                  Forgot Code?
                </Link>
              </div>
              <div className="form-control-wrap">
                <a
                  href="#password"
                  onClick={(ev) => {
                    ev.preventDefault();
                    setPassState(!passState);
                  }}
                  className={`form-icon lg form-icon-right passcode-switch ${passState ? "is-hidden" : "is-shown"}`}
                >
                  <Icon name="eye" className="passcode-icon icon-show"></Icon>

                  <Icon name="eye-off" className="passcode-icon icon-hide"></Icon>
                </a>
                <input
                  type={passState ? "text" : "password"}
                  id="password"
                  // {...register("passcode", { required: "This field is required" })}
                  placeholder="Enter your passcode"
                  className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`}
                  required
                  onChange={(event) => setPasswordWeb(event.target.value)}
                />
                {errors.passcode && <span className="invalid">{errors.passcode.message}</span>}
              </div>
            </div>
            <div className="form-group">
              <Button
                size="lg"
                // className="btn-block"
                color="primary"
                onClick={login}
              >
                {/* {loading ? <Spinner size="sm" color="light" /> : "Sign in"} */}
                Login123
              </Button>
            </div>
          </Form>
        </PreviewCard>
      </Block>
      <AuthFooter />
    </>
  );
};
export default Login;
