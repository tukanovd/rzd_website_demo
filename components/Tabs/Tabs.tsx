import React from "react";
import { TabContextWrapper } from "./Context";
import { TabsProps } from "./types";

const Tabs = ({ children }: TabsProps) => {
  return (
    <TabContextWrapper>
      <div className="flex pb-5 w-full flex-wrap gap-y-10">
        {React.Children.map(children, (child, index) => {
          const { props } = child;
          return React.cloneElement(child, { ...props, id: index });
        })}
      </div>
    </TabContextWrapper>
  );
};

export default Tabs;
