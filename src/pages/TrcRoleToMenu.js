import React, { useState, useEffect, useCallback, Component } from "react";
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";
import { Button } from "reactstrap";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
  ReactDataTable,
} from "../components/Component";
import { DataTableData, dataTableColumns, dataTableColumns2, userData } from "./components/table/TableData";

const TrcRoleToMenu = () => {
  // const [items, setItems] = useState([]);
  // const [params, setParams] = useState("");
  useEffect(() => {
    handleSearchNews();
  }, []);
  const handleParamsChange = (event) => {
    const params = event.target.value;
    // setParams(params);
  };

  const handleSearchNews = async () => {
    // getNews(0);
  };

  const [checkboxes, setCheckboxes] = useState({
    vehicle1: false,
    vehicle2: false,
    vehicle3: false,
    selectAll: false,
  });

  const toggleCheckbox = (event) => {
    const { name, checked } = event.target;

    if (name === "selectAll") {
      setCheckboxes({
        vehicle1: checked,
        vehicle2: checked,
        vehicle3: checked,
        selectAll: checked,
      });
    } else {
      setCheckboxes((prevCheckboxes) => ({
        ...prevCheckboxes,
        [name]: checked,
        selectAll: prevCheckboxes.vehicle1 && prevCheckboxes.vehicle2 && prevCheckboxes.vehicle3,
      }));
    }
  };

  const getNews = useCallback(async (halaman) => {
    let requestBody = {
      // param: params,
      statusCodes: [1],
      sortField: "title",
      sortOrder: "asc",
      page: halaman,
      size: 4,
    };
    let response = await axiosInstance().post("/api/v1/trc_news/byparams", requestBody);

    if (response.data.status === 200) {
      // setTotalData(response.data.totalData);
      // setTotalPages(response.data.totalPages);
      const total = JSON.stringify(response.data.totalPages);
      // setpageCount(total);
      // setItems(response.data.data);
    } else {
      // setRequestChanges([]);
      // setMessage(response.data.message);
    }
    // setShouldFetchData(false);
  }, []);

  return (
    <React.Fragment>
      <Head title="Basic Tables" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BlockTitle tag="h2" className="fw-normal">
              Transaction Role To Menu
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Transaction Role To Menu is used to view a list of job applicants who have applied for job openings. It
                includes various features such as search and adding data to open job vacancies.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>
        <div>
          <PreviewCard className="nk-fmg-listing is-scrollable">
            <ul className="link-tidy">
              <li>
                <div className="custom-control custom-control-sm custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="selectAll"
                    name="selectAll"
                    checked={checkboxes.selectAll}
                    onChange={toggleCheckbox}
                  />
                  <label className="custom-control-label" htmlFor="selectAll">
                    {" "}
                    SELECT ALL
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-control-sm custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="vehicle1"
                    name="vehicle1"
                    checked={checkboxes.vehicle1}
                    onChange={toggleCheckbox}
                  />
                  <label className="custom-control-label" htmlFor="vehicle1">
                    CAREER
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-control-sm custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="vehicle2"
                    name="vehicle2"
                    checked={checkboxes.vehicle2}
                    onChange={toggleCheckbox}
                  />
                  <label className="custom-control-label" htmlFor="vehicle2">
                    NEWS
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-control-sm custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="vehicle2"
                    name="vehicle2"
                    checked={checkboxes.vehicle2}
                    onChange={toggleCheckbox}
                  />
                  <label className="custom-control-label" htmlFor="vehicle2">
                    NEWS
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-control-sm custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="vehicle2"
                    name="vehicle2"
                    checked={checkboxes.vehicle2}
                    onChange={toggleCheckbox}
                  />
                  <label className="custom-control-label" htmlFor="vehicle2">
                    NEWS
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-control-sm custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="vehicle2"
                    name="vehicle2"
                    checked={checkboxes.vehicle2}
                    onChange={toggleCheckbox}
                  />
                  <label className="custom-control-label" htmlFor="vehicle2">
                    NEWS
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-control-sm custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="vehicle2"
                    name="vehicle2"
                    checked={checkboxes.vehicle2}
                    onChange={toggleCheckbox}
                  />
                  <label className="custom-control-label" htmlFor="vehicle2">
                    NEWS
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-control-sm custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="vehicle2"
                    name="vehicle2"
                    checked={checkboxes.vehicle2}
                    onChange={toggleCheckbox}
                  />
                  <label className="custom-control-label" htmlFor="vehicle2">
                    NEWS
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-control-sm custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="vehicle2"
                    name="vehicle2"
                    checked={checkboxes.vehicle2}
                    onChange={toggleCheckbox}
                  />
                  <label className="custom-control-label" htmlFor="vehicle2">
                    NEWS
                  </label>
                </div>
              </li>
            </ul>
          </PreviewCard>
          <PreviewCard className="nk-fmg-listing is-scrollable">
            <ul className="link-tidy  ">
              <li>
                <div className="custom-control custom-control-sm custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="selectAll"
                    name="selectAll"
                    checked={checkboxes.selectAll}
                    onChange={toggleCheckbox}
                  />
                  <label className="custom-control-label" htmlFor="selectAll">
                    {" "}
                    SELECT ALL
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-control-sm custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="vehicle1"
                    name="vehicle1"
                    checked={checkboxes.vehicle1}
                    onChange={toggleCheckbox}
                  />
                  <label className="custom-control-label" htmlFor="vehicle1">
                    CAREER1
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-control-sm custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="vehicle2"
                    name="vehicle2"
                    checked={checkboxes.vehicle2}
                    onChange={toggleCheckbox}
                  />
                  <label className="custom-control-label" htmlFor="vehicle2">
                    NEWS1
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-control-sm custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="vehicle2"
                    name="vehicle2"
                    checked={checkboxes.vehicle2}
                    onChange={toggleCheckbox}
                  />
                  <label className="custom-control-label" htmlFor="vehicle2">
                    NEWS1
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-control-sm custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="vehicle2"
                    name="vehicle2"
                    checked={checkboxes.vehicle2}
                    onChange={toggleCheckbox}
                  />
                  <label className="custom-control-label" htmlFor="vehicle2">
                    NEWS1
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-control-sm custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="vehicle2"
                    name="vehicle2"
                    checked={checkboxes.vehicle2}
                    onChange={toggleCheckbox}
                  />
                  <label className="custom-control-label" htmlFor="vehicle2">
                    NEWS1
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-control-sm custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="vehicle2"
                    name="vehicle2"
                    checked={checkboxes.vehicle2}
                    onChange={toggleCheckbox}
                  />
                  <label className="custom-control-label" htmlFor="vehicle2">
                    NEWS1
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-control-sm custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="vehicle2"
                    name="vehicle2"
                    checked={checkboxes.vehicle2}
                    onChange={toggleCheckbox}
                  />
                  <label className="custom-control-label" htmlFor="vehicle2">
                    NEWS1
                  </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-control-sm custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="vehicle2"
                    name="vehicle2"
                    checked={checkboxes.vehicle2}
                    onChange={toggleCheckbox}
                  />
                  <label className="custom-control-label" htmlFor="vehicle2">
                    NEWS1
                  </label>
                </div>
              </li>
            </ul>
          </PreviewCard>
        </div>

        <Button className="mt-2 center" color="primary" type="submit">
          Submit
        </Button>
      </Content>
    </React.Fragment>
  );
};
export default TrcRoleToMenu;
