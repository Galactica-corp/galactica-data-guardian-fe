export const steps = [
  "metamask",
  "x",
  "followGalactica",
  "repost",
  "issueSBT",
  "receiveSBT",
] as const;

export type Step = (typeof steps)[number];

const heroDataByStep: Record<Step, {}> = {
  metamask: {
    title: "Get your TestNet X SBT",
  },
};
