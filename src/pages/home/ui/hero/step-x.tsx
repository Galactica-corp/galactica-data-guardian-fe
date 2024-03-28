import { Button } from "shared/ui/button";
import { Icon } from "shared/ui/icon";

import { StepContent } from "./step-content";

export const StepX = () => {
  return (
    <StepContent title="Get your TestNet X SBT">
      <Button className="min-w-9 px-0" disabled>
        <Icon className="text-white" name="checkCircle" />
      </Button>
      <Button
        as={"a"}
        className="max-w-[266px] whitespace-nowrap text-sm"
        href={`${import.meta.env.VITE_GRAPHQL_SERVER}/auth`}
        target="_blank"
        theme="oxfordBlue"
      >
        Connect X (Twitter)
      </Button>
    </StepContent>
  );
};
