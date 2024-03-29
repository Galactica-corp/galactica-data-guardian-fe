import { Button } from "shared/ui/button";
import { Icon } from "shared/ui/icon";

import { StepContent } from "./step-content";

export const StepX = () => {
  return (
    <StepContent title="Get your TestNet X SBT">
      <Button className="min-w-9 px-0" disabled>
        <Icon className="text-white" name="checkCircle" />
      </Button>
      <Button
        as={"a"}
        className="max-w-[266px] whitespace-nowrap text-sm"
        onClick={() => {
          const width = 600;
          const height = 600;
          const left = window.innerWidth / 2 - width / 2;
          const top = window.innerHeight / 2 - height / 2;
          const newWindow = window.open(
            import.meta.env.VITE_AUTH_URL,
            "",
            `toolbar=no, location=no, directories=no, status=no, menubar=no,
          scrollbars=no, resizable=no, copyhistory=no, width=${width},
          height=${height}, top=${top}, left=${left}`
          );

          window.addEventListener("message", (event) => {
            console.log(event);
          });
        }}
        theme="oxfordBlue"
      >
        Connect X (Twitter)
      </Button>
    </StepContent>
  );
};
