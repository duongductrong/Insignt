import React, { FC } from "react";
import Appbar from "../Appbar/Appbar";

export interface Props
  extends Omit<React.HTMLAttributes<HTMLElement>, "className"> {}

const AppLayout: FC<Props> = ({ children, ...props }) => {
  return <div {...props} className="app-layout">
    <Appbar />
    <main>
      {children}
    </main>
  </div>;
};

export default AppLayout;
