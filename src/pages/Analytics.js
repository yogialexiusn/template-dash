import React, { useState } from "react";
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";

const AnalyticsHomePage = () => {
  const [sm, updateSm] = useState(false);
  return (
    <React.Fragment>
      <Head title="Analytics Dashboard" />
      <Content>
        <p>Analytics</p>
      </Content>
    </React.Fragment>
  );
};

export default AnalyticsHomePage;
