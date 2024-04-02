import { PropsWithChildren } from "react";

import { twMerge } from "tailwind-merge";

type Props = {
  contentClassName?: string;
  title: string;
};

export const StepContent = ({
  children,
  title,
  contentClassName,
}: PropsWithChildren<Props>) => {
  return (
    <>
      <h2 className="text-[60px] font-semibold leading-[72px] tracking-tight text-mineShaft max-lg:text-[50px] max-sm:text-4xl">
        {title}
      </h2>

      <div
        className={twMerge(
          "mt-4 flex justify-center gap-x-4",
          contentClassName
        )}
      >
        {children}
      </div>
    </>
  );
};
