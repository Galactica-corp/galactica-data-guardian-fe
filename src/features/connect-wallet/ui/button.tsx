import { PropsWithChildren } from "react";
import { MetaMaskAvatar } from "react-metamask-avatar";

import { twMerge } from "tailwind-merge";
import { useAccount, useConnect, useDisconnect } from "wagmi";

import { ClassName } from "shared/types";
import { Button } from "shared/ui/button";
import { shortAddress } from "shared/web3/utils";

export const ConnectButton = ({
  className,
  children = "Connect MetaMask",
}: PropsWithChildren<ClassName>) => {
  const { address, isConnected, isDisconnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { connect, connectors } = useConnect();

  const onClick = () => {
    if (isConnected) {
      disconnect();
    }
    if (isDisconnected) {
      const connector = connectors.find(
        (connector) => connector.name === "MetaMask"
      );
      connector && connect({ connector });
    }
  };

  return (
    <Button
      className={twMerge("py-2.5 text-sm leading-6", className)}
      onClick={onClick}
      theme="white"
    >
      {isDisconnected && children}

      {isConnected && (
        <>
          <span className="mr-1.5">{shortAddress(address, 7, 5)}</span>
          {address && <MetaMaskAvatar address={address} />}
        </>
      )}
    </Button>
  );
};
