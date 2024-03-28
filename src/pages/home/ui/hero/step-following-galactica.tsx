import { useLocalStorage } from "@uidotdev/usehooks";
import { useAccount } from "wagmi";

import { useStatus } from "pages/home/hooks/useStatus";
import {
  useBindWalletToTwitterAccountMutation,
  useConfirmFollowMutation,
} from "shared/graphql";
import { Button } from "shared/ui/button";

import { StepContent } from "./step-content";

export const StepFollowGalactica = () => {
  const { setStatus } = useStatus();
  const { address } = useAccount();
  const bindMutation = useBindWalletToTwitterAccountMutation();
  const [isProcessInit, setIsProcessInit] = useLocalStorage(
    "is-follow-process-init",
    false
  );

  const confirmMutation = useConfirmFollowMutation();

  const onConfirm = async () => {
    if (!address) return;

    try {
      const response = await bindMutation.mutateAsync({
        walletAddress: address,
      });

      if (!response.bindWalletToTwitterAccount.success)
        throw new Error(
          "Something went wrong with binding wallet to twitter account"
        );

      const result = await confirmMutation.mutateAsync({});
      if (!result.confirmFollow.success)
        throw new Error("Something went wrong with confirm follow");

      setStatus("FOLLOW_CONFIRMED");
    } catch (error) {
      // TODO: toast?
      console.error(error);
    }
  };

  return (
    <StepContent
      title={
        isProcessInit
          ? "Confirm your Galactica following"
          : "Follow Galactica on X"
      }
    >
      {!isProcessInit && (
        <Button
          as="a"
          className="shadow-xs w-64 text-sm"
          href="#"
          onClick={() => {
            setIsProcessInit(true);
          }}
          referrerPolicy="no-referrer"
          target="_blank"
          theme="oxfordBlue"
        >
          Follow Galactica
        </Button>
      )}

      {isProcessInit && (
        <>
          <Button
            as="a"
            className="w-[266px] text-sm"
            href="#"
            referrerPolicy="no-referrer"
            theme="white"
          >
            Follow Galactica
          </Button>
          <Button
            className="w-[266px] text-sm"
            onClick={onConfirm}
            theme="oxfordBlue"
          >
            Confirm Galactica Following
          </Button>
        </>
      )}
    </StepContent>
  );
};
