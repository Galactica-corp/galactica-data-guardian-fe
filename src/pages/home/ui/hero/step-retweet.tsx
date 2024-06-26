import { useLocalStorage } from "@uidotdev/usehooks";

import { useStatus } from "pages/home/hooks/useStatus";
import { useConfirmRetweetMutation } from "shared/graphql";
import { Button } from "shared/ui/button";

import { StepContent } from "./step-content";

const retweetLink = import.meta.env.VITE_RETWEET_URL;

export const StepRetweet = () => {
  const [isProcessInit, setIsProcessInit] = useLocalStorage(
    "is-retweet-process-init",
    false
  );
  const { setStatus } = useStatus();
  const { mutate } = useConfirmRetweetMutation();

  const onConfirm = () => {
    mutate(
      {},
      {
        onSuccess: (data) => {
          if (!data.confirmRetweet.success)
            throw new Error("Something went wrong");
          setStatus("VERIFICATION");
        },
        onError: (error) => {
          // TODO: toast?
          console.error(error);
        },
      }
    );
  };

  return (
    <StepContent
      title={isProcessInit ? "Confirm your X repost" : "Repost the Pinned Post"}
    >
      {!isProcessInit && (
        <Button
          as={"a"}
          className="shadow-xs w-64 text-sm"
          href={retweetLink}
          onClick={() => {
            setIsProcessInit(true);
          }}
          referrerPolicy="no-referrer"
          target="_blank"
          theme="oxfordBlue"
        >
          Make a retweet
        </Button>
      )}
      {isProcessInit && (
        <div className="flex gap-4 max-md:flex-col">
          <Button
            as="a"
            className="w-[266px] text-sm"
            href={retweetLink}
            referrerPolicy="no-referrer"
            target="_blank"
            theme="white"
          >
            Repost on X
          </Button>
          <Button
            className="w-[266px] text-sm"
            onClick={onConfirm}
            theme="oxfordBlue"
          >
            Confirm your X Repost
          </Button>
        </div>
      )}
    </StepContent>
  );
};
