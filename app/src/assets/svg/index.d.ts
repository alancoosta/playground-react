import React from "react";

declare module "*.svg" {
  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  export default ReactComponent;
}
