"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export function useApiKey() {
  const apiKey = useQuery(api.apiKeys.get);
  const createKey = useMutation(api.apiKeys.create);
  const regenerateKey = useMutation(api.apiKeys.regenerate);

  return {
    apiKey,
    isLoading: apiKey === undefined,
    create: createKey,
    regenerate: regenerateKey,
  };
}

