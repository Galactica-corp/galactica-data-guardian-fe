import { Spinner } from "shared/ui/spinner";

import { StepContent } from "./step-content";

export const StepIssueSBT = () => {
  return (
    <StepContent title="Get your TestNet X SBT">
      <div className="flex flex-col items-center" onClick={() => {}}>
        <Spinner />
        <span className="mt-4 text-sm font-medium">Issuing your SBT...</span>
      </div>
    </StepContent>
  );
};
