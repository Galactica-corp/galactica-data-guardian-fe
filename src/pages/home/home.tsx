import { useAccount } from "wagmi";

import { Footer } from "pages/home/ui/footer";
import { Header } from "pages/home/ui/header";
import { useCheckStatusQuery } from "shared/graphql";

import { Step } from "./const";
import { Hero } from "./ui/hero/hero";

export const Home = () => {
  const { isConnected } = useAccount();

  const { data, error } = useCheckStatusQuery(undefined, {
    enabled: isConnected,
  });

  const isUnauth =
    error instanceof Error && error.message.includes("unauthenticated");

  let currentStep: Step = "metamask";

  if (isUnauth || !data) {
    currentStep = "x";
  }

  if (!data) {
    // TOOD: SENTRY
    return;
  }

  if (data.checkStatus === "FOLLOW_NOT_CONFIRMED") {
    currentStep = "followGalactica";
  }

  if (data.checkStatus === "FOLLOW_CONFIRMED") {
    currentStep = "retweet";
  }

  if (data.checkStatus === "VERIFICATION") {
    currentStep = "verifying";
  }

  if (data.checkStatus === "SBT_ISSUE_IN_PROGRESS") {
    currentStep = "issueSBT";
  }

  if (data.checkStatus === "SBT_ISSUE_FAILED") {
    // TODO: А что тут?
  }

  if (data.checkStatus === "SBT_ISSUE_COMPLETE") {
    currentStep = "receiveSBT";
  }

  return (
    <div className="relative flex min-h-full grow flex-col bg-main bg-cover bg-top bg-no-repeat px-28 pt-[18px]">
      <Header />
      <Hero
        className="mt-auto"
        followStatus={data.verificationProgress.followState}
        retweetStatus={data.verificationProgress.retweetState}
        step={currentStep}
      />
      <Footer className="mb-16 mt-auto" step={currentStep} />
    </div>
  );
};
