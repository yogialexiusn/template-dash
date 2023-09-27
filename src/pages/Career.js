import React from "react";
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";
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
import { DataTableData, dataTableColumns, dataTableColumns2, userData } from "../pages/components/table/TableData";

const Career = () => {
  return (
    <React.Fragment>
      <Head title="Basic Tables" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Career Menu
            </BlockTitle>
            <BlockDes>
              <p className="lead">
              The table function in the career menu is used to view a list of job applicants who have applied for job openings. It includes various features such as search and adding data to open job vacancies.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">DataTable with Export</BlockTitle>
              <p>
                Pass in the <code>actions</code> props to add export option to the table.
              </p>
            </BlockHeadContent>
          </BlockHead>

          <PreviewCard>
            <ReactDataTable data={DataTableData} columns={dataTableColumns} expandableRows pagination actions />
          </PreviewCard>
        </Block>

        
      </Content>
    </React.Fragment>
  );
};
export default Career;
