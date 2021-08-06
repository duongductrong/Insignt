import classNames from "classnames";
import React, { FC } from "react";
import { Color } from "../../core/types/Color";

export type TextType = "big-text" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "className"> {
  tag?: TextType;
  variant?: TextType;
  className?: string;
  color?: Color;
}

const Text: FC<TextProps> = ({
  tag,
  children,
  className,
  color,
  variant,
  ...props
}) => {
  const TagElement: any = tag;
  return (
    <TagElement
      {...props}
      className={classNames(`text-${variant}`, `color-${color}`, className)}
    >
      {children}
    </TagElement>
  );
};

Text.defaultProps = {
  tag: "h1",
  variant: "h1",
  className: "",
  color: "dark",
};

export default Text;
