import { useBindWalletToTwitterAccountMutation } from "shared/graphql";
import { Button } from "shared/ui/button";

import { StepContent } from "./step-content";
import { useAccount } from "wagmi";

export const StepFollowGalactica = () => {
  const { mutate } = useBindWalletToTwitterAccountMutation();

  return (
    <StepContent title="Follow Galactica on X">
      <Button
        className="shadow-xs w-64 text-sm"
        onClick={() => {
          // 
        }}
        theme="oxfordBlue"
      >
        Follow Galactica
      </Button>
    </StepContent>
  );
};
