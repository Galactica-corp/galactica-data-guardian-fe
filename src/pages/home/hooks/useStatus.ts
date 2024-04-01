import { useCallback } from "react";

import { UseQueryOptions, useQueryClient } from "@tanstack/react-query";

import { CheckStatusQuery, Status, useCheckStatusQuery } from "shared/graphql";

export const useStatus = <TData = CheckStatusQuery>(
  options?: Omit<UseQueryOptions<CheckStatusQuery, Error, TData>, "queryKey">
) => {
  const queryClient = useQueryClient();
  const query = useCheckStatusQuery(undefined, {
    // it's important setting
    staleTime: 1000 * 60 * 2, // 2min
    ...options,
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

  return { data: query.data, setStatus, query } as const;
};
