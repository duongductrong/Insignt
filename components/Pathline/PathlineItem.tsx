import React, { FC } from "react";
import Text from "../Text/Text";

export interface PathlineItemProps {
  milestones?: string;
  className?: string;
}

const PathlineItem: FC<PathlineItemProps> = React.forwardRef(
  ({ className, children, ...props }, ref : any) => {
    return (
      <div ref={ref} className="pathline__item">
        <Text
          tag="span"
          variant="normal"
          fontWeight="normal"
          className="pathline__milestones"
        >
          {props.milestones}
        </Text>
        {children}
      </div>
    );
  }
);

export default PathlineItem;
