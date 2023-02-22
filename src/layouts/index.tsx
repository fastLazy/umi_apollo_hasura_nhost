import React from "react";
import { Outlet } from "@umijs/max";
import { NhostClient, NhostReactProvider } from "@nhost/react";
import { NhostApolloProvider } from "@nhost/react-apollo";

const Layout = () => {
  const nhost = new NhostClient({
    subdomain: process.env.SUBDOMAIN,
    region: process.env.REGION,
  });
  return (
    <React.StrictMode>
      <NhostReactProvider nhost={nhost}>
        <NhostApolloProvider nhost={nhost}>
          <Outlet />
        </NhostApolloProvider>
      </NhostReactProvider>
    </React.StrictMode>
  );
};

export default Layout;
