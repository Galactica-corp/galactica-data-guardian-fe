import { MobileGuard } from "shared/providers/mobile-guard";
import { RqProvider } from "shared/providers/rq";
import { WagmiProvider } from "shared/providers/wagmi";

import { AppRoutes } from "./routes";

import "./index.css";

export const App = () => {
  return (
    <WagmiProvider>
      <RqProvider>
        <MobileGuard>
          <AppRoutes />
        </MobileGuard>
      </RqProvider>
    </WagmiProvider>
  );
};
