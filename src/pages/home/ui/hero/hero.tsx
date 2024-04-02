import { twMerge } from "tailwind-merge";

import { Step } from "pages/home/const";
import { ClassName } from "shared/types";
import { Icon } from "shared/ui/icon";
import { Spinner } from "shared/ui/spinner";

import { StepFollowGalactica } from "./step-following-galactica";
import { StepIssueSBT } from "./step-issue-sbt";
import { StepMetamask } from "./step-metamask";
import { StepReceiveSBT } from "./step-receive-sbt";
import { StepRetweet } from "./step-retweet";
import { StepVerifying } from "./step-verifying/step-verifying";
import { Status } from "./step-verifying/types";
import { StepX } from "./step-x";

type Props = {
  followStatus?: Status;
  retweetStatus?: Status;
  step: Step;
  txHash?: null | string;
} & ClassName;

export const Hero = ({
  className,
  step,
  followStatus,
  retweetStatus,
  txHash,
}: Props) => {
  return (
    <div className={twMerge("text-center", className)}>
      <div className="mb-4 inline-flex w-auto items-center gap-x-1.5 rounded-md bg-white px-2 py-0.5 inner-border inner-border-mischka">
        <Icon className="size-[14px]" name="galactica" safeArea="0" />
        <span className="inline-flex text-sm font-medium text-oxfordBlue max-md:text-xs">
          Powered by Galactica.com
        </span>
      </div>
      {step === "idle" && <Spinner className="mx-auto" />}
      {step === "metamask" && <StepMetamask />}
      {step === "x" && <StepX />}
      {step === "followGalactica" && <StepFollowGalactica />}
      {step === "retweet" && <StepRetweet />}
      {step === "verifying" && followStatus && retweetStatus && (
        <StepVerifying
          followStatus={followStatus}
          retweetStatus={retweetStatus}
        />
      )}
      {step === "issueSBT" && <StepIssueSBT />}
      {step === "receiveSBT" && txHash && <StepReceiveSBT txHash={txHash} />}
    </div>
  );
};
