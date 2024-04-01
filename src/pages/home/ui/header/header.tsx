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
  return (
    <nav className={twMerge("flex items-center bg-transparent", className)}>
      <Logo />
      <ul className="ml-10 flex gap-x-8">
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

      {step !== "x" && step !== "receiveSBT" && (
        <div className="ml-auto flex items-center gap-x-8">
          <Button
            as="a"
            className={twMerge("py-2.5 text-sm leading-6")}
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
