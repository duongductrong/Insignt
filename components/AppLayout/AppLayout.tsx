import Head from "next/head";
import React, { FC } from "react";
import Appbar from "../Appbar/Appbar";

export interface Props
  extends Omit<React.HTMLAttributes<HTMLElement>, "className"> {}

const AppLayout: FC<Props> = ({ children, ...props }) => {
  return (
    <div {...props} className="app-layout">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.2" />
        <title>Duong Duc Trong - Frontend Developer Portfolio</title>
      </Head>
      <Appbar />
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
