import { useState } from "react";

import { Button } from "shared/ui/button";
import { Icon } from "shared/ui/icon";
import { Spinner } from "shared/ui/spinner";

import { StepContent } from "./step-content";

export const StepReceiveSBT = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <StepContent
      contentClassName="flex-col items-center"
      title="Your SBT is issued!"
    >
      <div className="flex size-[200px] items-center justify-center rounded-md bg-white p-2 inner-border inner-border-mischka">
        {isLoading && <Spinner />}
        <img
          className="flex size-full"
          onError={() => {
            setIsLoading(false);
          }}
          onLoad={() => {
            setIsLoading(false);
          }}
          src="/assets/sbt.png"
        />
      </div>
      <Button
        className="mt-4 w-[266px] items-center text-sm font-semibold"
        theme="white"
      >
        View in Explorer <Icon className="ml-2 size-5" name="link" />
      </Button>
    </StepContent>
  );
};
