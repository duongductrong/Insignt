import classNames from "classnames";
import React, { FC } from "react";

export type TextType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "className"> {
  tag?: TextType;
  className?: string;
}

const Text: FC<TextProps> = ({ tag, children, className, ...props }) => {
  const TagElement: any = tag;
  return (
    <TagElement {...props} className={classNames(className)}>
      {children}
    </TagElement>
  );
};

Text.defaultProps = {
  tag: "h1",
  className: "",
};

export default Text;
