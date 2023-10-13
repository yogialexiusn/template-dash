import React, { useState, useCallback, useEffect } from "react";
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";
import { Button } from "reactstrap";
import { axiosInstance } from "../config/AxiosInstance";
import { Link } from "react-router-dom";
import Icon from "../components/icon/Icon";
import ReactPaginate from "react-paginate";
import { Label, Input, Row, Col } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, PreviewCard } from "../components/Component";
import { MASTER_MENU_LIST, MASTER_ROLE_LIST } from "../config/Constants";

function TrcRoleToMenu() {
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");
  const [menus, setMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState("");

  const [dataNotFound, setDataNotFound] = useState(false);

  const getListRole = useCallback(async () => {
    let requestBody = {
      code: "",
      name: "",
      size: "all",
      statusCodes: [0, 1],
      page: 0,
      sortField: "id",
      sortOrder: "desc",
    };

    try {
      let response = await axiosInstance().post(MASTER_ROLE_LIST, requestBody);
      if (response.status === 200) {
        setDataNotFound(false);
        const extractedNames = response.data.data.map((item) => item.name);
        console.log("selectedRole = " + selectedRole);
        setRoles(extractedNames);
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
  }, [selectedRole]);

  const getListMenu = useCallback(async () => {
    let requestBody = {
      code: "",
      name: "",
      size: "all",
      statusCodes: [0, 1],
      page: 0,
      sortField: "id",
      sortOrder: "desc",
    };

    try {
      let response = await axiosInstance().post(MASTER_MENU_LIST, requestBody);
      if (response.status === 200) {
        setDataNotFound(false);
        const extractedNames = response.data.data.map((item) => item.name);
        console.log("selectedMenu = " + selectedMenu);
        setMenus(extractedNames);
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
  }, [selectedMenu]);

  const handleApplyButton = useCallback(async () => {
    let requestBody = {
      code: "",
      name: "",
      size: "all",
      statusCodes: [0, 1],
      page: 0,
      sortField: "id",
      sortOrder: "desc",
    };

    try {
      let response = await axiosInstance().post(MASTER_ROLE_LIST, requestBody);
      if (response.status === 200) {
        setDataNotFound(false);
      }
    } catch (err) {
      setDataNotFound(true);
      setTotalData(0);
      if (err.response) {
        if (err.response.status === 401) {
        } else {
        }
      } else {
      }
    }
  }, []);

  useEffect(() => {
    getListMenu();
    getListRole();
  }, [selectedRole, selectedMenu]);

  return (
    <React.Fragment>
      <Head title="Basic Tables" />
      <Content page="component">
        <BlockHead>
          <BlockHeadContent>
            <BlockTitle>Role to Menu</BlockTitle>
            <BlockDes>
              <p>This Role to Menu is designed to provide menu access for each role.</p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <Row className="gy-3 ">
            <Col sm="6">
              <div className="form-group">
                <label htmlFor="default-5" className="form-label">
                  Role
                </label>
                <div class="form-control-select">
                  {" "}
                  <select
                    name="DataTables_Table_0_length"
                    aria-controls="DataTables_Table_0"
                    class="custom-select custom-select-sm form-control form-control-sm"
                    id="roles"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                  >
                    {roles.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>{" "}
                </div>
              </div>
            </Col>
            <Col sm="6">
              <div className="form-group">
                <label htmlFor="default-5" className="form-label">
                  Menu
                </label>
                <div class="form-control-select">
                  {" "}
                  <select
                    name="DataTables_Table_0_length"
                    aria-controls="DataTables_Table_0"
                    class="custom-select custom-select-sm form-control form-control-sm"
                    id="menus"
                    value={selectedMenu}
                    onChange={(e) => setSelectedMenu(e.target.value)}
                  >
                    {menus.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>{" "}
                </div>
              </div>
            </Col>
            <Col sm="6">
              <div className="form-group d-flex flex-row-reverse mt-5">
                <Button color="btn-round btn-primary " onClick={(e) => handleApplyButton()}>
                  Apply
                  {""}
                </Button>
              </div>
            </Col>
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
}

export default TrcRoleToMenu;
