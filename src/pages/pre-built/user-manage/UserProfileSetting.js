import React, { useState, useEffect, useCallback } from "react";
import Content from "../../../layout/content/Content";
import { Card, Badge } from "reactstrap";
import Head from "../../../layout/head/Head";
import {
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  InputSwitch,
} from "../../../components/Component";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Nav,
  NavLink,
  NavItem,
  TabContent,
  TabPane,
} from "reactstrap";
import UserProfileAside from "./UserProfileAside";
import Cookies from "js-cookies/src/cookies";
import { CHANGE_PASSWORD } from "../../../config/Constants";

const UserProfileSettingPage = () => {
  const [sm, updateSm] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [isChangePassword, setChangePassword] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirmed, setNewPasswordConfirmed] = useState("");
  const userDataString = localStorage.getItem("user");
  const userData = JSON.parse(userDataString);
  const userName = userData.data.userProfile.username;
  const [dataNotFound, setDataNotFound] = useState(false);

  // function to change the design view under 990 px
  const viewChange = () => {
    if (window.innerWidth < 990) {
      setMobileView(true);
    } else {
      setMobileView(false);
      updateSm(false);
    }
  };

  const handleChangePassword = () => {
    if (!isChangePassword) {
      setChangePassword(true);
    }
  };

  const toggleYes = useCallback(async () => {
    setModalSuccess(!modalSuccess);
    setChangePassword(false);
    let requestBody = {
      newPassword: newPassword,
      newPasswordConfirmed: newPasswordConfirmed,
      username: userName,
    };

    try {
      let response = await axiosInstance().post(CHANGE_PASSWORD, requestBody);
      if (response.status === 200) {
        setDataNotFound(false);
      }
    } catch (err) {
      setDataNotFound(true);
      if (err.response) {
        if (err.response.status === 401) {
        } else {
        }
      } else {
      }
    }
  }, [isChangePassword, modalSuccess]);

  const toggleNo = () => setModalSuccess(!modalSuccess);

  useEffect(() => {
    viewChange();
    window.addEventListener("load", viewChange);
    window.addEventListener("resize", viewChange);
    document.getElementsByClassName("nk-header")[0].addEventListener("click", function () {
      updateSm(false);
    });
    return () => {
      window.removeEventListener("resize", viewChange);
      window.removeEventListener("load", viewChange);
    };
  }, []);

  return (
    <React.Fragment>
      <Head title="User List - Profile"></Head>
      <Content>
        <Card>
          <div className="card-aside-wrap">
            <div
              className={`card-aside card-aside-left user-aside toggle-slide toggle-slide-left toggle-break-lg ${
                sm ? "content-active" : ""
              }`}
            >
              <UserProfileAside updateSm={updateSm} sm={sm} />
            </div>
            <div className="card-inner card-inner-lg">
              {sm && mobileView && <div className="toggle-overlay" onClick={() => updateSm(!sm)}></div>}
              <BlockHead size="lg">
                <BlockBetween>
                  <BlockHeadContent>
                    <BlockTitle tag="h4">Security Settings</BlockTitle>
                    <BlockDes>
                      <p>These settings will help you to keep your account secure.</p>
                    </BlockDes>
                  </BlockHeadContent>
                  <BlockHeadContent className="align-self-start d-lg-none">
                    <Button
                      className={`toggle btn btn-icon btn-trigger mt-n1 ${sm ? "active" : ""}`}
                      onClick={() => updateSm(!sm)}
                    >
                      <Icon name="menu-alt-r"></Icon>
                    </Button>
                  </BlockHeadContent>
                </BlockBetween>
              </BlockHead>

              <Block>
                <Card>
                  <div className="card-inner-group">
                    {isChangePassword ? (
                      <div className="card-inner">
                        <div className="between-center flex-wrap g-3">
                          <div className="nk-block-text">
                            <form>
                              <div className="form-group md-1 ">
                                <label className="form-label" htmlFor="newPassword">
                                  Username
                                </label>
                                <div className="form-control-wrap">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="newPassword"
                                    value={userName}
                                    disabled="true"
                                  />
                                </div>
                              </div>
                              <div className="form-group md-1 ">
                                <label className="form-label" htmlFor="newPassword">
                                  New Password
                                </label>
                                <div className="form-control-wrap">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="newPassword"
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="form-label" htmlFor="newPasswordConfirmed">
                                  Confirm New Password
                                </label>
                                <div className="form-control-wrap">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="newPasswordConfirmed"
                                    onChange={(e) => setNewPasswordConfirmed(e.target.value)}
                                    required
                                  />
                                </div>
                              </div>
                            </form>
                          </div>
                          <div className="nk-block-actions flex-shrink-sm-0">
                            <ul className="align-center flex-wrap flex-sm-nowrap gx-3 gy-2">
                              <li className="order-md-last">
                                <Button color="success" onClick={toggleYes}>
                                  Change Password
                                </Button>
                                <Modal isOpen={modalSuccess} toggle={toggleYes}>
                                  <ModalBody className="modal-body-lg text-center">
                                    <div className="nk-modal">
                                      <Icon className="nk-modal-icon icon-circle icon-circle-xxl ni ni-caution-fill bg-warning"></Icon>
                                      <h4 className="nk-modal-title">Warning!</h4>
                                      <div className="nk-modal-text">
                                        <div className="caption-text">Are you sure want to change your password?</div>
                                      </div>
                                      <div className="nk-modal-action">
                                        <Button color="secondary" size="lg" className="btn-mw me-3" onClick={toggleYes}>
                                          Yes
                                        </Button>
                                        <Button
                                          color="btn-outline-dark"
                                          size="lg"
                                          className="btn-mw"
                                          onClick={toggleNo}
                                        >
                                          No
                                        </Button>
                                      </div>
                                    </div>
                                  </ModalBody>
                                </Modal>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="card-inner">
                        <div className="between-center flex-wrap g-3">
                          <div className="nk-block-text">
                            <h6>Change Passwordd</h6>
                            <p></p>
                          </div>
                          <div className="nk-block-actions flex-shrink-sm-0">
                            <ul className="align-center flex-wrap flex-sm-nowrap gx-3 gy-2">
                              <li className="order-md-last">
                                <Button color="primary" onClick={handleChangePassword}>
                                  Change Password
                                </Button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </Block>
            </div>
          </div>
        </Card>
      </Content>
    </React.Fragment>
  );
};

export default UserProfileSettingPage;
