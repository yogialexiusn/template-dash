import React, { useState, useEffect } from "react";
import Content from "../../../layout/content/Content";
import { Card } from "reactstrap";
import Head from "../../../layout/head/Head";
import DatePicker from "react-datepicker";
import { Modal, ModalBody } from "reactstrap";
import {
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Row,
  Col,
  Button,
  RSelect,
} from "../../../components/Component";
import { countryOptions, userData } from "./UserData";
import { getDateStructured } from "../../../utils/Utils";
import UserProfileAside from "./UserProfileAside";

const UserProfileRegularPage = () => {
  const userDataString = localStorage.getItem("user");
  const userData = JSON.parse(userDataString);
  const fullName = userData.data.userProfile.firstname + " " + userData.data.userProfile.lastname;
  const userName = userData.data.userProfile.username;
  const email = userData.data.userProfile.email;
  const [sm, updateSm] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const [modalTab, setModalTab] = useState("1");
  const [userInfo, setUserInfo] = useState(userData[0]);

  // function to change the design view under 990 px
  const viewChange = () => {
    if (window.innerWidth < 990) {
      setMobileView(true);
    } else {
      setMobileView(false);
      updateSm(false);
    }
  };

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
                    <BlockTitle tag="h4">Personal Information</BlockTitle>
                    <BlockDes>
                      <p>Basic info, like name and address, that use on Lotte Data Communication Indonesia.</p>
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
                <div className="nk-data data-list">
                  <div className="data-head">
                    <h6 className="overline-title">Basics</h6>
                  </div>
                  <div className="data-item">
                    <div className="data-col">
                      <span className="data-label">Full Name</span>
                      <span className="data-value">{fullName}</span>
                    </div>
                    <div className="data-col data-col-end"></div>
                  </div>
                  <div className="data-item">
                    <div className="data-col">
                      <span className="data-label">Username</span>
                      <span className="data-value">{userName}</span>
                    </div>
                    <div className="data-col data-col-end"></div>
                  </div>
                  <div className="data-item">
                    <div className="data-col">
                      <span className="data-label">Email</span>
                      <span className="data-value">{email}</span>
                    </div>
                    <div className="data-col data-col-end"></div>
                  </div>
                </div>
              </Block>
            </div>
          </div>
        </Card>
      </Content>
    </React.Fragment>
  );
};

export default UserProfileRegularPage;
