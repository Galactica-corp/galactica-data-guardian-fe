import { Link } from "react-router-dom";

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
        as={Link}
        className="max-w-[266px] whitespace-nowrap text-sm"
        onClick={() => {
          //
        }}
        target="_blank"
        theme="oxfordBlue"
        to={`${import.meta.env.VITE_AUTH_URL}/auth`}
      >
        Connect X (Twitter)
      </Button>
    </StepContent>
  );
};
