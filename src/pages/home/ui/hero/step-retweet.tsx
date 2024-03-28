import { Button } from "shared/ui/button";

import { StepContent } from "./step-content";

export const StepRetweet = () => {
  return (
    <StepContent title="Repost the Pinned Post">
      <Button
        className="shadow-xs w-64 text-sm"
        onClick={() => {
          //
        }}
        theme="oxfordBlue"
      >
        Make a retweet
      </Button>
    </StepContent>
  );
};
