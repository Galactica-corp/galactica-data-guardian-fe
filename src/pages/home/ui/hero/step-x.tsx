import { Button } from "shared/ui/button";
// import { Icon } from "shared/ui/icon";

import { StepContent } from "./step-content";

export const StepX = () => {
  return (
    <StepContent title="Get your TestNet X SBT">
      <Button
        as={"a"}
        className="max-w-[266px] whitespace-nowrap text-sm"
        href={import.meta.env.VITE_AUTH_URL}
        referrerPolicy="no-referrer"
        theme="oxfordBlue"
      >
        Connect X (Twitter)
      </Button>
    </StepContent>
  );
};
