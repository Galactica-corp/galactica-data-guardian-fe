import { Button } from "shared/ui/button";
// import { Icon } from "shared/ui/icon";

import { StepContent } from "./step-content";

export const StepX = () => {
  return (
    <StepContent
      contentClassName="flex-col items-center mt-2"
      title="Get your GatewayX SBT"
    >
      <p className="text-center text-sm font-medium text-oxfordBlue">
        Enter in the world of Galactica & earn your unique GatewayX SBT. Create
        your Galactica Identity <br /> and start accumulating reputation points.
      </p>
      <Button
        as={"a"}
        className="mt-4 w-[266px] whitespace-nowrap text-sm"
        href={`${import.meta.env.VITE_AUTH_URL}/auth`}
        referrerPolicy="no-referrer"
        theme="oxfordBlue"
      >
        Connect X (Twitter)
      </Button>
    </StepContent>
  );
};
