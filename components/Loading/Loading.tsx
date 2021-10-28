import classNames from "classnames";
import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";

export interface LoadingProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "className"> {
  className?: string;
}

const Loading: FC<LoadingProps> = ({ className, ...props }) => {
  const isLoading = useSelector(
    (state: any) => state.loadingService.isLoadingPage
  );

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
