import { useStatus } from "pages/home/hooks/useStatus";
import { Spinner } from "shared/ui/spinner";

import { StepContent } from "./step-content";

export const StepIssueSBT = () => {
  const { data } = useStatus({
    refetchInterval: 5000,
  });
  const status = data?.checkStatus;

  return (
    <StepContent title="Get your GatewayX SBT">
      <div className="flex flex-col items-center">
        <Spinner />
        <span className="mt-4 whitespace-pre-line text-sm font-medium">
          {status === "SBT_ISSUE_IN_PROGRESS"
            ? "Issuing your SBT..."
            : "SBT generation takes longer than expected.\nWe’re working on the issue. Please check again later."}
        </span>
      </div>
    </StepContent>
  );
};
