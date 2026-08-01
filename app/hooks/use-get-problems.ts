"use client";

import useSWR from "swr";
import { getProblemsService } from "../services/get-problems.service";
import { Problem } from "../types";

export const useGetProblems = () => {
  const { data, error, mutate } = useSWR<Problem[], Error, ["get-problems"]>(
    ["get-problems"],
    async () => {
      const data = await getProblemsService();
      return data;
    },
    {
      errorRetryInterval: 5000,
      errorRetryCount: Infinity,
      shouldRetryOnError: (e: unknown) => {
        if (e instanceof Error) return e.message.includes("timeout");
        return false;
      },
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
    },
  );
  return { data, error, mutate };
};
