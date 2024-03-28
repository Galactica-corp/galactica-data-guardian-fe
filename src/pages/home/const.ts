export const steps = [
  "metamask",
  "x",
  "followGalactica",
  "retweet",
  "verifying",
  "issueSBT",
  "receiveSBT",
] as const;

export type Step = (typeof steps)[number];
