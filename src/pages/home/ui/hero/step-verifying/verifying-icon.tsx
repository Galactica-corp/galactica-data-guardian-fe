import { ReactNode } from "react";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { ClassName } from "shared/types";
import { Icon, IconName } from "shared/ui/icon";

import circlePng from "./circle.png";
import { Status } from "./types";

type Props = {
  pendingIconName: IconName;
  status: Status;
};

const spinTransition = {
  duration: 0.9,
  ease: "linear",
  repeat: Infinity,
};

const animate = { rotate: -360 };

const icons: (pendingIconName: IconName) => Record<Status, ReactNode> = (
  pendingIconName
) => ({
  PENDING: (
    <Icon
      className={twMerge("h-[18px] w-[27px] text-jaffa")}
      name={pendingIconName}
    />
  ),
  FAILED: <Icon className={twMerge("size-5 text-[#F35757]")} name="cross" />,
  CONFIRMED: (
    <Icon
      className={twMerge("h-[19px] w-[23px] text-[#73D68F]")}
      name="check"
    />
  ),
});

export const VerifyingIcon = ({
  status,
  className,
  pendingIconName,
}: Props & ClassName) => {
  const icon = icons(pendingIconName)[status];
  return (
    <div
      className={twMerge(
        "relative flex size-[54px] shrink-0 items-center justify-center rounded-full border-[3px] border-white bg-white",
        status === "FAILED" && "inner-border inner-border-[#FF9A9A]",
        status === "CONFIRMED" && "inner-border inner-border-[#CFF4D9]",
        className
      )}
    >
      {status === "PENDING" && (
        <motion.img
          alt="circle"
          animate={animate}
          className="absolute select-none"
          src={circlePng}
          transition={spinTransition}
        />
      )}
      {icon}
    </div>
  );
};
