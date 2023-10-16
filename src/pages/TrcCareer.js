import React, { useState, useCallback, useEffect } from "react";
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";
import { Button } from "reactstrap";
import { axiosInstance } from "../config/AxiosInstance";
import { Link } from "react-router-dom";
import Icon from "../components/icon/Icon";
import ReactPaginate from "react-paginate";
import { Label, Input, Row, Col, Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,} from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, PreviewCard } from "../components/Component";
import { TRANSACTION_CAREERHEADER_LIST, TRANSACTION_CAREERHEADER_ADD } from "../config/Constants";
import { QuillComponent } from "../components/partials/rich-editor/QuillComponent";

function TrcCareer() {
  const [responseData, setResponseData] = useState([]);
  const [editedInput, setEditedInput] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [totalData, setTotalData] = useState(0);
  const [dataNotFound, setDataNotFound] = useState(false);
  const [modalForm, setModalForm] = useState(false);

  const [name, setName] = useState("");
  const [size, setSize] = useState("10");
  const [statusCode, setStatusCode] = useState([1]);
  const [page, setPage] = useState(0);
  const [sortField, setSortField] = useState("update_date");
  const [sortOrder, setSortOrder] = useState("asc");

  const [isChecklistDisable, setChecklistDisable] = useState(true);
  const [newRow, setNewRow] = useState({
    id: "",
    name: "",
    statusCode: "",
    seq: "",
    code: "",
    statusName: "",
    insertby: "",
    insertDate: "",
    updateby: "",
    updateDate: "",
  });

  const toggleForm = () => setModalForm(!modalForm);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (e) => {
    // Setel atribut isNew menjadi false untuk baris baru yang sudah disimpan
    const updatedData = responseData.map((rowData) => (rowData.isNew ? { ...rowData, isNew: false } : rowData));
    const modifiedInput = updatedData.filter((itemB) => {
      const matchingItemA = editedInput.find((itemA) => itemA.id === itemB.id);
      return !matchingItemA || matchingItemA.name !== itemB.name || matchingItemA.statusCode !== itemB.statusCode;
    });
    // Cek apakah ada nilai yang kosong di baris-baris yang sedang diedit
    const hasEmptyValue = modifiedInput.some((rowData) => rowData.careerCode === "" || rowData.teamCode === "");
    if (hasEmptyValue) {
      alert("Tidak dapat menyimpan baris baru dengan nilai kosong.");
      return; // Hentikan penyimpanan jika ada nilai kosong
    } else {
      console.log(JSON.stringify(modifiedInput))
      handleEdit(modifiedInput);
      setIsEditing(false);
      setResponseData(modifiedInput);
      handleFilterButton();
    }
  };

  const handleAddRowClick = () => {
    const updatedData = [...responseData, { ...newRow, id: null, isNew: true, isSelected: false, statusCode: 1 }];

    // Jika sedang dalam mode editing, jangan keluar dari mode edit setelah menambahkan baris baru
    if (!isEditing) {
      setIsEditing(true);
    }
    setChecklistDisable(false);
    setResponseData(updatedData);
  };

  const handleCancelClick = () => {
    if (isEditing) {
      const updatedData = responseData.filter((rowData) => !rowData.isSelected);
      setResponseData(updatedData.filter((item) => item.id !== null)); // delete data that contain id = null
      setIsEditing(false);
    }
  };

  const handleDeleteRowClick = () => {
    // Hapus baris berdasarkan isSelected
    const updatedData = responseData.filter((rowData) => !rowData.isSelected);
    setResponseData(updatedData);
    // setIsEditing(false);
  };

  const handleCheckboxChange = (id) => {
    // Toggle isSelected pada baris dengan id tertentu
    const updatedData = responseData.map((rowData) =>
      rowData.id === id ? { ...rowData, isSelected: !rowData.isSelected } : rowData,
    );

    setResponseData(updatedData);
  };

  const handlePageClick = async (data) => {
    setPage(data.selected, () => {
      handleFilterButton();
    });
  };

  const handleRichEditor = (e, rowIndex, colName) => {
    const { value } = e.target;
    const updatedData = [...responseData];
    const updatedRow = updatedData[rowIndex];

    if (updatedRow.isNew) {
      updatedRow[colName] = value;
    } else {
      updatedData[rowIndex] = { ...updatedRow, [colName]: value };
    }
    setResponseData(updatedData);
  };

  const handleInputChange = (e, rowIndex, colName) => {
    const { value } = e.target;
    const updatedData = [...responseData];
    const updatedRow = updatedData[rowIndex];

    if (updatedRow.isNew) {
      updatedRow[colName] = value;
    } else {
      updatedData[rowIndex] = { ...updatedRow, [colName]: value };
    }
    setResponseData(updatedData);
  };

  const handleFilterButton = useCallback(async () => {
    let requestBody = {
      params: name,
      size: size,
      statusCodes: statusCode,
      page: page,
      sortField: sortField,
      sortOrder: sortOrder,
    };

    try {
      let response = await axiosInstance().post(TRANSACTION_CAREERHEADER_LIST, requestBody);
      if (response.status === 200) {
        const totalPages = response.data.totalPages;
        setTotalPages(totalPages);
        setTotalData(response.data.totalData);
        setResponseData(response.data.data);
        setEditedInput(response.data.data);
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
  }, [responseData, name, size, statusCode, page, sortField, sortOrder]);

  const handleEdit = async (modifiedInput) => {
    for (const obj of modifiedInput) {
      let requestBody = {
        id: obj.id,
        careerCode: obj.careerCode,
        teamCode: obj.teamCode,
        statusCode: obj.statusCode,
        workPlace: obj.workPlace,
        address: obj.address,
        district: obj.district,
        region: obj.region,
        city: obj.city,
        country: obj.country,
        jobDescription: obj.jobDescription,
        jobDescriptionPlain: obj.jobDescriptionPlain,
        positionLevel: obj.positionLevel,
        qualification: obj.qualification,
        yearsOfExperience: obj.yearsOfExperience,
        employmentType: obj.employmentType,
        specializations: obj.specializations,
      };

      try {
        let response = await axiosInstance().post(TRANSACTION_CAREERHEADER_ADD, requestBody);
        if (response.status === 200) {
          // Handle success if needed
        }
      } catch (err) {
        if (err.response) {
          if (err.response.status === 401) {
            // Handle unauthorized error if needed
          } else {
            // Handle other errors if needed
          }
        } else {
          // Handle network or other errors if needed
        }
      }

      // Add a delay of 1000ms before the next iteration
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    window.location.reload();

    // After all iterations are done, you can call handleFilterButton
    handleFilterButton();
  };

  const handleSorting = async (field) => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    setSortField(field);
    handleFilterButton();
  };

  const handleSize = (newSize) => {
    setPage(0);
    setSize(newSize, () => {
      // This callback ensures that the state has been updated
      handleFilterButton();
    });
  };

  function SortableTableHeader({ columnName, label, handleSorting }) {
    return (
      <th className="tb-odr-info">
        {label}
        <Link
          to="#"
          onClick={(e) => {
            e.preventDefault();
            handleSorting(columnName);
          }}
        >
          <Icon name="sort" />
        </Link>
      </th>
    );
  }

  function EditableCell({ value, isEditing, isNew, fieldName, handleInputChange, rowIndex }) {
    const renderContent = () => {
      if (isNew || isEditing) {
        return <input type="text" value={value} onChange={(e) => handleInputChange(e, rowIndex, fieldName)} />;
      }
      return value;
    };

    return <td className="tb-odr-info">{renderContent()}</td>;
  }

  function ModalWithForm({ value, isEditing, isNew}) {
    const renderContent = () => {
      if (isNew || isEditing) {
        <td className="tb-odr-info">
        <Button color="primary" onClick={toggleForm}>
          Modal With Form
        </Button>
          <Modal isOpen={modalForm} toggle={toggleForm}>
            <ModalHeader
              toggle={toggleForm}
              close={
                <button className="close" onClick={toggleForm}>
                  <Icon name="cross" />
                </button>
              }
            >
              Customer Info
            </ModalHeader>
            <ModalBody>
              <form>
                <div className="form-group">
                  <label className="form-label" htmlFor="full-name">
                    Full Name
                  </label>
                  <div className="form-control-wrap">
                    <input type="text" className="form-control" id="full-name" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <div className="form-control-wrap">
                    <input type="text" className="form-control" id="email" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="phone-no">
                    Phone No
                  </label>
                  <div className="form-control-wrap">
                    <input type="number" className="form-control" id="phone-no" defaultValue="0880" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Communication</label>
                  <ul className="custom-control-group g-3 align-center">
                    <li>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="form-control custom-control-input"
                          id="fv-com-email"
                          name="com"
                          value="email"
                        />
                        <label className="custom-control-label" htmlFor="fv-com-email">
                          Email
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="form-control custom-control-input"
                          id="fv-com-sms"
                          name="com"
                          value="sms"
                        />
                        <label className="custom-control-label" htmlFor="fv-com-sms">
                          SMS
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="fv-com-phone"
                          name="com"
                          value="phone"
                        />
                        <label className="custom-control-label" htmlFor="fv-com-phone">
                          {" "}
                          Phone{" "}
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="amount">
                    Amount
                  </label>
                  <div className="form-control-wrap">
                    <input type="number" className="form-control" id="amount" />
                  </div>
                </div>
                <div className="form-group">
                  <Button color="primary" type="submit" onClick={(ev) => ev.preventDefault()} size="lg">
                    Save Information
                  </Button>
                </div>
              </form>
            </ModalBody>
            <ModalFooter className="bg-light">
              <span className="sub-text">Modal Footer Text</span>
            </ModalFooter>
          </Modal>
        </td>
      }
      return value;
    };
    return <td className="tb-odr-info">{renderContent()}</td>;
  }

  useEffect(() => {
    handleFilterButton();
  }, [size, page]);

  return (
    <React.Fragment>
      <Head title="Basic Tables" />
      <Content page="component">
        <BlockHead>
          <BlockHeadContent>
            <BlockTitle>Transaction Career</BlockTitle>
            <BlockDes>
              <p>Transaction Career is used to created new Available Job for applicant.</p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <Row className="gy-3 ">
            <Col sm="6">
              <div className="form-group">
                <Label htmlFor="default-5" className="form-label">
                  Name
                </Label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Optional"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </Col>
            <Col sm="6">
              <div className="form-group">
                <label htmlFor="default-5" className="form-label">
                  Status Code
                </label>
                <div class="form-control-select">
                  {" "}
                  <select
                    name="DataTables_Table_0_length"
                    aria-controls="DataTables_Table_0"
                    class="custom-select custom-select-sm form-control form-control-sm"
                    id="statusCode"
                    value={statusCode}
                    onChange={(e) => {
                      const selectedValues = e.target.value.split(",").map((value) => parseInt(value));
                      setStatusCode(selectedValues);
                    }}
                  >
                    <option value={1}>Active</option>
                    <option value={0}>Not Active</option>
                    <option value="0,1">All</option>
                  </select>{" "}
                </div>
              </div>
            </Col>
            <Col sm="6">
              <div className="form-group d-flex flex-row-reverse mt-5">
                <Button color="btn-round btn-primary " onClick={(e) => handleFilterButton()}>
                  Filter
                  <Icon name="sort" />
                  {""}
                </Button>
              </div>
            </Col>
          </Row>
          <PreviewCard className="mt-5 border">
            {dataNotFound ? null : (
              <div class="nk-block-between">
                <div class="nk-block-head-content">
                  <div class="nk-block-des text-soft">
                    <p>The table contains {totalData} records.</p>
                  </div>
                </div>
                <div class="nk-block-head-content">
                  <div class="toggle-wrap nk-block-tools-toggle">
                    <a href="#" class="btn btn-icon btn-trigger toggle-expand me-n1" data-target="pageMenu">
                      <em class="icon ni ni-menu-alt-r"></em>
                    </a>
                    <div class="toggle-expand-content" data-content="pageMenu">
                      <ul class="nk-block-tools g-3">
                        <li>
                          <div class="drodown">
                            {isEditing ? (
                              <div class="nk-block-between">
                                <button
                                  class="btn btn-outline-dark nk-block-head-content me-2"
                                  onClick={handleSaveClick}
                                >
                                  <span>Save</span>
                                  <em class="icon ni ni-save"></em>
                                </button>
                                <button
                                  class="btn btn-outline-dark nk-block-head-content me-2"
                                  onClick={handleDeleteRowClick}
                                >
                                  <span>Delete</span>
                                  <em class="icon ni ni-trash-alt"></em>
                                </button>
                                <button
                                  class="btn btn-outline-dark nk-block-head-content me-2"
                                  onClick={handleAddRowClick}
                                >
                                  <span>Add Row</span>
                                  <em class="icon ni ni-grid-add-c"></em>
                                </button>
                                <button
                                  class="btn btn-secondary nk-block-head-content me-2"
                                  onClick={handleCancelClick}
                                >
                                  <span>Cancel</span>
                                  <em class="icon ni ni-curve-down-right"></em>
                                </button>
                              </div>
                            ) : (
                              <a class="btn btn-secondary" data-bs-toggle="dropdown" onClick={handleEditClick}>
                                <span>Edit</span>
                                <em class="icon ni ni-curve-down-left"></em>
                              </a>
                            )}
                          </div>
                        </li>
                        <li class="nk-block-tools-opt d-none d-sm-block">
                          <label>
                            <div class="form-control-select">
                              {" "}
                              <select
                                name="DataTables_Table_0_length"
                                aria-controls="DataTables_Table_0"
                                class="custom-select custom-select-sm form-control form-control-sm"
                                id="paginationSize"
                                value={size}
                                onChange={(e) => handleSize(e.target.value)}
                              >
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                                <option value="50">50</option>
                              </select>{" "}
                            </div>
                          </label>
                        </li>
                        <li class="nk-block-tools-opt d-block d-sm-none">
                          <a href="#" class="btn btn-icon btn-primary">
                            <em class="icon ni ni-plus"></em>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <br></br>

            <div>
              {dataNotFound ? (
                <div className="p-2 center shadow border">There are no records found</div>
              ) : (
                <div scrolling="yes">
                  <table className="table table-orders">
                    <thead className="tb-odr-head">
                      <tr className="tb-odr-item">
                        <th className="tb-odr-info">&nbsp;</th>
                        <SortableTableHeader columnName="id" label="ID" handleSorting={handleSorting} />
                        <SortableTableHeader
                          columnName="mst_career_code"
                          label="CAREER CODE"
                          handleSorting={handleSorting}
                        />
                        <SortableTableHeader
                          columnName="mst_team_code"
                          label="TEAM CODE"
                          handleSorting={handleSorting}
                        />
                        <SortableTableHeader
                          columnName="mst_status_code"
                          label="STATUS CODE"
                          handleSorting={handleSorting}
                        />
                        <SortableTableHeader columnName="work_place" label="WORK PLACE" handleSorting={handleSorting} />
                        <SortableTableHeader columnName="address" label="ADDRESS" handleSorting={handleSorting} />
                        <SortableTableHeader columnName="district" label="DISTRICT" handleSorting={handleSorting} />
                        <SortableTableHeader columnName="region" label="REGION" handleSorting={handleSorting} />
                        <SortableTableHeader columnName="city" label="CITY" handleSorting={handleSorting} />
                        <SortableTableHeader columnName="country" label="COUNTRY" handleSorting={handleSorting} />
                        <SortableTableHeader
                          columnName="job_desc"
                          label="JOB DESCRIPTION"
                          handleSorting={handleSorting}
                        />
                        <SortableTableHeader
                          columnName="job_desc_plain"
                          label="JOB DESCRIPTION PLAIN"
                          handleSorting={handleSorting}
                        />
                        <SortableTableHeader
                          columnName="position_level"
                          label="POSITION LEVEL"
                          handleSorting={handleSorting}
                        />
                        <SortableTableHeader
                          columnName="qualification"
                          label="QUALIFICATION"
                          handleSorting={handleSorting}
                        />
                        <SortableTableHeader
                          columnName="years_of_experience"
                          label="YEARS OF QUALIFICATION"
                          handleSorting={handleSorting}
                        />
                        <SortableTableHeader
                          columnName="employment_type"
                          label="EMPLOYMENT TYPE"
                          handleSorting={handleSorting}
                        />
                        <SortableTableHeader
                          columnName="specializations"
                          label="SPECIALIZATION"
                          handleSorting={handleSorting}
                        />
                        <SortableTableHeader
                          columnName="mst_status_code"
                          label="STATUS NAME"
                          handleSorting={handleSorting}
                        />
                        <SortableTableHeader columnName="insertby" label="INSERT BY" handleSorting={handleSorting} />
                        <SortableTableHeader
                          columnName="insert_date"
                          label="INSERT DATE"
                          handleSorting={handleSorting}
                        />
                        <SortableTableHeader columnName="updateby" label="UPDATE BY" handleSorting={handleSorting} />
                        <SortableTableHeader
                          columnName="update_date"
                          label="UPDATE DATE"
                          handleSorting={handleSorting}
                        />
                      </tr>
                    </thead>
                    <tbody className="tb-odr-body">
                      {responseData.map((rowData, rowIndex) => (
                        <tr key={rowData.id}>
                          <td className="tb-odr-info">
                            {isEditing ? (
                              <input
                                type="checkbox"
                                checked={rowData.isSelected}
                                disabled={!rowData.isNew}
                                onChange={() => handleCheckboxChange(rowData.id)}
                              />
                            ) : null}
                          </td>
                          <td className="tb-odr-info">
                            {rowData.isNew || isEditing ? (
                              <input
                                disabled={rowData.isNew}
                                type="text"
                                value={rowData.id}
                                onChange={(e) => handleInputChange(e, rowIndex, "id")}
                              />
                            ) : (
                              rowData.id
                            )}
                          </td>
                          <EditableCell
                            value={rowData.careerCode}
                            isEditing={isEditing}
                            isNew={rowData.isNew}
                            fieldName="careerCode"
                            handleInputChange={handleInputChange}
                            rowIndex={rowIndex}
                          />
                          <EditableCell
                            value={rowData.teamCode}
                            isEditing={isEditing}
                            isNew={rowData.isNew}
                            fieldName="teamCode"
                            handleInputChange={handleInputChange}
                            rowIndex={rowIndex}
                          />
                          <td className="tb-odr-info">
                            {rowData.isNew || isEditing ? (
                              <select
                                id="statusDropdown"
                                value={rowData.statusCode}
                                onChange={(e) => handleInputChange(e, rowIndex, "statusCode")}
                              >
                                <option value={1}>Active</option>
                                <option value={0}>Not Active</option>
                              </select>
                            ) : (
                              <td className="tb-odr-info">{rowData.statusCode === 1 ? "Active" : "Not Active"}</td>
                            )}
                          </td>
                          <EditableCell
                            value={rowData.workPlace}
                            isEditing={isEditing}
                            isNew={rowData.isNew}
                            fieldName="workPlace"
                            handleInputChange={handleInputChange}
                            rowIndex={rowIndex}
                          />
                          <EditableCell
                            value={rowData.address}
                            isEditing={isEditing}
                            isNew={rowData.isNew}
                            fieldName="address"
                            handleInputChange={handleInputChange}
                            rowIndex={rowIndex}
                          />
                          {/* <ModalWithForm 
                            value={rowData.adress}
                            isEditing={isEditing}
                            isNew={rowData.isNew}
                            /> */}
                          {/* <td className="tb-odr-info">
                          {rowData.isNew || isEditing ? (
                            <input
                              type="text"
                              value={rowData.address}
                              onChange={(e) => handleInputChange(e, rowIndex, "address")}
                            />
                          ) : (
                            rowData.address
                          )}
                        </td> */}
                          <EditableCell
                            value={rowData.district}
                            isEditing={isEditing}
                            isNew={rowData.isNew}
                            fieldName="district"
                            handleInputChange={handleInputChange}
                            rowIndex={rowIndex}
                          />
                          <EditableCell
                            value={rowData.region}
                            isEditing={isEditing}
                            isNew={rowData.isNew}
                            fieldName="region"
                            handleInputChange={handleInputChange}
                            rowIndex={rowIndex}
                          />
                          <EditableCell
                            value={rowData.city}
                            isEditing={isEditing}
                            isNew={rowData.isNew}
                            fieldName="city"
                            handleInputChange={handleInputChange}
                            rowIndex={rowIndex}
                          />
                          <EditableCell
                            value={rowData.country}
                            isEditing={isEditing}
                            isNew={rowData.isNew}
                            fieldName="country"
                            handleInputChange={handleInputChange}
                            rowIndex={rowIndex}
                          />
                          <EditableCell
                            value={rowData.jobDescription}
                            isEditing={isEditing}
                            isNew={rowData.isNew}
                            fieldName="jobDescription"
                            handleInputChange={handleInputChange}
                            rowIndex={rowIndex}
                          />
                          <EditableCell
                            value={rowData.jobDescriptionPlain}
                            isEditing={isEditing}
                            isNew={rowData.isNew}
                            fieldName="jobDescriptionPlain"
                            handleInputChange={handleInputChange}
                            rowIndex={rowIndex}
                          />
                          <EditableCell
                            value={rowData.positionLevel}
                            isEditing={isEditing}
                            isNew={rowData.isNew}
                            fieldName="positionLevel"
                            handleInputChange={handleInputChange}
                            rowIndex={rowIndex}
                          />
                          <EditableCell
                            value={rowData.qualification}
                            isEditing={isEditing}
                            isNew={rowData.isNew}
                            fieldName="qualification"
                            handleInputChange={handleInputChange}
                            rowIndex={rowIndex}
                          />
                          <EditableCell
                            value={rowData.yearsOfExperience}
                            isEditing={isEditing}
                            isNew={rowData.isNew}
                            fieldName="yearsOfExperience"
                            handleInputChange={handleInputChange}
                            rowIndex={rowIndex}
                          />
                          <EditableCell
                            value={rowData.employmentType}
                            isEditing={isEditing}
                            isNew={rowData.isNew}
                            fieldName="employmentType"
                            handleInputChange={handleInputChange}
                            rowIndex={rowIndex}
                          />
                          <EditableCell
                            value={rowData.specializations}
                            isEditing={isEditing}
                            isNew={rowData.isNew}
                            fieldName="specializations"
                            handleInputChange={handleInputChange}
                            rowIndex={rowIndex}
                          />
                          <td className="tb-odr-info">
                            {rowData.isNew || isEditing ? rowData.statusName : rowData.statusName}
                          </td>
                          <td className="tb-odr-info">
                            {rowData.isNew || isEditing ? rowData.insertby : rowData.insertby}
                          </td>
                          <td className="tb-odr-info">
                            {rowData.isNew || isEditing
                              ? new Date(rowData.insertDate).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                  hour: "numeric",
                                  minute: "numeric",
                                  second: "numeric",
                                })
                              : new Date(rowData.insertDate).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                  hour: "numeric",
                                  minute: "numeric",
                                  second: "numeric",
                                })}
                          </td>
                          <td className="tb-odr-info">
                            {rowData.isNew || isEditing ? rowData.updateby : rowData.updateby}
                          </td>
                          <td className="tb-odr-info">
                            {rowData.isNew || isEditing
                              ? rowData.updateDate
                                ? new Date(rowData.updateDate).toLocaleString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                    second: "numeric",
                                  })
                                : "null"
                              : rowData.updateDate
                              ? new Date(rowData.updateDate).toLocaleString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                  hour: "numeric",
                                  minute: "numeric",
                                  second: "numeric",
                                })
                              : "null"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            <div className="center mt-5">
              <ReactPaginate
                previousLabel={<Icon name="caret-left" />}
                nextLabel={<Icon name="caret-right" />}
                breakLabel={"..."}
                pageCount={totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
              />
            </div>
          </PreviewCard>
        </Block>
      </Content>
    </React.Fragment>
  );
}

export default TrcCareer;
