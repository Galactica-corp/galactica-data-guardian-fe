import { PropsWithChildren, ReactNode } from "react";

type Props = {
  description: ReactNode;
  title: ReactNode;
};

export const StatusContent = ({
  children,
  title,
  description,
}: PropsWithChildren<Props>) => {
  return (
    <div className="flex items-start gap-x-3">
      {children}
      <div className="flex flex-col text-oxfordBlue">
        <h3 className="flex text-[22px] leading-5">{title}</h3>
        <p className="mt-1.5 flex text-sm font-medium">{description}</p>
      </div>
    </div>
  );
};
