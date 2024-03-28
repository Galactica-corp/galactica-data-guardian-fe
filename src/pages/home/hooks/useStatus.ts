import { useCallback } from "react";

import { useQueryClient } from "@tanstack/react-query";
import { useAccount } from "wagmi";

import { CheckStatusQuery, Status, useCheckStatusQuery } from "shared/graphql";

export const useStatus = () => {
  const { isConnected } = useAccount();
  const queryClient = useQueryClient();
  const query = useCheckStatusQuery(undefined, {
    // it's important setting
    staleTime: 1000 * 60 * 2, // 2min
    enabled: isConnected,
  });

  const setStatus = useCallback(
    (newStatus: Status) => {
      queryClient.setQueryData<CheckStatusQuery>(
        useCheckStatusQuery.getKey(),
        (old) => {
          if (!old) return old;
          return { ...old, checkStatus: newStatus };
        }
      );
    },
    [queryClient]
  );

  return { status: query.data?.checkStatus, setStatus, query } as const;
};
