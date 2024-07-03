import InlineSVG from "react-inlinesvg";
import { ReactNode } from "react";
import Card from "../Card";

type Content = {
  header?: string;
  onCloseClick?: () => void;
  children: ReactNode;
};

const Content = ({ header, onCloseClick, children }: Content) => {
  return (
    <Card>
      <div className="mx-5 my-6">
        {header && (
          <div className="flex mb-[42px]">
            {header}
            <InlineSVG
              src="/assets/cross.svg"
              className="ml-auto"
              onClick={onCloseClick}
            />
          </div>
        )}
        {children}
      </div>
    </Card>
  );
};

export default Content;
