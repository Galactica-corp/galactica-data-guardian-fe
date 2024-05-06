import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "shared/ui/button";
import { Icon } from "shared/ui/icon";
import { Spinner } from "shared/ui/spinner";

import { StepContent } from "../step-content";
import { Quest } from "./quest";

type Props = {
  txHash: string;
};

export const StepReceiveSBT = ({ txHash }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <StepContent
      contentClassName="flex-col items-center mt-1.5"
      title="Your SBT is issued!"
    >
      <p className="text-sm font-medium">
        This Soul Bound Token is proof that you are a pioneer and ventured into
        the exciting world of{" "}
        <a
          className="text-jaffa underline"
          href="https://app-reticulum.galactica.com/"
          referrerPolicy="no-referrer"
        >
          Galactica.com.
        </a>
        <br /> It is the first step to creating your new Web3 Identity and
        increasing your reputation score.
      </p>
      <div className="mt-9 flex gap-14 max-md:mt-4 max-md:flex-col">
        <div className="flex flex-col max-md:hidden">
          <div className="flex size-[216px] flex-col items-center justify-center rounded-md bg-white p-2 inner-border inner-border-mischka max-md:size-[150px]">
            {isLoading && <Spinner />}
            <img
              className="flex size-full"
              onError={() => {
                setIsLoading(false);
              }}
              onLoad={() => {
                setIsLoading(false);
              }}
              src="/assets/sbt.png"
            />
          </div>
          <Button
            as={Link}
            className="mt-4 w-full items-center text-sm font-semibold"
            target="_blank"
            theme="white"
            to={`${import.meta.env.VITE_EXPLORER_URL}/tx/${txHash}`}
          >
            View in Explorer <Icon className="ml-2 size-5" name="link" />
          </Button>
        </div>

        <div className="flex flex-col gap-y-[18px] max-md:w-full max-md:gap-3">
          <div className="hidden items-center gap-x-5 rounded-md bg-transparent p-[18px] inner-border inner-border-[#E0E0E0] max-md:flex">
            <img
              className="flex size-[58px] rounded-[5px]"
              src="/assets/sbt.png"
            />
            <div className="flex flex-col items-start">
              <h4 className="font-semibold leading-4">Your SBT is ready!</h4>
              <Button
                as="a"
                className="mt-2.5 h-[34px] items-center gap-x-4 bg-transparent max-md:text-xs"
                href={`${import.meta.env.VITE_EXPLORER_URL}/tx/${txHash}`}
                referrerPolicy="no-referrer"
                target="_blank"
                theme="white"
              >
                View in Explorer
                <Icon className="size-3 text-jaffa" name="arrowRight" />
              </Button>
            </div>
          </div>
          <Quest questProvider="Zealy" />
          <Quest questProvider="Galxe" />
          <p className="text-left text-sm font-medium text-oxfordBlue">
            Increase your reputation score & climb <br /> the ranks of the
            Cypher State
          </p>
        </div>
      </div>
    </StepContent>
  );
};
