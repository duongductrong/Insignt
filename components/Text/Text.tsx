import React, { FC } from "react";
import classNames from "classnames";
import { Color } from "../../core/types/Color";
import { FontFamily } from "../../core/types/Font";

export type TextVariant = "big-text" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
export type TextTransform = "uppercase" | "lowercase" | "capitalize";
export type FontWeight = "normal" | "bold" | "lighter";
export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "className"> {
  tag?: keyof JSX.IntrinsicElements;
  variant?: TextVariant;
  className?: string;
  color?: Color;
  textTransform?: TextTransform;
  font?: FontFamily;
  fontWeight?: FontWeight;
  href?: string;
}

const Text: FC<TextProps> = React.forwardRef(({
  tag,
  children,
  className,
  color,
  variant,
  font,
  fontWeight,
  textTransform,
  ...props
}, ref) => {
  const TagElement: any = tag;
  return (
    <TagElement
      {...props}
      ref={ref}
      className={classNames(
        `text-${variant}`,
        `color-${color}`,
        textTransform ? `text-${textTransform}` : "",
        fontWeight ? `weight-${fontWeight}` : "",
        font,
        className
      )}
    >
      {children}
    </TagElement>
  );
});

Text.defaultProps = {
  tag: "h1",
  variant: "h1",
  className: "",
  color: "dark",
  font: "inter",
};

Text.displayName = "Text";

export default Text;
