import Head from "next/head";
import React, { FC } from "react";

import styles from "../../styles/components/Noise.module.scss";

export interface NoiseProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "className"> {}

const Noise: FC<NoiseProps> = ({ ...props }) => {
  return <div {...props} className={styles.noise}></div>;
};

export default Noise;
