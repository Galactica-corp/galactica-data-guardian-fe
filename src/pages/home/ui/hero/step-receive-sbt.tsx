import { Button } from "shared/ui/button";
import { Icon } from "shared/ui/icon";

import { StepContent } from "./step-content";

export const StepReceiveSBT = () => {
  return (
    <StepContent title="Your SBT is issued!">
      <Button className="w-[266px] text-sm font-semibold" theme="white">
        View in Explorer <Icon className="ml-2" name="link" />
      </Button>
      <Button className="w-[266px] text-sm font-medium">
        Back to Galactica <Icon className="ml-2" name="backArrow" />
      </Button>
    </StepContent>
  );
};
