import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon, UserAvatar } from "../../../components/Component";
import { findUpper } from "../../../utils/Utils";
import { DropdownItem, UncontrolledDropdown, DropdownMenu, DropdownToggle } from "reactstrap";

const UserProfileAside = ({ updateSm, sm }) => {
  const userDataString = localStorage.getItem("user");
  const userData = JSON.parse(userDataString);
  const firstName = userData.data.userProfile.firstname;
  const lastName = userData.data.userProfile.lastname;
  const fullName = firstName + " " + lastName;
  const email = userData.data.userProfile.email;
  const logoName = firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();

  useEffect(() => {
    sm ? document.body.classList.add("toggle-shown") : document.body.classList.remove("toggle-shown");
  }, [sm]);

  return (
    <div className="card-inner-group">
      <div className="card-inner">
        <div className="user-card">
          <UserAvatar text={logoName} theme="primary" />
          <div className="user-info">
            <span className="lead-text">{fullName}</span>
            <span className="sub-text">{email}</span>
          </div>
        </div>
      </div>
      <div className="card-inner p-0">
        <ul className="link-list-menu">
          <li onClick={() => updateSm(false)}>
            <Link
              to={`${process.env.PUBLIC_URL}/user-profile-regular`}
              className={window.location.pathname === `${process.env.PUBLIC_URL}/user-profile-regular` ? "active" : ""}
            >
              <Icon name="user-fill-c"></Icon>
              <span>Personal Information</span>
            </Link>
          </li>
          <li onClick={() => updateSm(false)}>
            <Link
              to={`${process.env.PUBLIC_URL}/user-profile-setting`}
              className={window.location.pathname === `${process.env.PUBLIC_URL}/user-profile-setting` ? "active" : ""}
            >
              <Icon name="lock-alt-fill"></Icon>
              <span>Security Setting</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfileAside;
