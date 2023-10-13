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
import { MASTER_CAREER_LIST, MASTER_CAREER_ADD } from "../config/Constants";

function MasterCareer() {
  const [responseData, setResponseData] = useState([]);
  const [editedInput, setEditedInput] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [totalData, setTotalData] = useState(0);
  const [dataNotFound, setDataNotFound] = useState(false);

  const [code, setCode] = useState("");
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
    const hasEmptyValue = modifiedInput.some((rowData) => rowData.name === "" || rowData.statusCode === "");
    if (hasEmptyValue) {
      alert("Tidak dapat menyimpan baris baru dengan nilai kosong.");
      return; // Hentikan penyimpanan jika ada nilai kosong
    } else {
      handleEdit(modifiedInput);
      setIsEditing(false);
      setResponseData(updatedData);
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
      code: code,
      name: name,
      size: size,
      statusCodes: statusCode,
      page: page,
      sortField: sortField,
      sortOrder: sortOrder,
    };

    try {
      let response = await axiosInstance().post(MASTER_CAREER_LIST, requestBody);
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
  }, [responseData, code, name, size, statusCode, page, sortField, sortOrder]);

  const handleEdit = async (modifiedInput) => {
    for (const obj of modifiedInput) {
      let requestBody = {
        id: obj.id,
        name: obj.name,
        statusCode: obj.statusCode,
      };

      try {
        let response = await axiosInstance().post(MASTER_CAREER_ADD, requestBody);
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

  useEffect(() => {
    handleFilterButton();
  }, [size, page]);

  return (
    <React.Fragment>
      <Head title="Basic Tables" />
      <Content page="component">
        <BlockHead>
          <BlockHeadContent>
            <BlockTitle>Master Career</BlockTitle>
            <BlockDes>
              <p>Master Career is used to created new Job for applicant.</p>
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
                <Label htmlFor="default-5" className="form-label">
                  Code
                </Label>
                <input
                  type="text"
                  className="form-control"
                  id="code"
                  placeholder="Optional"
                  onChange={(e) => setCode(e.target.value)}
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
                <table className="table table-orders">
                  <thead className="tb-odr-head">
                    <tr className="tb-odr-item">
                      <th className="tb-odr-info">&nbsp;</th>
                      <th className="tb-odr-info">
                        ID
                        <Link
                          to="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSorting("id");
                          }}
                        >
                          <Icon name="sort" />
                        </Link>
                      </th>
                      <th className="tb-odr-info">
                        NAME
                        <Link
                          to="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSorting("name");
                          }}
                        >
                          <Icon name="sort" />
                        </Link>
                      </th>
                      <th className="tb-odr-info">
                        STATUS CODE
                        <Link
                          to="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSorting("mst_status_code");
                          }}
                        >
                          <Icon name="sort" />
                        </Link>
                      </th>
                      <th className="tb-odr-info">
                        SEQ
                        <Link
                          to="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSorting("seq");
                          }}
                        >
                          <Icon name="sort" />
                        </Link>
                      </th>
                      <th className="tb-odr-info">
                        CODE
                        <Link
                          to="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSorting("code");
                          }}
                        >
                          <Icon name="sort" />
                        </Link>
                      </th>
                      <th className="tb-odr-info">
                        STATUS NAME
                        <Link
                          to="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSorting("mst_status_code");
                          }}
                        >
                          <Icon name="sort" />
                        </Link>
                      </th>
                      <th className="tb-odr-info">
                        INSERT BY
                        <Link
                          to="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSorting("insertby");
                          }}
                        >
                          <Icon name="sort" />
                        </Link>
                      </th>
                      <th className="tb-odr-info">
                        INSERT DATE
                        <Link
                          to="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSorting("insert_date");
                          }}
                        >
                          <Icon name="sort" />
                        </Link>
                      </th>
                      <th className="tb-odr-info">
                        UPDATE BY
                        <Link
                          to="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSorting("updateby");
                          }}
                        >
                          <Icon name="sort" />
                        </Link>
                      </th>
                      <th className="tb-odr-info">
                        UPDATE DATE
                        <Link
                          to="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSorting("update_date");
                          }}
                        >
                          <Icon name="sort" />
                        </Link>
                      </th>
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
                        <td className="tb-odr-info">
                          {rowData.isNew || isEditing ? (
                            <input
                              type="text"
                              value={rowData.name}
                              onChange={(e) => handleInputChange(e, rowIndex, "name")}
                            />
                          ) : (
                            rowData.name
                          )}
                        </td>
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
                        <td className="tb-odr-info">{rowData.isNew || isEditing ? rowData.seq : rowData.seq}</td>
                        <td className="tb-odr-info">{rowData.isNew || isEditing ? rowData.code : rowData.code}</td>
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

export default MasterCareer;
