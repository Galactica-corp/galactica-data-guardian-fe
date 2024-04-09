import { Button } from "shared/ui/button";
import { Icon } from "shared/ui/icon";

import galxePng from "./galxe.png";
import zealyPng from "./zealy.png";

type QuestProvider = "Galxe" | "Zealy";

type Props = {
  questProvider: QuestProvider;
};

const images: Record<QuestProvider, string> = {
  Galxe: galxePng,
  Zealy: zealyPng,
};

const hrefs: Record<QuestProvider, string> = {
  Galxe: "https://app.galxe.com/quest/GalacticaNetwork",
  Zealy: "https://zealy.io/c/galacticanet/questboard",
};

export const Quest = (props: Props) => {
  const { questProvider } = props;

  return (
    <div className="flex items-center gap-x-5 rounded-md bg-white p-[18px] inner-border inner-border-[#E0E0E0]">
      <img
        alt={questProvider}
        className="flex size-[58px] rounded-[5px]"
        src={images[questProvider]}
      />
      <div className="flex flex-col items-start">
        <h4 className="font-semibold leading-4">Quest on {questProvider}</h4>
        <Button
          as="a"
          className="mt-2.5 h-[34px] items-center gap-x-4 max-md:text-xs"
          href={hrefs[questProvider]}
          target="_blank"
          theme="white"
        >
          Go to {questProvider}{" "}
          <Icon className="size-3 text-jaffa" name="arrowRight" />
        </Button>
      </div>
    </div>
  );
};
