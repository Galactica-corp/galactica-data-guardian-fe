import { Fragment } from "react/jsx-runtime";
import { twMerge } from "tailwind-merge";

import { ClassName } from "shared/types";
import { Icon, IconName } from "shared/ui/icon";

import { type Step } from "../../const";

type StepItemData = {
  icon: IconName;
  iconClassName: string;
  name: Step;
  text: string;
};

const stepData = [
  {
    name: "x",
    text: "Connect X (Twitter)",
    icon: "xLogo",
    iconClassName: twMerge("size-[18px]"),
  },
  {
    name: "metamask",
    text: "Connect MetaMask",
    icon: "metamask",
    iconClassName: twMerge("h-[19px] w-5"),
  },
  {
    name: "followGalactica",
    text: "Follow Galactica",
    icon: "xWithSphere",
    iconClassName: twMerge("h-[18px] w-[27px]"),
  },
  {
    name: "retweet",
    text: "Make a Repost",
    icon: "circleArrows",
    iconClassName: twMerge("h-2.5 w-5"),
  },
  {
    name: "verifying",
    text: "Verifying",
    icon: "search",
    iconClassName: twMerge("size-6"),
  },
  {
    name: "issueSBT",
    text: "Issue SBT",
    icon: "atom",
    iconClassName: twMerge("size-4"),
  },
  {
    name: "receiveSBT",
    text: "Receive SBT",
    icon: "stars",
    iconClassName: twMerge("size-[18px]"),
  },
] as const satisfies StepItemData[];

type Props = {
  step: Step;
} & ClassName;

export const Footer = ({ className, step }: Props) => {
  const activeStepIdx = stepData.findIndex((s) => s.name === step);

  const renderStep = (
    data: StepItemData,
    index: number,
    hasNextSteps?: boolean
  ) => {
    const isPassed = index <= activeStepIdx;
    const isActive = data.name === step;

    return (
      <Fragment key={data.name}>
        {index !== 0 && (
          <div
            className={twMerge(
              "flex h-0.5 grow bg-iron",
              isPassed && "bg-jaffa"
            )}
          />
        )}
        <div
          className={twMerge(
            "shadow-xs relative flex size-10 items-center justify-center rounded-md bg-white inner-border",
            isPassed ? "inner-border-jaffa/15" : "inner-border-[#EAECF0]"
          )}
          key={data.name}
        >
          <Icon
            className={twMerge(
              "text-[#858C98]",
              isPassed && "text-jaffa",
              data.iconClassName
            )}
            name={data.icon}
          />
          <div
            className={twMerge(
              "absolute -bottom-3 left-1/2 -translate-x-1/2 translate-y-full whitespace-nowrap text-sm font-semibold text-oxfordBlue/35",
              isPassed && "text-jaffa/50",
              isActive && "text-jaffa"
            )}
          >
            {data.text}
          </div>
        </div>
        {hasNextSteps && (
          <div
            className={twMerge(
              "flex h-0.5 grow bg-iron",
              isPassed && "bg-jaffa"
            )}
          />
        )}
      </Fragment>
    );
  };

  const hasStepAfterActive = activeStepIdx + 1 < stepData.length;

  return (
    <footer className={twMerge("pb-8 max-lg:overflow-scroll", className)}>
      <div
        className={twMerge(
          "relative mx-auto hidden w-full max-w-full items-center justify-between px-0 pb-2 scrollbar-thin max-md:flex",
          activeStepIdx === 0 && "pl-16"
        )}
      >
        {renderStep(stepData[activeStepIdx], activeStepIdx)}
        {hasStepAfterActive &&
          renderStep(
            stepData[activeStepIdx + 1],
            activeStepIdx + 1,
            activeStepIdx + 2 <= stepData.length
          )}
      </div>
      <div className="relative flex min-w-[1000px] items-center justify-between px-12 pb-2 scrollbar-thin max-md:hidden">
        {stepData.map((data, index) => {
          return renderStep(data, index);
        })}
      </div>
    </footer>
  );
};
