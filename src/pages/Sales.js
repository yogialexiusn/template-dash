import React, { useState } from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";

const SalesHome = () => {
  const [sm, updateSm] = useState(false);
  return (
    <React.Fragment>
      <Head title="Sales Dashboard" />
      <Content>
        <p>Sales Dashboard</p>
      </Content>
    </React.Fragment>
  );
};

export default SalesHome;
