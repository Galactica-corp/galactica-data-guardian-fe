import { useStatus } from "pages/home/hooks/useStatus";
import { Spinner } from "shared/ui/spinner";

import { StepContent } from "./step-content";

export const StepIssueSBT = () => {
  const { status, setStatus } = useStatus();
  return (
    <StepContent title="Get your TestNet X SBT">
      <div className="flex flex-col items-center" onClick={() => {}}>
        <Spinner />
        <span className="mt-4 whitespace-pre-line text-sm font-medium">
          {status === "SBT_ISSUE_IN_PROGRESS"
            ? "Issuing your SBT..."
            : "SBT generation is temporarily unavailable.\nWe`re working on the issue. Please try again later."}
        </span>

        <button
          className="absolute left-1/3 top-0"
          onClick={() => {
            setStatus("SBT_ISSUE_FAILED");
          }}
        >
          switch to error state
        </button>

        <button
          className="absolute left-1/2 top-0"
          onClick={() => {
            setStatus("SBT_ISSUE_COMPLETE");
          }}
        >
          switch to receive sbt
        </button>
      </div>
    </StepContent>
  );
};
