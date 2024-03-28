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

  return (
    <span className="text-sm text-oxfordBlue text-opacity-60">
      <span className="font-semibold">15</span> sec left
    </span>
  );
};

const followDescriptionRender = (followStatus: Status) => {
  if (followStatus === "FAILED")
    return (
      <Button className="text-xs" theme="oxfordBlue">
        Follow now
      </Button>
    );

  if (followStatus === "CONFIRMED") return "You are a follower!";

  return (
    <span className="text-sm">
      <span className="font-semibold">15</span> sec left
    </span>
  );
};

export const StepVerifying = ({ followStatus, retweetStatus }: Props) => {
  const { setStatus } = useStatus();
  const followTitle = followTitles[followStatus];
  const retweetTitle = retweetTitles[retweetStatus];

  return (
    <StepContent
      contentClassName="mt-10 flex justify-center gap-x-20"
      title="Verifying..."
    >
      <>
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

        <button
          className="absolute left-1/2 top-0"
          onClick={() => {
            setStatus("SBT_ISSUE_IN_PROGRESS");
          }}
        >
          continue process...
        </button>
      </>
    </StepContent>
  );
};
