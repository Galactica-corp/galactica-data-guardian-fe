export const steps = [
  "x",
  "metamask",
  "followGalactica",
  "retweet",
  "verifying",
  "issueSBT",
  "receiveSBT",
] as const;

export type Step = (typeof steps)[number];
