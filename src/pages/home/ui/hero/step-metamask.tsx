import { ConnectWalletButton } from "features/connect-wallet";

import { StepContent } from "./step-content";

export const StepMetamask = () => {
  return (
    <StepContent
      contentClassName="flex-col items-center mt-2"
      title="Get your GatewayX SBT"
    >
      <p className="text-center text-sm font-medium text-oxfordBlue">
        Enter in the world of Galactica & earn your unique GatewayX SBT. Create
        your Galactica Identity <br /> and start accumulating reputation points.
      </p>
      <ConnectWalletButton className="mt-4 w-[266px] py-2" theme="jaffa" />
    </StepContent>
  );
};
