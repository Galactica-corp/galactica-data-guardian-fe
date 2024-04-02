import { useStatus } from "pages/home/hooks/useStatus";
import { Button } from "shared/ui/button";

import { StepContent } from "../step-content";
import { StatusContent } from "./status-content";
import { Status } from "./types";
import { VerifyingIcon } from "./verifying-icon";

type Props = {
  followStatus: Status;
  retweetStatus: Status;
};

const followTitles: Record<Status, string> = {
  PENDING: "Checking Follow",
  CONFIRMED: "Success!",
  FAILED: "Follow not found",
};

const retweetTitles: Record<Status, string> = {
  PENDING: "Checking Repost",
  CONFIRMED: "Success!",
  FAILED: "Repost not found",
};

const retweetDescriptionRender = (retweetStatus: Status) => {
  if (retweetStatus === "FAILED")
    return (
      <Button className="text-xs" theme="oxfordBlue">
        Repost now
      </Button>
    );

  if (retweetStatus === "CONFIRMED") return "You have reposted!";

  return "Please wait";
};

const followDescriptionRender = (followStatus: Status) => {
  if (followStatus === "FAILED")
    return (
      <Button className="text-xs" theme="oxfordBlue">
        Follow now
      </Button>
    );

  if (followStatus === "CONFIRMED") return "You are a follower!";

  return "Please wait";
};

export const StepVerifying = ({ followStatus, retweetStatus }: Props) => {
  useStatus({ refetchInterval: 5000 });
  const followTitle = followTitles[followStatus];
  const retweetTitle = retweetTitles[retweetStatus];

  return (
    <StepContent
      contentClassName="mt-3 flex flex-col items-center"
      title="You’re all done"
    >
      <p className="max-w-[862px] text-sm font-medium text-oxfordBlue">
        Your actions are under verification, which may take over 10 minutes,
        depending on volume. Once verified, you’ll get an SBT. You can close
        this page and check your wallet or return later.
      </p>
      <div className="mt-10 flex gap-x-20 max-md:flex-col max-md:gap-y-5">
        <StatusContent
          description={followDescriptionRender(followStatus)}
          title={followTitle}
        >
          <VerifyingIcon
            className="-mt-1"
            pendingIconName="xWithSphere"
            status={followStatus}
          />
        </StatusContent>

        <StatusContent
          description={retweetDescriptionRender(retweetStatus)}
          title={retweetTitle}
        >
          <VerifyingIcon
            className="-mt-1"
            pendingIconName="circleArrows"
            status={retweetStatus}
          />
        </StatusContent>
      </div>
    </StepContent>
  );
};
