import React, { useState, useEffect, useCallback } from "react";
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";
import { Button } from "reactstrap";
import { axiosInstance } from '../config/AxiosInstance';
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

const MasterCareer = () => {
  const [respCareer, setRespCareer] = useState([]);


  useEffect(() => {
    handleSearchMasterCareer();
  }, []);

  const handleParamsChange = (event) => {
    const params = event.target.value;
    // setParams(params);
  };

  const handleSearchMasterCareer = useCallback(
    async (e) => {
      // e.preventDefault();
      let requestBody = {
        code: "",
        name: "",
        statusCodes: [0,1],
        page: 0,
        size: "all",
        sortField: "name",
        sortOrder: "desc"
      };

      try {
        let response = await axiosInstance().post("/api/v1/mst_career/list", requestBody);
        if (response.status === 200) {
          setRespCareer(response.data.data);
  
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
    [respCareer],
  );

  return (
    <React.Fragment>
      <Head title="Basic Tables" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BlockTitle tag="h2" className="fw-normal">
              Master Career
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Master Career is used to created new Job for applicant.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <div class="mt-2 d-flex flex-row bg-lighter">
                <input
                  type="text"
                  class="form-control"
                  id="default-01"
                  placeholder="Search Career"
                  // value={params}
                  onChange={(e) => handleParamsChange(e)}
                />

                <Button
                  color="btn ms-3 btn-round btn-primary"
                  onClick= {(e) => handleSearchMasterCareer(e)} 
                >
                  <em class="icon ni ni-search"></em>
                  <span>Search Career</span>
                  {""}
                </Button>
              </div>
            </BlockHeadContent>
          </BlockHead>

          <PreviewCard >

            <ReactDataTable style={{ overflowX: 'scroll !important', maxWidth: '100% !important' }}
              data={respCareer}
              columns={dataTableColumns}
              // expandableRows
              pagination
              actions
              selectableRows={BackTo}
            />

          </PreviewCard>
        </Block>
      </Content>
    </React.Fragment>
  );
};
export default MasterCareer;
