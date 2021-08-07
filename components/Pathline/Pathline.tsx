import React, { FC } from "react";

export interface PathlineProps {}

const Pathline: FC<PathlineProps> = ({ children, ...props }) => {
  return <div className="pathline">{children}</div>;
};

export default Pathline;
