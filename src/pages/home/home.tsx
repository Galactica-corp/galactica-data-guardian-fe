import { ClientError } from "graphql-request";
import { useAccount } from "wagmi";

import { Footer } from "pages/home/ui/footer";
import { Header } from "pages/home/ui/header";

import { Step } from "./const";
import { useStatus } from "./hooks/useStatus";
import { Hero } from "./ui/hero/hero";

const useStep = (): { step: Step } => {
  const { isConnected } = useAccount();

  const { data, query } = useStatus();
  const error = query.error;
  const status = data?.checkStatus;

  const isUnauth =
    error instanceof ClientError &&
    error.response.errors?.[0].message === "unauthenticated";

  let step: Step = "metamask";

  if (isConnected && (isUnauth || !status)) {
    step = "x";
  }

  if (status === "WALLET_NOT_BOUND" || status === "FOLLOW_NOT_CONFIRMED") {
    step = "followGalactica";
  }

  if (status === "FOLLOW_CONFIRMED") {
    step = "retweet";
  }

  if (status === "VERIFICATION") {
    step = "verifying";
  }

  if (status === "SBT_ISSUE_IN_PROGRESS" || status === "SBT_ISSUE_FAILED") {
    step = "issueSBT";
  }

  if (status === "SBT_ISSUE_COMPLETE") {
    step = "receiveSBT";
  }

  return { step };
};

export const Home = () => {
  const { step } = useStep();

  return (
    <div className="relative flex min-h-full grow flex-col bg-main bg-cover bg-top bg-no-repeat px-28 pt-[18px]">
      <Header />
      <Hero
        className="mt-auto"
        // followStatus={data?.verificationProgress.followState}
        // retweetStatus={data?.verificationProgress.retweetState}
        followStatus="PENDING"
        retweetStatus="PENDING"
        step={step}
      />
      <Footer className="mb-16 mt-auto" step={step} />
    </div>
  );
};
