import { useAccount } from "wagmi";

import { Footer } from "pages/home/ui/footer";
import { Header } from "pages/home/ui/header";

import { Step } from "./const";
import { Hero } from "./ui/hero";

export const Home = () => {
  // const [currentStep, setCurrentStep] = useState<Step>("metamask");

  let currentStep: Step = "metamask";
  const { address } = useAccount();

  if (address) {
    currentStep = "x";
  }

  console.log(currentStep);

  return (
    <div className="relative flex min-h-full grow flex-col bg-main bg-cover bg-top bg-no-repeat px-28 pt-[18px]">
      <Header />
      <Hero className="mt-auto" />
      <Footer className="mb-16 mt-auto" step={currentStep} />
    </div>
  );
};
