import React, { useState } from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";

const Homepage = () => {
  const [sm, updateSm] = useState(false);
  return (
    <React.Fragment>
      <Head title="Homepage"></Head>
      <Content>
        <p>Homepage</p>
      </Content>
    </React.Fragment>
  );
};
export default Homepage;
