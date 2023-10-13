import React, { useState } from "react";
import { DropdownToggle, DropdownMenu, Dropdown } from "reactstrap";
import { Icon } from "../../../../components/Component";
import { LinkList, LinkItem } from "../../../../components/links/Links";
import UserAvatar from "../../../../components/user/UserAvatar";
import Cookies from "js-cookies/src/cookies";

const User = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prevState) => !prevState);
  const userDataString = localStorage.getItem("user");
  const userData = JSON.parse(userDataString);
  const firstName = userData.data.userProfile.firstname;
  const lastName = userData.data.userProfile.lastname;
  const fullName = firstName + " " + lastName;
  const userName = userData.data.userProfile.username;
  const email = userData.data.userProfile.email;
  const logoName = firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
  const handleSignout = () => {
    Cookies.removeItem("jwtCookie");
  };
  return (
    <Dropdown isOpen={open} className="user-dropdown" toggle={toggle}>
      <DropdownToggle
        tag="a"
        href="#toggle"
        className="dropdown-toggle"
        onClick={(ev) => {
          ev.preventDefault();
        }}
      >
        <div className="user-toggle">
          <UserAvatar icon="user-alt" className="sm" />
          <div className="user-info d-none d-md-block">
            <div className="user-status">Administrator Pages</div>
            <div className="user-name dropdown-indicator">{fullName}</div>
          </div>
        </div>
      </DropdownToggle>
      <DropdownMenu end className="dropdown-menu-md dropdown-menu-s1">
        <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
          <div className="user-card sm">
            <div className="user-avatar">
              <span>{logoName}</span>
            </div>
            <div className="user-info">
              <span className="lead-text">{userName}</span>
              <span className="sub-text">{email}</span>
            </div>
          </div>
        </div>
        <div className="dropdown-inner">
          <LinkList>
            <LinkItem link="/user-profile-regular" icon="user-alt" onClick={toggle}>
              View Profile
            </LinkItem>
            <LinkItem link="/user-profile-setting" icon="setting-alt" onClick={toggle}>
              Account Setting
            </LinkItem>
          </LinkList>
        </div>
        <div className="dropdown-inner">
          <LinkList>
            <a href={`${process.env.PUBLIC_URL}/auth-login`} onClick={handleSignout}>
              <Icon name="signout"></Icon>
              <span>Sign Out</span>
            </a>
          </LinkList>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};

export default User;
