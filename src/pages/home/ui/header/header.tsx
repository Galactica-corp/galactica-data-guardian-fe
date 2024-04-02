import { useState } from "react";

import { useAnimate } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { Step } from "pages/home/const";
import { ClassName } from "shared/types";
import { Button } from "shared/ui/button";
import { Logo } from "shared/ui/logo";

import { NavLink } from "./nav-link";

type Props = {
  buttonClassName?: string;
  step: Step;
} & ClassName;

export const Header = ({ className, step }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();
  return (
    <nav
      className={twMerge(
        "relative top-0 z-10 flex items-center overflow-hidden rounded-b-lg bg-transparent max-md:absolute max-md:inset-x-3 max-md:h-[72px] max-md:flex-col max-md:items-start max-md:bg-white max-md:px-4",
        className
      )}
      ref={scope}
    >
      <div className="contents w-full items-center justify-between max-md:mt-5 max-md:flex">
        <Logo className="max-md:w-[195px]" />
        <div
          className={twMerge(
            `tham tham-e-squeeze tham-w-7 hidden max-md:flex`,
            isOpen && "tham-active"
          )}
          onClick={() => {
            animate(
              scope.current,
              {
                height: isOpen ? "72px" : "95%",
              },
              { duration: 0.3 }
            );

            setIsOpen(!isOpen);
          }}
        >
          <div className="tham-box">
            <div className="hamburger-item tham-inner" />
          </div>
        </div>
      </div>

      <ul className="ml-10 flex gap-8 max-md:ml-0 max-md:mt-14 max-md:w-full max-md:flex-col max-md:items-center">
        <li>
          <NavLink
            referrerPolicy="no-referrer"
            target="_blank"
            to="https://app-andromeda.galactica.com/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            referrerPolicy="no-referrer"
            target="_blank"
            to="https://docs.galactica.com/galactica-network-faq"
          >
            FAQ
          </NavLink>
        </li>
      </ul>

      {step !== "x" && (
        <div className="ml-auto flex items-center gap-x-8 max-md:mx-auto max-md:mb-3 max-md:mt-auto max-md:w-full">
          <Button
            as="a"
            className={twMerge("py-2.5 text-sm leading-6 max-md:w-full")}
            href={`${import.meta.env.VITE_GRAPHQL_SERVER}/logout`}
            theme="white"
          >
            Logout
          </Button>
        </div>
      )}
    </nav>
  );
};
