import React, { FC } from "react";
import classNames from "classnames";

export interface ContainerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "className"> {
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
}

const Container: FC<ContainerProps> = ({
  tag,
  className,
  children,
  ...props
}) => {
  const TagElement: any = tag;
  return (
    <TagElement {...props} className={classNames("container", className)}>
      {children}
    </TagElement>
  );
};

Container.defaultProps = {
  tag: "div",
};

export default Container;
