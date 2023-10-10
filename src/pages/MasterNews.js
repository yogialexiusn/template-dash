import React, { useState, useCallback, useEffect } from "react";
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";
import { Button } from "reactstrap";
import { axiosInstance } from "../config/AxiosInstance";
import { Link } from "react-router-dom";
import Icon from "../components/icon/Icon";
import ReactPaginate from "react-paginate";
import { Label, Input, Row, Col } from "reactstrap";
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
import { set } from "react-hook-form";

function MasterNews() {
  const [params, setParams] = useState("");
  const [respCareer, setRespCareer] = useState([]);
  const [editedInput, setEditedInput] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isChecklistDisable, setChecklistDisable] = useState(true);
  const [sortation, setSortation] = useState("desc");
  const [sortField, setSortField] = useState("id"); // Initialize sortField state
  const [pageCount, setpageCount] = useState(0);
  const [pageSelected, SetPageSelected] = useState(0);
  const [paginationSize, setPaginationSize] = useState(10);

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
    const updatedData = respCareer.map((rowData) => (rowData.isNew ? { ...rowData, isNew: false } : rowData));
    const modifiedInput = updatedData.filter((itemB) => {
      const matchingItemA = editedInput.find((itemA) => itemA.id === itemB.id);
      return !matchingItemA || matchingItemA.name !== itemB.name || matchingItemA.statusCode !== itemB.statusCode;
    });
    // Cek apakah ada nilai yang kosong di baris-baris yang sedang diedit
    const hasEmptyValue = modifiedInput.some((rowData) => rowData.name === "" || rowData.statusCode === "");
    console.log("modifiedInput = " + JSON.stringify(modifiedInput));
    if (hasEmptyValue) {
      alert("Tidak dapat menyimpan baris baru dengan nilai kosong.");
      return; // Hentikan penyimpanan jika ada nilai kosong
    } else {
      handleEdit(modifiedInput);
      setIsEditing(false);
      setRespCareer(updatedData);

      handleSearchMasterCareer("update_date", "desc", 0);
    }
  };

  const handleAddRowClick = () => {
    const updatedData = [...respCareer, { ...newRow, id: null, isNew: true, isSelected: false, statusCode: 1 }];

    // Jika sedang dalam mode editing, jangan keluar dari mode edit setelah menambahkan baris baru
    if (!isEditing) {
      setIsEditing(true);
    }

    setChecklistDisable(false);
    setRespCareer(updatedData);
  };

  const handleDeleteRowClick = () => {
    // Hapus baris berdasarkan isSelected
    const updatedData = respCareer.filter((rowData) => !rowData.isSelected);
    setRespCareer(updatedData);
    // setIsEditing(false);
  };

  const handleCheckboxChange = (id) => {
    // Toggle isSelected pada baris dengan id tertentu
    const updatedData = respCareer.map((rowData) =>
      rowData.id === id ? { ...rowData, isSelected: !rowData.isSelected } : rowData,
    );

    setRespCareer(updatedData);
  };

  const handlePageClick = async (data) => {
    // setPage(data.selected);
    // console.log('page click12', data.selected);
    SetPageSelected(data.selected);
    handleSearchMasterCareer("id", "desc", data.selected);
  };

  const handleInputChange = (e, rowIndex, colName) => {
    const { value } = e.target;
    const updatedData = [...respCareer];
    const updatedRow = updatedData[rowIndex];

    if (updatedRow.isNew) {
      updatedRow[colName] = value;
    } else {
      updatedData[rowIndex] = { ...updatedRow, [colName]: value };
    }
    setRespCareer(updatedData);
  };

  const handleParamsChange = (event) => {
    const params = event.target.value;
    setParams(params);
  };

  const handleSearchMasterCareer = useCallback(
    async (field, newSortation, currentPage) => {
      // e.preventDefault();
      // const newSortation = sortation === "asc" ? "desc" : "asc";

      // Set the sortField state based on the column clicked
      setSortField(field);
      let requestBody = {
        code: "",
        name: "",
        statusCodes: [0, 1],
        page: currentPage,
        size: paginationSize,
        sortField: field,
        sortOrder: newSortation,
      };

      // Update the state with the new sortation value
      setSortation(newSortation);

      try {
        let response = await axiosInstance().post("/api/v1/mst_career/list", requestBody);
        if (response.status === 200) {
          const total = response.data.totalPages;
          setpageCount(total);
          setRespCareer(response.data.data);
          setEditedInput(response.data.data);
        }
      } catch (err) {
        if (err.response) {
          if (err.response.status === 401) {
          } else {
          }
        } else {
        }
      }
    },
    [editedInput, paginationSize],
  );

  const handleEdit = async (modifiedInput) => {
    for (const obj of modifiedInput) {
      let requestBody = {
        id: obj.id,
        name: obj.name,
        statusCode: obj.statusCode,
      };

      try {
        let response = await axiosInstance().post("/api/v1/mst_career/addOrUpdate", requestBody);
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

      // Add a delay of 50ms before the next iteration
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    window.location.reload();

    // After all iterations are done, you can call handleSearchMasterCareer
    handleSearchMasterCareer("id", "desc", 0);
  };

  const handleSorting = async (field) => {
    const newSortation = sortation === "asc" ? "desc" : "asc";
    handleSearchMasterCareer(field, newSortation, pageSelected);
  };

  useEffect(() => {
    handleSearchMasterCareer("id", "desc", 0);
  }, [paginationSize]);

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

        <Block>
          <Row className="gy-4">
            <Col sm="6">
              <div className="form-group">
                <Label htmlFor="default-5" className="form-label">
                  CODE
                </Label>
                <input className="form-control focus" placeholder="Optional" />
              </div>
            </Col>
            <Col sm="6">
              <div className="form-group">
                <Label htmlFor="default-5" className="form-label">
                  NAME
                </Label>
                <input className="form-control" placeholder="Optional" />
              </div>
            </Col>
            <Col sm="6">
              <div className="form-group">
                <label htmlFor="default-5" className="form-label">
                  STATUS
                </label>
                <div className="form-control-wrap">
                  <div className="form-control-select-multiple">
                    <Input type="select" name="select" id="default-5">
                      <option value="option_select0">Active</option>
                      <option value="option_select1">Not Active</option>
                    </Input>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <BlockHead>
            <BlockHeadContent>
              <div class="d-flex flex-row-reverse">
                {/* <input
                  type="text"
                  class="form-control"
                  id="default-01"
                  placeholder="Search Career"
                  value={params}
                  onChange={(e) => handleParamsChange(e)}
                /> */}

                <Button color="btn-round btn-primary " onClick={(e) => handleSearchMasterCareer(e)}>
                  Filter
                  <Icon name="sort" />
                  {""}
                </Button>
              </div>
            </BlockHeadContent>
          </BlockHead>

          <PreviewCard className="mt-5">
            <div className="d-flex flex-row-reverse">
              <div>
                {isEditing ? (
                  <div>
                    <button onClick={handleSaveClick}>Simpan</button>
                    <button onClick={handleDeleteRowClick}>Hapus</button>
                    <button onClick={handleAddRowClick}>Add Row</button>
                  </div>
                ) : (
                  <button onClick={handleEditClick}>Edit</button>
                )}
              </div>
              <div>
                <label>
                  <span class="d-none d-sm-inline-block">Show</span>
                  <div class="form-control-select">
                    {" "}
                    <select
                      name="DataTables_Table_0_length"
                      aria-controls="DataTables_Table_0"
                      class="custom-select custom-select-sm form-control form-control-sm"
                      id="paginationSize"
                      value={paginationSize}
                      onChange={(e) => setPaginationSize(e.target.value)}
                    >
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>{" "}
                  </div>
                </label>
              </div>
            </div>
            <br></br>
            <table className="table table-orders">
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>
                    ID
                    <Link to="#" onClick={(e) => handleSorting("id")}>
                      <Icon name="sort" />
                    </Link>
                  </th>
                  <th>
                    NAME
                    <Link to="#" onClick={(e) => handleSorting("name")}>
                      <Icon name="sort" />
                    </Link>
                  </th>
                  <th>
                    STATUS CODE
                    <Link to="#" onClick={(e) => handleSorting("mst_status_code")}>
                      <Icon name="sort" />
                    </Link>
                  </th>
                  <th>
                    SEQ
                    <Link to="#" onClick={(e) => handleSorting("seq")}>
                      <Icon name="sort" />
                    </Link>
                  </th>
                  <th>
                    CODE
                    <Link to="#" onClick={(e) => handleSorting("code")}>
                      <Icon name="sort" />
                    </Link>
                  </th>
                  <th>
                    STATUS NAME
                    <Link to="#" onClick={(e) => handleSorting("mst_status_code")}>
                      <Icon name="sort" />
                    </Link>
                  </th>
                  <th>
                    INSERT BY
                    <Link to="#" onClick={(e) => handleSorting("insertby")}>
                      <Icon name="sort" />
                    </Link>
                  </th>
                  <th>
                    INSERT DATE
                    <Link to="#" onClick={(e) => handleSorting("insert_date")}>
                      <Icon name="sort" />
                    </Link>
                  </th>
                  <th>
                    UPDATE BY
                    <Link to="#" onClick={(e) => handleSorting("updateby")}>
                      <Icon name="sort" />
                    </Link>
                  </th>
                  <th>
                    UPDATE DATE
                    <Link to="#" onClick={(e) => handleSorting("update_date")}>
                      <Icon name="sort" />
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {respCareer.map((rowData, rowIndex) => (
                  <tr key={rowData.id}>
                    <td>
                      {isEditing ? (
                        <input
                          type="checkbox"
                          checked={rowData.isSelected}
                          disabled={!rowData.isNew}
                          onChange={() => handleCheckboxChange(rowData.id)}
                        />
                      ) : null}
                    </td>
                    <td>
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
                    <td>
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
                    <td>
                      {rowData.isNew || isEditing ? (
                        // <input
                        //   type="text"
                        //   value={rowData.statusCode}
                        //   onChange={(e) => handleInputChange(e, rowIndex, "statusCode")}
                        // />
                        <select
                          id="statusDropdown"
                          value={rowData.statusCode}
                          onChange={(e) => handleInputChange(e, rowIndex, "statusCode")}
                        >
                          <option value={1}>Active</option>
                          <option value={0}>Not Active</option>
                        </select>
                      ) : (
                        <td>{rowData.statusCode === 1 ? "Active" : "Not Active"}</td>
                      )}
                    </td>
                    <td>{rowData.isNew || isEditing ? rowData.seq : rowData.seq}</td>
                    <td>{rowData.isNew || isEditing ? rowData.code : rowData.code}</td>
                    <td>{rowData.isNew || isEditing ? rowData.statusName : rowData.statusName}</td>
                    <td>{rowData.isNew || isEditing ? rowData.insertby : rowData.insertby}</td>
                    <td>
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
                    <td>{rowData.isNew || isEditing ? rowData.updateby : rowData.updateby}</td>
                    <td>
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

            <div className="center mt-5">
              <ReactPaginate
                previousLabel={"<<"}
                nextLabel={">>"}
                breakLabel={"..."}
                pageCount={pageCount}
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

export default MasterNews;
