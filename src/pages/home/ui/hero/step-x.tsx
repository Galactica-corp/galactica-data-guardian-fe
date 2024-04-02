import { Button } from "shared/ui/button";
// import { Icon } from "shared/ui/icon";

import { StepContent } from "./step-content";

export const StepX = () => {
  return (
    <StepContent title="Get your TestNet X SBT">
      <Button
        as={"a"}
        className="w-[266px] whitespace-nowrap text-sm"
        href={`${import.meta.env.VITE_AUTH_URL}/auth`}
        referrerPolicy="no-referrer"
        theme="oxfordBlue"
      >
        Connect X (Twitter)
      </Button>
    </StepContent>
  );
};
