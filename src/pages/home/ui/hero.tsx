import { twMerge } from "tailwind-merge";

import { ClassName } from "shared/types";
import { Button } from "shared/ui/button";
import { Icon } from "shared/ui/icon";

import { Step } from "../const";

const a = true;

type Props = {
  step: Step;
} & ClassName;

export const Hero = ({ className, step }: Props) => {
  return (
    <div className={twMerge("text-center", className)}>
      <div className="inline-flex w-auto items-center gap-x-1.5 rounded-md bg-white px-2 py-0.5 inner-border inner-border-mischka">
        <Icon className="size-[14px]" name="galactica" safeArea="0" />
        <span className="inline-flex text-sm font-medium text-oxfordBlue">
          Powered by Galactica.com
        </span>
      </div>
      <h2 className="mt-4 whitespace-nowrap text-[60px] font-semibold leading-[72px] tracking-tight text-mineShaft">
        Get your TestNet X SBT
      </h2>

      <Button
        className="shadow-xs mt-4 w-64 text-sm"
        style={{
          background: a
            ? "linear-gradient(45deg, #F26F56 0%, #F49756 100%)"
            : "linear-gradient(26.57deg, #182230 8.33%, #344054 91.67%)",
        }}
      >
        Connect MetaMask
      </Button>

      <Button
        className="text-sm"
        style={{
          background:
            "linear-gradient(26.57deg, #182230 8.33%, #344054 91.67%)",
        }}
      >
        Connect X (Twitter)
      </Button>
    </div>
  );
};
