import classNames from "classnames";
import Head from "next/head";
import React, { FC } from "react";

export interface NoiseProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "className"> {}

const Noise: FC<NoiseProps> = ({ ...props }) => {
  return <div {...props} className={classNames("noise")}></div>;
};

export default Noise;
