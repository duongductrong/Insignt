import classNames from "classnames";
import React, { FC, useEffect, useState } from "react";

export interface LoadingProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "className"> {
  className?: string;
}

const Loading: FC<LoadingProps> = ({ className, ...props }) => {
  const [isLoading, setLoading] = useState<boolean | null>(null);

  // useEffect(() => {
  //   // Fake loading
  //   setTimeout(() => {
  //     setLoading(true);

  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 300);
  //   }, 300);
  // }, []);

  return (
    <div
      className={classNames(
        "loading",
        isLoading ? "loading__bottom" : isLoading !== null ? "loading__top" : ""
      )}
    ></div>
  );
};

export default Loading;
