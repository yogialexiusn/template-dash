import React, { useState, useEffect, useCallback } from "react";
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

const MasterTeam = () => {
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

  const getNews = useCallback(
    async (halaman) => {
      let requestBody = {
        param: params,
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
    },
    [items, params],
  );

  return (
    <React.Fragment>
      <Head title="Basic Tables" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BlockTitle tag="h2" className="fw-normal">
              Master Team
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Master Team is used to view a list of job applicants who have applied for job openings. It includes
                various features such as search and adding data to open job vacancies.
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
                  placeholder="Search News"
                  value={params}
                  onChange={(e) => handleParamsChange(e)}
                />

                <Button
                  color="btn ms-3 btn-round btn-primary"
                  onClick={() => {
                    handleSearchNews();
                  }}
                >
                  <em class="icon ni ni-search"></em>
                  <span>Search Career</span>
                  {""}
                </Button>
              </div>
            </BlockHeadContent>
          </BlockHead>

          <PreviewCard>
            <ReactDataTable
              data={DataTableData}
              columns={dataTableColumns}
              expandableRows
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
export default MasterTeam;
