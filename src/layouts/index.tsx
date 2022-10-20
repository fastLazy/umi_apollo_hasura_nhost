import React from "react";
import { Outlet } from "@umijs/max";
import { NhostClient, NhostReactProvider } from "@nhost/react";
import { NhostApolloProvider } from "@nhost/react-apollo";

const Layout = () => {
  const nhost = new NhostClient({
    subdomain: "<app-subdomain>",
    region: "<app-region>",
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
